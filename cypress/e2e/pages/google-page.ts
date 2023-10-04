const googlePageSelectors = {

//  topStories: 'a[@id="i9"]',
  plusButton: '[data-testid="JP"]',
  accountButton: '[data-testid="LGST"]',
  closeConsentPage: '[jsname="V67aGc"]',
  headlines: 'h3 a'
};

export class GooglePage {
  static visitGooglePage() {
    cy.allure().logStep("visit Google news page");
    cy.visit("https://news.google.com");
  //  cy.get(googlePageSelectors.closeConsentPage).contains('Reject all').click();
  }


  static verifyGooglePageTopStoriesElements() {
    cy.allure().logStep("verify home page elements");
    cy.contains('Top stories').should("be.visible");
    cy.contains('Top stories').click();

        cy.get('h3').each(($headline, index) => {
          const headlineText = $headline.text();

          cy.get(googlePageSelectors.headlines)
            .invoke('text')
            .then((sourceText) => {
              cy.log(`Headline #${index + 1}: ${headlineText} (Source: ${sourceText})`);
            });
        });

        }
      }


  //  // cy.get(googlePageSelectors.accountButton).should("be.visible")

