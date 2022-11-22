/** NightWatch Browser */
import { NightwatchBrowser } from "nightwatch";
/** telco Page Object */
import {wordpresswebpage} from "../../pageObjects/wordpress_WEB_page";


module.exports = {

    /**
     * Tickets Covered : PS-1000 [Travel - WP] Add the TIS logo to the Travel vertical home page (Compliance)
     */
    'PS-1000 [Travel - WP] Add the TIS logo to the Travel vertical home page': function (browser: NightwatchBrowser) {
        wordpresswebpage.validateTISLogAdded(browser);
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