/** NightWatch Browser */
import { NightwatchBrowser } from "nightwatch";
/** telco Page Object */
import {healthWebPage} from "../../pageObjects/health_WEB_page";
/** Data */
import * as data from "../../appData/Sprint23Data.json";


module.exports = {

    /**
     * Tickets Covered : PS-463	[Health - Web] Latrobe Pricing Update - ED family & SP
     * Scenario Details:
     * Product ID	Product Short Name	                               State	Membership	PolicyType	Tier 	Base Value	   Respectivetiervalue	Rebate%	        Age	  Percentage	GrossMonthlyLHCPremium	LHCoutput	Output	
     * 235598		BronzePlus Hospital $500 and Core Complete Extras	VIC	        FE	        B	    Tier0	 $5,421.39 	          24.608	    1334.0956512	35	       8	           $4,151.31 	     332.10	    4087.29
     */
    'PS-463	[Health - Web] Latrobe Pricing Update - ED family & SP': function (browser: NightwatchBrowser) {
        
        /** Fill all the details in Home Page and Navigates to Your Needs Page */
        healthWebPage.fillHomePage(browser, data.PS463Data.memebershipCoverType[4], data.PS463Data.Postcode, data.PS463Data.Address);
        /** Fill all the details in Your Needs Page and Navigates to Your Priorities Page */
        healthWebPage.fillYourNeedsPage(browser, data.PS463Data.Age, data.PS463Data.FamilyIncomeTier[0], data.PS463Data.familyCodeValue[0], data.PS463Data.AdultDependantOpt[1]);
        /** Fill all the details in Your Priorities Page and Navigates to Your Details Page */
        healthWebPage.fillYourPrioritiesPage(browser, data.PS463Data.Cover[0], data.PS463Data.CoverLevel[1]);
        /** Fill all the details in Your Detai;s Page and Navigates to Results Page */
        healthWebPage.fillYourDetailsPage(browser);
        /** Validates the Results Page */
        healthWebPage.validateResultsPage(browser);
        /** Customizes the Personal Details */
        healthWebPage.customizePersonalDetails(
          browser, data.PS463Data.memebershipCoverType[3],
          true,
          true,
          true,
          data.PS463Data.NewEditedPinCode,
          data.PS463Data.NewEditedAddress,
          data.PS463Data.NewEditedDOB,
          data.PS463Data.PartnerCoveredByFund[1],
          data.PS463Data.AdultDependantOpt[0],
          data.PS463Data.AdultDependantDOB
        );
        /** Customizes the results */
        healthWebPage.customizeCoverDetails(browser, data.PS463Data.CoverType[0], data.PS463Data.PriceType[0], data.PS463Data.FamilyTierType[0]);
        /** Edits the Results by selecting LATROBE partner*/
        healthWebPage.editResultsBasedOnPartner(browser, data.PS463Data.Partner[0]);
        browser.click('//i[text()=">"]/..');
        /** Validates the Product Price */
        healthWebPage.verifyAndValidateProduct(browser, data.PS463Data.ProductName, data.PS463Data.Excess, data.PS463Data.ProductID, data.PS463Data.ProductPrice, data.PS463Data.ProductLhcPrice);
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