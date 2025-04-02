const { test, expect } = require('@playwright/test');


test('Test 1@smoke', async ({ page }) => {

    console.log("Test1")
});

test('Test 2@smoke', async ({ page }) => {

    console.log("Test2")
});

test('Test 3@sanity', async ({ page }) => {

    console.log("Test3")
});

test('Test 4@sanity', async ({ page }) => {

    console.log("Test4")
});

test('Test5@sanity@regression', async ({ page }) => {

    console.log("Test4")
});