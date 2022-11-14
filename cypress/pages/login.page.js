

class LoginPage {

    // Locators
    get emailInput() {
        return cy.get('div[name="login"] input[name="email"]');
    }
    get passwordInput() {
        return cy.get('input[name="password"]');
    }
    get loginButton() {
        return cy.get('button[class*="LoginForm"]');
    }
    get errorFormatEmail() {
        return cy.get('div[class*="TextField__ErrorMessage"]');
    }
    get singleSignOn() {
        return cy.get('button[name="sso"]');
    }
    get companyEmail() {
        return cy.get('div[name="sso"] input[name="email"]');
    }
    get errorMessage() {
        return cy.get('div[type="error"]');
    }
    get forgotPasswordButton() {
        return cy.get('a[href="/#/login/password-reset"]');
    }
    get forgotEmailInput() {
        return cy.get('input[name=email]');
    }
    get forgotSubmitButton() {
        return cy.get('button[type="submit"]');
    }
    get singleSignOnContinue() {
        return cy.get('button[class*="LoginButton-jWluot"]');
    }
    get resendButton() {
        return cy.get('a[href="/#/login/resend-email"]');
    }
    get verificationEmailInput() {
        return cy.get('input[name="email"]');
    }
    get successMessage() {
        return cy.get('div[type*=success]');
    }
    get resendSubmitButton() {
        return cy.get('button[type="submit"]');
    }
    get requiredError() {
        return cy.get('div[class*=TextField__ErrorMessage-sc-r5o2cn-5]');
    }

    // Methods
    openLoginPage(page) {
        cy.visit(page);
    }
    login(email, password) {
        this.emailInput.type(email);
        this.passwordInput.type(password);
        this.loginButton.click();
    }
    singleSignOnLogin(email) {
        this.singleSignOn.click();
        this.companyEmail.type(email);
        this.singleSignOnContinue.click();
    }
    resendVerificationEmail(email) {
        this.resendButton.click();
        this.verificationEmailInput.type(email);
        this.resendSubmitButton.click();
    }
    forgotPassword(email) {
        this.forgotPasswordButton.click();
        this.forgotEmailInput.type(email);
        this.forgotSubmitButton.click();
    }
}


module.exports = new LoginPage();
