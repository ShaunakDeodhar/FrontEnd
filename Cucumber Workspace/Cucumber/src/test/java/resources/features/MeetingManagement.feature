#Author: shaunakdeodhar996@gmail.com

Feature: Meeting management scenarios

  Scenario: Schedule new meeting
    Given user is logged into the application
    And user navigates to Schedule Meeting page
    When user enters the meeting details
    Then the meeting is scheduled successfully
    And user logs out of the application