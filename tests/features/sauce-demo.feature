Feature: Sauce Demo - Login

  Scenario: Successfully Login to Sauce Demo Page
    Given User is on Sauce Demo Page
    When User input valid saucedemo credentials:
      | Username  | standard_user     |
      | Password  | secret_sauce      |
    And User click Login button
    Then User redirected to Sauce Demo Home Page
