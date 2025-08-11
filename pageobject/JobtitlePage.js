import {expect} from '@playwright/test'

class JobtitlePage{
    constructor(page){
        this.page=page;
        this.JobSubMenu=page.locator('//span[text()="Job "]')
        this.JobTitleSubMenu=page.locator('(//a[@role="menuitem"])[1]')
        this.AddButton=page.locator('(//button[@type="button"])[4]')
        this.r = (Math.random() + 1).toString(36).substring(7)
        this.TypeJobtitle=page.locator('(//input[@class="oxd-input oxd-input--active"])[2]')
        this.TypeJobDescription=page.locator('//textarea[@placeholder="Type description here"]')
        this.SaveButton=page.locator('//button[@type="submit"]')
        this.DisplayInformation=page.locator('//h6[text()="Job Titles"]')
    }

    async Jobtitle(title,description){
        await this.JobSubMenu.click()
        await this.JobTitleSubMenu.click()
        await this.AddButton.click()
        await this.TypeJobtitle.fill(title +this.r)
        await this.TypeJobDescription.fill(description)
        await this.SaveButton.click()
    }

    async ShowsavedInformation(){
          await expect(this.DisplayInformation).toBeVisible()
    }
}

export default JobtitlePage;
