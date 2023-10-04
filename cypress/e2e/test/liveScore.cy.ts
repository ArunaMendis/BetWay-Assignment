import { GooglePage } from "../pages/google-page";
import { LivePage } from "../pages/live-page";

describe("Assignment 2", () => {
  it("Visit LiveScore page", { tags: ["@smoke"] }, () => {
    LivePage.visitLiveScorePage();
    LivePage.verifyLiveMatchesInPage();
  });

  it("Add and Verify Favorites", { tags: ["@smoke"] }, () => {
    LivePage.visitLiveScorePage();
    LivePage.addFavorites();
    LivePage.verifyFavorites();
  });

  it("League tables", { tags: ["@smoke"] }, () => {
    LivePage.visitLiveScorePage();
    LivePage.selectLeagueTable();
  });

    it('Should check if banners exist', () => {
      LivePage.visitLiveScorePage();
      LivePage.findBanner();  
    });


});