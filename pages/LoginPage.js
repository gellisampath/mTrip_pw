const handleError = require('../utils/errorHandler');

class LoginPage {
    constructor(page, locators) {
      this.page = page;
      this.locators = locators;
    }
    

    async login(username, password) {
        try {
          await this.page.fill(this.locators['usernameInput'], username);
          await this.page.fill(this.locators['passwordInput'], password);
          await this.page.click(this.locators['loginButton']);
        } catch (error) {
          await handleError(this.page, error, 'Login');
        }
    }
}

module.exports = { LoginPage };
