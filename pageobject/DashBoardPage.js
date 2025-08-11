 import { expect } from "@playwright/test";
 
 class DashboardPage{
    constructor(page){
        this.page=page
        this.PimMenu= page.locator("(//a[@class='oxd-main-menu-item'])[2]")
        this.AdminMenu= page.locator('//span[text()="Admin"]')
    }

    async navigateToPIM(){
        await this.PimMenu.click()
    }

    async navigateToADMIN(){
        await this.AdminMenu.click()

    }
}
export default DashboardPage;
