const { expect } = require('@playwright/test');

class CommonPage {
  async validateSaucedemoPage(page) {
    await page.goto('https://www.saucedemo.com/', { waitUntil: 'domcontentloaded' });
    await expect(page).toHaveURL(/saucedemo/);
    await page.locator('div[class="login_logo"]').waitFor({ timeout: 10000 });
  }

  async validateHerokuPage(page) {
    await page.goto('https://the-internet.herokuapp.com/', { waitUntil: 'domcontentloaded' });
    await expect(page).toHaveURL(/herokuapp/);
    await page.locator('//h2[text()="Available Examples"]').waitFor({ timeout: 10000 });
  }
}

module.exports = new CommonPage();