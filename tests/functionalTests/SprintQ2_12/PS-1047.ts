/** NightWatch Browser */
import { NightwatchBrowser } from "nightwatch";
/** Data */
import * as data from "../../appData/SprintQ2_12.json";
/** Energy Page Object */
import {energywebpage} from "../../pageObjects/energy_WEB_page";


module.exports = {

    /**
     * Tickets Covered : PS-1047	[Energy - CMS] Update the footer in the Energy needs analysis and results page
     */
    'PS-1047 [Energy - CMS] Update the footer in the Energy needs analysis and results page': function (browser: NightwatchBrowser) {
        energywebpage.clickOnElecAndGasIcon(browser);
        /** Entering the Address */
        energywebpage.enterAddress(browser, data.EnergyCommonData.PostCode);
        /** Clicking on Address Option */
        energywebpage.clickOnAddressOption(browser, data.EnergyCommonData.Address);
        /** Validates the Partner Awards and ECC Logo removed or not */
        energywebpage.validatePartnerAwardsAndECCLogoRemove(browser);
        /** Selecting 'ELECTRICITY & GAS' option in "What are you looking to compare?" Question */
        energywebpage.clickOnLookToCompOpts(browser, data.EnergyCommonData.LookingToCompareOpts[0]);
        /** Selecting 'My Home' option in " What type of property? " Question */
        energywebpage.clickOnTypeOfPropertyOpts(browser, data.EnergyCommonData.TypeOfPropertyOpts[0]);
        /** Selecting 'Own' option in " Do you own or rent the property? " Question */
        energywebpage.clickOnOwnOrRentPropOpts(browser, data.EnergyCommonData.ownOrRentPropertyOpt[1]);
        /** Selecting 'No' option in " Are you moving into this property? " Question */
        energywebpage.clickOnMoveIntoThisPropOpts(browser, data.EnergyCommonData.movingToHouseOpts[1]);
        /** Selecting 'NO' option in " Are you moving into this property? " Question */
        energywebpage.clickOnMoveIntoThisPropOpts(browser, data.EnergyCommonData.movingToHouseOpts[1]);
        /** Clicks on "No" option in "Do you have a recent electricity bill available? *" */
        energywebpage.clickOnRecentElecBillQtnOpts(browser, data.EnergyCommonData.RecElecBillOpts[1]);
        /** Clicks on "No" option in "Do you have a recent gas bill available? *" */
        energywebpage.clickOnRecentGasBillQtnOpts(browser, data.EnergyCommonData.RecGasBillOpts[1]);
        /** Clicks on 'YES' Option in 'Do you have rooftop solar panels?' */
        energywebpage.clicksOnRoofTopPanelOpts(browser, data.EnergyCommonData.SolarPanelOpts[0])
        /** Selectes the "People Energy" Elec Provider from 'Who is your current electricity provider?' Question */
        energywebpage.selectElecProvFromList(browser, data.EnergyCommonData.ElecProvider[16]);
        /** Clicks on "Medium" Electricity Usage  */
        energywebpage.selectElecUsage(browser, data.EnergyCommonData.ElecUsageOpt[0]);
        /** Selects the Gas Provider */
        energywebpage.selectGasProvFromList(browser, data.EnergyCommonData.GasProvider[1]);
        /** Clicks on "Medium" Gas Usage  */
        energywebpage.selectGasUsage(browser, data.EnergyCommonData.GasUsageOpt[0]);
        /** Clicks on Compliance Checkbox */
        energywebpage.clickOnComplianceCB(browser);
        /** Clicks on Terms And Conditions CheckBox */
        energywebpage.clickOnTermsAndCOnditionsCB(browser);
        /** Clicks on Continue Button  */
        energywebpage.clickOnContinueBtn(browser);
        /** Validates the Partner Awards and ECC Logo removed or not */
        energywebpage.validatePartnerAwardsAndECCLogoRemove(browser);
        /** Fills the Your details Page */
        energywebpage.validateAndFillYourDetPage(browser);
        /** Validates the Partner Awards and ECC Logo removed or not */
        energywebpage.validatePartnerAwardsAndECCLogoRemove(browser);
        /** Selecting Partner from results page */
        energywebpage.selectPartnerFromResultsPage(browser);
        /** Validates the Partner Awards and ECC Logo removed or not */
        energywebpage.validatePartnerAwardsAndECCLogoRemove(browser);
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
            .url('https://wwwuat.iselect.com.au/');
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