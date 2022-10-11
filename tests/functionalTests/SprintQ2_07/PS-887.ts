/** NightWatch Browser */
import { NightwatchBrowser } from "nightwatch";
/** telco Page Object */
import {homeloanswebpage} from "../../pageObjects/homeLoans_WEB_page";
/** Data */
import * as data from "../../appData/SprintQ2_07.json";


module.exports = {

    /**
     * Tickets Covered : PS-887	[Lendi - WP] Update URL and content for Lendi Home Loans VHP and related pages
     */
    'PS-887	[Lendi - WP] Update URL and content for Lendi Home Loans VHP and related pages': function (browser: NightwatchBrowser) {
        /** Home Loans URL */
        browser.url('https://wwwuat.iselect.com.au/home-loans/');
        /** Clicks on Start Compare Button */
        homeloanswebpage.clickOnStartCompareBtn(browser);
        /** Validates the Lendi Updated URL*/
        homeloanswebpage.validateLendiUrl(browser, data.PS887Data.LendiURL);
        /** Updated Lendi URL validations */
        browser.url('https://wwwuat.iselect.com.au/home-loans/variable-rate-home-loans/');
        /** Validates the Lendi Text */
        homeloanswebpage.validateHomeLoansText(browser, data.PS887Data.LendiText);
        /** Validates the Lendi Updated URL*/
        homeloanswebpage.validateLendiUrl(browser, data.PS887Data.LendiURL);
        /** Updated Lendi URL validations */
        browser.url('https://wwwuat.iselect.com.au/home-loans/fixed-rate-home-loans/');
        /** Validates the Lendi Text */
        homeloanswebpage.validateHomeLoansText(browser, data.PS887Data.LendiText);
        /** Validates the Lendi Updated URL*/
        homeloanswebpage.validateLendiUrl(browser, data.PS887Data.LendiURL);
        /** Updated Lendi URL validations */
        browser.url('https://wwwuat.iselect.com.au/home-loans/interest-only/');
        /** Validates the Lendi Text */
        homeloanswebpage.validateHomeLoansText(browser, data.PS887Data.LendiText);
        /** Validates the Lendi Updated URL*/
        homeloanswebpage.validateLendiUrl(browser, data.PS887Data.LendiURL);
        /** Updated Lendi URL validations */
        browser.url('https://wwwuat.iselect.com.au/home-loans/interest-rates/');
        /** Validates the Lendi Text */
        homeloanswebpage.validateHomeLoansText(browser, data.PS887Data.LendiText);
        /** Validates the Lendi Updated URL*/
        homeloanswebpage.validateLendiUrl(browser, data.PS887Data.LendiURL);

        /** Updated Lendi URL validations */
        browser.url('https://wwwuat.iselect.com.au/home-loans/lenders-mortgage-insurance/');
        /** Validates the Lendi Text */
        homeloanswebpage.validateHomeLoansText(browser, data.PS887Data.LendiText);
        /** Validates the Lendi Updated URL*/
        homeloanswebpage.validateLendiUrl(browser, data.PS887Data.LendiURL);

        /** Updated Lendi URL validations */
        browser.url('https://wwwuat.iselect.com.au/home-loans/calculators/refinancing-calculator/');
        /** Validates the Lendi Text */
        homeloanswebpage.validateHomeLoansText(browser, data.PS887Data.LendiText);
        /** Validates the Lendi Updated URL*/
        homeloanswebpage.validateLendiUrl(browser, data.PS887Data.LendiURL);

        /** Updated Lendi URL validations */
        browser.url('https://wwwuat.iselect.com.au/home-loans/calculators/home-loan-calculator/');
        /** Validates the Lendi Text */
        homeloanswebpage.validateHomeLoansText(browser, data.PS887Data.LendiText);
        /** Validates the Lendi Updated URL*/
        homeloanswebpage.validateLendiUrl(browser, data.PS887Data.LendiURL);

        /** Updated Lendi URL validations */
        browser.url('https://wwwuat.iselect.com.au/home-loans/calculators/stamp-duty-calculator/');
        /** Validates the Lendi Text */
        homeloanswebpage.validateHomeLoansText(browser, data.PS887Data.LendiText);
        /** Validates the Lendi Updated URL*/
        homeloanswebpage.validateLendiUrl(browser, data.PS887Data.LendiURL);

        /** Updated Lendi URL validations */
        browser.url('https://wwwuat.iselect.com.au/home-loans/calculators/principal-and-interest-calculator/');
        /** Validates the Lendi Text */
        homeloanswebpage.validateHomeLoansText(browser, data.PS887Data.LendiText);
        /** Validates the Lendi Updated URL*/
        homeloanswebpage.validateLendiUrl(browser, data.PS887Data.LendiURL);

        /** Updated Lendi URL validations */
        browser.url('https://wwwuat.iselect.com.au/home-loans/calculators/borrowing-power-calculator/');
        /** Validates the Lendi Text */
        homeloanswebpage.validateHomeLoansText(browser, data.PS887Data.LendiText);
        /** Validates the Lendi Updated URL*/
        homeloanswebpage.validateLendiUrl(browser, data.PS887Data.LendiURL);

        /** Updated Lendi URL validations */
        browser.url('https://wwwuat.iselect.com.au/home-loans/calculators/extra-repayment-calculator/');
        /** Validates the Lendi Text */
        homeloanswebpage.validateHomeLoansText(browser, data.PS887Data.LendiText);
        /** Validates the Lendi Updated URL*/
        homeloanswebpage.validateLendiUrl(browser, data.PS887Data.LendiURL);


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