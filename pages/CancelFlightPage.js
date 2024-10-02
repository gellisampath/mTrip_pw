const handleError = require('../utils/errorHandler');

class CancelFlightPage {
  constructor(page, locators) {
    this.page = page;
    this.locators = locators;
  }

  async searchBooking(bookingId) {
    try {
      await this.page.fill(this.locators['bookingIdInput'], bookingId);
      await this.page.click(this.locators['searchBookingButton']);
    } catch (error) {
      await handleError(this.page, error, 'Search Booking');
    }
  }

  async cancelFlight() {
    try {
      await this.page.click(this.locators['cancelFlightButton']);
    } catch (error) {
      await handleError(this.page, error, 'Cancel Flight');
    }
  }
}

module.exports = { CancelFlightPage };
