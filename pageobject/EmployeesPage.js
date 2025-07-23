import { expect } from "@playwright/test";

 class EmployeesPage{
    constructor(page){
        this.page=page;
        this.AddEmployeeButton =  page.locator("(//a[@class='oxd-topbar-body-nav-tab-item'])[2]")
        this.FirstNameField = page.locator("input[name='firstName']")
        this.LastNameField = page.locator("input[name='lastName']")
       this.r = Math.floor(1000 + Math.random() * 9000).toString();
        this.UniqueID = page.locator("(//input[@class='oxd-input oxd-input--active'])[2]")
        this.SaveButton = page.locator("button[type='submit']")
        this.PersonalDetailsHeader = page.locator('//h6[text()="Personal Details"]')

    }
     
    async addEmployee(FirstName,LastName){
   await this.AddEmployeeButton.click()
   await this.FirstNameField.fill(FirstName)
   await this.LastNameField.fill(LastName)
   await this.UniqueID.fill(this.r)
      //console.log(`Added employee with ID: ${this.r}`)
   await this.SaveButton.click()
    }

    async verifyEmployeeAdded(){
        //await this.page.waitForLoadState('networkidle');
        await expect(this.PersonalDetailsHeader).toBeVisible()
    }
}
export default EmployeesPage;
