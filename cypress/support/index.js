const iframe = require('cypress-iframe');

Cypress.on('command:run', (command) => {
  if (command.name === 'visit') {
    iframe.addCommand('blockIframe', (iframeId) => {
      return new Cypress.Promise((resolve) => {
        cy.get(iframeId).then((iframe) => {
          iframe.setAttribute('style', 'display: none;');
          resolve();
        });
      });
    });
  }
});