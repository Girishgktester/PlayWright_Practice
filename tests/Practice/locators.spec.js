import { test, expect } from '@playwright/test';

test("Practice Locators", async ({ page }) => {

    await page.goto("https://demoblaze.com/index.html");
    await page.locator("id=login2").click();
    await page.locator("#loginusername").fill("pavanol");
    await page.locator("#loginpassword").fill("test@123")
    const text = await page.locator("id=logInModalLabel").textContent();
    console.log(text);
    await page.click("button[onclick='logIn()']");
    const element = await page.locator("#logout2");
    await expect(element).toBeVisible();
    await page.waitForTimeout(3000)
});


test('Locating multiple webelements ', async ({ page }) => {
    await page.goto("https://demoblaze.com/index.html")
    const links = await page.$$('//a')    // return aall the links
    console.log(links.length)
    // forloop  traditional approach
    for (const link of links) {
        const linktexts = await link.textContent();
        console.log("All the links " + linktexts)
    }

    await page.waitForTimeout(2000)

    // for loop enhanced 
    const productname = await page.$$("//div[@id='tbodyid']//div/h4/a")
    for (const product of productname) {
        const pname = await product.textContent()
        console.log("Product names " + pname)
    }
});


test("Playwright built in Locators", async ({ page }) => {
    await page.goto("https://demoblaze.com/index.html");
    await page.locator("id=login2").click();
    await page.locator("#loginusername").fill("pavanol");
    await page.locator("#loginpassword").fill("test@123")
    const text = await page.locator("id=logInModalLabel").textContent();
    console.log(text);
    await page.click("button[onclick='logIn()']");
    const element = await page.locator("#logout2");
    await expect(element).toBeVisible();
    await page.waitForTimeout(3000)
});

test("Playwright built in Locators continued", async ({ page }) => {

    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

    //getByTagName
    let logo = await page.getByAltText("company-branding")
    await expect(logo).toBeVisible();

   
    // getByPlaceHolder
    const username = await page.getByPlaceholder("Username")
    await expect(username).toBeVisible();
    username.fill("Admin")

    const password = await page.getByPlaceholder("Password")
    await expect(password).toBeVisible();
    password.fill("admin123")

    //getByRole 
    await page.getByRole("button", { type: 'submit' }).click();
    const userlogged = await page.getByText("manda user")
    await expect(userlogged).toBeVisible();
    await page.waitForTimeout(2000)

     //getBylable
    //  const getlabel = await page.getByLabel("Username").textContent()
    //  console.log("getlabel ---->"+getlabel)
});



