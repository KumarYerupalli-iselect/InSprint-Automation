/** Night Watch Browser */
import { NightwatchBrowser } from "nightwatch";
/**Utils Object */
import {helperUtils} from "../utilities/helperUtils";

export const homeloanswebpage = {

    elements : {
        homeLoans : '(//span[text()="Home Loans"]/../..)[1]',
        startCompareBtn : '(//a[text()="Start Comparing "])[2]',
        compareHomeLoansBtn : '(//a[@data-name="CRO Modulle Home loans"])[1]',
        UpdatedParaText : '//h2[text()="Compare home loans the easy way"]/../p'
    },

    /**
     * Clicks on Home Loans Icon
     * @param browser Nightwatch Browser
     */
    clickOnHoamLoansIcon(browser : NightwatchBrowser) {
        helperUtils.click(browser, 'useXpath', this.elements.homeLoans, 'Home Loans Icon is Present on iSelect Home Page and Clicking on It.');
    },

    /**
     * Clicks on Start Compare Button
     * @param browser Nightwatch Browser
     */
    clickOnStartCompareBtn(browser : NightwatchBrowser) {
        helperUtils.click(browser, 'useXpath', this.elements.startCompareBtn, 'Clicking on Start Compare Button');
    },

    /** Validates the Lendi Updated URL */
    validateLendiUrl(browser:NightwatchBrowser, LendiUrl : string) {
        browser.assert.urlEquals(LendiUrl, 'Validation Successful.. Lendi URL is Updated.');
    },

    /**
     * Validates the Home Loans Text
     */
    validateHomeLoansText(browser:NightwatchBrowser, updatedLendiText : string) {
        browser.assert.containsText(this.elements.UpdatedParaText, updatedLendiText, 'Validation Successful.. Lendi Para is Updated');
        helperUtils.click(browser, 'useXpath', this.elements.compareHomeLoansBtn, 'Clicking on Compare Home Loans Button');
    }



}