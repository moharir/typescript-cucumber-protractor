import { BeforeAll, Given, Then, When, After } from 'cucumber';
import { expect } from 'chai';

import { AppPage } from '../pages/app.po';
import { browser } from 'protractor';

let page: AppPage;

BeforeAll({ timeout: 100 * 2000 }, async () => {
    page = new AppPage();
});

Given(/^I am on the home page$/, async () =>  {
    	await page.navigateTo();
});

When(/^I click on the Our products tab$/, async () => {
    	await page.getOurProductsTab().click();
});

Then(/^I should see the title$/, async () => {
    	expect(await page.getTitleText()).to.equal("Meet your Google Assistant");
});

After(async function(step) {
    const screenShotFail = await browser.takeScreenshot();
    this.attach(screenShotFail, "image/png");
});

