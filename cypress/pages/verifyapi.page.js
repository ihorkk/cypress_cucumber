

class VerifyApiPage {

    // Locators
    get verifyApiPrice() {
        return cy.get('.sc-3ef5d51e-2');
    }
}


module.exports = new VerifyApiPage();