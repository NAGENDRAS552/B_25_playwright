import{test, expect} from '@playwright/test'

test('Handling Tables',async({page})=>{
    await page.goto('https://the-internet.herokuapp.com/tables')

    //verify how many tables are present

    const tables=await page.$$('//table')
    expect(tables.length).toBe(2)

    //verify how many rows are present

    const rows=await page.$$('//table[@id="table1"]/tbody/tr')
    expect(rows.length).toBe(4)

    //or

    //expect(rows.length).to.be.within(4,10)
    //await expect(page.locator('//table[@id="table1"]/tbody/tr')).toHaveCount(4)

    //verify the how many columns are present

    const columns=await page.$$('//table[@id="table1"]/thead/tr/th')
    expect(columns.length).toBe(6)

    //verify the values

    await expect(page.locator('//table[@id="table1"]/tbody/tr[2]/td[2]')).toHaveText("Frank")
    
    const textvalue=await page.locator('//table[@id="table1"]/tbody/tr[4]/td[3]').textContent()
    await expect(textvalue).toContain('tconway@earthlink.net')
    await expect(textvalue).toMatch(/tconway/)

})