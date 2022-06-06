/** Data Object */
import * as data from '../../appData/Sprint19Data.json';
/** NightWatch Browser */
import { NightwatchBrowser } from "nightwatch";
/** telco Page Object */
import {telcoPage} from "../../pageObjects/telco_WEB_Page";


module.exports = {

    /**
     * Tickets Covered :PS-233 [Telco - Web]: Add Exetel Broadband in filter on results page 
     *                  PS-234 [Telco - Web]: Add a new partner, Logo - Exetel Broadband
     */
    'PS-233_Add_ExetelBroadband_in_filter_on_resultsPage__PS-234_TelcoWeb_Add_a_new_PartnerLogo_ExetelBroadband': function (browser: NightwatchBrowser) {
        /** Clicks on Internet Icon in Home Page */
        telcoPage.clickOnInternetIcon(browser);
        /** Clicks on Start Button */
        telcoPage.clickOnStartBtn(browser);
        /** Validates the Needs page Loading */
        telcoPage.validateNeedsPageLoaded(browser);
        /** Enters the Address based on data */
        telcoPage.enterAddress(browser, data.Ps234Data.Address);
        /** Clicks on Submit Button */
        telcoPage.clickOnSubmitBtn(browser);
        /** Selects the Most Important feature option based on data  */
        telcoPage.selectOption(browser, data.Ps234Data.NeedsOptns[0]);
        /** Selects the Type of Household option based on data  */
        telcoPage.selectOption(browser, data.Ps234Data.NeedsOptns[1]);
        /** Selects the Internet Usage option based on data  */
        telcoPage.selectOption(browser, data.Ps234Data.NeedsOptns[2]);
        /** Selects the Additional Products option based on data  */
        telcoPage.selectOption(browser, data.Ps234Data.NeedsOptns[3]);
        /** Selects the Current Provider from the list */
        telcoPage.selectCurrentProvider(browser, data.Ps234Data.NeedsOptns[4]);
        /** Selects the Own or Rent option based on data  */
        telcoPage.selectOption(browser, data.Ps234Data.NeedsOptns[5]);
        /** Selects the Moving into your property option based on data  */
        telcoPage.selectOption(browser, data.Ps234Data.NeedsOptns[6]);
        /** Clicks on Checkboxes */
        telcoPage.clickOnCBs(browser);
        /** Clicks on Next Button */
        telcoPage.clickOnNextBtn(browser);
        /** Enters the details in your details page */
        telcoPage.enterYourDetails(browser, data.Ps234Data.Name, data.Ps234Data.MobileNo, data.Ps234Data.Email);
        /** Selects the Exetel Provider */
        telcoPage.selectProviderFromFilter(browser, data.Ps234Data.ProviderName);
        /** Validates the Exetel Products are displayed or not in Results Page */
        telcoPage.validateExetelProduct(browser);
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