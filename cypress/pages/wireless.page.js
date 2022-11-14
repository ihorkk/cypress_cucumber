

class WirelessPage {

    // Locators
    get dropDownMenu() {
        return cy.get('button[aria-haspopup="listbox"]');
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


module.exports = new WirelessPage();