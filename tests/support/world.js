const { setWorldConstructor } = require('@cucumber/cucumber');

class CustomWorld {
  constructor() {
    this.page = null; // page will be injected by test runner
    this.context = null;
    this.browser = null;
  }
}

setWorldConstructor(CustomWorld);
