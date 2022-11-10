/** NightWatch Browser */
import { NightwatchBrowser } from "nightwatch";
/** telco Page Object */
import {energywebpage} from "../../pageObjects/energy_WEB_page";


module.exports = {

    /**
     * Tickets Covered : PS-906	[iSelect - WordPress] Add Simply Energy to iSelect's website - 12th Oct 2022
     */
    'PS-906	[iSelect - WordPress] Add Simply Energy to iSelects website - 12th Oct 2022': function (browser: NightwatchBrowser) {
        energywebpage.validateSimplyEnergyLogo(browser);
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
            .url('https://wwwuat.iselect.com.au/energy/');
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