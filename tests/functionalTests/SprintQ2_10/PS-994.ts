/** NightWatch Browser */
import { NightwatchBrowser } from "nightwatch";
/** telco Page Object */
import {wordpresswebpage} from "../../pageObjects/wordpress_WEB_page";
/** Data */
import * as data from "../../appData/SprintQ2_10.json";


module.exports = {

    /**
     * Tickets Covered : PS-994	Update NRG Mega-Menu to Remove Deprecated Links
     */
    'PS-994	Update NRG Mega-Menu to Remove Deprecated Links': function (browser: NightwatchBrowser) {
        wordpresswebpage.validateElecAndGasLinksNotToBeVisible(browser, true);
        for(let i=0; i<data.PS993Data.URL.length; i++){
            wordpresswebpage.launchUrl(browser, data.PS993Data.URL[i]);
            wordpresswebpage.validateElecAndGasLinksNotToBeVisible(browser, undefined, i+1);
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
            .url('https://wwwuat.iselect.com.au/');
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