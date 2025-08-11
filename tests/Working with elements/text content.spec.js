import{test,expect} from '@playwright/test'
import LoginPage from '../../pageobject/LoginPage'

test.describe('working with the text content',()=>{
    

    test('verify the text contents', async({page})=>{
        await page.goto('https://www.flipkart.com/')
        await expect(page.locator('//span[text()="Mobiles & Tablets"]')).toHaveText("Mobiles & Tablets")
         
    })

    // test('verify the text content -example-1',async({page})=>{
    //     await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

    //     const username=await page.locator('//p[text()="Username : Admin"]').textContent()       //innercontent
    //     console.log(username)

    //     const Uservalue=username.split(" ")

    //     await page.locator('input[name="username"]').fill(Uservalue[2])

        
    // })

    test('verify the text content -example-2', async({page}) =>{
        //const loginpage= new LoginPage(page)
        const loginpage = new LoginPage(page)

       //await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        await loginpage.launchUrl()
        //await loginpage.login("Admin","admin123")
         await loginpage.login("Admin","admin123")

         await expect(page).toHaveURL(/\/dashboard\/index/);


       const values=await page.locator('//span[@class="oxd-text oxd-text--span oxd-main-menu-item--name"]').allTextContents()       //alinnercontents
        
       for(let i of values){
        console.log(i)
       }
    })

    test('verify the text content-example-3',async({page})=>{
        await page.goto('https://www.flipkart.com/')
        await expect(page.locator('//div[@class="_3sdu8W emupdz"]/a/div[1]/div[1]/div/following-sibling::span/span')).toHaveText("Minutes")
    })
})