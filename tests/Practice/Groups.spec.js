const { test, expect } = require('@playwright/test');


test.beforeAll('Befre all hook',async()=>{

});


test.afterAll('After all hook',async()=>{

});


test.beforeEach('Befre each hook',async()=>{

});

test.afterEach('After each hook',async()=>{

});

test.describe('Groups1',async =>{
    test('Test 1',async ({page})=>{

        console.log("Test1")
    });
    
    test('Test 2',async ({page})=>{
    
        console.log("Test2")
    });
});


test.describe('Groups2',async =>{

    test('Test 3',async ({page})=>{
        console.log("Test3")
    });
    
    
    test('Test 4',async ({page})=>{
        console.log("Test4")
    });
});



