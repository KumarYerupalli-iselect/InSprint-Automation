/** NightWatch Browser */
import { NightwatchBrowser } from "nightwatch";
/** Energy Page Object */
import {carPage} from "../../pageObjects/car_WEB_page";


module.exports = {

    /**
     * Tickets Covered : PS-1098 [Car - WordPress] Add Huddle's logos and other details to iSelect's website
     */
    'PS-1098 [Car - WordPress] Add Huddles logos and other details to iSelects website': function (browser: NightwatchBrowser) {    
        carPage.validateHuddleLogoinHomeAndPartnersPage(browser);
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