

class PricingPage {

    // Locators
    get closeCookiesButton() {
        return cy.get('button[aria-label="close and deny"]');
    }
    get elasticsipPricing() {
        return cy.get('a[href*="elastic-sip"][class*=dVfoAV]');
    }
    get callcontrolPricing() {
        return cy.get('a[href*="call-control"][class*=dVfoAV]');
    }
    get messagingPricing() {
        return cy.get('a[href*="messaging"][class*=dVfoAV]');
    }
    get faxPricing() {
        return cy.get('a[href*="fax"][class*=dVfoAV]');
    }
    get wirelessPricing() {
        return cy.get('a[href*="iot-data-plans"][class*=dVfoAV]');
    }
    get verifyapiPricing() {
        return cy.get('a[href*="verify-api"][class*=dVfoAV]');
    }
    get idservicePricing() {
        return cy.get('a[href*="id-services-and-data"][class*=dVfoAV]');
    }
    get networkingPricing() {
        return cy.get('a[href*="networking"][class*=dVfoAV]');
    }

    // Methods
    openPricingPage(page) {
        cy.visit(page);
    }
    cookiesButton() {
        cy.get('button[aria-label="close and deny"]').if('visible').click();
    }
}


module.exports = new PricingPage();