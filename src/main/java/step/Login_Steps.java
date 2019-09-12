package step;

import java.util.List;
import java.util.concurrent.TimeUnit;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.DataTable;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;


public class Login_Steps {
	static WebDriver driver;
	static JavascriptExecutor j;
@Given("open browser and navigate to login page")
public void open_browser_and_navigate_to_login_page() {
    System.setProperty("webdriver.chrome.driver","F:\\selenium\\QET_CoE_SeleniumL1\\resources\\driverfiles\\chromedriver.exe");
    driver=new ChromeDriver();
    driver.manage().window().maximize();
    driver.manage().deleteAllCookies();
    driver.get("https://freecrm.com/");
    driver.manage().timeouts().implicitlyWait(20,TimeUnit.SECONDS);
    j=(JavascriptExecutor)driver;
    WebElement loginButton=driver.findElement(By.xpath("//span[text()='Log In']"));
    j.executeScript("arguments[0].click();",loginButton);
    driver.manage().timeouts().implicitlyWait(20,TimeUnit.SECONDS);
}

@When("i use valid \"(.*)\" and \"(.*)\"")
public void i_use_valid_credential(String username,String password) {
	driver.findElement(By.xpath("//input[@name='email']")).sendKeys(username);
	driver.findElement(By.xpath("//input[@name='password']")).sendKeys(password);
	driver.findElement(By.xpath("//div[text()='Login']")).click();
	driver.manage().timeouts().implicitlyWait(20,TimeUnit.SECONDS);
    System.out.println("entered credentials and pressed login button");
}
/*@When("i use valid username and password")
public void i_use_valid_credential(DataTable d) {
	List<List<String>> data=d.raw();
	driver.findElement(By.xpath("//input[@name='email']")).sendKeys(data.get(0).get(0));
	driver.findElement(By.xpath("//input[@name='password']")).sendKeys(data.get(0).get(1));
	driver.findElement(By.xpath("//div[text()='Login']")).click();
	driver.manage().timeouts().implicitlyWait(20,TimeUnit.SECONDS);
    System.out.println("entered credentials and pressed login button");
}*/

@Then("^login to application successfully$")
public void login_to_application_successfully() {
	String actual=driver.findElement(By.xpath("//span[text()='practice demo']")).getText();
	Assert.assertEquals("practice demo",actual);
	System.out.println("login is successful");
	driver.manage().timeouts().implicitlyWait(20,TimeUnit.SECONDS);
}
//contacts
@Then("^customer is in homepage of FreeCRM$")
public void customer_is_in_homepage_of_FreeCRM(){
	Assert.assertTrue(driver.findElement(By.xpath("//div[text()='Deals Summary']")).isDisplayed());
	System.out.println("customer is on homepage");
}

@When("^Customer click contacts option$")
public void customer_click_contacts_option()  {
    WebElement contacts=driver.findElement(By.xpath("//span[text()='Contacts']"));
    j.executeScript("arguments[0].click();",contacts);  
    driver.manage().timeouts().implicitlyWait(20,TimeUnit.SECONDS);
}

@Then("^customer navigate to contact page$")
public void customer_navigate_to_contact_page(){
	Assert.assertTrue(driver.findElement(By.xpath("//div[text()='Contacts']")).isDisplayed());
	System.out.println("customer is in contact page");
}

@Then("^customer clicks on New button$")
public void customer_clicks_on_New_button()  {
   driver.findElement(By.xpath("//button[text()='New']")).click();
   driver.manage().timeouts().implicitlyWait(20,TimeUnit.SECONDS);
}

@Then("^customer enters firstname and lastname$")
public void customer_enters_firstname_and_lastname() {
	driver.findElement(By.xpath("//input[@name='first_name']")).sendKeys("kunal");
	driver.findElement(By.xpath("//input[@name='last_name']")).sendKeys("joshi");
	driver.findElement(By.xpath("//button[text()='Save']")).click();
	driver.manage().timeouts().implicitlyWait(20,TimeUnit.SECONDS);
}
@Then("^customer clicks on save button$")
public void customer_clicks_on_save_button() {
	driver.findElement(By.xpath("//button[text()='Save']")).click();
	driver.manage().timeouts().implicitlyWait(20,TimeUnit.SECONDS);
}

@Then("^verify contact is created successfully$")
public void verify_contact_is_created_successfully() {
 Assert.assertTrue(driver.findElement(By.xpath("//div[text()='kunal joshi']")).isEnabled());
 System.out.println("new contacts created");
}
//deal creation
@When("^Customer clicks on deal option$")
public void customer_clicks_on_deal_option(){
	WebElement deal=driver.findElement(By.xpath("//span[text()='Deals']"));
	j.executeScript("arguments[0].click();",deal);  
	driver.manage().timeouts().implicitlyWait(20,TimeUnit.SECONDS);
}

@Then("^customer navigate to deal page$")
public void customer_navigate_to_deal_page(){
	Assert.assertTrue(driver.findElement(By.xpath("//div[text()='Deals']")).isDisplayed());
	System.out.println("customer is in deals page");
}

@Then("^customer enters \"([^\"]*)\",\"([^\"]*)\" and \"([^\"]*)\"$")
public void customer_enters_and(String title, String description, String probability) {
	driver.findElement(By.xpath("//input[@name='title']")).sendKeys(title);
	driver.findElement(By.xpath("//textarea[@name='description']")).sendKeys(description);
	driver.findElement(By.xpath("//input[@name='probability']")).sendKeys(probability);
	driver.manage().timeouts().implicitlyWait(20,TimeUnit.SECONDS);   
}

@Then("^verify deal is created$")
public void verify_deal_is_created(){
	Assert.assertTrue(driver.findElement(By.xpath("//i[@class='large money red icon']")).isEnabled());
	 System.out.println("new deal is created");
}







//closing the browser
@Then("^user close the browser$")
public void user_close_the_browser() {
	driver.manage().timeouts().implicitlyWait(20,TimeUnit.SECONDS);
	driver.quit();
}

}
