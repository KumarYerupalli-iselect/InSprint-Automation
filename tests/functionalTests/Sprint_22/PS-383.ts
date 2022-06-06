/** NightWatch Browser */
import { NightwatchBrowser } from "nightwatch";
/** telco Page Object */
import {healthWebPage} from "../../pageObjects/health_WEB_page";
/** Data */
import * as data from "../../appData/Sprint22Data.json";


module.exports = {

    /**
     * Tickets Covered : PS-383	[Health - Data] Latrobe rates reload-including yearly payment 2% discount
     */
    'PS-383 Health - Data Latrobe rates reload including yearly payment 2% discount': function (browser: NightwatchBrowser) {
        
        /** Fill all the details in Home Page and Navigates to Your Needs Page */
        healthWebPage.fillHomePage(browser, data.PS386Data.memebershipCoverType[4], data.PS386Data.Postcode, data.PS386Data.Address);
        /** Fill all the details in Your Needs Page and Navigates to Your Priorities Page */
        healthWebPage.fillYourNeedsPage(browser, data.PS386Data.Age, data.PS386Data.FamilyIncomeTier[0], data.PS386Data.familyCodeValue[0], data.PS386Data.AdultDependantOpt[1]);
        /** Fill all the details in Your Priorities Page and Navigates to Your Details Page */
        healthWebPage.fillYourPrioritiesPage(browser, data.PS386Data.Cover[0], data.PS386Data.CoverLevel[1]);
        /** Fill all the details in Your Detai;s Page and Navigates to Results Page */
        healthWebPage.fillYourDetailsPage(browser);
        /** Validates the Results Page */
        healthWebPage.validateResultsPage(browser);
        /** Customizes the results */
        healthWebPage.customizeCoverDetails(browser, data.PS386Data.CoverType[1], data.PS386Data.PriceType[0], data.PS386Data.FamilyTierType[0]);
        /** Edits the Results by selecting LATROBE partner*/
        healthWebPage.editResultsBasedOnPartner(browser, data.PS386Data.Partner[0]);
        /** Validates the Product Price */
        healthWebPage.verifyAndValidateProduct(browser, data.PS386Data.ProductName, data.PS386Data.Excess, data.PS386Data.ProductID, data.PS386Data.ProductPrice, data.PS386Data.ProductLhcPrice);
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