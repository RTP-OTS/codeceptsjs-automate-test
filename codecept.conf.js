const { setHeadlessWhen, setCommonPlugins } = require('@codeceptjs/configure');

setHeadlessWhen(process.env.HEADLESS);
setCommonPlugins();

/** @type {CodeceptJS.MainConfig} */
exports.config = {
  tests: './tests/*_test.js',
  output: './output',
  helpers: {
    Playwright: {
      browser: 'chromium',
      url: 'https://www.saucedemo.com',
      show: process.env.HEADLESS !== 'true'
    }
  },
  include: {
    I: './steps_file.js'
  },
  bootstrap: null,
  name: 'codeceptsjs-automate-test'
};
