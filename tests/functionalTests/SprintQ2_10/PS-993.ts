/** NightWatch Browser */
import { NightwatchBrowser } from "nightwatch";
/** telco Page Object */
import {wordpresswebpage} from "../../pageObjects/wordpress_WEB_page";
/** Data */
import * as data from "../../appData/SprintQ2_10.json";


module.exports = {

    /**
     * Tickets Covered : PS-993	[WP - Audit] Removing pages and page links for Income Protection
     */
    'PS-993	[WP - Audit] Removing pages and page links for Income Protection': function (browser: NightwatchBrowser) {
        wordpresswebpage.validateIncomeProtectionLinksNotToBeVisible(browser, true);
        for(let i=0; i<data.PS993Data.URL.length; i++){
            wordpresswebpage.launchUrl(browser, data.PS993Data.URL[i]);
            wordpresswebpage.validateIncomeProtectionLinksNotToBeVisible(browser, undefined, i+1);
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