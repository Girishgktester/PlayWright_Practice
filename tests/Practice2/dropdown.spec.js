import { test, expect } from '@playwright/test';

test("Practice dropdown test scenarios", async ({ page }) => {

    await page.goto("https://freelance-learn-automation.vercel.app/signup");

    const dropdown = page.locator("#state");

    const userName = page.locator("#username");

    await dropdown.selectOption({ value: "Bihar" })

    await dropdown.selectOption({ label: "Sikkim" })

    await dropdown.selectOption("Goa")

    await dropdown.selectOption({ index: 7 })

    const values = await dropdown.textContent()

    // console.log("values " + values)

    await expect(values.includes("Goa")).toBeTruthy();

    await expect(values.match("Tamil Nadu")).toBeTruthy();

    await expect(values).toContain('Uttar Pradesh');

    let states = await page.$("#state")

    let allelemetns = await states.$$("option")

    for (let i = 0; i < allelemetns.length; i++) {

        let elemetns = allelemetns[i]

        let value = await allelemetns[i].textContent()

        console.log(value)
    }


    await page.locator("#hobbies").selectOption(['Playing', 'Swimming'])

    await page.waitForTimeout(20000);


});
