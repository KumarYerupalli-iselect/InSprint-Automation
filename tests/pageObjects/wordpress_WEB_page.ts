/** Night Watch Browser */
import { NightwatchBrowser} from "nightwatch";
/**Utils Object */
import {helperUtils} from "../utilities/helperUtils";

export const wordpresswebpage = {

    elements : {

        insuranceLink : "//div[@id='globalnav']//span[text()='Insurance']",
        utlitiesLink : '//div[@id="globalnav"]//span[text()="Utilities"]',
        financeLink : '//div[@id="globalnav"]//span[text()="Finance"]',

        insuranceOthVertLink : "//nav[@id='globalnav']//span[text()='Insurance']",
        utlitiesOthVertLink : '//nav[@id="globalnav"]//span[text()="Utilities"]',
        financeOthVertLink : '//nav[@id="globalnav"]//span[text()="Finance"]',

        healthLink : '//div[@id="globalnav"]//a[text()="Health"]',
        carLink : '//div[@id="globalnav"]//a[text()="Car"]',
        travelLink : '//div[@id="globalnav"]//a[text()="Travel"]',
        elecAndGasLink : '//div[@id="globalnav"]//a[text()="Electricity & Gas"]',
        internetLink : '//div[@id="globalnav"]//a[text()="Internet"]',
        incomeprotectionLink : '//div[@id="globalnav"]//a[text()="Income Protection"]',

        healthUpdatedLink : '//a[text()="Finding suitable Health Insurance"]',
        carUpdatedLink : '//a[text()="Finding appropriate car insurance"]',
        travelUpdatedLink : '//a[text()="Finding appropriate travel insurance"]',
        elecUpdatedLink : '//a[text()="Find a suitable energy plan"]',
        interneUpdatedLink1 : '//a[text()="Choosing a suitable broadband plan"]',
        interneUpdatedLink2 : '//a[text()="Choosing a suitable NBN plan"]',
        incomeProtectionUpdatedLink : '//a[text()="Income Protection Cover"]',

        healthVerticalLink : '//a[@href="https://wwwuat.iselect.com.au/health-insurance/"]',
        carVerticalLink : '//a[@href="https://wwwuat.iselect.com.au/car-insurance/"]',
        travelVerticalLink : '//a[@href="https://wwwuat.iselect.com.au/travel-insurance/"]',
        elecAndGasVerticalLink : '//a[@href="https://wwwuat.iselect.com.au/energy/"]',
        internetVerticalLink : '//a[@href="https://wwwuat.iselect.com.au/internet/"]',
        incomeProtectionVerticalLink : '//a[@href="https://wwwuat.iselect.com.au/life/income-protection-insurance/"]'
    },

    ValidateTextChangeInVerticalsWordPress(browser:NightwatchBrowser, wordPress ?: boolean) {
        if(wordPress == true) {
            helperUtils.moveToElement(browser, this.elements.utlitiesLink, 'Moved the cursor to Utilities link');
            helperUtils.moveToElement(browser, this.elements.elecAndGasLink, 'Moved the cursor to Electicity and Gas link');
            browser.getText(this.elements.elecUpdatedLink, (updatedText => {
            helperUtils.assertElementStatus(browser, 'visible', this.elements.elecUpdatedLink, 'Validation Successful... Text is updated as : ' + updatedText.value, 'useXpath');
            }));
            helperUtils.moveToElement(browser, this.elements.internetLink, 'Moved the cursor to Internet link');
            browser.getText(this.elements.interneUpdatedLink1, (updatedText => {
                helperUtils.assertElementStatus(browser, 'visible', this.elements.interneUpdatedLink1, 'Validation Successful... Text is updated as : ' + updatedText.value, 'useXpath');
            }));
            browser.getText(this.elements.interneUpdatedLink2, (updatedText => {
                helperUtils.assertElementStatus(browser, 'visible', this.elements.interneUpdatedLink2, 'Validation Successful... Text is updated as : ' + updatedText.value, 'useXpath');
            }));

            helperUtils.moveToElement(browser, this.elements.insuranceLink, 'Moved the cursor to Insurance link');
            helperUtils.moveToElement(browser, this.elements.healthLink, 'Moved the cursor to Health link');
            browser.getText(this.elements.healthUpdatedLink, (updatedText => {
                helperUtils.assertElementStatus(browser, 'visible', this.elements.healthUpdatedLink, 'Validation Successful... Text is updated as : ' + updatedText.value, 'useXpath');
            }));
            helperUtils.moveToElement(browser, this.elements.carLink, 'Moved the cursor to Car link');
            browser.getText(this.elements.carUpdatedLink, (updatedText => {
                helperUtils.assertElementStatus(browser, 'visible', this.elements.carUpdatedLink, 'Validation Successful... Text is updated as : ' + updatedText.value, 'useXpath');
            }));
            helperUtils.moveToElement(browser, this.elements.travelLink, 'Moved the cursor to Travel link');
            browser.getText(this.elements.travelUpdatedLink, (updatedText => {
                helperUtils.assertElementStatus(browser, 'visible', this.elements.travelUpdatedLink, 'Validation Successful... Text is updated as : ' + updatedText.value, 'useXpath');
            }));

            helperUtils.moveToElement(browser, this.elements.financeLink, 'Moved the cursor to Finance link');
            helperUtils.moveToElement(browser, this.elements.incomeprotectionLink, 'Moved the cursor to Income Protection link');
            browser.getText(this.elements.incomeProtectionUpdatedLink, (updatedText => {
                helperUtils.assertElementStatus(browser, 'visible', this.elements.incomeProtectionUpdatedLink, 'Validation Successful... Text is updated as : ' + updatedText.value, 'useXpath');
            }));

        } else {

            helperUtils.moveToElement(browser, this.elements.utlitiesOthVertLink, 'Moved the cursor to Utilities link');
            helperUtils.moveToElement(browser, this.elements.elecAndGasVerticalLink, 'Moved the cursor to Electicity and Gas link');
            browser.pause(2000);
            browser.getText(this.elements.elecUpdatedLink, (updatedText => {
                helperUtils.assertElementStatus(browser, 'visible', this.elements.elecUpdatedLink, 'Validation Successful... Text is updated as : ' + updatedText.value, 'useXpath');
            }));
            helperUtils.moveToElement(browser, this.elements.internetVerticalLink, 'Moved the cursor to Internet link');
            browser.pause(2000);
            browser.getText(this.elements.interneUpdatedLink1, (updatedText => {
                helperUtils.assertElementStatus(browser, 'visible', this.elements.interneUpdatedLink1, 'Validation Successful... Text is updated as : ' + updatedText.value, 'useXpath');
            }));
            browser.getText(this.elements.interneUpdatedLink2, (updatedText => {
                helperUtils.assertElementStatus(browser, 'visible', this.elements.interneUpdatedLink2, 'Validation Successful... Text is updated as : ' + updatedText.value, 'useXpath');
            }));

            helperUtils.moveToElement(browser, this.elements.insuranceOthVertLink, 'Moved the cursor to Insurance link');
            helperUtils.moveToElement(browser, this.elements.healthVerticalLink, 'Moved the cursor to Health link');
            browser.pause(2000);
            browser.getText(this.elements.healthUpdatedLink, (updatedText => {
                helperUtils.assertElementStatus(browser, 'visible', this.elements.healthUpdatedLink, 'Validation Successful... Text is updated as : ' + updatedText.value, 'useXpath');
            }));
            helperUtils.moveToElement(browser, this.elements.carVerticalLink, 'Moved the cursor to Car link');
            browser.pause(2000);
            browser.getText(this.elements.carUpdatedLink, (updatedText => {
                helperUtils.assertElementStatus(browser, 'visible', this.elements.carUpdatedLink, 'Validation Successful... Text is updated as : ' + updatedText.value, 'useXpath');
            }));
            helperUtils.moveToElement(browser, this.elements.travelVerticalLink, 'Moved the cursor to Travel link');
            browser.pause(2000);
            browser.getText(this.elements.travelUpdatedLink, (updatedText => {
                helperUtils.assertElementStatus(browser, 'visible', this.elements.travelUpdatedLink, 'Validation Successful... Text is updated as : ' + updatedText.value, 'useXpath');
            }));

            helperUtils.moveToElement(browser, this.elements.financeOthVertLink, 'Moved the cursor to Finance link');
            helperUtils.moveToElement(browser, this.elements.incomeProtectionVerticalLink, 'Moved the cursor to Income Protection link');
            browser.pause(2000);
            browser.getText(this.elements.incomeProtectionUpdatedLink, (updatedText => {
                helperUtils.assertElementStatus(browser, 'visible', this.elements.incomeProtectionUpdatedLink, 'Validation Successful... Text is updated as : ' + updatedText.value, 'useXpath');
            }));
        }
        
     },

     launchUrl(browser:NightwatchBrowser, url:string) {
        browser.url(url);
        browser.assert.urlEquals(url, 'Launched URL : '+url);
     }

    
}