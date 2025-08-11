import { test, expect} from '@playwright/test'

test('verify the Radio button', async({page})=>{
    await page.goto('https://register.rediff.com/register/register.php?FormName=user_details')
    await expect(page.locator('input[value="m"]')).toBeChecked()
    await page.locator('input[value="f"]').check()
    await expect(page.locator('input[value="f"]')).toBeChecked()
    await expect(page.locator('input[value="m"]')).not.toBeChecked()
})