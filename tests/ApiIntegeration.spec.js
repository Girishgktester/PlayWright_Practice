const { test, expect, request } = require('@playwright/test');
const { APIutils } = require('./utils/APIutils');  // ✅ Import APIutils correctly

const loginPayload = { userEmail: "anshika@gmail.com", userPassword: "Iamking@000" };
const orderPayload = { orders: [{ country: "Bahrain", productOrderedId: "67a307e8e2b5443b1f48196f" }] };
let response;

test.beforeAll(async () => {
    const apiContext = await request.newContext();
    const apiUtils = new APIutils(apiContext);

    response = await apiUtils.createOrder(loginPayload, orderPayload);
});

test("API Integration - Part 1", async ({ page }) => {
    if (!response || !response.authToken) {
        throw new Error("Auth Token is undefined. Check API response.");
    }

    console.log("Using Auth Token in UI Test:", response.authToken);

    page.addInitScript(token => {
        window.localStorage.setItem('token', token);
    }, response.authToken);

    await page.goto("https://rahulshettyacademy.com/client");
    await page.getByText("ORDERS").click();
});
