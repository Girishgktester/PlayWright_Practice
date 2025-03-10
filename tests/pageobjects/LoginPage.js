class LoginPage {

    constructor(page) {
        this.page = page;

        this.userName = page.locator("#userEmail");
        this.password = page.locator("#userPassword");
        this.loginButton = page.locator("#login");
        this.errorText = page.locator(".error");
        this.phoneNames = page.locator(".card-body");
        this.productNamezara = "ZARA COAT 3"
    }


    async validlogin(username, password) {

        await this.userName.fill(username);
        await this.password.fill(password);

        await this.loginButton.click();

    }

    async navigateT(){

        await this.page.goto("https://rahulshettyacademy.com/client");  // ✅ Use this.page
    }

}


module.exports = {LoginPage}; 