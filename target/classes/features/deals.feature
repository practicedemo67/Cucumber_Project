Feature: Freecrm contact features
Scenario Outline: Contact page functionality check
	Given open browser and navigate to login page
	When i use valid "<username>" and "<password>"
	Then login to application successfully
	Then customer is in homepage of FreeCRM
	When Customer clicks on deal option
	Then customer navigate to deal page
	Then customer clicks on New button
	Then customer enters "<Title>","<description>" and "<probability>"
	Then customer clicks on save button
	Then verify deal is created
	
	Then user close the browser
Examples:
|        username		 |password|    Title	|	description			|probability|
|practicedemo67@gmail.com|Demo@678|project1		|	new project1 crated	|20			|
|practicedemo67@gmail.com|Demo@678|project2		|	new project2 crated	|30			|