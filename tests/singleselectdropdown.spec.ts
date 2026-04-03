import { Locator, test,expect } from "@playwright/test";

test("Single select dropdown examples",async ({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");
    //option1 : select options from the dropdown 
    //Examples <option value="usa">United States</option>
    await page.locator("#country").selectOption("United States");
    //option2: select value from the select
    await page.locator('#country').selectOption({value:'uk'});
    //option 3: select label from the drop down -label is the inner text
    await page.locator('#country').selectOption({label:'India'});
    //option 3: select index from the drop down index start from 0
    await page.locator('#country').selectOption({index:4});

    //check no of options in the drop down(count)
    const dropdownOptions:Locator = page.locator("#country>option");
    await expect(dropdownOptions).toHaveCount(10);
    const optionsText:string[] = (await dropdownOptions.allTextContents()).map(text=>text.trim());
    console.log(optionsText);
    expect(optionsText).toContain('India');
    //print options from the dropdown
    for(let option of optionsText)
    {
        console.log(option);
    }
    } );