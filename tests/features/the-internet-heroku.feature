Feature: The Internet Heroku App

  Scenario: Successfully go to A/B Testing Page
    Given User is on Heroku Page
    When User click "AB Testing" Button
    Then User redirected to "AB Testing" Page

  Scenario: Successfully go to Add Remove Testing Page
    Given User is on Heroku Page
    When User click "Add Remove" Button
    Then User redirected to "Add Remove" Page
