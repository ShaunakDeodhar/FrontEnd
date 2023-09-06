package pages;

import org.openqa.selenium.WebElement;

public class MeetingManagementPages {

	SeleniumHelper webDriver = new SeleniumHelper();

	public void navigateToScheduleMeeting() {
		try {
			WebElement scheduleMeetingLink = webDriver.getElementByXPath("//a[text()='Schedule Meeting']");
			webDriver.click(scheduleMeetingLink);
			Thread.sleep(1000);
		} catch (Exception e) {
			System.out.println("Exception in navigateToScheduleMeeting");
			e.printStackTrace();
		}
	}

	public void enterMeetingDetails(String topic, String id, String numberOfPeople, String startDate, String startTime,
			String endDate, String endTime) {
		try {
			WebElement topicTextBox = webDriver.getElementByXPath("//input[@name='meetingTopic']");
			webDriver.enterText(topicTextBox, topic);

			WebElement idTextBox = webDriver.getElementByXPath("//input[@name='meetingId']");
			webDriver.enterText(idTextBox, id);

			WebElement numberOfPeopleTextBox = webDriver.getElementByXPath("//input[@name='numberOfPeople']");
			webDriver.enterText(numberOfPeopleTextBox, numberOfPeople);

			WebElement startDateTextBox = webDriver.getElementByXPath("//input[@name='startDate']");
			webDriver.enterText(startDateTextBox, startDate);
			
			WebElement startTimeTextBox = webDriver.getElementByXPath("//input[@name='startTime']");
			webDriver.enterText(startTimeTextBox, startTime);
			
			WebElement endDateTextBox = webDriver.getElementByXPath("//input[@name='endDate']");
			webDriver.enterText(endDateTextBox, endDate);
			
			WebElement endTimeTextBox = webDriver.getElementByXPath("//input[@name='endTime']");
			webDriver.enterText(endTimeTextBox, endTime);

			WebElement loginButton = webDriver.getElementByXPath("//button[text()='Schedule Meeting']");
			webDriver.click(loginButton);
			Thread.sleep(1000);
		} catch (Exception e) {
			System.out.println("Exception in enterMeetingDetails");
			e.printStackTrace();
		}
	}

	public String scheduleMeetingValidation() {
		try {
			String alertText = webDriver.getAlertText();
			webDriver.acceptAlert();
			return alertText;
		} catch (Exception e) {
			System.out.println("Exception in scheduleMeetingValidation");
			e.printStackTrace();
			return "";
		}
	}
}
