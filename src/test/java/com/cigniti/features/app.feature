Feature: Protractor: Access Google's products page and verify the header

  Scenario: Home Page
    Given I am on the home page
    When I click on the Our products tab
    Then I should see the title
