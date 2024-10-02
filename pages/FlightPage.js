const handleError = require('../utils/errorHandler');

class FlightPage {
  constructor(page, locators) {
    this.page = page;
    this.locators = locators;
  }

  async searchFlight(fromCity, toCity) {
    try {
      await this.page.fill(this.locators['fromCityInput'], fromCity);
      await this.page.fill(this.locators['toCityInput'], toCity);
      await this.page.click(this.locators['searchFlightButton']);
    } catch (error) {
      await handleError(this.page, error, 'Search Flight');
    }
  }

  async selectFlight() {
    try {
      await this.page.click(this.locators['selectFlight']);
      await this.page.click(this.locators['bookFlightButton']);
    } catch (error) {
      await handleError(this.page, error, 'Select Flight');
    }
  }

  async fillPassengerDetails(name, passportNumber) {
    try {
      await this.page.fill(this.locators['passengerNameInput'], name);
      await this.page.fill(this.locators['passportNumberInput'], passportNumber);
      await this.page.click(this.locators['proceedToPayment']);
    } catch (error) {
      await handleError(this.page, error, 'Fill Passenger Details');
    }
  }
}

module.exports = { FlightPage };
