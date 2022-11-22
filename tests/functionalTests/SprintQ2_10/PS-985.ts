/** NightWatch Browser */
import { NightwatchBrowser } from "nightwatch";
/** telco Page Object */
import {wordpresswebpage} from "../../pageObjects/wordpress_WEB_page";


module.exports = {

    /**
     * Tickets Covered : PS-985	[WP - iSU] Q1 ETM 2023 - Web Audit - Compliance Updates
     */
    'PS-985	[WP - iSU] Q1 ETM 2023 - Web Audit - Compliance Updates': function (browser: NightwatchBrowser) {
        wordpresswebpage.validateTextLogoAndBannerRemoval(browser);
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