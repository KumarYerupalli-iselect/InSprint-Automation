/** NightWatch Browser */
import { NightwatchBrowser } from "nightwatch";
/** telco Page Object */
import {healthWebPage} from "../../pageObjects/health_WEB_page";
/** Data */
import * as data from "../../appData/SprintQ2_07.json";


module.exports = {

    /**
     * Tickets Covered : PS-865 [Health - Data] Update pricing for Latrobe's disabled Product
     * Scenario Details:
     * Product ID	          Product Short Name	                                       State	Membership	PolicyType	Tier 	Base Value	   Respectivetiervalue	  Rebate%	        Age	  Percentage	GrossMonthlyLHCPremium	LHCoutput	Output	
     * 235598	    BronzePlus Hospital $500 and Core Complete Extras	                    VIC	       FE	        B	    Tier0	  $461.00	          24.608	       113.44288	     35	      10	            $345.94	          34.59	    347.55
     */
    'PS-865 [Health - Data] Update pricing for Latrobes disabled Product': function (browser: NightwatchBrowser) {

        /** Fill all the details in Home Page and Navigates to Your Needs Page */
        healthWebPage.fillHomePage(browser, data.PS865Data.memebershipCoverType[4], data.PS865Data.Postcode, data.PS865Data.Address);
        /** Fill all the details in Your Needs Page and Navigates to Your Priorities Page */
        healthWebPage.fillYourNeedsPage(browser, data.PS865Data.Age, data.PS865Data.FamilyIncomeTier[0], data.PS865Data.familyCodeValue[0], data.PS865Data.AdultDependantOpt[1]);
        /** Fill all the details in Your Priorities Page and Navigates to Your Details Page */
        healthWebPage.fillYourPrioritiesPage(browser, data.PS865Data.Cover[0], data.PS865Data.CoverLevel[2]);
        /** Fill all the details in Your Details Page and Navigates to Results Page */
        healthWebPage.fillYourDetailsPage(browser);
        /** Validates the Results Page */
        healthWebPage.validateResultsPage(browser);
        /** Customizes the Personal Details */
        healthWebPage.customizePersonalDetails(
          browser, data.PS865Data.memebershipCoverType[3], // Single Membership
          true,
          true,
          true,
          data.PS865Data.Postcode,
          data.PS865Data.NewEditedAddress,
          data.PS865Data.NewEditedDOB,
          data.PS865Data.PartnerCoveredByFund[1],
          data.PS865Data.ExtendedDepOpt[0],
          data.PS865Data.AdultDependatDOB
        );
        /** Customizes the results */
        healthWebPage.customizeCoverDetails(browser, data.PS865Data.CoverType[1], data.PS865Data.PriceType[1], data.PS865Data.FamilyTierType[0]); // Entering Family Tier Type Cover
        /** Edits the Results by selecting LATROBE partner*/
        healthWebPage.editResultsBasedOnPartner(browser, data.PS865Data.Partner[0]);
        browser.pause(5000);
        browser.click('//a[text()="2"]');
        /** Validates the Product Price */
        healthWebPage.verifyAndValidateProduct(browser, data.PS865Data.ProductName, data.PS865Data.Excess, data.PS865Data.ProductID, data.PS865Data.ProductPrice, data.PS865Data.ProductLhcPrice);
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