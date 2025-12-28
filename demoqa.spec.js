import { test, expect } from '@playwright/test';

test('login', async ({ page }) => {

    await page.goto("https://demoqa.com/");
    await page.waitForTimeout(1000);

    //Navigate to Books Store Application
    await page.click("//div[6]//div[1]//div[2]//*[name()='svg']");
    
    await page.click("//button[@id='login']");

    // Login using the newly created user.
    await page.locator("//input[@id='userName']").fill("nachiketagrawal");
    await page.locator("//input[@id='password']").fill("Ram@12NH");

    await page.click("//button[@id='login']");

    // Validate username and logout button. 
    await expect(page.locator("//label[@id='userName-value']")).toContainText("nachiketagrawal")
    await expect(page.locator("//button[@id='submit']")).toContainText("Log out");

    // Click on bookstore button
    await page.click("//div[@class='element-list collapse show']//li[@id='item-2']");

    //Search "Learning JavaScript Design Patterns"

    await page.locator("//input[@id='searchBox']").fill("Learning JavaScript Design Patterns");

    //Validate the search result to contain this book.


    
    await expect(page.locator("//a[normalize-space()='Learning JavaScript Design Patterns']")).toContainText("Learning JavaScript Design Patterns");
    //Print Title, Author and Publisher into a file.
    const title = await page.locator("//a[normalize-space()='Learning JavaScript Design Patterns']").textContent();
    const author = await page.locator("//div[normalize-space()='Addy Osmani']").textContent();
    const publisher = await page.locator("//div[@class='rt-tbody']//div[1]//div[1]//div[4]").textContent();

    console.log("title : " + title);
    console.log("Author  : " + author);
    console.log("publisher : " + publisher);

    //Click on log out
    await page.click("//button[@id='submit']");


    await page.waitForTimeout(1000);
    await page.close();
});