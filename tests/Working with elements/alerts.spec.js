
import { test, expect } from '@playwright/test'
//import LoginPage from '../../pageobject/LoginPage'

test.describe('Automation-working with Alerts', () => {


  test.beforeEach(async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/javascript_alerts')
    //await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
  })


  test('working with alerts - simple Alerts', async ({ page }) => {
    // const loginpage=new LoginPage(page)
    // await loginpage.launchUrl()
    // await loginpage.login("Admin","admin123")

    await page.locator('//button[text()="Click for JS Alert"]').click()
    await page.waitForTimeout(5000)
    page.on('dialog', async dialog => {
      expect(dialog.message()).toBe('I am a JS Alert')
      await dialog.accept()
    })
  })

  test('working with alerts -confirm alerts -ok', async({page}) =>{
      page.locator('//button[@onclick="jsConfirm()"]').click()
    //await page.waitForTimeout(5000)

    page.on('dialog', async dialog =>{
      expect(dialog.type()).toBe('confirm')
      await dialog.accept()
      await expect(page.locator('//button[text()="Click for JS Confirm"]')).toBeVisible()

      
    })
    
  })
  test('working with alerts -confirm alerts -cancel', async({page}) =>{
     page.locator('//button[@onclick="jsConfirm()"]').click()
    //await page.waitForTimeout(5000)

    page.on('dialog', async dialog =>{
      expect(dialog.type()).toBe('confirm')
      await dialog.dismiss()
      //await expect(page.locator('//button[text()="Click for JS Confirm"]')).toBeVisible()

      
    })
    
  })

    test('working with alerts -prompt alerts -ok', async({page}) =>{
     page.locator('button[onclick="jsPrompt()"]').click()
    //await page.waitForTimeout(5000)

    page.on('dialog', async dialog =>{
      expect(dialog.type()).toBe('prompt')
      await dialog.accept('guruteja')
      await expect(page.locator('//button[text()="Click for JS Confirm"]')).toBeVisible()

      
    })
    
  })

  test('working with alerts -prompt alerts -cancel', async({page}) =>{
     page.locator('button[onclick="jsPrompt()"]').click()
    //await page.waitForTimeout(5000)

    page.on('dialog', async dialog =>{
      expect(dialog.type()).toBe('prompt')
      await dialog.dismiss()
      await expect(page.locator('//button[text()="Click for JS Confirm"]')).toBeVisible()

      
    })
    
  })


  
})

