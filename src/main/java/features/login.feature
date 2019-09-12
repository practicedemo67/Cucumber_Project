Feature: Freecrm features
Scenario Outline: login page check with valid credentials
	Given open browser and navigate to login page
	When i use valid "<username>" and "<password>"
	Then login to application successfully
	Then user close the browser
Examples:
|        username		 |password|
|practicedemo67@gmail.com|Demo@678|
|test					 | demo12 |