const weatherPageSelectors = {

  select10Days: '[class^="styles--OverflowNav"]',
  findWeatherElement: '[class^="DetailsSummary--extendedData"]'
};

export class WeatherPage {
  static visitWeatherPage() {
    cy.allure().logStep("visit Google weather page");
    cy.visit("https://weather.com/weather/today/l/45.45,9.20?par=google");
    
  }


  static verifyWeatherPageNext5days() {
    cy.allure().logStep("verify home page elements");
        cy.get(weatherPageSelectors.select10Days).contains('10 Day').click();

      cy.get(weatherPageSelectors.findWeatherElement).each(($element) => {
         
          const elementText = $element.text();
          cy.log(elementText); 
        });

        }

        
}


  //  // cy.get(googlePageSelectors.accountButton).should("be.visible")

  