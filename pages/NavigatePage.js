const handleError = require('../utils/errorHandler');
const config = require('../config/config');

class NavigatePage {
    constructor(page, locators) {
      this.page = page;
      this.locators = locators;
    }

    async navigateToPortal(url) {
        try {
            await this.page.goto(config.portalUrl);
        } catch (error) {
            await handleError(this.page, error, 'Navigate to URL');
        }
    }
}

module.exports = { NavigatePage };
