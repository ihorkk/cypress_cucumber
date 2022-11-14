import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import 'cypress-if'
import PricingPage from '../pages/pricing.page';
import SipPage from '../pages/sip.page';
import VoicePage from '../pages/voice.page';
import MessagingPage from '../pages/messaging.page';
import FaxPage from '../pages/fax.page';
import WirelessPage from '../pages/wireless.page';
import VerifyApiPage from '../pages/verifyapi.page';
import IdServicesPage from '../pages/idservice.page';
import NetworkingPage from '../pages/networking.page';


Given("I am on pricing {string}", (page) => {
    PricingPage.openPricingPage(page);
    PricingPage.cookiesButton();
});

// Elastic SIP Pricing
When("I click on Elastic SIP {string}", () => {
    PricingPage.elasticsipPricing.click();
});
When("I click on Elastic SIP dropdown and I select {word}", (country) => {
    SipPage.selectCountry(country);
});
Then("I should receive SIP Trunk Pricing for Portugal", () => {
    cy.url().should('include', '/pt');
});

// Voice API Pricing
When("I click on Voice API {string}", () => {
    PricingPage.callcontrolPricing.click();
});
When("I click on Voice API dropdown and I select {word}", (country) => {
    VoicePage.selectCountry(country);
});
Then("I should receive Voice API Pricing for Portugal", () => {
    cy.url().should('include', '/pt');
});

// Messaging Pricing
When("I click on SMS API {string}", () => {
    PricingPage.messagingPricing.click();
});
When("I click on SMS API dropdown and I select {word}", (country) => {
    MessagingPage.selectCountry(country);
});
Then("I should receive SMS API Pricing for Portugal", () => {
    cy.url().should('include', '/pt');
});

// Fax Pricing
When("I click on Fax {string}", () => {
    PricingPage.faxPricing.click();
});
Then("I should receive Fax Pricing", () => {
    FaxPage.faxPrice.should('be.visible');
});

// Wireless Pricing
When("I click on Wireless {string}", () => {
    PricingPage.wirelessPricing.click();
});
When("I click on Wireless dropdown and I select {word}", (country) => {
    WirelessPage.selectCountry(country);
});
Then("I should receive Wireless Pricing for Portugal", () => {
    cy.url().should('include', '/pt');
});

// Verify API Pricing
When("I click on Verify API {string}", () => {
    PricingPage.wirelessPricing.click();
});
Then("I should receive Verify API Pricing", () => {
    VerifyApiPage.verifyApiPrice.should('be.visible');
});

// ID Services Pricing
When("I click on ID Services {string}", () => {
    PricingPage.idservicePricing.click();
});
Then("I should receive ID Services Pricing", () => {
    IdServicesPage.idservicesPricing.should('be.visible');
});

// Networking Pricing
When("I click on Networking {string}", () => {
    PricingPage.networkingPricing.click();
});
Then("I should receive Networking Pricing", () => {
    NetworkingPage.networkingPricing.should('be.visible');
});