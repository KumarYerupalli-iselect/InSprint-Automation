/** NightWatch Browser */
import { NightwatchBrowser } from "nightwatch";
/** telco Page Object */
import {healthWebPage} from "../../pageObjects/health_WEB_page";
/** Data */
import * as data from "../../appData/SprintQ1_1_2.json";


module.exports = {

    /**
     * Tickets Covered : PS-474	[Health - Data] Create Master Template for AHM new Silver Plus Products - Go Live 26th July
     *                   PS-546	[Health - Rapide/dB] Upload AHM new Silver Plus Products to Rapide and dB migration
                         PS-548	[Health - Web] Upload AHM new Silver Plus Products to Web
     *   
     
     * Scenario Details:
     * Product ID	          Product Short Name	                               State	Membership	PolicyType	Tier 	Base Value	   Respectivetiervalue	  Rebate%	        Age	  Percentage	GrossMonthlyLHCPremium	LHCoutput	Output	
     * 224263                 elevate silver plus 750 excess + black 50	            ACT	         C	        B	-   Tier0	  $354.00	       24.608	          87.11232	         35	      10	       $287.80	              28.78	   266.88768


     */
    'PS-548	[Health - Web] Upload AHM new Silver Plus Products to Web': function (browser: NightwatchBrowser) {
        
        /** Fill all the details in Home Page and Navigates to Your Needs Page */
        healthWebPage.fillHomePage(browser, data.PS548Data.memebershipCoverType[4], data.PS548Data.Postcode, data.PS548Data.Address);
        /** Fill all the details in Your Needs Page and Navigates to Your Priorities Page */
        healthWebPage.fillYourNeedsPage(browser, data.PS548Data.Age, data.PS548Data.FamilyIncomeTier[0], data.PS548Data.familyCodeValue[0], data.PS548Data.AdultDependantOpt[1]);
        /** Fill all the details in Your Priorities Page and Navigates to Your Details Page */
        healthWebPage.fillYourPrioritiesPage(browser, data.PS548Data.Cover[0], data.PS548Data.CoverLevel[2]);
        /** Fill all the details in Your Details Page and Navigates to Results Page */
        healthWebPage.fillYourDetailsPage(browser);
        /** Validates the Results Page */
        healthWebPage.validateResultsPage(browser);
        /** Customizes the Personal Details */
        healthWebPage.customizePersonalDetails(
          browser, data.PS548Data.memebershipCoverType[2], // Couple Membership
          true,
          true,
          true,
          data.PS548Data.NewEditedPinCode,
          data.PS548Data.NewEditedAddress,
          data.PS548Data.NewEditedDOB,
          data.PS548Data.PartnerCoveredByFund[1],
          undefined,
          undefined
        );
        /** Customizes the results */
        healthWebPage.customizeCoverDetails(browser, data.PS548Data.CoverType[2], data.PS548Data.PriceType[1], data.PS548Data.FamilyTierType[0]); // Entering Family Tier Type Cover
        /** Edits the Results by selecting LATROBE partner*/
        healthWebPage.editResultsBasedOnPartner(browser, data.PS548Data.Partner[0]);
        //browser.click('//i[text()=">"]/..');
        /** Validates the Product Price */
        healthWebPage.verifyAndValidateProduct(browser, data.PS548Data.ProductName, data.PS548Data.Excess, data.PS548Data.ProductID, data.PS548Data.ProductPrice, data.PS548Data.ProductLhcPrice);
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