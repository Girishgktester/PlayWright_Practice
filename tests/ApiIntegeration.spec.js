
const { test, expect, request } = require('@playwright/test');
const { text } = require('stream/consumers');

const loginPayload = { userEmail: "anshika@gmail.com", userPassword: "Iamking@000" }

const orderPayLoad = {orders: [{country: "Bahrain", productOrderedId: "67a307e8e2b5443b1f48196f"}]}
let orderID;
let authToken;

//https://rahulshettyacademy.com/api/ecom/auth/login
//anshika@gmail.com
//Iamking@000
test.beforeAll(async () => {

    const apiContext = await request.newContext();

    const loginResponse = await apiContext.post("https://rahulshettyacademy.com/api/ecom/auth/login", {
        data: loginPayload
    });

    expect(loginResponse.ok()).toBeTruthy();

    const responseBody = await loginResponse.json();
    console.log("Login Response:", responseBody);
    authToken = responseBody.token;
    console.log("Auth Token:", authToken);

    const createOrderAPI = await apiContext.post("https://rahulshettyacademy.com/api/ecom/order/create-order", 
    {
        data: orderPayLoad,
        headers:{

                'Authorization': authToken,
                'Content-Type': 'application/json'
        },
    })

    const orderapiResponse = await createOrderAPI.json();
    console.log("Order API Response:", orderapiResponse);

    // Extract order ID correctly
    orderID = orderapiResponse.orders[0];
    console.log("Order ID:", orderID);

});

test("API Integeration part 1 ", async ({ page }) => {

    const errorText = page.locator(".error");
    const phoneNames = page.locator(".card-body");
    const productNamezara = "ZARA COAT 3"

    page.addInitScript(value => {

        window.localStorage.setItem('token', value);
    }, authToken)

    let productNames = 'anshika@gmail.com'
    await page.goto("https://rahulshettyacademy.com/client");

    await page.getByText("  ORDERS").click();
    
});  