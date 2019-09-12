Feature: Freecrm contact features
Scenario Outline: Contact page functionality check
	Given open browser and navigate to login page
	When i use valid "<username>" and "<password>"
	Then login to application successfully
	Then customer is in homepage of FreeCRM
	When Customer click contacts option
	Then customer navigate to contact page
	Then customer clicks on New button
	Then customer enters firstname and lastname
	Then customer clicks on save button
	Then verify contact is created successfully
	Then user close the browser
Examples:
|        username		 |password|
|practicedemo67@gmail.com|Demo@678|