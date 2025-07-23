import { test,expect } from '@playwright/test'

import LoginPage from '../pageobject/LoginPage'
import DashBoardPage from '../pageobject/DashBoardPage'
import EmployeesPage from '../pageobject/EmployeesPage'

test('verify the addemployees using the pom', async ({page}) =>{
    const loginpage = new LoginPage(page)
    const dashboardpage = new DashBoardPage(page)
    const employeespage = new EmployeesPage(page)

   await loginpage.launchUrl()
   await loginpage.login("Admin","admin123")
   await loginpage.verifytheUrl()
   await dashboardpage.navigateToPIM()
   await employeespage.addEmployee("teja","guru")
   await employeespage.verifyEmployeeAdded()
})