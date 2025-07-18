import { test, expect } from '@playwright/test';

test('delete the employees in list using loops', async ({ page }) => {
    await page.goto("/web/index.php/auth/login")
    await page.locator('input[name="username"]').fill("Admin")
    await page.locator("//input[@placeholder='Password']").fill("admin123")
    await page.locator("//button[@type='submit']").click()
    await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index")
    await page.locator("(//a[@class='oxd-main-menu-item'])[2]").click()
    await page.locator("(//a[@class='oxd-topbar-body-nav-tab-item'])[1]").click()

    for (let i = 1; i <= 10; i++) {
        await page.locator("(//button[@class='oxd-icon-button oxd-table-cell-action-space']//i)[2]").click()
        await page.locator("//button[contains(.,'Yes, Delete')]").click()
        await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewEmployeeList")

    }
})