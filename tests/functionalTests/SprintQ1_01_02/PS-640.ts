/** NightWatch Browser */
import { NightwatchBrowser } from "nightwatch";
/** telco Page Object */
import {healthWebPage} from "../../pageObjects/health_WEB_page";
/** Data */
import * as data from "../../appData/SprintQ1_1_2.json";


module.exports = {

    /**
     * Tickets Covered : PS-640	[Health - Data/Web] AIA Rate Rise - Dual Pricing - 1st Aug 2022
     *                   PS-644	[Health - Web] Display of Dual Pricing Excess Within and LHC

     * Scenario Details:
     * Product ID	          Product Short Name	                                       State	Membership	PolicyType	Tier 	Base Value	   Respectivetiervalue	  Rebate%	        Age	  Percentage	GrossMonthlyLHCPremium	LHCoutput	Output	
     * 216612	           Bronze Plus Hospital Everyday 500 and Standard Extras	        VIC	       S	         B	    Tier0	   193.22	         24.608	         47.5475776	         35	       10	-           144.7	          14.47	      156.6024224  
     */

    'PS-640	[Health - Data/Web] AIA Rate Rise - Dual Pricing - 1st Aug 2022': function (browser: NightwatchBrowser) {
        
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