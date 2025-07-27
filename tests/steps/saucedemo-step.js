const { When, Then } = require('@cucumber/cucumber');
const SauceDemoPage = require('../pages/saucedemo-page');
const { expect } = require('@playwright/test');

When('User input valid saucedemo credentials:', async function (dataTable) {
  const data = dataTable.rowsHash();
  const saucedemo = new SauceDemoPage(this.page);
  await saucedemo.inputUsername(data);
  await saucedemo.inputPassword(data);
});

When('User click Login button', async function () {
  const saucedemo = new SauceDemoPage(this.page);
  await saucedemo.clickLogin();
});

Then('User redirected to Sauce Demo Home Page', async function () {
  const saucedemo = new SauceDemoPage(this.page);
  await saucedemo.isLoggedIn();
});
