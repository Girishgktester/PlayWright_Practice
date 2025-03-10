const { expect } = require('@playwright/test');

class Products {


    constructor(page) {
        this.page = page;

        this.productnameFomcart = page.locator("div[class='cartSection'] h3");
        this.checkoutt = page.getByText("Checkout")

        this.checkout = page.getByText("Checkout").click();

        this.selectCountryd = page.locator("input[placeholder='Select Country']");

        this.inputCountry = page.locator("[placeholder*='Country']");


        // this.dropdown = page.locator(".ta-results");

            // const dropdown = page.locator(".ta-results");


    }


    async verifyProductFromCart(productNamezara) {

        await this.productnameFomcart.waitFor();

        const name = await this.productnameFomcart.textContent();

        expect(productNamezara).toBe(name);

    }


    async clikcheckout() {

        await this.checkoutt.click();
    }


    async selectCountry() {
        await this.selectCountryd.waitFor();
    
        // Ensure input field is ready before typing
        await this.inputCountry.waitFor();
        await this.inputCountry.pressSequentially("ind");
    
        const dropdown = this.page.locator(".ta-results"); // Corrected usage
        await dropdown.waitFor();
    
        const optionsCount = await dropdown.locator("button").count(); // Use 'dropdown', not 'this.dropdown'
        for (let i = 0; i < optionsCount; ++i) {
            const text = await dropdown.locator("button").nth(i).textContent();
            if (text.trim() === "India") { // Trim spaces to match correctly
                await dropdown.locator("button").nth(i).click();
                break;
            }
        }
    }
    
}

module.exports = { Products };
