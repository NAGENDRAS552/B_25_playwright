import{test,expect}from '@playwright/test'
const fs = require('fs')
 test('Handling Upload files',async({page})=>{
    await page.goto('https://the-internet.herokuapp.com/upload')
    await page.locator('#file-upload').setInputFiles('./testdata/files/Screenshot (35).png')
    await page.locator('#file-submit')
    await page.waitForTimeout(5000)
 })

 test('handling the Download files', async({page})=>{
    await page.goto('https://the-internet.herokuapp.com/download')
    const [download]=await Promise.all([
        page.waitForEvent('download'),
        page.locator('//a[@href="download/6451D144-727B-4A9E-B5F1-DBCE42D773EB.png"]').click()
    ])

    const suggestedFileName=download.suggestedFilename()
    const filePath='downloads/'+suggestedFileName
    await download.saveAs(filePath)
    expect(fs.existsSync(filePath)).toBeTruthy()
 })

 
 test('handling the-multiple- Download files', async({page})=>{
    await page.goto('https://the-internet.herokuapp.com/download')

    const filenames=['//a[@href="download/webdriverIO.png"]','//a[@href="download/Test_Image.png"]']
    for(const links of filenames){
    const [download]=await Promise.all([
        page.waitForEvent('download'),
        page.locator(`${links}`).click()
        
    ])


    const suggestedFileName=download.suggestedFilename()
    const filePath=`downloads/'+${suggestedFileName}`
    await download.saveAs(filePath)
    expect(fs.existsSync(filePath)).toBeTruthy()
}
 })