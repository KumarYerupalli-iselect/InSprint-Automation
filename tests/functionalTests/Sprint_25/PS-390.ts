/** Data Object */
import * as data from '../../appData/Sprint25Data.json';
/** NightWatch Browser */
import { NightwatchBrowser } from "nightwatch";
/** telco Page Object */
import {telcoPage} from "../../pageObjects/telco_WEB_Page";


module.exports = {

    /**
     * Tickets Covered : PS-390 [Telco - Web] Add 3 additional speed tiers
     */
    'PS-390 [Telco - Web] Add 3 additional speed tiers': function (browser: NightwatchBrowser) {
        browser.url('https://wwwuat.iselect.com.au/');
        /** Clicks on Internet Icon in Home Page */
        telcoPage.clickOnInternetIcon(browser);
        /** Clicks on Start Button */
        telcoPage.clickOnStartBtn(browser);
        /** Validates the Needs page Loading */
        telcoPage.validateNeedsPageLoaded(browser);
        /** Enters the Address based on data */
        telcoPage.enterAddress(browser, data.Ps390Data.Address);
        /** Clicks on Submit Button */
        telcoPage.clickOnSubmitBtn(browser);
        /** Selects the Most Important feature option based on data  */
        telcoPage.selectOption(browser, data.Ps390Data.NeedsOptns[0]);
        browser.pause(1000);
        /** Selects the Type of Household option based on data  */
        telcoPage.selectOption(browser, data.Ps390Data.NeedsOptns[1]);
        browser.pause(1000);
        /** Selects the Internet Usage option based on data  */
        telcoPage.selectOption(browser, data.Ps390Data.NeedsOptns[2]);
        browser.pause(1000);
        /** Selects the Additional Products option based on data  */
        telcoPage.selectOption(browser, data.Ps390Data.NeedsOptns[3]);
        browser.pause(1000);
        /** Selects the Current Provider from the list */
        telcoPage.selectCurrentProvider(browser, data.Ps390Data.NeedsOptns[4]);
        browser.pause(1000);
        /** Selects the Own or Rent option based on data  */
        telcoPage.selectOption(browser, data.Ps390Data.NeedsOptns[5]);
        browser.pause(1000);
        /** Selects the Moving into your property option based on data  */
        telcoPage.selectOption(browser, data.Ps390Data.NeedsOptns[6]);
        browser.pause(1000);
        /** Clicks on Checkboxes */
        telcoPage.clickOnCBs(browser);
        /** Clicks on Next Button */
        telcoPage.clickOnNextBtn(browser);
        /** Enters the details in your details page */
        telcoPage.enterYourDetails(browser, data.Ps390Data.Name, data.Ps390Data.MobileNo, data.Ps390Data.Email);
        /** Selects the Exetel Provider */
        telcoPage.selectProviderFromFilter(browser, data.Ps390Data.ProviderName);
        /** Validates the Speed Tiers */
        telcoPage.validateSpeedTier(browser);
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
            .url(browser.launch_url);
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