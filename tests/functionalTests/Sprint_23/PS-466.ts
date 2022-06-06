/** NightWatch Browser */
import { NightwatchBrowser } from "nightwatch";
/** telco Page Object */
import {healthWebPage} from "../../pageObjects/health_WEB_page";
/** Data */
import * as data from "../../appData/Sprint23Data.json";


module.exports = {

    /**
     * Tickets Covered : PS-466	[Health - Web] Load new Bupa products in Web
     * Scenario Details:
     * Product ID	Product Short Name	                       State	Membership	PolicyType	Tier 	Base Value	   Respectivetiervalue	Rebate%	   Age	Percentage	GrossMonthlyLHCPremium	LHCoutput	Output	 IB2 OutPut
     * 240172	    Basic Accident Only Hospital $750 Excess	VIC	          F	       H	    Tier0	$209.85	          32.812	        68.855982	75	    70	         $209.90	          146.93	140.99	   287.92
     */
    'PS-466	[Health - Web] Load new Bupa products in Web': function (browser: NightwatchBrowser) {
        /** Fill all the details in Home Page and Navigates to Your Needs Page */
        healthWebPage.fillHomePage(browser, data.PS466Data.memebershipCoverType[4], data.PS466Data.Postcode, data.PS466Data.Address);
        /** Fill all the details in Your Needs Page and Navigates to Your Priorities Page */
        healthWebPage.fillYourNeedsPage(browser, data.PS466Data.Age, data.PS466Data.FamilyIncomeTier[0], data.PS466Data.familyCodeValue[0], data.PS466Data.AdultDependantOpt[1]);
        /** Fill all the details in Your Priorities Page and Navigates to Your Details Page */
        healthWebPage.fillYourPrioritiesPage(browser, data.PS466Data.Cover[1], data.PS466Data.CoverLevel[0]);
        /** Fill all the details in Your Detai;s Page and Navigates to Results Page */
        healthWebPage.fillYourDetailsPage(browser);
        /** Validates the Results Page */
        healthWebPage.validateResultsPage(browser);
        /** Customizes the Personal Details */
        healthWebPage.customizePersonalDetails(
            browser, data.PS466Data.memebershipCoverType[3],
            true,
            true,
            true,
            data.PS466Data.NewEditedPinCode,
            data.PS466Data.NewEditedAddress,
            data.PS466Data.NewEditedDOB,
            data.PS466Data.PartnerCoveredByFund[1],
            data.PS466Data.AdultDependantOpt[1]
          );
          /** Customizes the results */
          healthWebPage.customizeCoverDetails(browser, data.PS466Data.CoverType[0], data.PS466Data.PriceType[1], data.PS466Data.FamilyTierType[0]);
          /** Edits the Results by selecting LATROBE partner*/
          healthWebPage.editResultsBasedOnPartner(browser, data.PS466Data.Partner[0]);
          /** Validates the Product Price */
          healthWebPage.verifyAndValidateProduct(browser, data.PS466Data.ProductName, data.PS466Data.Excess, data.PS466Data.ProductID, data.PS466Data.ProductPrice, data.PS466Data.ProductLhcPrice);

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