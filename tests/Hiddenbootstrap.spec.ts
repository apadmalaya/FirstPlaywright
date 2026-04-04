import {test,expect, Locator} from "@playwright/test"

test("Bootstrap Examples", async({page})=>{

    await page.goto("https://opensource-demo.orangehrmlive.com/");
    await page.locator('input[name="username"]').fill('Admin');
    await page.locator('input[name="password"]').fill('admin123');
    await page.locator('button[type="submit"]').click();
    await page.getByText('PIM').click();
    const dropdownJobs :any = await page.locator('form i').nth(2).click();
    // wait until visible
    const options:Locator =  page.locator("div[role='listbox'] span");
   await page.waitForTimeout(5000);
    const count = await options.count();
    console.log("count=", count);
    console.log(await options.nth(2).innerText());
   });