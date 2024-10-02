const { test } = require('@playwright/test');
const { PageObjectManager } = require('../managers/PageObjectManager');
const { readCsvData } = require('../utils/csvReader');
const handleError = require('../utils/errorHandler');

test.describe('MakeMyTrip Booking Execution', () => {
  let testData;

  test.beforeAll(async () => {
    testData = await readCsvData('./data/testdata.csv');
  });

  test(`Book a hotel`, async ({ page }) => {
    const pageObjectManager = new PageObjectManager(page);
    const navigatePage = pageObjectManager.getNavigatePage();
    const loginPage = pageObjectManager.getLoginPage();
    const hotelPage = pageObjectManager.getHotelPage();

    try {
      await navigatePage.navigateToPortal();
      await loginPage.login(testData.username, testData.password);  
      await hotelPage.searchHotel(testData.from_city);
      await hotelPage.selectHotel();
      await hotelPage.fillGuestDetails(testData.guest_name, testData.guest_phone);
    } catch (error) {
      await handleError(page, error, 'Booking Hotel');
    }
  });

   
  if (Array.isArray(testData)) {
    testData.forEach(data => {
      if (data.execute === 'true') {
        if (data.test_case_name === 'bookHotel') {
          test(`Book a hotel`, async ({ page }) => {
            const pageObjectManager = new PageObjectManager(page);
            const navigatePage = pageObjectManager.getNavigatePage();
                  
            const loginPage = pageObjectManager.getLoginPage();
            
            const hotelPage = pageObjectManager.getHotelPage();

            try {
                await navigatePage.navigateToPortal();
                await loginPage.login(data.username, data.password);
                await hotelPage.searchHotel(data.from_city);
                await hotelPage.selectHotel();
                await hotelPage.fillGuestDetails(data.guest_name, data.guest_phone);
            } catch (error) {
              await handleError(page, error, 'Booking Hotel');
            }
          });
        }

        if (data.test_case_name === 'bookFlight') {
          test(`Book a flight`, async ({ page }) => {
            const pageObjectManager = new PageObjectManager(page);
            const flightPage = pageObjectManager.getFlightPage();

            try {
              await flightPage.searchFlight(data.from_city, data.to_city);
              await flightPage.selectFlight();
              await flightPage.fillPassengerDetails(data.guest_name, data.passport_number);
            } catch (error) {
              await handleError(page, error, 'Booking Flight');
            }
          });
        }

        if (data.test_case_name === 'cancelFlight') {
          test(`Cancel a flight`, async ({ page }) => {
            const pageObjectManager = new PageObjectManager(page);
            const cancelFlightPage = pageObjectManager.getCancelFlightPage();

            try {
              await cancelFlightPage.searchBooking(data.guest_name);
              await cancelFlightPage.cancelFlight();
            } catch (error) {
              await handleError(page, error, 'Cancelling Flight');
            }
          });
        }
      }
    });
  }
});
