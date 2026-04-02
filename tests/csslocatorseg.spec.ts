import {test,expect,Locator} from "@playwright/test"

test("verify css Locators", async ({page})=>{
 
    await page.goto("https://demowebshop.tricentis.com/");

    //tag#id
    const searchbox:Locator = page.locator("input#small-searchterms")
    await searchbox.fill("T-shirts");
    await page.waitForTimeout(5000);
    page.locator('input.button-1[value="Search"]').click();
    await page.waitForTimeout(5000);

});
