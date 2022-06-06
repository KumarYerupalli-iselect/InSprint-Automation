/** NightWatch Browser */
import { NightwatchBrowser } from "nightwatch";
/** telco Page Object */
import {energywebpage} from "../../pageObjects/energy_WEB_page";
/** Sprint 20 Data */
/** Data Object */
import * as data from '../../appData/Sprint21Data.json';


module.exports = {

    /**
     * Tickets Covered : PS-351	(TECH)[Energy - Web] Simply Energy CAF orders to accommodate for a + symbol
     */
    'PS-351	(TECH)[Energy - Web] Simply Energy CAF orders to accommodate for a + symbol': function (browser: NightwatchBrowser) {
        /** Clicks on Home Loans Icon in Home Page */
        energywebpage.clickOnElecAndGasIcon(browser);
        /** Entering the Address */
        energywebpage.enterAddress(browser, data.Ps351Data.PostCode);
        /** Clicking on Address Option */
        energywebpage.clickOnAddressOption(browser, data.Ps351Data.Address);
        /** Selecting 'ELECTRICITY & GAS' option in "What are you looking to compare?" Question */
        energywebpage.clickOnLookToCompOpts(browser, data.Ps351Data.LookingToCompareOpts[0]);
        /** Selecting 'My Home' option in " What type of property? " Question */
        energywebpage.clickOnTypeOfPropertyOpts(browser, data.Ps351Data.TypeOfPropertyOpts[0]);
        /** Selecting 'Own' option in " Do you own or rent the property? " Question */
        energywebpage.clickOnOwnOrRentPropOpts(browser, data.Ps351Data.ownOrRentPropertyOprt[0]);
        /** Selecting 'No' option in " Are you moving into this property? " Question */
        energywebpage.clickOnMoveIntoThisPropOpts(browser, data.Ps351Data.movingToHouseOpts[1]);
        /** Selecting 'YES' option in " Are you moving into this property? " Question */
        energywebpage.clickOnMoveIntoThisPropOpts(browser,data.Ps351Data.movingToHouseOpts[0]);
        /** Fills the MoveIn Date */
        energywebpage.fillMoveInDate(browser);
        /** Clicks on 'YES' option in Connect to Broadband */
        energywebpage.clickOnConnToBBOpts(browser, data.Ps351Data.ConnectionToBBOpts[0]);
        /** Clicks on 'YES' Option in 'Do you have rooftop solar panels?' */
        energywebpage.clicksOnRoofTopPanelOpts(browser, data.Ps351Data.SolarPanelOpts[0])
        /** Selectes the Elec Provider from 'Who is your current electricity provider?' Question */
        energywebpage.selectElecProvFromList(browser, data.Ps351Data.ElecProvider[0]);
        /** Clicks on "Medium" Electricity Usage  */
        energywebpage.selectElecUsage(browser, data.Ps351Data.ElecUsageOpt[1]);
        /** Selects the Gas Provider */
        energywebpage.selectGasProvFromList(browser, data.Ps351Data.GasProvider[0]);
        /** Clicks on "Medium" Gas Usage  */
        energywebpage.selectGasUsage(browser, data.Ps351Data.GasUsageOpt[1]);
        /** Clicks on Compliance Checkbox */
        energywebpage.clickOnComplianceCB(browser);
        /** Clicks on Terms & Conditions Checkbox */
        energywebpage.clickOnTermsAndCOnditionsCB(browser);
        /** Clicks on Continue Button  */
        energywebpage.clickOnContinueBtn(browser);
        /** Enters the details in Your details Page */
        energywebpage.enterYourDetails(browser, data.Ps351Data.FullName, data.Ps351Data.MobileNo, data.Ps351Data.Email);
        /** Clicks on view results button */
        energywebpage.clickOnViewResultsBtn(browser);
        /** Validates the product is present or not */
        energywebpage.validateProductPresentInResultsPage(browser);
        
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