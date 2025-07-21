import { test, expect } from '@playwright/test';
test('verify the login functionalities', async ({ page }) => {
 await page.goto("https://www.flipkart.com/")
})