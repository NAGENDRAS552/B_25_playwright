 import { expect } from "@playwright/test";
 
 class DashboardPage{
    constructor(page){
        this.page=page
        this.PimMenu= page.locator("(//a[@class='oxd-main-menu-item'])[2]")
    }

    async navigateToPIM(){
        await this.PimMenu.click()
    }
}
export default DashboardPage;
