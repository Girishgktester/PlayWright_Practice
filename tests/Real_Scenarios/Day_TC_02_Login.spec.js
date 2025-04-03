import { test, expect } from '@playwright/test';
import exp from 'constants';
import { execPath } from 'process';

test("Test Case 1: Register User", async ({ page }) => {

    await page.goto("https://automationexercise.com/");

    const homepagetitle = await page.getByAltText("Website for automation practice");
    expect(homepagetitle).toBeVisible();

    await page.getByText(" Signup / Login").click();

    expect(await page.getByText("Login to your account").textContent()).toBe("Login to your account")

    const emailAddress = await page.getByPlaceholder("Email Address").first();

    expect(emailAddress).toBeVisible();

    emailAddress.fill("testAE@gmail.com")

    const password = await page.getByPlaceholder("Password");

    await expect(password).toBeVisible();

    password.fill("admin123")

    await page.locator("button[data-qa='login-button']").click();
    
    await page.getByRole("link", { name: "Logged in as test1te" }).toBeVisible();

});
