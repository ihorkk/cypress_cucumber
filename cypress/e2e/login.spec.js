import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import LoginPage from '../pages/login.page'


Given("I am on {string}", (page) => {
    LoginPage.openLoginPage(page);
});

// Log in with invalid email and password
When("I enter invalid {word} and {word}", (email, password) => {
    LoginPage.login(email, password);
});

Then("I should see {string}", (errorMessage) => {
    LoginPage.errorMessage.should('be.visible').and('contains.text', errorMessage)
});

// Log in with entering invalid email format
When("I enter invalid format {word} and {word}", (email, password) => {
    LoginPage.login(email, password);
});
Then("I should see email format error {string}", (invalidEmail) => {
    LoginPage.errorFormatEmail.should('be.visible').and('contains.text', invalidEmail)
});

// Log in with valid email and invalid password
When("I enter valid {word} and invalid {word}", (email, password) => {
    LoginPage.login(email, password);
});
Then("I should see error {string}", (errorMessage) => {
    LoginPage.errorMessage.should('be.visible').and('contains.text', errorMessage);
});

// Single Sign-On with invalid email
When("I click on Single Sign-On and enter invalid {word}", (email) => {
    LoginPage.singleSignOnLogin(email);
});
Then("I should see an error {string}", (errorMessage) => {
    LoginPage.errorMessage.should('be.visible').and('contains.text', errorMessage);
});

// Resend a verification email
When("I click on Resend and enter {word}", (email) => {
    LoginPage.resendVerificationEmail(email);
});
Then("I should see a {string}", (successMessage) => {
    LoginPage.successMessage.should('be.visible').and('contains.text', successMessage);
});

// Login with empty email and password fields
When("I click on {string} button", () => {
    LoginPage.loginButton.click();
});
Then("I should see required email and required password errors", () => {
    LoginPage.requiredError.should('have.length', 2);
});

// Forgot password functionality
When("I click on Forgot password and enter {word}", (email) => {
    LoginPage.forgotPassword(email);
});
Then("I should see the message {string}", (successMessage) => {
    LoginPage.successMessage.should('be.visible').and('contains.text', successMessage);
});


