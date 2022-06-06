/** NightWatch Browser */
import { NightwatchBrowser } from "nightwatch";
/** telco Page Object */
import {telcoPage} from "../../pageObjects/telco_WEB_Page";


module.exports = {

    /**
     * Tickets Covered : PS-264	[Home Loans - Web] Update the Lendi credit guide hosted on iSU website
     */
    'PS-264_HomeLoansWeb_Update_the_LendiCreditGuide_hosted_on_iSU_website': function (browser: NightwatchBrowser) {
        /** Clicks on Home Loans Icon in Home Page */
        telcoPage.clickOnHomeLoansIcon(browser);
        /** Validates the Home Loans Page Header */
        telcoPage.validateHomeLoansPageLoad(browser);
        /** Validate and Click Lendi Credit Guide Link */
        telcoPage.validateAndClickLendiCreditGuideLink(browser);
        //browser.pause(10000);
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