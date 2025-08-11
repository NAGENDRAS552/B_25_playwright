import {test,expect} from '@playwright/test'

test.describe('working with drag and drop elements',()=>{

    test('verify the drag and drop',async({page})=>{
        await page.goto('https://kitchen.applitools.com/ingredients/drag-and-drop')

        // await page.locator('#menu-fried-chicken').dragTo(page.locator('#plate-items'))
        // await page.locator('#menu-hamburger').dragTo(page.locator('#plate-items'))
        // await page.locator('#menu-ice-cream').dragTo(page.locator('#plate-items'))

        const sourceFrideChicken=await page.locator('#menu-fried-chicken')
        const sourceHamburger=await page.locator('#menu-hamburger')
        const sourceIceCream=await page.locator('#menu-ice-cream')
         const TargetplateItems= await page.locator('#plate-items')
         
         await sourceFrideChicken.dragTo(TargetplateItems)
         await sourceHamburger.dragTo(TargetplateItems)
         await sourceIceCream.dragTo(TargetplateItems)
    })
})