/** NightWatch Browser */
import { NightwatchBrowser } from "nightwatch";
/** telco Page Object */
import {healthWebPage} from "../../pageObjects/health_WEB_page";
/** Data */
import * as data from "../../appData/SprintQ2_08.json";


module.exports = {

    /**
     * Tickets Covered : PS-910	[Health - xx] Add new AHM values extras products (standalone and gold combinations)
     * Scenario Details:
     * Product ID	          Product Short Name	                                       State	Membership	PolicyType	Tier 	Base Value	   Respectivetiervalue	  Rebate%	        Age	  Percentage	GrossMonthlyLHCPremium	LHCoutput	Output	
     * 245538	       starter basic $750 Excess + value extras	                            QLD	          C	        B	    Tier1	   288.5	            24.608	      70.99408	         75	      70	             209.5	          146.65	217.50

     */
    'PS-910	[Health - xx] Add new AHM values extras products (standalone and gold combinations)': function (browser: NightwatchBrowser) {

        /** Fill all the details in Home Page and Navigates to Your Needs Page */
        healthWebPage.fillHomePage(browser, data.PS915Data.memebershipCoverType[4], data.PS915Data.Postcode, data.PS915Data.Address);
        /** Fill all the details in Your Needs Page and Navigates to Your Priorities Page */
        healthWebPage.fillYourNeedsPage(browser, data.PS915Data.Age, data.PS915Data.FamilyIncomeTier[0], data.PS915Data.familyCodeValue[0], data.PS915Data.AdultDependantOpt[1]);
        /** Fill all the details in Your Priorities Page and Navigates to Your Details Page */
        healthWebPage.fillYourPrioritiesPage(browser, data.PS915Data.Cover[0], data.PS915Data.CoverLevel[2]);
        /** Fill all the details in Your Details Page and Navigates to Results Page */
        healthWebPage.fillYourDetailsPage(browser);
        /** Validates the Results Page */
        healthWebPage.validateResultsPage(browser);
        /** Customizes the Personal Details */
        healthWebPage.customizePersonalDetails(
          browser, data.PS915Data.memebershipCoverType[4], // Family Membership
          true,
          true,
          false,
          data.PS915Data.NewEditedPinCode[7],
          data.PS915Data.NewEditedAddress[7],
          data.PS915Data.NewEditedDOB,
          undefined,
          data.PS915Data.ExtendedDepOpt[1],
          undefined
        );
        /** Customizes the results */
        healthWebPage.customizeCoverDetails(browser, data.PS915Data.CoverType[3], data.PS915Data.PriceType[1], data.PS915Data.FamilyTierType[3]); // Entering Family Tier Type Cover
        /** Edits the Results by selecting LATROBE partner*/
        healthWebPage.editResultsBasedOnPartner(browser, data.PS915Data.Partner[7]);
        browser.pause(5000);
        browser.click('//a[text()="2"]');
        /** Validates the Product Price */
        healthWebPage.verifyAndValidateProduct(browser, data.PS915Data.ProductName, data.PS915Data.Excess, data.PS915Data.ProductID, data.PS915Data.ProductPrice, data.PS915Data.ProductLhcPrice);
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