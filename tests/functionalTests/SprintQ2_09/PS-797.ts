/** NightWatch Browser */
import { NightwatchBrowser } from "nightwatch";
/** telco Page Object */
import {healthWebPage} from "../../pageObjects/health_WEB_page";
/** Data */
import * as data from "../../appData/SprintQ2_09.json";


module.exports = {

    /**
     * Tickets Covered : PS-797	[Health - Web] Upload NIB new extras products to web
     * Scenario Details:
     * Product ID	          Product Short Name	                                       State	Membership	PolicyType	Tier 	Base Value	   Respectivetiervalue	  Rebate%	        Age	  Percentage	GrossMonthlyLHCPremium	LHCoutput	Output	
     * 244727	    Bronze Hospital Plus $750 Excess with Dental Boost	                    WA	         C	        B	    Tier3	  278.75	             0	              0	             75	      70	        190.08	              133.05	278.75

     */
    'PS-797	[Health - Web] Upload NIB new extras products to web': function (browser: NightwatchBrowser) {

        /** Fill all the details in Home Page and Navigates to Your Needs Page */
        healthWebPage.fillHomePage(browser, data.PS797Data.memebershipCoverType[4], data.PS797Data.Postcode, data.PS797Data.Address);
        /** Fill all the details in Your Needs Page and Navigates to Your Priorities Page */
        healthWebPage.fillYourNeedsPage(browser, data.PS797Data.Age, data.PS797Data.FamilyIncomeTier[0], data.PS797Data.familyCodeValue[0], data.PS797Data.AdultDependantOpt[1]);
        /** Fill all the details in Your Priorities Page and Navigates to Your Details Page */
        healthWebPage.fillYourPrioritiesPage(browser, data.PS797Data.Cover[0], data.PS797Data.CoverLevel[2]);
        /** Fill all the details in Your Details Page and Navigates to Results Page */
        healthWebPage.fillYourDetailsPage(browser);
        /** Validates the Results Page */
        healthWebPage.validateResultsPage(browser);
        /** Customizes the Personal Details */
        healthWebPage.customizePersonalDetails(
          browser, data.PS797Data.memebershipCoverType[2], // Couple Membership
          true,
          true,
          true,
          data.PS797Data.NewEditedPinCode[5],
          data.PS797Data.NewEditedAddress[5],
          data.PS797Data.NewEditedDOB,
          data.PS797Data.PartnerCoveredByFund[1],
          data.PS797Data.ExtendedDepOpt[1],
          undefined
        );
        /** Customizes the results */
        healthWebPage.customizeCoverDetails(browser, data.PS797Data.CoverType[1], data.PS797Data.PriceType[1], data.PS797Data.FamilyTierType[3]); // Entering Family Tier Type Cover
        /** Edits the Results by selecting NIB partner*/
        healthWebPage.editResultsBasedOnPartner(browser, data.PS797Data.Partner[10]);
        browser.pause(5000);
        browser.click('//a[text()="1"]');
        /** Validates the Product Price */
        healthWebPage.verifyAndValidateProduct(browser, data.PS797Data.ProductName, data.PS797Data.Excess, data.PS797Data.ProductID, data.PS797Data.ProductPrice, data.PS797Data.ProductLhcPrice);
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