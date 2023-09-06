package pages;

import org.openqa.selenium.WebElement;

public class ClientManagementPages {

	SeleniumHelper webDriver = new SeleniumHelper();
	
	public void navigateToCreateClient() {
		try {
			WebElement createClientLink = webDriver.getElementByXPath("//a[text()='Create Client']");
			webDriver.click(createClientLink);
			Thread.sleep(1000);
		} catch (Exception e) {
			System.out.println("Exception in navigateToCreateClient");
			e.printStackTrace();
		}
	}
	
	public void createClient(String email, String name, String password, String address) {
		try {
			WebElement emailTextBox = webDriver.getElementByXPath("//input[@name='emailId']");
			webDriver.enterText(emailTextBox, email);
			
			WebElement nameTextBox = webDriver.getElementByXPath("//input[@name='name']");
			webDriver.enterText(nameTextBox, name);
			
			WebElement passwordTextBox = webDriver.getElementByXPath("//input[@name='password']");
			webDriver.enterText(passwordTextBox, password);
			
			WebElement addressTextBox = webDriver.getElementByXPath("//input[@name='address']");
			webDriver.enterText(addressTextBox, address);
			
			WebElement loginButton = webDriver.getElementByXPath("//button[text()='Create Client']");
			webDriver.click(loginButton);
			Thread.sleep(1000);
		} catch (Exception e) {
			System.out.println("Exception in createClient");
			e.printStackTrace();
		}
	}
	
	public String createClientValidation() {
		try {
			String alertText = webDriver.getAlertText();
			webDriver.acceptAlert();
			return alertText;
		} catch (Exception e) {
			System.out.println("Exception in createClientValidation");
			e.printStackTrace();
			return "";
		}
	}
}
