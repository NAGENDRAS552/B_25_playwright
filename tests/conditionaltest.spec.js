import { test, expect } from '@playwright/test';

// test('Open Playwright website and check title', async ({ page, browserName }) => {
//     test.skip (browserName == "chromium") 

//         await page.goto('https://playwright.dev');
//         await expect(page).toHaveTitle(/Playwright/);
// });

test('Based on browser run different scripts', async ({ page, browserName }) => {
    switch (browserName) {
        case "firefox":

            await page.goto("https://www.flipkart.com/");
            await page.close()

            break;

        case "webkit":

            await page.goto("https://www.amazon.in/log-in/s?k=log+in");
            await page.close()

            break;


        case "Google Chrome":

            await page.goto("https://www.myntra.com/login?referer=https://www.myntra.com/wishlist");
            await page.close()
            break;
              


    }
})
