import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('https://about.google/');
  }

  getTitleText() {
    return element(by.xpath('//h1[contains(text(),"Meet your Google Assistant")]')).getText();
  }

  getOurProductsTab(){
	  return element(by.xpath('//a[contains(text(),"Our products")]'));
  }
}
