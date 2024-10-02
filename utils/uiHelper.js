class UIHelper {
    constructor(page) {
      this.page = page;
    }
  
    async isVisible(selector) {
      return await this.page.isVisible(selector);
    }
  
    async enterText(selector, text) {
      await this.page.fill(selector, text);
    }
  
    async clickButton(selector) {
      await this.page.click(selector);
    }
  
    async selectDropdown(selector, value) {
      await this.page.selectOption(selector, value);
    }
  
    async checkCheckbox(selector) {
      if (!(await this.page.isChecked(selector))) {
        await this.page.check(selector);
      }
    }
  
    async uncheckCheckbox(selector) {
      if (await this.page.isChecked(selector)) {
        await this.page.uncheck(selector);
      }
    }
  
    async verifyText(selector, expectedText) {
      const actualText = await this.page.textContent(selector);
      if (actualText !== expectedText) {
        throw new Error(`Text mismatch: expected "${expectedText}", but got "${actualText}"`);
      }
    }
  }
  
  module.exports = UIHelper;
  