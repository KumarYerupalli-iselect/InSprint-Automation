/** NightWatch Browser */
import { NightwatchBrowser } from "nightwatch";
/** telco Page Object */
import {healthWebPage} from "../../pageObjects/health_WEB_page";
/** Data */
import * as data from "../../appData/SprintQ2_11.json";


module.exports = {

    /**
     * Tickets Covered : PS-928	[Health - Web] Upload the new NIB Advantage and Value Extras products to web
     * Scenario Details:
     * Product ID	          Product Short Name	                                       State	Membership	PolicyType	Tier 	Base Value	   Respectivetiervalue	  Rebate%	        Age	  Percentage	GrossMonthlyLHCPremium	LHCoutput	Output	
     * 245703		Basic Essential Hospital Plus $250 Excess with Value Extras	            QLD	         C	        B	    Tier1	 300.94	             16.405	         49.369207	         35	     10	              276.28	          27.628  251.570793

     */
    'PS-928	[Health - Web] Upload the new NIB Advantage and Value Extras products to web': function (browser: NightwatchBrowser) {
        /** Fill all the details in Home Page and Navigates to Your Needs Page */
        healthWebPage.fillHomePage(browser, data.PS928Data.memebershipCoverType[4], data.PS928Data.Postcode, data.PS928Data.Address);
        /** Fill all the details in Your Needs Page and Navigates to Your Priorities Page */
        healthWebPage.fillYourNeedsPage(browser, data.PS928Data.Age, data.PS928Data.FamilyIncomeTier[0], data.PS928Data.familyCodeValue[0], data.PS928Data.AdultDependantOpt[1]);
        /** Fill all the details in Your Priorities Page and Navigates to Your Details Page */
        healthWebPage.fillYourPrioritiesPage(browser, data.PS928Data.Cover[0], data.PS928Data.CoverLevel[2]);
        /** Fill all the details in Your Details Page and Navigates to Results Page */
        healthWebPage.fillYourDetailsPage(browser);
        /** Validates the Results Page */
        healthWebPage.validateResultsPage(browser);
        /** Customizes the Personal Details */
        healthWebPage.customizePersonalDetails(
          browser, data.PS928Data.memebershipCoverType[2], // Couple Membership
          true,
          true,
          true,
          data.PS928Data.NewEditedPinCode[3],
          data.PS928Data.NewEditedAddress[3],
          data.PS928Data.NewEditedDOB,
          data.PS928Data.PartnerCoveredByFund[1],
          data.PS928Data.ExtendedDepOpt[1],
          undefined
        );
        /** Customizes the results */
        healthWebPage.customizeCoverDetails(browser, data.PS928Data.CoverType[0], data.PS928Data.PriceType[1], data.PS928Data.FamilyTierType[1]); // Entering Family Tier Type Cover
        /** Edits the Results by selecting NIB partner*/
        healthWebPage.editResultsBasedOnPartner(browser, data.PS928Data.Partner[10]);
        browser.pause(5000);
        browser.click('//a[text()="1"]');
        /** Validates the Product Price */
        healthWebPage.verifyAndValidateProduct(browser, data.PS928Data.ProductName, data.PS928Data.Excess, data.PS928Data.ProductID, data.PS928Data.ProductPrice, data.PS928Data.ProductLhcPrice);
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