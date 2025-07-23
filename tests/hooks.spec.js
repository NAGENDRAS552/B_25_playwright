import { test, expect } from '@playwright/test'

let page


test.beforeEach( async ({browser}) =>{
    page= await browser.newPage()
    await page.goto("/web/index.php/auth/login")
})

// test.afterEach( async ({browser}) => {
    
// })

test('verify the login using the hooks', async ({ page })=>{

    
        await page.locator('input[name="username"]').fill('Admin')
        await page.locator("//input[@placeholder='Password']").fill('admin123')
        await page.locator("//button[@type='submit']").click()
        await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index")
})


test('verify the login with invalid username and valid password ', async ({ page }) => {

    
    await page.locator('input[name="username"]').fill('Adminn')
    await page.locator("//input[@placeholder='Password']").fill("admin123")
    await page.locator("//button[@type='submit']").click()
    await expect(page.locator("div[role='alert']")).toBeVisible()
})

test('verify the login with valid username and invalid password ', async ({ page }) => {

    
    await page.locator('input[name="username"]').fill('Admin')
    await page.locator("//input[@placeholder='Password']").fill("admin1234")
    await page.locator("//button[@type='submit']").click()
    await expect(page.locator("div[role='alert']")).toBeVisible()
})

test('verify the login with invalid username and invalid password ', async ({ page }) => {

    
    await page.locator('input[name="username"]').fill('Adminn')
    await page.locator("//input[@placeholder='Password']").fill("admin123")
    await page.locator("//button[@type='submit']").click()
    await expect(page.locator("div[role='alert']")).toBeVisible()
})