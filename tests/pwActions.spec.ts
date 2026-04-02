import {test, expect} from "@playwright/test"

test('Text input Actions' , async ({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");
    // assertion used for Input box
    const nameInputBox  = page.locator("#name");
    expect(nameInputBox).toBeVisible();
    expect(nameInputBox).toBeEnabled();
    const maxLength: string |null  = await nameInputBox.getAttribute("maxlength");
    expect(maxLength).toBe('15');
    await page.locator('#name').fill("Anitha");
    const enteredValue:string = await nameInputBox.inputValue();
    expect(enteredValue).toBe("Anithayyyy");
    await page.locator('#email').fill("a.gmail.com");

    await page.locator('#phone').fill("11-2233-456"); 
    await page.locator('div.form-group textarea.form-control').fill("sfsdfdsfsdfsdfsd");
    await page.waitForTimeout(5000);
});

test('Radio Button Actions',async ({page})=>{
     await page.goto("https://testautomationpractice.blogspot.com/");
     const maleRadio = page.locator("#male");
     await expect(maleRadio).toBeVisible();
     await expect(maleRadio).toBeEnabled();
     expect (await maleRadio.isChecked()).toBe(false);
     await maleRadio.check();
     await expect(maleRadio).toBeChecked();
     await page.waitForTimeout(5000);    
});

test.only('Check boxes',async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");
    //Find a specific check box Sunday and then test it 
    const checkboxSunday = page.getByLabel("Sunday");
    await checkboxSunday.check();
    await expect(checkboxSunday).toBeChecked();
    // Select all the checkboes and assert it 
    const checkboxes = page.locator('div.form-group:nth-of-type(4) input.form-check-input');
    const labels = page.locator('div.form-group:nth-of-type(4) label.form-check-label');
    const count = await checkboxes.count();
    for (let i = 0; i < count; i++) {
    const labelText = (await labels.nth(i).textContent())?.trim();
    const checked = await checkboxes.nth(i).isChecked();
    console.log(`${labelText} is checked? ${checked}`);
   }
});