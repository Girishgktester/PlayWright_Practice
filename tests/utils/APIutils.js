const { expect } = require('@playwright/test');


class APIutils {
    constructor(apiContext) {
        this.apiContext = apiContext;
    }

    async getToken(loginPayload) {
        const loginResponse = await this.apiContext.post(
            "https://rahulshettyacademy.com/api/ecom/auth/login",
            { data: loginPayload }
        );

        console.log("Login Response Status:", loginResponse.status());
        console.log("Login Response Text:", await loginResponse.text()); // Debugging API response

        expect(loginResponse.ok()).toBeTruthy(); // ✅ This will fail if the API returns an error

        const responseBody = await loginResponse.json();
        return responseBody.token;
    }

    async createOrder(loginPayload, orderPayload) {
        const authToken = await this.getToken(loginPayload);

        const createOrderAPI = await this.apiContext.post(
            "https://rahulshettyacademy.com/api/ecom/order/create-order",
            {
                data: orderPayload,
                headers: {
                    'Authorization': authToken,
                    'Content-Type': 'application/json'
                },
            }
        );

        const orderApiResponse = await createOrderAPI.json();
        console.log("Order API Response:", orderApiResponse);

        return { authToken, orderID: orderApiResponse.orders[0] };
    }
}

module.exports = { APIutils };  // ✅ Ensure correct export
