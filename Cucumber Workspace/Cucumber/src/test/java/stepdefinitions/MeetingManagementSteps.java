package stepdefinitions;

import static org.junit.Assert.assertEquals;

import io.cucumber.java.en.And;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import pages.MeetingManagementPages;

public class MeetingManagementSteps {

	MeetingManagementPages meetingPages = new MeetingManagementPages();

	@And("user navigates to Schedule Meeting page")
	public void navigateToScheduleMeeting() {
		meetingPages.navigateToScheduleMeeting();
	}

	@When("user enters the meeting details")
	public void enterMeetingDetails() {
		meetingPages.enterMeetingDetails("Discuss design", "462374", "5", "06/09/2023", "04:00 PM", "06/09/2023",
				"05:00 PM");
	}

	@Then("the meeting is scheduled successfully")
	public void scheduleMeetingValidation() {
		assertEquals("Meeting scheduled successfully", meetingPages.scheduleMeetingValidation());
	}
}
