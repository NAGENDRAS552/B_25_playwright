import { expect } from "@playwright/test";

 class LoginPage{
    constructor(page){
        this.page=page;
        
    this.UsernameField= page.locator('input[name="username"]')
    this.PasswordField=page.locator('input[type="password"]')
    this.LoginButton= page.locator('button[type="submit"]')
    
    }

    async launchUrl() {
    await this.page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
}



async login(username,password){

    await this.UsernameField.fill(username)
    await this.PasswordField.fill(password)
    await this.LoginButton.click()
}

async verifytheUrl(){
   
   
      await expect(this.page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index")
}
}

export default LoginPage;
