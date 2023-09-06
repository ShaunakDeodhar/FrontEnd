package pages;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

public class SeleniumHelper {
	
	private static WebDriver driver;
	
	public void initiateBrowser() {
		System.setProperty("webdriver.chrome.driver", "/Users/dshaunak/Documents/Personal documents/SimpliLearn/FrontEnd/chromedriver");
		driver = new ChromeDriver();
	}
	
	public void navigateTo(String URL) {
		driver.get(URL);
	}
	
	public WebElement getElementByXPath(String xpath) {
		return driver.findElement(By.xpath(xpath));
	}
	
	public void click(WebElement button) {
		button.click();
	}
	
	public void enterText(WebElement textbox, String text) {
		textbox.sendKeys(text);
	}
	
	public String getAlertText() {
		return driver.switchTo().alert().getText();
	}
	
	public void acceptAlert() {
		driver.switchTo().alert().accept();
	}
	
	public void closeBrowser() {
		driver.quit();
	}
}
