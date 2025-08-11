import { test, expect } from '@playwright/test';

test('verify the using of Edit Box', async ({ page }) => {

    await page.goto("/web/index.php/auth/login")

    //fill
    //------
    // await page.locator('input[name="username"]').fill("Admin")


    //type
    //----

    // await page.locator('input[name="username"]').type("Admin")


    //pressSequantially
    //------------------

    //await page.locator('input[name="username"]').pressSequentially("Admin",{delay:2000})

    // //clear
    //---------

    // await page.locator('input[name="username"]').fill("Adminkvkvnv")

    // await page.waitForTimeout(5000)
    // await page.keyboard.press("Control+A")
    // await page.keyboard.press("Backspace")
    // await page.waitForTimeout(5000)

    // await page.locator('input[name="username"]').clear()

    // await page.waitForTimeout(5000)

    // await page.locator('input[name="username"]').fill("Admin")

    //press using keyboard
    //---------------------

    // await page.locator('input[name="username"]').fill("Admin")
    // await page.locator('//input[@type="password"]').pressSequentially("admin123")
    // await page.keyboard.press("Enter")


    //toBeEmpty
    await expect(page.locator('input[name="username"]')).toBeEmpty()
})