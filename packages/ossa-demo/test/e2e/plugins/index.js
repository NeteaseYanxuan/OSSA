//require('mocha-allure-reporter')

module.exports = (on, config) => {
  return Object.assign({}, config, {
    fixturesFolder: "test/e2e/fixtures",
    integrationFolder: "src/components/",
    testFiles: "**/__test__/e2e.js",
    screenshotsFolder: "test/e2e/screenshots",
    videosFolder: "test/e2e/videos",
    supportFile: "test/e2e/support/index.js",
  });
};
