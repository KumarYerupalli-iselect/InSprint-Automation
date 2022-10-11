/** NightWatch Browser */
import { NightwatchBrowser } from "nightwatch";
/** telco Page Object */
import {healthWebPage} from "../../pageObjects/health_WEB_page";
/** Data */
import * as data from "../../appData/SprintQ1_1_2.json";


module.exports = {

    /**
     * Tickets Covered : PS-706	[Health - Web] Upload Bupa ED products to Web
     *                   PS-315	[Health - Data] Create MT for BUPA Extended Dependents

     * Scenario Details:
     * Product ID	          Product Short Name	                                       State	Membership	PolicyType	Tier 	Base Value	   Respectivetiervalue	  Rebate%	        Age	  Percentage	GrossMonthlyLHCPremium	LHCoutput	Output	
     * 
     */
    'PS-706	[Health - Web] Upload Bupa ED products to Web': function (browser: NightwatchBrowser) {
        
        /** Fill all the details in Home Page and Navigates to Your Needs Page */
        healthWebPage.fillHomePage(browser, data.PS540Data.memebershipCoverType[4], data.PS540Data.Postcode, data.PS540Data.Address);
        /** Fill all the details in Your Needs Page and Navigates to Your Priorities Page */
        healthWebPage.fillYourNeedsPage(browser, data.PS540Data.Age, data.PS540Data.FamilyIncomeTier[0], data.PS540Data.familyCodeValue[0], data.PS540Data.AdultDependantOpt[1]);
        /** Fill all the details in Your Priorities Page and Navigates to Your Details Page */
        healthWebPage.fillYourPrioritiesPage(browser, data.PS540Data.Cover[0], data.PS540Data.CoverLevel[2]);
        /** Fill all the details in Your Details Page and Navigates to Results Page */
        healthWebPage.fillYourDetailsPage(browser);
        /** Validates the Results Page */
        healthWebPage.validateResultsPage(browser);
        /** Customizes the Personal Details */
        healthWebPage.customizePersonalDetails(
          browser, data.PS540Data.memebershipCoverType[0], // Single Membership
          false,
          true,
          false,
          undefined,
          undefined,
          data.PS540Data.NewEditedDOB,
          undefined,
          undefined,
          undefined
        );
        /** Customizes the results */
        healthWebPage.customizeCoverDetails(browser, data.PS540Data.CoverType[2], data.PS540Data.PriceType[1], data.PS540Data.SingleTierType[2]); // Entering Single Tier Type Cover
        /** Edits the Results by selecting LATROBE partner*/
        healthWebPage.editResultsBasedOnPartner(browser, data.PS540Data.Partner[0]);
        browser.click('//i[text()=">"]/..');
        browser.click('//i[text()=">"]/..');
        /** Validates the Product Price */
        healthWebPage.verifyAndValidateProduct(browser, data.PS540Data.ProductName, data.PS540Data.Excess, data.PS540Data.ProductID, data.PS540Data.ProductPrice, data.PS540Data.ProductLhcPrice);
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