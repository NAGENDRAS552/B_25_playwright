import { test, expect } from '@playwright/test';

test('Open Playwright website and check title', async ({ page, browserName }) => {
    test.skip (browserName == "chromium") 

        await page.goto('https://playwright.dev');
        await expect(page).toHaveTitle(/Playwright/);

    

});
