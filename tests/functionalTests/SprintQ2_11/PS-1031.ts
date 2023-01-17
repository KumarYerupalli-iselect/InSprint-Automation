/** NightWatch Browser */
import { NightwatchBrowser } from "nightwatch";
/** telco Page Object */
import {energywebpage} from "../../pageObjects/energy_WEB_page";
/** Data */
import * as data from "../../appData/SprintQ2_11.json";


module.exports = {

    /**
     * Tickets Covered : PS-1031	[Energy-Java] State based 'No plans available' pop up
     */
    'PS-1031 [Energy-Java] State based No plans available pop up': function (browser: NightwatchBrowser) {
            energywebpage.clickOnElecAndGasIcon(browser);

            for(let i = 0; i<data.PS1031Data.PostCode.length; i++) {
                if(i<5) {
                    energywebpage.enterAddress(browser, data.PS1031Data.PostCode[i]);
                    energywebpage.clickOnAddressOption(browser, data.PS1031Data.Address[i]);
                    energywebpage.validateNeedsPageLoadedOrNot(browser);
                    browser.back();
                    browser.click('//span[text()="X"]');
                } else {
                    energywebpage.enterAddress(browser, data.PS1031Data.PostCode[i]);
                    energywebpage.clickOnAddressOption(browser, data.PS1031Data.Address[i]);
                    energywebpage.validateErrorPage(browser);
                    browser.back();
                    browser.click('//span[text()="X"]');
                }
                
            }
    },

    /**
     * Runs Before Each Test Case
     * @param browser NightWatch Browser
     */
     beforeEach: function (browser: NightwatchBrowser) {
        browser
            .resizeWindow(1400,900)
            .maximizeWindow()
            .timeoutsImplicitWait(20000)
            .url('https://www.iselect.com.au/');
        browser.globals.abortOnAssertionFailure = true
    },

    /**
     * Runs After Each Test Case
     * @param browser NightWatch Browser
     */
    afterEach: function (browser: NightwatchBrowser) {
        browser.end();
    },
};