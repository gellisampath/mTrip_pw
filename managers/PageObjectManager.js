const fs = require('fs');
const path = require('path');
const { LoginPage } = require('../pages/LoginPage');
const { NavigatePage } = require('../pages/NavigatePage');
const { HotelPage } = require('../pages/HotelPage');
const { FlightPage } = require('../pages/FlightPage');
const { CancelFlightPage } = require('../pages/CancelFlightPage');

class PageObjectManager {
  constructor(page) {
    this.page = page;
    this.locators = this.loadLocators();
    this.loginPage = null;  
    this.navigatePage = null;
    this.hotelPage = null;
    this.flightPage = null;
    this.cancelFlightPage = null;
  }

  loadLocators() {
    const locatorFilePath = path.join(__dirname, '../config/objectMaps.txt');
    const locators = {};
    const lines = fs.readFileSync(locatorFilePath, 'utf-8').split('\n');
    lines.forEach(line => {
      const [key, value] = line.split('=');
      locators[key.trim()] = value.trim();
    });
    return locators;
  }

  getLoginPage() {
    if (this.loginPage === null) {
      this.loginPage = new LoginPage(this.page, this.locators);
    }
    return this.loginPage;
  }

  getNavigatePage() {
    if (this.navigatePage === null) {
      this.navigatePage = new NavigatePage(this.page, this.locators);
    }
    return this.navigatePage;
  }

  getHotelPage() {
    if (this.hotelPage === null) {
      this.hotelPage = new HotelPage(this.page, this.locators);
    }
    return this.hotelPage;
  }

  getFlightPage() {
    if (this.flightPage === null) {
      this.flightPage = new FlightPage(this.page, this.locators);
    }
    return this.flightPage;
  }

  getCancelFlightPage() {
    if (this.cancelFlightPage === null) {
      this.cancelFlightPage = new CancelFlightPage(this.page, this.locators);
    }
    return this.cancelFlightPage;
  }
}

module.exports = { PageObjectManager };
