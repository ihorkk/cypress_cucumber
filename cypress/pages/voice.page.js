

class VoicePage {

    // Locators
    get dropDownMenu() {
        return cy.get('.sc-b9992a3b-2 .sc-ecffda1a-1');
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


module.exports = new VoicePage();