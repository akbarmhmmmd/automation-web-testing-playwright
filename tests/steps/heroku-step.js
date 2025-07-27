const { When, Then } = require('@cucumber/cucumber');
const HerokuPage = require('../pages/heroku-page');

When('User click {string} Button', async function (buttonName) {
  const heroku = new HerokuPage(this.page);
  await heroku.clickButton(buttonName);
});

Then('User redirected to {string} Page', async function (pageName) {
  const heroku = new HerokuPage(this.page);
  await heroku.validatePage(pageName);
});
