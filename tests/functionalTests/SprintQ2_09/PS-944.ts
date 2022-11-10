/** NightWatch Browser */
import { NightwatchBrowser } from "nightwatch";
/** telco Page Object */
import {healthWebPage} from "../../pageObjects/health_WEB_page";


module.exports = {

    /**
     * Tickets Covered : PS-944 [Health - WP] Update Bupa's info on iSelect website
     */
    'PS-944 [Health - WP] Update Bupas info on iSelect website': function (browser: NightwatchBrowser) {
        healthWebPage.validateBUPAPartnersPage(browser);
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
            .url('https://wwwuat.iselect.com.au/health-insurance/');
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