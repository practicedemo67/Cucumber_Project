$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("F:/selenium/cucumberdemo/src/main/java/features/deals.feature");
formatter.feature({
  "line": 1,
  "name": "Freecrm contact features",
  "description": "",
  "id": "freecrm-contact-features",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 2,
  "name": "Contact page functionality check",
  "description": "",
  "id": "freecrm-contact-features;contact-page-functionality-check",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 3,
  "name": "open browser and navigate to login page",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "i use valid \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "login to application successfully",
  "keyword": "Then "
});
formatter.step({
  "line": 6,
  "name": "customer is in homepage of FreeCRM",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "Customer clicks on deal option",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "customer navigate to deal page",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "customer clicks on New button",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "customer enters \"\u003cTitle\u003e\",\"\u003cdescription\u003e\" and \"\u003cprobability\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "customer clicks on save button",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "verify deal is created",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "user close the browser",
  "keyword": "Then "
});
formatter.examples({
  "line": 15,
  "name": "",
  "description": "",
  "id": "freecrm-contact-features;contact-page-functionality-check;",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "Title",
        "description",
        "probability"
      ],
      "line": 16,
      "id": "freecrm-contact-features;contact-page-functionality-check;;1"
    },
    {
      "cells": [
        "practicedemo67@gmail.com",
        "Demo@678",
        "project1",
        "new project1 crated",
        "20"
      ],
      "line": 17,
      "id": "freecrm-contact-features;contact-page-functionality-check;;2"
    },
    {
      "cells": [
        "practicedemo67@gmail.com",
        "Demo@678",
        "project2",
        "new project2 crated",
        "30"
      ],
      "line": 18,
      "id": "freecrm-contact-features;contact-page-functionality-check;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 17,
  "name": "Contact page functionality check",
  "description": "",
  "id": "freecrm-contact-features;contact-page-functionality-check;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 3,
  "name": "open browser and navigate to login page",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "i use valid \"practicedemo67@gmail.com\" and \"Demo@678\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "login to application successfully",
  "keyword": "Then "
});
formatter.step({
  "line": 6,
  "name": "customer is in homepage of FreeCRM",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "Customer clicks on deal option",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "customer navigate to deal page",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "customer clicks on New button",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "customer enters \"project1\",\"new project1 crated\" and \"20\"",
  "matchedColumns": [
    2,
    3,
    4
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "customer clicks on save button",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "verify deal is created",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "user close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "Login_Steps.open_browser_and_navigate_to_login_page()"
});
formatter.result({
  "duration": 41896019552,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "practicedemo67@gmail.com",
      "offset": 13
    },
    {
      "val": "Demo@678",
      "offset": 44
    }
  ],
  "location": "Login_Steps.i_use_valid_credential(String,String)"
});
formatter.result({
  "duration": 1004933826,
  "status": "passed"
});
formatter.match({
  "location": "Login_Steps.login_to_application_successfully()"
});
formatter.result({
  "duration": 1712494740,
  "status": "passed"
});
formatter.match({
  "location": "Login_Steps.customer_is_in_homepage_of_FreeCRM()"
});
formatter.result({
  "duration": 114973486,
  "status": "passed"
});
formatter.match({
  "location": "Login_Steps.customer_clicks_on_deal_option()"
});
formatter.result({
  "duration": 360670425,
  "status": "passed"
});
formatter.match({
  "location": "Login_Steps.customer_navigate_to_deal_page()"
});
formatter.result({
  "duration": 495994436,
  "status": "passed"
});
formatter.match({
  "location": "Login_Steps.customer_clicks_on_New_button()"
});
formatter.result({
  "duration": 1994690642,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "project1",
      "offset": 17
    },
    {
      "val": "new project1 crated",
      "offset": 28
    },
    {
      "val": "20",
      "offset": 54
    }
  ],
  "location": "Login_Steps.customer_enters_and(String,String,String)"
});
formatter.result({
  "duration": 1684459715,
  "status": "passed"
});
formatter.match({
  "location": "Login_Steps.customer_clicks_on_save_button()"
});
formatter.result({
  "duration": 190094191,
  "status": "passed"
});
formatter.match({
  "location": "Login_Steps.verify_deal_is_created()"
});
formatter.result({
  "duration": 1535315317,
  "status": "passed"
});
formatter.match({
  "location": "Login_Steps.user_close_the_browser()"
});
formatter.result({
  "duration": 9308755972,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "Contact page functionality check",
  "description": "",
  "id": "freecrm-contact-features;contact-page-functionality-check;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 3,
  "name": "open browser and navigate to login page",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "i use valid \"practicedemo67@gmail.com\" and \"Demo@678\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "login to application successfully",
  "keyword": "Then "
});
formatter.step({
  "line": 6,
  "name": "customer is in homepage of FreeCRM",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "Customer clicks on deal option",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "customer navigate to deal page",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "customer clicks on New button",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "customer enters \"project2\",\"new project2 crated\" and \"30\"",
  "matchedColumns": [
    2,
    3,
    4
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "customer clicks on save button",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "verify deal is created",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "user close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "Login_Steps.open_browser_and_navigate_to_login_page()"
});
formatter.result({
  "duration": 21016549932,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "practicedemo67@gmail.com",
      "offset": 13
    },
    {
      "val": "Demo@678",
      "offset": 44
    }
  ],
  "location": "Login_Steps.i_use_valid_credential(String,String)"
});
formatter.result({
  "duration": 992473681,
  "status": "passed"
});
formatter.match({
  "location": "Login_Steps.login_to_application_successfully()"
});
formatter.result({
  "duration": 3386667802,
  "status": "passed"
});
formatter.match({
  "location": "Login_Steps.customer_is_in_homepage_of_FreeCRM()"
});
formatter.result({
  "duration": 103114071,
  "status": "passed"
});
formatter.match({
  "location": "Login_Steps.customer_clicks_on_deal_option()"
});
formatter.result({
  "duration": 270811636,
  "status": "passed"
});
formatter.match({
  "location": "Login_Steps.customer_navigate_to_deal_page()"
});
formatter.result({
  "duration": 92878132,
  "status": "passed"
});
formatter.match({
  "location": "Login_Steps.customer_clicks_on_New_button()"
});
formatter.result({
  "duration": 990759038,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "project2",
      "offset": 17
    },
    {
      "val": "new project2 crated",
      "offset": 28
    },
    {
      "val": "30",
      "offset": 54
    }
  ],
  "location": "Login_Steps.customer_enters_and(String,String,String)"
});
formatter.result({
  "duration": 1327008473,
  "status": "passed"
});
formatter.match({
  "location": "Login_Steps.customer_clicks_on_save_button()"
});
formatter.result({
  "duration": 220453644,
  "status": "passed"
});
formatter.match({
  "location": "Login_Steps.verify_deal_is_created()"
});
formatter.result({
  "duration": 1103641745,
  "status": "passed"
});
formatter.match({
  "location": "Login_Steps.user_close_the_browser()"
});
formatter.result({
  "duration": 793386065,
  "status": "passed"
});
});