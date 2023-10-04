import { GooglePage } from "../pages/google-page";
import { WeatherPage } from "../pages/weather-page";

 describe("findWeather Assignment 1.1 test", () => {
    it("Visit Google weather page", { tags: ["@smoke"] }, () => {
      WeatherPage.visitWeatherPage();
      WeatherPage.verifyWeatherPageNext5days();
    });

});