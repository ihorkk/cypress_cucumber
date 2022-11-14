Feature: Log in form

    Background:
        Given I am on "https://portal.telnyx.com/#/login/sign-in"

    Scenario: Log in with invalid email and password
        When I enter invalid <email> and <password>
        Then I should see "<errorMessage>"
        Examples:
            | email               | password   | errorMessage                                     |
            | luxequality@abc.com | Random123! | That email and password combination is not valid |

    Scenario: Log in with entering invalid email format
        When I enter invalid format <email> and <password>
        Then I should see email format error "<invalidEmail>"
        Examples:
            | email              | password   | invalidEmail                       |
            | luxequalitylux.com | Random123! | Please enter a valid email address |

    Scenario: Log in with valid email and invalid password
        When I enter valid <email> and invalid <password>
        Then I should see error "<errorMessage>"
        Examples:
            | email                      | password   | errorMessage                                     |
            | leelend.brylon@hotmail.com | Random123! | That email and password combination is not valid |

    Scenario: Single Sign-On with invalid email
        When I click on Single Sign-On and enter invalid <email>
        Then I should see an error "<errorMessage>"
        Examples:
            | email               | errorMessage                                     |
            | luxequality@abc.com | The requested resource or URL could not be found |
    Scenario: Resend a verification email
        When I click on Resend and enter <email>
        Then I should see a "<successMessage>"
        Examples:
            | email                      | successMessage                               |
            | leelend.brylon@hotmail.com | If your email address exists in our database |
    Scenario: Login with empty email and password fields

        When I click on "Log in" button
        Then I should see required email and required password errors

    Scenario: Forgot password functionality
        When I click on Forgot password and enter <email>
        Then I should see the message "<successMessage>"
        Examples:
            | email                      | successMessage                               |
            | leelend.brylon@hotmail.com | We have accepted your password reset request |