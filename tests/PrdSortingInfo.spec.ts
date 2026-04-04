import {test, expect, Locator} from "@playwright/test"
test ("Verify Product Sorting and Information Retrieval",async ({page})=>{
    //Navigate to the webpage
    await page.goto("https://bstackdemo.com/");
    //Locate the order by drop down element 
    const dropdownOptions:Locator = page.locator('div.sort>select');
    //Verify the drop down is displayed and enabled
    expect(dropdownOptions).toBeVisible();
    expect(dropdownOptions).toBeEnabled();
    //select the option Lowest to Highest
    await dropdownOptions.selectOption('Lowest to highest');
    // Wait until first item becomes the lowest price ($399)
    await expect(page.locator('.shelf-item__price .val').first()).toContainText('$399');
    const options:string[] = await page.locator('div.sort>select>option').allTextContents();
    console.log(options);
    //Retreive the list of product price elements 
    const priceList:string[] = await page.locator('div.shelf-item__price').allTextContents();
    console.log(priceList);
    const cleanPrices = priceList.map(p => p.split('or')[0].trim());
    console.log(cleanPrices);
    //Retrieve the list of product name elements
    const productNames:string[] =await  page.locator('p.shelf-item__title').allTextContents();
    console.log(productNames);
    const productCount =  productNames.length;
    const priceCount =  cleanPrices.length;
    // ✅ Verify counts are equal
    expect(productCount).toBe(priceCount);
    //Print each product name along with its corresponding price in the console.
   const items:Locator[] = await page.locator('div.shelf-item').all();
   const count = items.length;
   for (const item of items)
   {
   const  prdname = await item.locator('.shelf-item__title').textContent();
   const prdprice = await item.locator('.val').textContent();
   console.log(prdname +"and its price is " +prdprice);
   }
});