/** Night Watch Browser */
import { NightwatchBrowser } from "nightwatch";
/**Utils Object */
import {helperUtils} from "../utilities/helperUtils";


export const carPage = {
  
  elements : {
    carIcon : '(//a[@href="/car-insurance/"]//div)[1]',
    huddleLogoHomePage : '//img[@src="https://wwwuat.iselect.com.au/content/uploads/2022/12/Huddle_colour_green.svg"]',
    seeOurPartnersBtn : '(//a[@href="/partners/"])[1]',
  },

    /**
     * Validates the Huddle Logo
     * @param browser Nightwatch Browser
     */
   validateHuddleLogoinHomeAndPartnersPage(browser : NightwatchBrowser) {
        helperUtils.click(browser, 'useXpath', this.elements.carIcon, 'Car Icon is Present on iSelect Home Page and Clicking on It.');
        helperUtils.verifyWebElementExistForInteraction(browser, 'isVisible', this.elements.huddleLogoHomePage, 10000, 1000, undefined, 'Validation Successful.. Huddle Logo is Visible in Home Page');
        helperUtils.click(browser, 'useXpath', this.elements.seeOurPartnersBtn, 'Clicked on See our Partners Button');
        helperUtils.moveToElement(browser, this.elements.huddleLogoHomePage, 'Moved to Huddle Logo');
        helperUtils.verifyWebElementExistForInteraction(browser, 'isVisible', this.elements.huddleLogoHomePage, 10000, 1000, undefined, 'Validation Successful.. Huddle Logo is Visible in Partners Page');
    },



}