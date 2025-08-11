import{test,expect} from '@playwright/test'

test('handle tabs example-1', async({page})=>{
    await page.goto('https://the-internet.herokuapp.com/windows')

    const[newTab]=await Promise.all([
        page.waitForEvent('popup'),
        page.locator('a[href="/windows/new"]').click()
    ]);
     const textvalue= await newTab.locator('//h3[text()="New Window"]').textContent()
     console.log("Text on new page:",textvalue);
     await page.waitForTimeout(5000)
})

test('handle tabs examole-2',async({page})=>{
    await page.goto('https://the-internet.herokuapp.com/windows')
   await page.locator('a[href="/windows/new"]').click()

   const newPagePromise=page.waitForEvent('popup')
   const newPage=await newPagePromise

   await newPage.waitForLoadState();
   await expect(newPage.locator('//h3[text()="New Window"]')).toHaveText("New Window")
   const textvalues=await newPage.locator('//h3[text()="New Window"]').textContent()
   console.log("Text  on new window:",textvalues)
    await page.waitForTimeout(5000)
})