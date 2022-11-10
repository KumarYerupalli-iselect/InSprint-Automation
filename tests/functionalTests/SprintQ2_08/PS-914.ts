/** NightWatch Browser */
import { NightwatchBrowser } from "nightwatch";
/** telco Page Object */
import {healthWebPage} from "../../pageObjects/health_WEB_page";
/** Data */
import * as data from "../../appData/SprintQ2_08.json";


module.exports = {

    /**
     * Tickets Covered : PS-914	[Health - Web/iB2] Rate Rise for NIB (New Rates) - Nov 1
     * Scenario Details:
     * Product ID	          Product Short Name	                                       State	Membership	PolicyType	Tier 	Base Value	   Respectivetiervalue	  Rebate%	        Age	  Percentage	GrossMonthlyLHCPremium	LHCoutput	Output	
     * 213555	    Silver Hospital $750 Excess with Core Extras		                    VIC	        SP	        B	    Tier3	  349.22	           0	             0	             35	      10	        287.43	              28.743	349.22
     */
    'PS-914	[Health - Web/iB2] Rate Rise for NIB (New Rates) - Nov 1': function (browser: NightwatchBrowser) {

        /** Fill all the details in Home Page and Navigates to Your Needs Page */
        healthWebPage.fillHomePage(browser, data.PS914Data.memebershipCoverType[4], data.PS914Data.Postcode, data.PS914Data.Address);
        /** Fill all the details in Your Needs Page and Navigates to Your Priorities Page */
        healthWebPage.fillYourNeedsPage(browser, data.PS914Data.Age, data.PS914Data.FamilyIncomeTier[0], data.PS914Data.familyCodeValue[0], data.PS914Data.AdultDependantOpt[1]);
        /** Fill all the details in Your Priorities Page and Navigates to Your Details Page */
        healthWebPage.fillYourPrioritiesPage(browser, data.PS914Data.Cover[0], data.PS914Data.CoverLevel[2]);
        /** Fill all the details in Your Details Page and Navigates to Results Page */
        healthWebPage.fillYourDetailsPage(browser);
        /** Validates the Results Page */
        healthWebPage.validateResultsPage(browser);
        /** Customizes the Personal Details */
        healthWebPage.customizePersonalDetails(
          browser, data.PS914Data.memebershipCoverType[4], // Family Membership
          true,
          true,
          false,
          data.PS914Data.NewEditedPinCode[2],
          data.PS914Data.NewEditedAddress[2],
          data.PS914Data.NewEditedDOB,
          undefined,
          data.PS914Data.ExtendedDepOpt[1],
          undefined
        );
        /** Customizes the results */
        healthWebPage.customizeCoverDetails(browser, data.PS914Data.CoverType[2], data.PS914Data.PriceType[1], data.PS914Data.FamilyTierType[3]); // Entering Family Tier Type Cover
        /** Edits the Results by selecting LATROBE partner*/
        healthWebPage.editResultsBasedOnPartner(browser, data.PS914Data.Partner[10]);
        browser.pause(5000);
        //browser.click('//a[text()="2"]');
        /** Validates the Product Price */
        healthWebPage.verifyAndValidateProduct(browser, data.PS914Data.ProductName, data.PS914Data.Excess, data.PS914Data.ProductID, data.PS914Data.ProductPrice, data.PS914Data.ProductLhcPrice);
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
        browser.globals.abortOnAssertionFailure = true
    },

    /**
     * Runs After Each Test Case
     * @param browser NightWatch Browser
     */
    afterEach: function (browser: NightwatchBrowser) {
        browser.end();
    },
};