/** NightWatch Browser */
import { NightwatchBrowser } from "nightwatch";
/** telco Page Object */
import {healthWebPage} from "../../pageObjects/health_WEB_page";
/** Data */
import * as data from "../../appData/SprintQ1_1_2.json";


module.exports = {

    /**
     * Tickets Covered : PS-641	[Health - Web] Dual Pricing and Rate Rise Static Text on side panel - needs analysis
                         PS-642	[Health - Web] Dual Pricing display on results page for old and new pricing
                         PS-643	[Health - Web] Dual Pricing Banner and Learn More popup on the results page
     */
    'PS-641	[Health - Web] Dual Pricing and Rate Rise Static Text on side panel - needs analysis': function (browser: NightwatchBrowser) { 
        /** Fill all the details in Home Page and Navigates to Your Needs Page */
        healthWebPage.fillHomePage(browser, data.PS640Data.memebershipCoverType[4], data.PS640Data.Postcode, data.PS640Data.Address);
        /** Fill all the details in Your Needs Page and Navigates to Your Priorities Page */
        healthWebPage.fillYourNeedsPage(browser, data.PS640Data.Age, data.PS640Data.FamilyIncomeTier[0], data.PS640Data.familyCodeValue[0], data.PS640Data.AdultDependantOpt[1]);
        /** Fill all the details in Your Priorities Page and Navigates to Your Details Page */
        healthWebPage.fillYourPrioritiesPage(browser, data.PS640Data.Cover[0], data.PS640Data.CoverLevel[1]);
        /** Fill all the details in Your Details Page and Navigates to Results Page */
        healthWebPage.fillYourDetailsPage(browser);
        /** Validates the Results Page */
        healthWebPage.validateResultsPage(browser);
        /** Customizes the Personal Details */
        healthWebPage.customizePersonalDetails(
          browser, data.PS640Data.memebershipCoverType[0], // Single Membership
          true,
          true,
          false,
          data.PS640Data.NewEditedPinCode,
          data.PS640Data.NewEditedAddress,
          data.PS640Data.NewEditedDOB,
          undefined,
          undefined,
          undefined
        );
        /** Customizes the results */
        healthWebPage.customizeCoverDetails(browser, data.PS640Data.CoverType[1], data.PS640Data.PriceType[1], data.PS640Data.SingleTierType[0]); // Entering Single Tier Type Cover
        /** Edits the Results by selecting LATROBE partner*/
        healthWebPage.editResultsBasedOnPartner(browser, data.PS640Data.Partner[0]);
        browser.click('//i[text()=">"]/..');
        browser.click('//i[text()=">"]/..');
        browser.click('//i[text()=">"]/..');
        /** Validates the Product Price */
        healthWebPage.verifyAndValidateProductDualPricing(browser, data.PS640Data.ProductName, data.PS640Data.Excess, data.PS640Data.ProductID, data.PS640Data.ProductPrice, data.PS640Data.ProductLhcPrice);
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