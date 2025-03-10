
const { test, expect } = require('@playwright/test');
const { text } = require('stream/consumers');
const { LoginPage } = require('./pageobjects/LoginPage');
const { Dashboardpage } = require('./pageobjects/Dashboardpage');
const { Products}   = require('./pageobjects/Products');
// const {TestData} = require('../utils/TestData.json');
const dataSet =  JSON.parse(JSON.stringify (require('../utils/TestData.json')));


// covert Json to string , string to JS objetc

test("Practice PW ", async ({ page }) => {

    const userName = page.locator("#userEmail");
    const password = page.locator("#userPassword");
    const loginButton = page.locator("#login");
    const errorText = page.locator(".error");
    const phoneNames = page.locator(".card-body");
    const productNamezara = "ZARA COAT 3"


    const loginpage = new LoginPage(page);
   await loginpage.navigateT();
   await loginpage.validlogin(dataSet.username,dataSet.passowrd);

    const dashboardpage = new Dashboardpage(page);
    await  dashboardpage.addtocart(productNamezara);
    await  dashboardpage.clickCart();
    const products = new Products(page);
    await products.verifyProductFromCart(productNamezara);
    await products.selectCountry();

    await page.getByText("Place Order ").click();
    const sucesstext = await page.locator(".hero-primary")

    sucesstext.isVisible();

    console.log(sucesstext.textContent());

    const orfderID = await page.locator("label[class='ng-star-inserted']").textContent();

    let orderID = await page.getByText("Orders History Page").textContent();
 
    const orderId = await page.locator(".em-spacer-1 .ng-star-inserted").textContent();
    console.log(orderId);




});  