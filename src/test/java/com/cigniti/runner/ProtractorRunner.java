package com.cigniti.runner;

import org.testng.annotations.AfterSuite;
import com.cigniti.utils.ReportGeneration;
import io.cucumber.testng.AbstractTestNGCucumberTests;

public class ProtractorRunner extends AbstractTestNGCucumberTests {

	ReportGeneration generateReport = new ReportGeneration();

	@AfterSuite
	public void stopServer() {
		generateReport.generateSummaryReport();
	}
}