import {test,expect} from '@playwright/test'

test('working with the elements', async ({page}) =>{

    
    await page.goto('https://playwright.dev/')

    //click()
    //await page.locator('//a[text()="Community"]').click()

    //hidden elements
    //await page.locator('(//a[@target="_self"])[1]').click({force:true})

    //doubleclick()
    //await page.locator('//a[text()="Community"]').dblclick()

    //clic(left,right,middle)
   //await page.locator('//a[text()="Community"]').click({button:'left'})
   
   // shift+click
   //await page.locator('//a[text()="Community"]').click({modifiers:['Shift']})

   //Hover over elements
   //await page.locator('//a[text()="Community"]').hover()

   //click the top left corner
   //await page.locator('//a[text()="Community"]').click({position:{x:0,y:0}});
   

//    await expect(page.locator('//a[@href="/python/docs/api/class-playwright"]')).toBeVisible()
//    await expect(page.locator('//a[@href="/python/docs/api/class-playwright"]')).toBeEnabled()
//    await expect(page.locator('//a[@href="/python/docs/api/class-playwright"]')).toBeDisabled()
//    await expect(page.locator('//a[@href="/python/docs/api/class-playwright"]')).toBeAttached()
   

})

// test('working with elements related to buttons', async ({page}) =>{

//     await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/pim/addEmployee')
//     await expect(page.locator('//span[@class="oxd-switch-input oxd-switch-input--active --label-right"]')).toBeVisible()
// })



