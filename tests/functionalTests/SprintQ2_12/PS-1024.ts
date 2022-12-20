/** NightWatch Browser */
import { NightwatchBrowser } from "nightwatch";
/** telco Page Object */
import {healthWebPage} from "../../pageObjects/health_WEB_page";
/** Data */
import * as data from "../../appData/SprintQ2_12.json";


module.exports = {

    /**
     * Tickets Covered : PS-1024	[Health - Data] Bupa - Rate file for Top Extras 60 - Updating rates
     * Scenario Details:
     * Product ID	          Product Short Name	 State	Membership	PolicyType	Tier 	Base Value	   Respectivetiervalue	  Rebate%	        Age	  Percentage	GrossMonthlyLHCPremium	LHCoutput	Output	
     * 222602	                 Top Extras 60	      ACT	     S	         A	    Tier0	   89.35	           28.71	      25.652385	         65     70	               0	                0	    63.697615
     */
    ' PS-1024 [Health - Data] Bupa - Rate file for Top Extras 60 - Updating rates': function (browser: NightwatchBrowser) {
        /** Fill all the details in Home Page and Navigates to Your Needs Page */
        healthWebPage.fillHomePage(browser, data.PS1024Data.memebershipCoverType[0], data.PS1024Data.Postcode, data.PS1024Data.Address);
        /** Fill all the details in Your Needs Page and Navigates to Your Priorities Page */
        healthWebPage.fillYourNeedsPage(browser, data.PS1024Data.Age, data.PS1024Data.SingleIncomeTier[0], data.PS1024Data.SingleCodeValue[0], data.PS1024Data.AdultDependantOpt[1]);
        /** Fill all the details in Your Priorities Page and Navigates to Your Details Page */
        healthWebPage.fillYourPrioritiesPage(browser, data.PS1024Data.Cover[2]);
        /** Fill all the details in Your Details Page and Navigates to Results Page */
        //healthWebPage.fillYourDetailsPage(browser);
        /** Validates the Results Page */
        healthWebPage.validateResultsPage(browser);
        /** Customizes the Personal Details */
        healthWebPage.customizePersonalDetails(
          browser, data.PS1024Data.memebershipCoverType[0], // Single Membership
          true,
          true,
          false,
          data.PS1024Data.NewEditedPinCode[1],
          data.PS1024Data.NewEditedAddress[1],
          data.PS1024Data.NewEditedDOB,
          data.PS1024Data.PartnerCoveredByFund[1],
          undefined,
          undefined
        );
        /** Customizes the results */
        healthWebPage.customizeCoverDetails(browser, data.PS1024Data.CoverType[0], data.PS1024Data.PriceType[1], data.PS1024Data.SingleTierType[0]); // Entering Single Tier Type Cover
        /** Edits the Results by selecting NIB partner*/
        healthWebPage.editResultsBasedOnPartner(browser, data.PS1024Data.Partner[4]);
        browser.pause(5000);
        browser.click('//a[text()="3"]');
        /** Validates the Product Price */
        healthWebPage.verifyAndValidateProduct(browser, data.PS1024Data.ProductName, data.PS1024Data.Excess, data.PS1024Data.ProductID, data.PS1024Data.ProductPrice, data.PS1024Data.ProductLhcPrice, data.PS1024Data.Cover[2]);
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