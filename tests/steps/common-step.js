const { Given } = require('@cucumber/cucumber');
const common = require('../pages/common-page');

Given('User is on Sauce Demo Page', async function () {
  await common.validateSaucedemoPage(this.page);
});

Given('User is on Heroku Page', async function () {
  await common.validateHerokuPage(this.page);
});
