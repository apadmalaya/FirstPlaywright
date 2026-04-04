import {test, expect,Locator} from "@playwright/test"
test ("Auto suggest drop box", async ({page})=>{
     await page.goto("https://www.flipkart.com/");
     page.locator("span[role='button']").click();
     const searchbox = await page.locator("input[name='q']").first();
     await page.waitForTimeout(5000);
     await searchbox.click();
     await searchbox.pressSequentially("smart", { delay: 100 });
      await page.waitForTimeout(5000);
     const options = page.locator("ul>li");
     const count =await  options.count();
     const word:string = await options.nth(5).innerText();
     console.log(count);
      console.log(word);
      for(let i=0;i<count;i++)
        {
             console.log(await options.nth(i).innerText());
        }
      
     });