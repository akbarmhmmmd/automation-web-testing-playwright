class SauceDemoPage {
  constructor(page) {
    this.page = page;
  }

  get usernameField() { return this.page.locator('input[id="user-name"]'); }
  get passwordField() { return this.page.locator('input[id="password"]'); }
  get loginButton() { return this.page.locator('input[id="login-button"]'); }
  get swagLabsText() { return this.page.locator('div[class="app_logo"]'); }

  async inputUsername(data) {
    await this.usernameField.waitFor({ timeout: 5000 });
    await this.usernameField.fill(data['Username']);
  }

  async inputPassword(data) {
    await this.passwordField.waitFor({ timeout: 5000 });
    await this.passwordField.fill(data['Password']);
  }

  async clickLogin() {
    await this.loginButton.waitFor();
    await this.loginButton.click();
  }

  async isLoggedIn() {
    await this.page.waitForTimeout(2000);
    const pages = await this.swagLabsText.allTextContents();
    return pages.includes('Swag Labs');
  }
}

module.exports = SauceDemoPage;