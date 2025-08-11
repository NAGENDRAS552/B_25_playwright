import { test, expect} from '@playwright/test'

test('working with Dropdowns', async({page})=>{
    await page.goto('https://register.rediff.com/register/register.php?FormName=user_details')

    //text
    
    //await page.locator('#country').selectOption("Andorra")
    //await page.locator('#country').selectOption({label:"Andorra"})

    //value

    // await page.locator('#country').selectOption("4")
    // await page.locator('#country').selectOption({value:"4"})

    //indexing

    //await page.locator('#country').selectOption({index:5})

      //await expect(page.locator('//select[@id="country"]/option')).toHaveCount(48)       //hard assertion
    await expect.soft(page.locator('//select[@id="country"]/option')).toHaveCount(48)    //soft assertion
     const options=await page.$$('//select[@id="country"]/option')
     console.log(options.length)

    //to print all options or dropdown values

    const more= await page.locator('//select[@id="country"]/option').allTextContents()
    console.log(more)
})