import { defineConfig } from "cypress";

const allureWriter = require("@shelex/cypress-allure-plugin/writer");

const cypressSplit = require("cypress-split");

export default defineConfig({
  fixturesFolder: "cypress/fixtures",
  video: false,
  chromeWebSecurity: false,
  experimentalModifyObstructiveThirdPartyCode: true,
  trashAssetsBeforeRuns: true,
  retries: {
    runMode: 2,
    openMode: 0,
  },
  defaultCommandTimeout: 5000,
  pageLoadTimeout: 20000,
  responseTimeout: 10000,
  requestTimeout: 10000,
  taskTimeout: 10000,
  viewportWidth: 1920,
  viewportHeight: 1080,
  waitForAnimations: true,
  env: {
    allure: true,
    allureResultsPath: "allure-results",
    allureLogCypress: true,
    allureAttachRequests: false,
    allureReuseAfterSpec: true,
    grepFilterSpecs: true,
    grepOmitFiltered: true,
  },
  e2e: {
    setupNodeEvents(on, config) {
      allureWriter(on, config);
      require("@bahmutov/cy-grep/src/plugin")(config);
      cypressSplit(on, config);
      return config;
    },
    baseUrl: "https://news.google.com",
  },
});
