

class FaxPage {

    // Locators
    get faxPrice() {
        return cy.get('.sc-3ef5d51e-28');
    }
}


module.exports = new FaxPage();