const config = require('../config/config');

module.exports = async (page, error, stepDescription) => {
  console.error(`Error during step: ${stepDescription}`, error);
  
  // Take screenshot if configured
  if (config.takeScreenshots) {
    await page.screenshot({ path: `./screenshots/error_${Date.now()}.png` });
  }

  // Check if we should stop execution based on config
  if (!config.errorHandling.executeOnFailure) {
    throw error; // Re-throw the error to fail the test if executeOnFailure is false
  }
};
