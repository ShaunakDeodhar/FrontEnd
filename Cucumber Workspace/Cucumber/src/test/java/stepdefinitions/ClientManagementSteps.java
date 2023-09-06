package stepdefinitions;

import static org.junit.Assert.assertEquals;

import io.cucumber.java.en.And;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import pages.ClientManagementPages;

public class ClientManagementSteps {
	
	ClientManagementPages clientPages = new ClientManagementPages();
	
    @And("user navigates to Create Client page")
    public void openCreateClient() {
    	clientPages.navigateToCreateClient();
    }
    
    @When("user enters the client details")
    public void enterClientDetails() {
    	clientPages.createClient("abc@xyz.com", "ABC", "12345", "11, lmn, JKL");
	}
    
    @Then("the client is created successfully")
    public void createClientValidation() {
    	assertEquals("Client added successfully", clientPages.createClientValidation());
    }
    
}
