package runner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features = "F:\\selenium\\cucumberdemo\\src\\main\\java\\features\\deals.feature",
					glue  = {"step"},
					plugin = {"pretty","html:test-output","junit:junit-output/cucumber.xml","json:json-output/output.json"},
					monochrome=true,
					strict=true,
					dryRun=false)
public class TestRunner {

}
