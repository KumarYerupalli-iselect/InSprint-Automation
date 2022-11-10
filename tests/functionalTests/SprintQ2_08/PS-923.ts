/** NightWatch Browser */
import { NightwatchBrowser } from "nightwatch";
/** telco Page Object */
import {wordpresswebpage} from "../../pageObjects/wordpress_WEB_page";
/** Data */
import * as data from "../../appData/SprintQ2_08.json";


module.exports = {

    /**
     * Tickets Covered : PS-923	[WP - All Verticals] Update text on iSelect search options as per compliance
     */
    'PS-923	[WP - All Verticals] Update text on iSelect search options as per compliance': function (browser: NightwatchBrowser) {
        wordpresswebpage.ValidateTextChangeInVerticalsWordPress(browser, true);
        for(let i=0; i<data.PS923Data.URL.length; i++){
            wordpresswebpage.launchUrl(browser, data.PS923Data.URL[i]);
            wordpresswebpage.ValidateTextChangeInVerticalsWordPress(browser);
        }
       

        
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