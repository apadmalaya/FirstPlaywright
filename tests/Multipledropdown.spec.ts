import {test,expect,Locator} from "@playwright/test"

test("Multi select drop down options",async({page})=>{
       await page.goto("https://testautomationpractice.blogspot.com/");
       //select multiple options from the drop down box 
       //<option value="red">Red</option>
       await page.locator("#colors").selectOption(['Red','Blue','Green']); //using visble text 
       const colorsdropdown:Locator = page.locator('#colors>option');
       console.log(colorsdropdown.count());
       const optionsText : string[] = (await colorsdropdown.allTextContents()).map(text=>text.trim());
       console.log(optionsText);
       expect(optionsText).toContain('Green');
       await page.waitForTimeout(5000);
       })

test("verify dropdown is sorted",async ({page})=>{
     await page.goto("https://testautomationpractice.blogspot.com/");
     const dropDownOptions:Locator = page.locator('#colors>option');
     const optionsText:string[] = (await dropDownOptions.allTextContents()).map(text=>text.trim());
     //const originalList:string[] = optionsText;
     //const sortedList:string[] = optionsText.sort();//problem with sort is its mutable when sort is done the main original array is also impacted 
     const originalList:string[] = [...optionsText];
     const sortedList:string[] = [...optionsText].sort();//problem with sort is its mutable when sort is done the main original array is also impacted 
     console.log(originalList);
     console.log(sortedList);
     expect (originalList).toEqual(sortedList);
     await page.waitForTimeout(5000);
});
test.only("Verify drop down contain duplciates", async({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/"); 
    const dropDownOptions:Locator = page.locator('#colors>option');
    const optionsText:string[] = (await dropDownOptions.allTextContents()).map(text=>text.trim());
    const duplicates = optionsText.filter((item,index)=>optionsText.indexOf(item)!=index);
    console.log(duplicates);
});
