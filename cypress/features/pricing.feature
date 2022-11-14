Feature: Pricing

    Background:
        Given I am on pricing "https://telnyx.com/pricing"

    Scenario: Elastic SIP Pricing
        When I click on Elastic SIP "See Pricing"
        When I click on Elastic SIP dropdown and I select <country>
        Then I should receive SIP Trunk Pricing for Portugal
        Examples:
            | country  |
            | Portugal |

    Scenario: Voice API Pricing
        When I click on Voice API "See Pricing"
        When I click on Voice API dropdown and I select <country>
        Then I should receive Voice API Pricing for Portugal
        Examples:
            | country  |
            | Portugal |

    Scenario: Messaging Pricing
        When I click on SMS API "See Pricing"
        When I click on SMS API dropdown and I select <country>
        Then I should receive SMS API Pricing for Portugal
        Examples:
            | country  |
            | Portugal |

    Scenario: Fax Pricing
        When I click on Fax "See Pricing"
        Then I should receive Fax Pricing

    Scenario: Wireless Pricing
        When I click on Wireless "See Pricing"
        When I click on Wireless dropdown and I select <country>
        Then I should receive Wireless Pricing for Portugal
        Examples:
            | country  |
            | Portugal |

    Scenario: Verify API Pricing
        When I click on Verify API "See Pricing"
        Then I should receive Verify API Pricing

    Scenario: ID Services Pricing
        When I click on ID Services "See Pricing"
        Then I should receive ID Services Pricing

    Scenario: Networking Pricing
        When I click on Networking "See Pricing"
        Then I should receive Networking Pricing