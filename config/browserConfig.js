module.exports = {
    browser: {
      headless: process.env.HEADLESS === 'true',
      viewport: { width: 1920, height: 1080 },
      video: process.env.VIDEO_RECORDING === 'true' ? 'on' : 'off',
      screenshot: process.env.TAKE_SCREENSHOTS === 'true' ? 'on' : 'only-on-failure'
    }
  };
  