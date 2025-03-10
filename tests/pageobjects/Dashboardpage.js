class Dashboardpage {
    constructor(page) {
        this.page = page;
        this.phoneNames = page.locator(".card-body"); // Store as instance variable
        this.productTitles = page.locator(".card-body b"); // Store product titles
        this.cart = page.locator(".btn.btn-custom[routerlink='/dashboard/cart']"); // Store cart button
    }

    async addtocart(productNamezara) {
        await this.page.waitForLoadState('networkidle');
        const titless = await this.phoneNames.allTextContents();
        const countss = await this.phoneNames.count();
        for (let i = 0; i < countss; ++i) {

            console.log(await this.phoneNames.nth(i).locator("b").textContent())
            if (await this.phoneNames.nth(i).locator("b").textContent() == productNamezara) {
                console.log("True")

                await this.phoneNames.nth(i).locator("text = Add To Cart").click();
                break;
            } else {
                console.log("False")
            }
        }
    }

    async clickCart() {
        await this.cart.click();
    }
}

module.exports = { Dashboardpage };
