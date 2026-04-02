import {test, expect, Locator} from "@playwright/test";

/*test("pwlocators example" , async ({page})=>{

    await page.goto("https://demo.nopcommerce.com/");
    //getbyAltText() // identifies images basde on alt attributes 
    let logo:Locator = page.getByAltText("nopCommerce demo store")
    console.log(logo);
    await expect(logo).toBeVisible()
    //page.getByText()  // allows fullsting or substring 
    await expect(page.getByText("Welcome to our store")).toBeVisible();
    //page.getByRole() used for Button, chekboxes, headings,links,lists, tables and many more 
   await  page.getByRole("link",{name:'Register'}).click();
    await expect(page.getByRole("heading",{name:'Register'})).toBeVisible();
    //page.getByLabel() 
    await page.getByLabel("First name:").fill("Anitha")
    await page.getByLabel("Last name:").fill("Pad")
    await page.getByLabel("Email:").fill("a.g.com")
 
});*/
test("pwlocators example", async ({ page }) => {

    await page.goto("https://demo.nopcommerce.com/");

    let logo: Locator = page.getByAltText("nopCommerce demo store");
    await expect(logo).toBeVisible();

    await expect(page.getByText("Welcome to our store")).toBeVisible();

    await page.getByRole("link", { name: 'Register' }).click();

    await expect(page.getByLabel("First name:")).toBeVisible();

    await page.getByLabel("First name:").fill("Anitha");
    await page.getByLabel("Last name:").fill("Pad");
    await page.getByLabel("Email:").fill("a.g.com");
}); 