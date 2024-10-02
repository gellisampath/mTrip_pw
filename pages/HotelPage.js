const handleError = require('../utils/errorHandler');

class HotelPage {
  constructor(page, locators) {
    this.page = page;
    this.locators = locators;
  }

  async searchHotel(city) {
    try {
      await this.page.fill(this.locators['hotelCityInput'], city);
      await this.page.click(this.locators['searchHotelButton']);
    } catch (error) {
      await handleError(this.page, error, 'Search Hotel');
    }
  }

  async selectHotel() {
    try {
      await this.page.click(this.locators['selectHotel']);
      await this.page.click(this.locators['bookNowButton']);
    } catch (error) {
      await handleError(this.page, error, 'Select Hotel');
    }
  }

  async fillGuestDetails(name, phone) {
    try {
      await this.page.fill(this.locators['guestNameInput'], name);
      await this.page.fill(this.locators['guestPhoneInput'], phone);
      await this.page.click(this.locators['proceedToPayment']);
    } catch (error) {
      await handleError(this.page, error, 'Fill Guest Details');
    }
  }
}

module.exports = { HotelPage };
