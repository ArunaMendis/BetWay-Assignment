import { GooglePage } from "../pages/google-page";
import { WeatherPage } from "../pages/weather-page";

describe("findHeadings Assignment 1 test", () => {
  it("Visit Google news page", { tags: ["@smoke"] }, () => {
    GooglePage.visitGooglePage();
    GooglePage.verifyGooglePageTopStoriesElements();
  });

});