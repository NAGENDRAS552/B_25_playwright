import { test, expect } from '@playwright/test';
import logindata from "../testdata/login.json";

const creds = ["Admin", "admin123"];

const menuitems = {
    menu1: "Admin",
    menu2: "PIM",
    menu3: "Leave",
    menu4: "Time",
    menu5: "Recruitment",
    menu6: "My Info"
};

test('verify the loops using the object', async ({ page }) => {

    await page.goto("/web/index.php/auth/login");

    await page.locator('input[name="username"]').fill(creds[0]);
    await page.locator("//input[@placeholder='Password']").fill(creds[1]);
    await page.locator("//button[@type='submit']").click();

    await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index");

    
    for (let key in menuitems) {
        const menuText = menuitems[key];
        const locator = page.locator(`//span[text()='${menuText}']`);
        await expect(locator).toHaveText(menuText);
    }
});
