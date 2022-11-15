

class SipPage {

    // Locators
    get dropDownMenu() {
        return cy.get('span[class*=sc-3ccaa17d-0]');
    }
    get searchInput() {
        return cy.get('.sc-24b6e351-0');
    }

    // Methods
    selectCountry(country) {
        this.dropDownMenu.click();
        this.searchInput.type(country).type('{enter}');
    }
}


module.exports = new SipPage();