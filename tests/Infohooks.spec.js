import { test, expect } from '@playwright/test';

let page;

test.beforeEach(async ({ browser }) => {
  page = await browser.newPage();
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
});

test.afterEach(async ({}, testInfo) => {
  // Run only for specific test titles
  const errorTests = [
    'verify the login with invalid username and valid password',
    'verify the login with valid username and invalid password',
    'verify the login with invalid username and invalid password'
  ];

  if (errorTests.includes(testInfo.title)) {
    console.log(`afterEach: Cleaning up after failed login test - "${testInfo.title}"`);
    // You can add cleanup actions here if needed
    // e.g., page.close(), logging, screenshots, etc.
  }
});

test('verify the login using the hooks', async () => {
  await page.locator('input[name="username"]').fill('Admin');
  await page.locator("//input[@placeholder='Password']").fill('admin123');
  await page.locator("//button[@type='submit']").click();
  await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index');
});

test('verify the login with invalid username and valid password', async () => {
  await page.locator('input[name="username"]').fill('Adminn');
  await page.locator("//input[@placeholder='Password']").fill('admin123');
  await page.locator("//button[@type='submit']").click();
  await expect(page.locator("div[role='alert']")).toBeVisible();
});

test('verify the login with valid username and invalid password', async () => {
  await page.locator('input[name="username"]').fill('Admin');
  await page.locator("//input[@placeholder='Password']").fill('admin1234');
  await page.locator("//button[@type='submit']").click();
  await expect(page.locator("div[role='alert']")).toBeVisible();
});

test('verify the login with invalid username and invalid password', async () => {
  await page.locator('input[name="username"]').fill('Adminn');
  await page.locator("//input[@placeholder='Password']").fill('admin1234');
  await page.locator("//button[@type='submit']").click();
  await expect(page.locator("div[role='alert']")).toBeVisible();
});
