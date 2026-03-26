import fs from "node:fs";
import path from "node:path";
import { chromium } from "playwright";

const BASE_URL = "https://automationexercise.com/";
const OUTPUT_DIR = path.join(process.cwd(), "10_Execution_Logs");
const OUTPUT_FILE = path.join(OUTPUT_DIR, "login_high_impact_results_2026-03-27.json");
const CSV_PATH = path.join(process.cwd(), "06_Test_Data", "sample_users.csv");

function parseCsv(filePath) {
  const raw = fs.readFileSync(filePath, "utf8").trim();
  const lines = raw.split(/\r?\n/);
  const headers = lines[0].split(",");
  return lines.slice(1).map((line) => {
    const values = line.split(",");
    const row = {};
    headers.forEach((h, i) => {
      row[h] = values[i] ?? "";
    });
    return row;
  });
}

function nowIso() {
  return new Date().toISOString();
}

async function gotoLogin(page) {
  await page.goto(BASE_URL, { waitUntil: "domcontentloaded" });
  await page.getByRole("link", { name: "Signup / Login" }).click();
  await page.waitForURL(/.*login.*/i, { timeout: 15000 }).catch(() => {});
  await page.waitForSelector('input[data-qa="login-email"]', { timeout: 15000 });
}

async function loginAttempt(page, email, password) {
  await page.fill('input[data-qa="login-email"]', email);
  await page.fill('input[data-qa="login-password"]', password);
  await page.click('button[data-qa="login-button"]');
  await page.waitForTimeout(1200);
}

async function ensureRegistered(page, user) {
  await gotoLogin(page);

  await loginAttempt(page, user.email, user.password);
  const loggedIn = await page.locator("text=Logged in as").first().isVisible().catch(() => false);
  if (loggedIn) {
    await page.getByRole("link", { name: "Logout" }).click();
    await page.waitForTimeout(600);
    return { created: false, reason: "Account already registered" };
  }

  const existsError = await page.locator("text=Your email or password is incorrect!").first().isVisible().catch(() => false);
  if (!existsError) {
    return { created: false, reason: "Unexpected precheck state" };
  }

  const name = user.full_name;
  await page.fill('input[data-qa="signup-name"]', name);
  await page.fill('input[data-qa="signup-email"]', user.email);
  await page.click('button[data-qa="signup-button"]');
  await page.waitForTimeout(1000);

  const emailExistsMsg = await page.locator("text=Email Address already exist!").first().isVisible().catch(() => false);
  if (emailExistsMsg) {
    return { created: false, reason: "Email already exists (signup flow)" };
  }

  const detailsVisible = await page.locator("text=Enter Account Information").first().isVisible().catch(() => false);
  if (!detailsVisible) {
    return { created: false, reason: "Signup details page not reached" };
  }

  await page.check('#id_gender1').catch(() => {});
  await page.fill('#password', user.password);
  await page.selectOption('#days', '10').catch(() => {});
  await page.selectOption('#months', '5').catch(() => {});
  await page.selectOption('#years', '1994').catch(() => {});
  await page.fill('#first_name', user.full_name.split(" ")[0] || "QA");
  await page.fill('#last_name', user.full_name.split(" ").slice(1).join(" ") || "User");
  await page.fill('#address1', user.address_line1 || "Test Address");
  await page.selectOption('#country', 'India').catch(() => {});
  await page.fill('#state', user.state || "State");
  await page.fill('#city', user.city || "City");
  await page.fill('#zipcode', user.postal_code || "560001");
  await page.fill('#mobile_number', user.phone || "+919900000000");
  await page.click('button[data-qa="create-account"]');

  const created = await page.locator("text=Account Created!").first().isVisible().catch(() => false);
  if (created) {
    await page.getByRole("link", { name: "Continue" }).click().catch(() => {});
    await page.waitForTimeout(1000);
    const loggedInCreated = await page.locator("text=Logged in as").first().isVisible().catch(() => false);
    if (loggedInCreated) {
      await page.getByRole("link", { name: "Logout" }).click().catch(() => {});
      await page.waitForTimeout(700);
    }
  }

  return {
    created,
    reason: created ? "Created during execution bootstrap" : "Account creation failed"
  };
}

