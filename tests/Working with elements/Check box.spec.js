
import { test, expect } from '@playwright/test'

test('Verify the Check box', async ({ page }) => {
    await page.goto('https://register.rediff.com/register/register.php?FormName=user_details')

    // await page.locator('//input[@type="checkbox"]').check()

    //  await expect(page.locator('//input[@type="checkbox"]')).toBeChecked

    // await page.waitForTimeout(3000)

    // await page.locator('//input[@type="checkbox"]').uncheck()

    // await expect(page.locator('//input[@type="checkbox"]')).not.toBeChecked()

    const ischecked = await page.locator('//input[@type="checkbox"]').isChecked()

    await page.waitForTimeout(5000)

    console.log(ischecked)

    await page.waitForTimeout(5000)

    if (ischecked == false) {

        await page.locator('//input[@type="checkbox"]').check()
        await expect(page.locator('//input[@type="checkbox"]')).toBeChecked()


    }
})

test('verify the check box example2', async ({ page }) => {
    await page.goto('https://demo.guru99.com/test/radio.html')
    const checkBoxs = await page.$$('//input[@type="checkbox"]')

    for (let checkbox of checkBoxs) {
        // await checkbox.check()
        const isChecked = await checkbox.isChecked()
        console.log(isChecked)

        if (!isChecked) {
            await checkbox.check({ force: true })
        }
    }
})