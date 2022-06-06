/** NightWatch Browser */
import { NightwatchBrowser } from "nightwatch";
/** telco Page Object */
import {energywebpage} from "../../pageObjects/energy_WEB_page";
/** Sprint 20 Data */
/** Data Object */
import * as data from '../../appData/Sprint20Data.json';


module.exports = {

    /**
     * Tickets Covered : PS-325	Update Omni channel chat script in Energy web page in UAT
     */
    'PS-325_UpdateOmniChannel_chat_script_in_EnergyWeb_page_in_UAT': function (browser: NightwatchBrowser) {
        /** Clicks on Home Loans Icon in Home Page */
        energywebpage.clickOnElecAndGasIcon(browser);
        /** Entering the Address */
        energywebpage.enterAddress(browser, data.Ps264Data.PostCode);
        /** Clicking on Address Option */
        energywebpage.clickOnAddressOption(browser, data.Ps264Data.Address);
        /** Selecting 'ELECTRICITY & GAS' option in "What are you looking to compare?" Question */
        energywebpage.clickOnLookToCompOpts(browser, data.Ps325Data.LookingToCompareOpts[0]);
        /** Selecting 'My Home' option in " What type of property? " Question */
        energywebpage.clickOnTypeOfPropertyOpts(browser, data.Ps325Data.TypeOfPropertyOpts[0]);
        /** Selecting 'Own' option in " Do you own or rent the property? " Question */
        energywebpage.clickOnOwnOrRentPropOpts(browser, data.Ps325Data.ownOrRentPropertyOprt[0]);
        /** Selecting 'No' option in " Are you moving into this property? " Question */
        energywebpage.clickOnMoveIntoThisPropOpts(browser, data.Ps325Data.movingToHouseOpts[1]);
        /** Selecting 'YES' option in " Are you moving into this property? " Question */
        energywebpage.clickOnMoveIntoThisPropOpts(browser,data.Ps325Data.movingToHouseOpts[0]);
        /** Fills the MoveIn Date */
        energywebpage.fillMoveInDate(browser);
        /** Clicks on 'YES' option in Connect to Broadband */
        energywebpage.clickOnConnToBBOpts(browser, data.Ps325Data.ConnectionToBBOpts[0]);
        /** Clicks on 'YES' Option in 'Do you have rooftop solar panels?' */
        energywebpage.clicksOnRoofTopPanelOpts(browser, data.Ps325Data.SolarPanelOpts[0])
        /** Selectes the Elec Provider from 'Who is your current electricity provider?' Question */
        energywebpage.selectElecProvFromList(browser, data.Ps325Data.ElecProvider[0]);
        /** Clicks on "Medium" Electricity Usage  */
        energywebpage.selectElecUsage(browser, data.Ps325Data.ElecUsageOpt[1]);
        /** Selects the Gas Provider */
        energywebpage.selectGasProvFromList(browser, data.Ps325Data.GasProvider[0]);
        /** Clicks on "Medium" Gas Usage  */
        energywebpage.selectGasUsage(browser, data.Ps325Data.GasUsageOpt[1]);
        /** Clicks on Compliance Checkbox */
        energywebpage.clickOnComplianceCB(browser);
        /** Clicks on Terms & Conditions Checkbox */
        energywebpage.clickOnTermsAndCOnditionsCB(browser);
        /** Clicks on Continue Button  */
        energywebpage.clickOnContinueBtn(browser);
        /** Enters the details in Your details Page */
        energywebpage.enterYourDetails(browser, data.Ps325Data.FullName, data.Ps325Data.MobileNo, data.Ps325Data.Email);
        /** Clicks on view results button */
        energywebpage.clickOnViewResultsBtn(browser);
        browser.pause(5000);
        browser.refresh();
        /** Validates the Omni Channel chat window */
        energywebpage.validateContactUsChatWindow(browser);
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