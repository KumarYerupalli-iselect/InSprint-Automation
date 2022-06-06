/** Data Object */
import * as data from '../../appData/Sprint19Data.json';
/** NightWatch Browser */
import { NightwatchBrowser } from "nightwatch";
/** telco Page Object */
import {telcoSfdcPage} from "../../pageObjects/telco_SFDC_page";


module.exports = {

    /**
     * Tickets Covered :
     */
    'PS-222_Create_a_NewProvider_and_add_the_logo_Exetel': function (browser: NightwatchBrowser) {
        /** Launches the SFDC Url */
        browser.url(data.PS222Data.SfdcUatUrl);
        /** Login to SFDC Application */
        telcoSfdcPage.loginToSFDC(browser, data.PS222Data.Username, data.PS222Data.Password);
        //browser.execute("document.body.style.zoom='80%'");
        /** Selects the Section */
        //telcoSfdcPage.selectSection(browser, data.PS222Data.Section);
        telcoSfdcPage.closeOpenedtab(browser);
        /** Saerches for customer */
        telcoSfdcPage.searchAccount(browser, data.PS222Data.FirstName);
        /** Creates New account */
        //telcoSfdcPage.createNewAccount(browser, data.PS222Data.Saluatation, data.PS222Data.FirstName, data.PS222Data.LastName, data.PS222Data.PreferredContactMethod, data.PS222Data.Email);
        /** Creates New Oppurtunity */
        telcoSfdcPage.createNewOppurtunity(browser, data.PS222Data.Vertical);
        /** Creates New Needs Analysis */
        telcoSfdcPage.createNewNeedAnalysis(browser, data.PS222Data.LeadSource, data.PS222Data.Address, data.PS222Data.ImpFeature, data.PS222Data.TypeOfHouse, data.PS222Data.InternetUsage, data.PS222Data.CurrentProvider, data.PS222Data.TypeOfContract, data.PS222Data.OwnOrRent, data.PS222Data.MoveInProperty);
        /** Validates the Exetel Provider in Filter Section and Selects it */
        telcoSfdcPage.validateAndSelectProviderInRecommPage(browser, data.PS222Data.Provider);
        /** Validates the Exetel Product */
        telcoSfdcPage.validateExetelProduct(browser, data.PS222Data.ExtraValueNBNProdPrice);
    },

    /**
     * Runs Before Each Test Case
     * @param browser NightWatch Browser
     */
     beforeEach: function (browser: NightwatchBrowser) {
        // browser
        //     .resizeWindow(1400,900)
           browser.maximizeWindow()
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