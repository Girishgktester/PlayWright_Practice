import { test, expect } from '@playwright/test';
import exp from 'constants';
import { execPath } from 'process';

test("Test Case 1: Register User", async ({ page }) => {

    await page.goto("https://automationexercise.com/");

    const homepagetitle = await page.getByAltText("Website for automation practice");
    expect(homepagetitle).toBeVisible();

    await page.getByText(" Signup / Login").click();
    await page.getByText("New User Signup!")
    expect(await page.getByText("New User Signup!")).toBeVisible();

    await page.getByPlaceholder("Name").fill("TestSite");
    const randomEmail = `test${Date.now()}@example.com`;

    await page.locator("input[data-qa='signup-email']").fill("Test@tssest123W.com")
    await page.locator("button[data-qa='signup-button']").click();

    expect(await page.getByText("Enter Account Information")).toBeVisible();

    await page.locator("#id_gender1").check();
    expect(await page.locator("#name")).toBeVisible();
    const email = await page.locator("#email").textContent();
    await page.locator("#password").fill("Admin123");
    await page.locator("#days").click();
    const dateDropdown = await page.locator("#days");
    dateDropdown.selectOption("10");

    const monthDropdown = await page.locator("#months");

    monthDropdown.selectOption("April")
    const yearDropdown = await page.locator("#years");
    yearDropdown.selectOption("1992")
    await page.getByText("Sign up for our newsletter!").check();
    await page.getByText("Receive special offers from our partners!").check();
    await page.locator("#first_name").fill("Test")
    await page.waitForTimeout(2000);
    await page.locator("#last_name").fill("User")
    await page.waitForTimeout(2000);
    await page.locator("#company").fill("Judge")
    await page.locator("#address1").fill("Noida")
    await page.locator("#address2").fill("Sector 32")
    await page.locator("#address2").fill("Sector 32")

    const country = await page.locator("#country")

    country.selectOption("United States")
    await page.locator("#state").fill("UP")
    await page.locator("#city").fill("Delhi")
    await page.locator("#zipcode").fill("560061")
    await page.locator("#mobile_number").fill("1234567890")
    await page.locator("button[data-qa='create-account']").click();
    const sucessmessage = await page.getByText("Account Created!");
    expect(sucessmessage).toHaveText("Account Created!")

});


test('Testcase 5: Register User with existing user', async ({page}) => {

    await page.goto("https://automationexercise.com/")

    await page.getByText(" Signup / Login").click();

    await page.getByPlaceholder("Name").fill("TestAE@gmail.com");

    await page.getByPlaceholder("Email Address").nth(1).fill("admin123@admin.com")

    await page.getByRole("button", {name:'Signup'}).click();

    expect(await page.getByText("Email Address already exist!")).toBeVisible();



});
