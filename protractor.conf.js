// Protractor configuration file, see link for more information
// https://github.com/angular/protractor/blob/master/lib/config.ts

exports.config = {

		
// Use below code to enable the browserstack integration and make sure to remove or comment capabilities and directConnect objects
/*
 * seleniumAddress: 'http://hub-cloud.browserstack.com/wd/hub', capabilities: {
 * 'browserstack.user': 'cignitidemo1', 'browserstack.key':
 * 'RDFoHtSeARq4rhJr9cNT', 'build': 'v0.1', 'project': 'Nirwana', browserName:
 * 'chrome', 'browserstack.local': false },
 */
	    	
		capabilities :{
			browserName: 'chrome'
		},
	allScriptsTimeout: 11000,
	specs: ['src/test/java/com/cigniti/features/'],
	directConnect: true,   // Make this true if you want to run the tests
							// locally and without manually starting selenium
							// server
	baseUrl: 'https://about.google/',
	framework: 'custom',
	frameworkPath: require.resolve('protractor-cucumber-framework'),
	cucumberOpts: {
		format: ['json:./cucumber-report/protractorresult.json'],
		require: ['src/test/java/com/cigniti/steps/*.steps.ts']
	},


	onPrepare() {
		browser.driver.manage().window().maximize();
		require('ts-node').register({
			project: require('path').join(__dirname, './tsconfig.json')
		});
	},
	
	onComplete(){
	console.log("------ on complete");
	
	}
};
