/** NightWatch Browser */
import { NightwatchBrowser } from "nightwatch";
/** telco Page Object */
import {healthWebPage} from "../../pageObjects/health_WEB_page";
/** Data */
import * as data from "../../appData/Sprint24Data.json";


module.exports = {

    /**
     * Tickets Covered : PS-488	[Health - Web] Upload new Bupa Standalone Hospital Products - Extended Dependents
     *                   PS-483	[Health - Data] Creating MT for Bupa Standalone Hospital Products - Extended Dependents- Rapid
     *   
     
     * Scenario Details:
     * Product ID	Product Short Name	                               State	Membership	PolicyType	Tier 	Base Value	   Respectivetiervalue	Rebate%	        Age	  Percentage	GrossMonthlyLHCPremium	LHCoutput	Output	
     * 240444	    Silver Plus Essential Hospital $750 Excess	        WA	        SE	        H	    Tier3	 $260.05	        0	                0	        65	      68	        $130.10	              88.468	260.05	

     */
    'PS-488	[Health - Web] Upload new Bupa Standalone Hospital Products - Extended Dependents': function (browser: NightwatchBrowser) {
        
        /** Fill all the details in Home Page and Navigates to Your Needs Page */
        healthWebPage.fillHomePage(browser, data.PS488Data.memebershipCoverType[4], data.PS488Data.Postcode, data.PS488Data.Address);
        /** Fill all the details in Your Needs Page and Navigates to Your Priorities Page */
        healthWebPage.fillYourNeedsPage(browser, data.PS488Data.Age, data.PS488Data.FamilyIncomeTier[0], data.PS488Data.familyCodeValue[0], data.PS488Data.AdultDependantOpt[1]);
        /** Fill all the details in Your Priorities Page and Navigates to Your Details Page */
        healthWebPage.fillYourPrioritiesPage(browser, data.PS488Data.Cover[1], data.PS488Data.CoverLevel[2]);
        /** Fill all the details in Your Detai;s Page and Navigates to Results Page */
        healthWebPage.fillYourDetailsPage(browser);
        /** Validates the Results Page */
        healthWebPage.validateResultsPage(browser);
        /** Customizes the Personal Details */
        healthWebPage.customizePersonalDetails(
          browser, data.PS488Data.memebershipCoverType[4],
          true,
          true,
          true,
          data.PS488Data.NewEditedPinCode,
          data.PS488Data.NewEditedAddress,
          data.PS488Data.NewEditedDOB,
          data.PS488Data.PartnerCoveredByFund[1],
          data.PS488Data.AdultDependantOpt[0],
          data.PS488Data.AdultDependantDOB
        );
        /** Customizes the results */
        healthWebPage.customizeCoverDetails(browser, data.PS488Data.CoverType[2], data.PS488Data.PriceType[1], data.PS488Data.FamilyTierType[3]);
        /** Edits the Results by selecting LATROBE partner*/
        healthWebPage.editResultsBasedOnPartner(browser, data.PS488Data.Partner[0]);
        //browser.click('//i[text()=">"]/..');
        /** Validates the Product Price */
        healthWebPage.verifyAndValidateProduct(browser, data.PS488Data.ProductName, data.PS488Data.Excess, data.PS488Data.ProductID, data.PS488Data.ProductPrice, data.PS488Data.ProductLhcPrice);
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