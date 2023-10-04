const livePageSelectors = {

  Live: 'img[alt="Live"]',
  liveMatches: '[id="category-header__stage"]',
  addFavorites: '[class="Fp"]',
  favortiesPage: '[class="Yi cj favourites"]',
  checkFavorites: '[class="ip mp lp"]',
  categoryHeader: '[id="category-header__stage"]',
  clickTable: '[id="tab-item-table"]',
  teamNames: '[class="jf Ng"]',
  bannerImg: 'img[src="//ads2ads.net/eu/kidnapping/728x90/728x90-1.JPG"]'

};

export class LivePage {
  static visitLiveScorePage() {
    cy.allure().logStep("visit Live score page");
    cy.visit("https://www.livescore.com/en/");
    
  }


  static verifyLiveMatchesInPage() {
    cy.allure().logStep("verify home page elements");
        cy.get(livePageSelectors.Live).click();

      cy.get(livePageSelectors.liveMatches).each(($element) => {
         
          const elementText = $element.text();
          cy.log(elementText); 
        });

        }

        static addFavorites(){
          cy.allure().logStep("add to favorites");

          cy.get(livePageSelectors.addFavorites).each(($element) => {
            cy.wrap($element).click();
          });
        }

        static verifyFavorites(){
          cy.allure().logStep("verify favorites");
          cy.get(livePageSelectors.favortiesPage).click();      
          cy.log(livePageSelectors.checkFavorites).title(); //should
        }

        static selectLeagueTable(){
          cy.allure().logStep("Find League");
          cy.get(livePageSelectors.categoryHeader).contains("League").click();
          cy.get(livePageSelectors.clickTable).click();

          cy.get(livePageSelectors.teamNames).each(($element) => {
         
            const elementText = $element.text();
            cy.log(elementText); 
          });

        }

        static findBanner(){
          cy.allure().logStep("Find Banner");
          cy.get(livePageSelectors.bannerImg).should('exist');
        }

        
}


  //  // cy.get(googlePageSelectors.accountButton).should("be.visible")

  