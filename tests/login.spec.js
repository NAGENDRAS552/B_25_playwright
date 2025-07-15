import { test, expect } from '@playwright/test';

test('verify the login with valid credentials', async ({ page }) => {

    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    await page.locator('input[name="usernamee"]').fill("Admin")
    await page.locator("//input[@placeholder='Password']").fill("admin123")
    await page.locator("//button[@type='submit']").click()
    await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index")
    await page.close()
})

test('verify the login with invalid username and valid password ', async ({ page }) => {

    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    await page.locator('input[name="username"]').fill("Adminn")
    await page.locator("//input[@placeholder='Password']").fill("admin123")
    await page.locator("//button[@type='submit']").click()
    await expect(page.locator("div[role='alert']")).toBeVisible()
})

test('verify the login with valid username and invalid password ', async ({ page }) => {

    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    await page.locator('input[name="username"]').fill("Admin")
    await page.locator("//input[@placeholder='Password']").fill("admin1234")
    await page.locator("//button[@type='submit']").click()
    await expect(page.locator("div[role='alert']")).toBeVisible()
})

test('verify the login with invalid username and invalid password ', async ({ page }) => {

    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    await page.locator('input[name="username"]').fill("Adminn")
    await page.locator("//input[@placeholder='Password']").fill("admin1234")
    await page.locator("//button[@type='submit']").click()
    await expect(page.locator("div[role='alert']")).toBeVisible()
})
