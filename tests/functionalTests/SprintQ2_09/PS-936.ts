/** NightWatch Browser */
import { NightwatchBrowser } from "nightwatch";
/** telco Page Object */
import {energywebpage} from "../../pageObjects/energy_WEB_page";
/** Data */
import * as data from "../../appData/SprintQ2_09.json";


module.exports = {

    /**
     * Tickets Covered : PS-936	Energy - SEO - Redirect 5x Renewable Energy Pages as per L&C request
     */
    'PS-936	Energy - SEO - Redirect 5x Renewable Energy Pages as per L&C request': function (browser: NightwatchBrowser) {
        
        for(let i = 0; i < data.PS936Data.EnergyURLs.length; i++ ) {
            /** Energy URL's */
            browser.url(data.PS936Data.EnergyURLs[i]);
            browser.pause(2000);
            /** Validates the Updated URL*/
            energywebpage.validateUpdatedURL(browser, data.PS936Data.UpdatedURL, data.PS936Data.EnergyURLs[i], i+1);
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
        browser.globals.abortOnAssertionFailure = false
    },

    /**
     * Runs After Each Test Case
     * @param browser NightWatch Browser
     */
    afterEach: function (browser: NightwatchBrowser) {
        browser.end();
    },
};