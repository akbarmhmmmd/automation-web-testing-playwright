const { expect } = require('@playwright/test');

class HerokuPage {
  constructor(page) {
    this.page = page;
  }

  get locators() {
    return {
      'AB Testing': {
        button: this.page.locator('a[href="/abtest"]'),
        text: this.page.locator('div.example'),
        expectedText: 'A/B',
      },
      'Add Remove': {
        button: this.page.locator('a[href="/add_remove_elements/"]'),
        text: this.page.locator('#content'),
        expectedText: 'Add/Remove Elements',
      },
    };
  }

  async clickButton(name) {
    const element = this.locators[name];
    if (!element) throw new Error(`No locator defined for ${name}`);
    await element.button.waitFor({ timeout: 5000 });
    await element.button.click();
  }

  async validatePage(name) {
    const element = this.locators[name];
    if (!element) throw new Error(`No locator defined for ${name}`);
    await element.text.waitFor({ timeout: 5000 });
    const text = await element.text.allTextContents();
    expect(text.join(' ')).toContain(element.expectedText);
  }
}

module.exports = HerokuPage;
