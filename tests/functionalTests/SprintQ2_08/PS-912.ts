/** NightWatch Browser */
import { NightwatchBrowser } from "nightwatch";
/** telco Page Object */
import {healthWebPage} from "../../pageObjects/health_WEB_page";
/** Data */
import * as data from "../../appData/SprintQ2_08.json";


module.exports = {

    /**
     * Tickets Covered : PS-912	[Health - Web/iB2] Rate Rise for Bupa (New Rates) - Nov 1
     * Scenario Details:
     * Product ID	          Product Short Name	                                       State	Membership	PolicyType	Tier 	Base Value	   Respectivetiervalue	  Rebate%	        Age	  Percentage	GrossMonthlyLHCPremium	LHCoutput	Output	
     * 229714	      Bronze Plus Simple Hospital $500 Excess with Value Extras	             TAS	      F	         B	    Tier3	   352.7	            0	             0	             35	      10	           271.8	           27.18	 352.7	
     */
    'PS-912	[Health - Web/iB2] Rate Rise for Bupa (New Rates) - Nov 1': function (browser: NightwatchBrowser) {

        /** Fill all the details in Home Page and Navigates to Your Needs Page */
        healthWebPage.fillHomePage(browser, data.PS912Data.memebershipCoverType[4], data.PS912Data.Postcode, data.PS912Data.Address);
        /** Fill all the details in Your Needs Page and Navigates to Your Priorities Page */
        healthWebPage.fillYourNeedsPage(browser, data.PS912Data.Age, data.PS912Data.FamilyIncomeTier[0], data.PS912Data.familyCodeValue[0], data.PS912Data.AdultDependantOpt[1]);
        /** Fill all the details in Your Priorities Page and Navigates to Your Details Page */
        healthWebPage.fillYourPrioritiesPage(browser, data.PS912Data.Cover[0], data.PS912Data.CoverLevel[2]);
        /** Fill all the details in Your Details Page and Navigates to Results Page */
        healthWebPage.fillYourDetailsPage(browser);
        /** Validates the Results Page */
        healthWebPage.validateResultsPage(browser);
        /** Customizes the Personal Details */
        healthWebPage.customizePersonalDetails(
          browser, data.PS912Data.memebershipCoverType[3], // Family Membership
          true,
          true,
          true,
          data.PS912Data.NewEditedPinCode[6],
          data.PS912Data.NewEditedAddress[6],
          data.PS912Data.NewEditedDOB,
          data.PS912Data.PartnerCoveredByFund[1],
          data.PS912Data.ExtendedDepOpt[1],
          undefined
        );
        /** Customizes the results */
        healthWebPage.customizeCoverDetails(browser, data.PS912Data.CoverType[1], data.PS912Data.PriceType[1], data.PS912Data.FamilyTierType[3]); // Entering Family Tier Type Cover
        /** Edits the Results by selecting LATROBE partner*/
        healthWebPage.editResultsBasedOnPartner(browser, data.PS912Data.Partner[4]);
        browser.pause(5000);
        browser.click('//a[text()="2"]');
        /** Validates the Product Price */
        healthWebPage.verifyAndValidateProduct(browser, data.PS912Data.ProductName, data.PS912Data.Excess, data.PS912Data.ProductID, data.PS912Data.ProductPrice, data.PS912Data.ProductLhcPrice);
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