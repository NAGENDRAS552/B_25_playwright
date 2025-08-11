import { test, expect} from '@playwright/test'

import LoginPage from '../pageobject/LoginPage'
import DashboardPage from '../pageobject/DashBoardPage'
import JobtitlePage from '../pageobject/JobtitlePage'

test('verify addjobtitle using POM', async ({page}) =>{
    const loginpage=new LoginPage(page)
    const dashboardpage=new DashboardPage(page)
    const jobtitlepage=new JobtitlePage(page)

    await loginpage.launchUrl()
    await loginpage.login("Admin","admin123")
    await loginpage.verifytheUrl()
    await dashboardpage.navigateToADMIN()
    await jobtitlepage.Jobtitle("SDLC and bug","Ensure the product quality")
    await jobtitlepage.ShowsavedInformation()
    
})