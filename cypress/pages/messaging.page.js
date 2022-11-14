

class MessagingPage {

    // Locators
    get dropDownMenu() {
        return cy.get('.sc-b9992a3b-2 .sc-3ccaa17d-0');
    }
    get searchInput() {
        return cy.get('input[type="search"]');
    }

    // Methods
    selectCountry(country) {
        this.dropDownMenu.click();
        this.searchInput.type(country).type('{enter}');
    }
}


module.exports = new MessagingPage();