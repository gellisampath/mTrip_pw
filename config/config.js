require('dotenv').config();

module.exports = {
  portalUrl: process.env.PORTAL_URL || 'https://www.makemytrip.com',
  crmUrl: process.env.CRM_URL || 'https://crm.example.com',
  // Convert string to boolean using Boolean() function
  takeScreenshots: Boolean(process.env.TAKE_SCREENSHOTS),
  videoRecording: Boolean(process.env.VIDEO_RECORDING),
  // Parse testTimeout as an integer with a fallback value
  testTimeout: parseInt(process.env.TEST_TIMEOUT, 10) || 30000,
  // Parse parallelWorkers as an integer with a fallback value
  parallelWorkers: parseInt(process.env.PARALLEL_WORKERS, 10) || 4,
  errorHandling: {
    // Convert string to boolean using Boolean() function
    executeOnFailure: Boolean(process.env.EXECUTE_ON_FAILURE)
  }
};
