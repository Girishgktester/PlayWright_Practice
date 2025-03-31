const { test, expect } = require('@playwright/test');
const exp = require('constants');

test('Auto suggestion dropdown', async ({ page }) => {


    await page.goto("https://www.redbus.in/")

    await page.locator('#src').fill("Gulbarga")

    await page.waitForSelector("//li[contains(@class,'sc-iwsKbI')]/div/text[1]");

    const cities = await page.$$("//li[contains(@class,'sc-iwsKbI')]/div/text[1]")

    for (let i = 0; i < cities.length; i++) {

    const citynames = await cities[i].textContent();

    console.log(citynames)

    if(citynames.includes('Gulbarga Bypass')){
        await  cities[i].click()
        break;
    }

    await page.waitForTimeout(3000);
    }

});



test('Hidden dropdown', async ({ page }) => {

    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

    await page.getByRole('input', {name: 'username' })
    await page.getByPlaceholder('Username').fill('admin')
    await page.getByPlaceholder('Password').fill('admin123')

    await page.getByRole('button', {name:'Login'}).click()

    await page.getByText('PIM').click();
    await page.waitForTimeout(1000);

    await page.locator("(//div)[71] ").click();


    const options = await page.$$("//div[@role='listbox']//span")


for(let option of options){

   const roles =  await option.textContent();


   console.log(roles)
}


});
