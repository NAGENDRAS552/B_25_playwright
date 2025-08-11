import{test,expect} from '@playwright/test'


import LoginPage from '../'
import DashboardPage from '../pageobject/DashBoardPage'
import JobtitlePage from '../pageobject/JobtitlePage'

test('Handling the combo box',({page})=>{

    const loginpage=new LoginPage(page)
        const dashboardpage=new DashboardPage(page)
        const jobtitlepage=new JobtitlePage(page)

})