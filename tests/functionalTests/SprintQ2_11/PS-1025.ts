/** NightWatch Browser */
import { NightwatchBrowser } from "nightwatch";
/** telco Page Object */
import {homeContentsPage} from "../../pageObjects/homeAndContents_WEB_page";
/** Data */
import * as data from "../../appData/SprintQ2_11.json";




module.exports = {

    /**
     * Tickets Covered : PS-1025	[Home & Contents - Web] Adding additional items to cover in needs analysis
     */
    'PS-1025 [Home & Contents - Web] Adding additional items to cover in needs analysis': function (browser: NightwatchBrowser) {
       /** Clicking on Home and Contents Icon */
       homeContentsPage.clickOnHomeAndConIcon(browser);
       /** Enters the Address */
       homeContentsPage.enterAddress(browser, data.PS1025Data.Address);
       browser.pause(2000);
       /** Selecting  " Looking for New Cover  " Option */
       homeContentsPage.selectWhatAreYouLookingQtn(browser, data.PS1025Data.WhatAreYouLookingCoverOpts[0]);
       browser.pause(2000);
       /** Selecting " Home Owner " Option */
       homeContentsPage.selectAreYouTheQtn(browser, data.PS1025Data.AreYouTheOpts[0]);
       browser.pause(2000);
       /** Selecting " Yes " Option */
       homeContentsPage.selectDoYouHaveMortageQtn(browser, data.PS1025Data.DoYouHaveMortageOpts[1]);
       browser.pause(2000);
       /** Selecting " Owner Occupied " Option */
       homeContentsPage.selectHowPropOccupiedQtn(browser, data.PS1025Data.PropertyOccupOpts[0]);
       browser.pause(2000);
       /** Filling Move In Year */
       homeContentsPage.fillMoveInYear(browser, data.PS1025Data.MoveInYear);
       browser.pause(2000);
       /** Selecting "Home and Contents" Option */
       homeContentsPage.selectWhtTypeOfInsuranceQtn(browser, data.PS1025Data.TypeOfInsuranceOpts[0]);
       browser.pause(2000);
       /** Policy Date Question is Visible */
       homeContentsPage.selectPolicyStartDateQtn(browser);
       browser.pause(2000);
       /** Selecting " No " Option */
       homeContentsPage.selectStrataComplexQtn(browser, data.PS1025Data.StrataComplexOpts[1]);
       browser.pause(2000);
       /** Selecting " Freestanding Unit " Option */
       homeContentsPage.selecTypeOfPropInsuringQtn(browser, data.PS1025Data.TypeOfPropInsuringOpts[0]);
       browser.pause(2000);
       /** Selecting " Brick Veneer " Option */
       homeContentsPage.selecMainConstMaterialQtn(browser, data.PS1025Data.MaterialConstrOpts[0]);
       browser.pause(2000);
       /** Selecting  " Cement Tiles " Option */
       homeContentsPage.selecMainConstMaterialOfRoofQtn(browser, data.PS1025Data.MaterialConstOfRoofOpts[0]);
       browser.pause(2000);
       /** Selecting " After - 2011 " option */
       homeContentsPage.selecYearHomeBuiltQtn(browser, data.PS1025Data.HomeBuiltOpts[2]);
       browser.pause(2000);
       /** Selecting " Active 24 hour Back to Base Monitored Alarm " Option*/
       homeContentsPage.selecSecurtiyFeaturesQtn(browser, data.PS1025Data.SecurityFeaturesOpts[0]);
       browser.pause(2000);
       /** Selecting "No" option  */
       homeContentsPage.selecIsThereBusinessActivityQtn(browser, data.PS1025Data.businessActivityOpts[1]);
       browser.pause(2000);
       /** Filling Total Cost to Build Home Question */
       homeContentsPage.fillTotalCostToBuildQtn(browser, data.PS1025Data.TotalCostToBuildHome);
       browser.pause(2000);
       /** Filling Total Cost to Replace Contents Question */
       homeContentsPage.fillTotalCostToReplaceContentsQtn(browser, data.PS1025Data.TotalCostToReplaceContents);
       browser.pause(2000);
       /** Selects the "No" option */
       homeContentsPage.selectExtrasCoverOnSpecContsQtn(browser, data.PS1025Data.ExtrasCoverOnSpecCntsOpts[1]);
       browser.pause(2000);
       /** Selects the "No" option */
       homeContentsPage.selecOptCoverForItemsQtn(browser, data.PS1025Data.OptionalCoverForItemsOpts[1]);
       browser.pause(2000);
       /** Fills the Oldest Policy Holder DOB */
       homeContentsPage.fillPolicyHolderDOB(browser, data.PS1025Data.OldestPolicyHolderDOB);
       browser.pause(2000);
       /** Selects "No" Option */
       homeContentsPage.selectAreThereResidentsOlderQtn(browser, data.PS1025Data.AreThereOlderPolicyHolderOpts[1]);
       browser.pause(2000);
       /** Selects "No" Option */
       homeContentsPage.selectAnyOneAtHomeRetiredQtn(browser, data.PS1025Data.AnyOneAtHomeRetiredOpts[1]);
       browser.pause(2000);
       /** Selects "No" Option */
       homeContentsPage.selectLast5YearsBulgariesQtn(browser, data.PS1025Data.Last5BulgariesOpts[1]);
       browser.pause(2000);
       /** click on Terms and Conditions Checkbox */
       homeContentsPage.clickOnTermsAndCondCB(browser);
       /** Click on View Results Button */
       homeContentsPage.clickOnViewResultsBtn(browser);
       /** Fill Your Details form */
       homeContentsPage.fillYourDetailsForm(browser);
       browser.pause(20000);
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