async function run() {
  const users = parseCsv(CSV_PATH);
  const registeredUser = users[0];
  const unregisteredUser = {
    email: `unregistered_${Date.now()}@example.com`,
    password: registeredUser.password
  };

  fs.mkdirSync(OUTPUT_DIR, { recursive: true });

  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({ viewport: { width: 1440, height: 900 } });
  const page = await context.newPage();

  const execution = {
    executedAt: nowIso(),
    baseUrl: BASE_URL,
    browser: "Chromium (Playwright)",
    os: "Windows",
    scope: ["SCN-LOGIN-01", "SCN-LOGIN-07", "SCN-LOGIN-09", "SCN-LOGIN-02", "SCN-LOGIN-04", "SCN-LOGIN-03", "SCN-LOGIN-11"],
    dataUsers: users.map((u) => ({ user_id: u.user_id, email: u.email })),
    bootstrap: {},
    results: []
  };

  execution.bootstrap = await ensureRegistered(page, registeredUser);

  // SCN-LOGIN-01: Valid login
  await gotoLogin(page);
  await loginAttempt(page, registeredUser.email, registeredUser.password);
  const login01Pass = await page.locator("text=Logged in as").first().isVisible().catch(() => false);
  execution.results.push({
    scenarioId: "SCN-LOGIN-01",
    title: "Valid login succeeds",
    status: login01Pass ? "Passed" : "Failed",
    observed: login01Pass ? "Logged in indicator visible." : "Logged in indicator missing after valid credentials.",
    expected: "User should be authenticated and shown as logged in.",
    reproRate: login01Pass ? "1/1" : "0/1"
  });

  // SCN-LOGIN-07: Redirect after successful login
  const currentUrl = page.url();
  const redirectPass = !/login/i.test(currentUrl);
  execution.results.push({
    scenarioId: "SCN-LOGIN-07",
    title: "Post-login redirect",
    status: redirectPass ? "Passed" : "Failed",
    observed: `Current URL after login: ${currentUrl}`,
    expected: "User should be redirected away from login page after successful login.",
    reproRate: redirectPass ? "1/1" : "0/1"
  });

  // SCN-LOGIN-09: Logout ends session and back navigation does not restore auth
  await page.getByRole("link", { name: "Logout" }).click();
  await page.waitForTimeout(800);
  const onLoginAfterLogout = /login/i.test(page.url());
  await page.goBack();
  await page.waitForTimeout(1000);
  const stillLoggedOut = !(await page.locator("text=Logged in as").first().isVisible().catch(() => false));
  const login09Pass = onLoginAfterLogout && stillLoggedOut;
  execution.results.push({
    scenarioId: "SCN-LOGIN-09",
    title: "Logout invalidates session",
    status: login09Pass ? "Passed" : "Failed",
    observed: `After logout URL: ${page.url()}, logged-in indicator visible after back: ${!stillLoggedOut}`,
    expected: "After logout, authenticated pages should not be accessible via browser back navigation.",
    reproRate: login09Pass ? "1/1" : "0/1"
  });

  // SCN-LOGIN-02: Valid email + invalid password should fail
  await gotoLogin(page);
  await loginAttempt(page, registeredUser.email, `${registeredUser.password}_wrong`);
  const invalidPasswordError = await page.locator("text=Your email or password is incorrect!").first().isVisible().catch(() => false);
  const scn02Pass = invalidPasswordError;
  execution.results.push({
    scenarioId: "SCN-LOGIN-02",
    title: "Invalid password rejection",
    status: scn02Pass ? "Passed" : "Failed",
    observed: scn02Pass ? "Error message shown for invalid password." : "No invalid-credential error shown.",
    expected: "System should reject invalid password with clear error.",
    reproRate: scn02Pass ? "1/1" : "0/1"
  });

  // SCN-LOGIN-04: Empty fields validation
  await gotoLogin(page);
  const emailRequired = await page.locator('input[data-qa="login-email"]').evaluate((el) => el.required).catch(() => false);
  const pwdRequired = await page.locator('input[data-qa="login-password"]').evaluate((el) => el.required).catch(() => false);
  await page.click('button[data-qa="login-button"]');
  await page.waitForTimeout(500);
  const validationPass = emailRequired && pwdRequired;
  execution.results.push({
    scenarioId: "SCN-LOGIN-04",
    title: "Empty credential validation",
    status: validationPass ? "Passed" : "Failed",
    observed: `Required flags - email: ${emailRequired}, password: ${pwdRequired}`,
    expected: "Email and password fields should enforce non-empty validation.",
    reproRate: validationPass ? "1/1" : "0/1"
  });

  // SCN-LOGIN-03: Unregistered email should fail
  await gotoLogin(page);
  await loginAttempt(page, unregisteredUser.email, unregisteredUser.password);
  const unregisteredError = await page.locator("text=Your email or password is incorrect!").first().isVisible().catch(() => false);
  const scn03Pass = unregisteredError;
  execution.results.push({
    scenarioId: "SCN-LOGIN-03",
    title: "Unregistered email rejection",
    status: scn03Pass ? "Passed" : "Failed",
    observed: scn03Pass ? "Error shown for unregistered account." : "Unregistered email was not rejected as expected.",
    expected: "System should reject unregistered email login attempt.",
    reproRate: scn03Pass ? "1/1" : "0/1"
  });

  // SCN-LOGIN-11: Repeated failed attempts keep UI stable
  await gotoLogin(page);
  let failedAttemptErrors = 0;
  const attempts = 5;
  for (let i = 0; i < attempts; i += 1) {
    await loginAttempt(page, registeredUser.email, `${registeredUser.password}_wrong_${i}`);
    const seen = await page.locator("text=Your email or password is incorrect!").first().isVisible().catch(() => false);
    if (seen) {
      failedAttemptErrors += 1;
    }
  }
  const uiStable = await page.locator('input[data-qa="login-email"]').isVisible().catch(() => false);
  const scn11Pass = failedAttemptErrors === attempts && uiStable;
  execution.results.push({
    scenarioId: "SCN-LOGIN-11",
    title: "Repeated failed attempts keep UI stable",
    status: scn11Pass ? "Passed" : "Failed",
    observed: `Failed attempt errors visible: ${failedAttemptErrors}/${attempts}, UI still interactive: ${uiStable}`,
    expected: "Repeated failed attempts should show stable failure feedback without UI hang/crash.",
    reproRate: `${failedAttemptErrors}/${attempts}`
  });

  await browser.close();

  const failed = execution.results.filter((r) => r.status === "Failed");
  execution.summary = {
    total: execution.results.length,
    passed: execution.results.length - failed.length,
    failed: failed.length,
    failedScenarioIds: failed.map((f) => f.scenarioId)
  };

  fs.writeFileSync(OUTPUT_FILE, JSON.stringify(execution, null, 2), "utf8");
  console.log(`Execution completed. Results written to ${OUTPUT_FILE}`);
  console.log(JSON.stringify(execution.summary));
}

run().catch((err) => {
  console.error("Execution failed:", err);
  process.exit(1);
});
