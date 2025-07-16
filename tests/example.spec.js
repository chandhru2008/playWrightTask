import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://omayo.blogspot.com/');

  await expect(page).toHaveTitle("omayo (QAFox.com)");
});


test('navigate to another page', async ({ page }) => {
  await page.goto('https://omayo.blogspot.com/');
  await expect(page).toHaveTitle("omayo (QAFox.com)");
  await page.locator('#blogsmenu').hover();
  await page.locator("//span[text() = 'SeleniumByArun']").click();
  await expect(page).toHaveTitle('Selenium-By-Arun');
});

test('reading row and column in table', async ({ page }) => {
  await page.goto('https://omayo.blogspot.com/');
  await expect(page).toHaveTitle("omayo (QAFox.com)");
  const tableHeadings = await page.locator('//table[@id = "table1"]//tbody//tr');
  const count = await tableHeadings.count();
  for (let i = 1; i <= count; i++) {
    const tableContents = await page.locator(`//table[@id = "table1"]//tbody//tr[${i}]//td`);
    const count = await tableContents.count();
    for (let j = 1; j <= count; j++) {
      const textContent = await page.locator(`//table[@id = "table1"]//tbody//tr[${i}]//td[${j}]`).textContent();
      console.log("Table data row " + i + " column " + j + " data " + textContent)
    }
  }
})


test('login with username and password', async ({ page }) => {
  await page.goto('https://omayo.blogspot.com/');
  await expect(page).toHaveTitle("omayo (QAFox.com)");
  await page.locator('//form[@name = "form1"]//input[@type = "text"]').click();
  await page.locator('//form[@name = "form1"]//input[@type = "text"]').fill("Chandhru");
  await page.locator('//form[@name = "form1"]//input[@type = "password"]').click();
  await page.locator('//form[@name = "form1"]//input[@type = "password"]').fill("Chandhru_2006");
  await page.locator('//form[@name = "form1"]//button').click();
});

test("getting text from preloaded textbox", async ({ page }) => {
  await page.goto('https://omayo.blogspot.com/');
  await expect(page).toHaveTitle("omayo (QAFox.com)");
  const textContent = await page.locator('//div[@class= "widget HTML"]//div[@class = "widget-content"]//textarea[@rows = "10" and @cols = "30"]').textContent();
  console.log("Text content : ", textContent)
});


test("checking  button 2 is enabled and button 1 is disabled", async ({ page }) => {
  await page.goto('https://omayo.blogspot.com/');
  await expect(page).toHaveTitle("omayo (QAFox.com)");
  const isDisabledButton1 = await page.locator('//button[@id = "but1"]').isDisabled();
  const isDisabledButton2 = await page.locator('//button[@id = "but2"]').isDisabled();
  if (isDisabledButton1 && !isDisabledButton2) {
    console.log("Button 2 is enabled and Button 1 is disabled");
  }
});



test("checking URL that we have entered in search box", async ({ page }) => {
  await page.goto('https://omayo.blogspot.com/');
  await expect(page).toHaveTitle("omayo (QAFox.com)");
  const query = "Chandhru";
  await page.locator('input[name="q"]').fill(query);
  await page.keyboard.press('Enter');
  await expect(page).toHaveURL(new RegExp(query));
});

test("print entire option in dropdown", async ({ page }) => {
  await page.goto('https://omayo.blogspot.com/');
  await expect(page).toHaveTitle("omayo (QAFox.com)");
  const allOptions = await page.locator('//select[@id = "drop1"]//option').count();
  for (let i = 1; i <= allOptions; i++) {
    const content = await page.locator(`//select[@id = "drop1"]//option[${i}]`)
    console.log('Option ' + 1 + content);
  }
  await page.locator('//select[@id = "drop1"]').click();
  await page.locator('//select[@id = "drop1"]//option[1]]')
});


test('test page is navigated', async ({ page }) => {
  await page.goto('https://omayo.blogspot.com/');
  await expect(page).toHaveTitle("omayo (QAFox.com)");
  await page.locator('select[class="L3Qlm PGEEnb s8lUn ToxeQe"]')
    .selectOption({ label: 'Share with Facebook' });
  await expect(page).toHaveURL(/facebook/);
});



