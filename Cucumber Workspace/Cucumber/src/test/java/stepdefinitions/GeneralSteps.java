package stepdefinitions;

import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import pages.GeneralPages;

public class GeneralSteps {

	GeneralPages generalPage = new GeneralPages();
	
	@Given("user is logged into the application")
	public void login() {
		generalPage.login();
	}
	
	@And("user logs out of the application")
	public void logout() {
		generalPage.logout();
	}
}
