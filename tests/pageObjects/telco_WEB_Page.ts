/** Night Watch Browser */
import { NightwatchBrowser } from "nightwatch";
/**Utils Object */
import {helperUtils} from "../utilities/helperUtils";


export const telcoPage = {
  
  elements : {
    internetIcon : '//span[text()="Internet"]/..',
    startBtn : '//a[text()="Start"]',
    /** Compare Broadband Page Header */
    cmpBBPageHeader : '//span[text()="Compare Broadband"]',
    /** Enter Your address Text */
    enterYurAddTxt : '//span[text()="Enter your address to check available broadband options."]',
    /** iSelect home Button */
    iselectHmeBtn : '//span[text()="Compare Broadband"]/../a',
    /** Address field placeholder */
    addField : '//input[@name="addresField"]',
    /** Address Field search options drop down */
    addFieldDD : '//div[contains(@ng-if, "bnc.LookupLoading")]',
    /** Submit Button */
    submitBtn : '//button[text()="Submit"]',
    /** cross Button in Address Search Bar */
    addCrossBtn : '//span[@ng-if="bnc.address.addressField.length > 0"]',
    /** Submit Button */
    postCodesubmitBtn : '//input[@name="postcode"]/../../../../div[6]/div/button',
    // /** Post code Search Bar */
    // postCodeField = async function(){return await browser.$('//input[@name="postcode"]');}
    // /** Post Code Drop Down */
    // postCodeDD = async function(){return await browser.$('//div[contains(@ng-if, "pmc.postcodeLookupLoading")]');}
    // /** Postcode option */
    // postCodeOpt = async function(postCodeOpt){return await browser.$('//span[text()="' + postCodeOpt + '"]');}
    // /** Post Code Search Bar Cross Button */
    // postCodeSearchCrossBtn = async function(){return await browser.$('//span[@ng-if="pmc.address.postcodeField.length > 0"]');}
    // /** Post Code Modal Close Button */
    // postCodeModalCloseBtn = async function(){return await browser.$('//span[contains(@class, "close-glyph")]');}
    // /** Post Code Modal Header */
    // postCodeModHeader = async function(){return await browser.$('//span[text()="Please enter your postcode"]');}
    // /** Post Code Modal description */
    // postCodeModDesc = async function(){return await browser.$('//span[text()="Please enter your postcode"]/../../../div[2]/div/p');}
    // /** Post Code Submitted Text */
    // postCodeSubmitText = async function(){return await browser.$('//div[@ng-if="bnc.postcodeSelected"]');}
    // /** Click Here link in Address */
    // clickHereBtn = async function(){return await browser.$('//span[text()="(click here)"]');}
    // /** Edit link in Address */
    // editBtn = async function(){return await browser.$('//span[text()=" (edit)"]');}
    // /** Address Error Message */
    // addErrMsg = async function(){return await browser.$('//div[@class="row address_error"]//div//p');}
    
    // /** Address Searcch Success Text */
    // addSearchText = async function(){return await browser.$('//span[@class="sub-text"]/..');}

    /**********************Features Question and Options Page Objects********************************/
    currentProviderDD : '//ol[@id="currentProvider"]/button',
    approvedProdListCB : '//div[@name="aplScriptConsent"]/a',
    tcCB : '//div[@name="confirmScriptConsent"]/a',
    nextBtn : '//button[text()="NEXT"]',
    
    yourDetailsHeader : '//h2[text()="Your Details"]',
    yourName : '//input[@name="yourName"]',
    mobileNo : '//input[@name="mobileNumber"]',
    emailAddr : '//input[@name="email"]',
    viewResultsBtn : '//button[@class="btn btn-primary"]',
    providerFilter : '(//button[@ng-click="br.toggleNewFilter(newFilter)"])[3]',
    applyBtnfromProvider : '//label[text()="Telstra"]/../../../../div[11]/button[@class="filter-actions-apply"]',
    exetelProductLogo : '//img[@title="Exetel"]',
    exetelProduct : '//img[@title="Exetel"]/..',
    homeloansIcon : '(//span[text()="Home Loans"]/..)[1]',
    /** Home Loans Page Header */
    homeLoansPageHeader : '//h1[text()="Compare Australian Home Loans"]',
    /** Lendi Credit Guide link */
    lendiCreditGuideLink : '//a[text()="Credit Guide"]'
  },


  clickOnInternetIcon(browser : NightwatchBrowser) {
    helperUtils.click(browser, 'useXpath', this.elements.internetIcon, 'Internet Icon is Present on iSelect Home Page and Clicking on It.');
  },

  clickOnHomeLoansIcon(browser : NightwatchBrowser) {
    helperUtils.click(browser, 'useXpath', this.elements.homeloansIcon, 'Home Loans Icon is Present on iSelect Home Page and Clicking on It.');
  },

  clickOnStartBtn(browser : NightwatchBrowser) {
    helperUtils.click(browser, 'useXpath', this.elements.startBtn, 'Start Button is Present on iSelect Home Page and Clicking on It.');
  },

  validateNeedsPageLoaded(browser: NightwatchBrowser) {
    helperUtils.verifyWebElementExistForInteraction(browser, 'present', this.elements.cmpBBPageHeader, 20000, 2000, undefined,'Compare Broadband -- Header is Present  ' );
  },

  enterAddress(browser:NightwatchBrowser, address : string) {
    helperUtils.enterKeys(browser, 'useXpath', this.elements.addField, address, 'Entering the address : ' + address);
    helperUtils.click(browser, 'useXpath', '//span[text()="' + address + '"]', address + ' Address selected.');
  },

  clickOnSubmitBtn(browser : NightwatchBrowser) {
    helperUtils.click(browser, 'useXpath', this.elements.submitBtn, 'Submit Button is Present and Clicking on It.');
  },

  /** Selects the Option Based on Data */
  selectOption(browser: NightwatchBrowser, option : string) {
    helperUtils.click(browser, 'useXpath', '//b[text()="' + option + '"]/../../input', option + ' Option selected.');
  },

  selectCurrentProvider(browser:NightwatchBrowser, opt:string) {
    helperUtils.click(browser, 'useXpath', this.elements.currentProviderDD, 'Current Provider Dropdown is Present and clicking on it.');
    helperUtils.click(browser, 'useXpath', '//span[text()="' + opt + '"]/..', opt + ' Option is Selected from Current provider Dropdown');
  },

  clickOnCBs(browser:NightwatchBrowser) {
    helperUtils.click(browser, 'useXpath', this.elements.approvedProdListCB, 'Clicking on Approved Product List Checkbox');
    helperUtils.click(browser, 'useXpath', this.elements.tcCB, 'Clicking on Terms and Conditions Checkbox');    
  },

  clickOnNextBtn(browser : NightwatchBrowser) {
    helperUtils.click(browser, 'useXpath', this.elements.nextBtn, 'Clicking on Next Button');
  },

  /** Enters the Name, Mobile number and DOB in Your details Page. */
  enterYourDetails(browser: NightwatchBrowser, name:string, mobileNo : string, email:string) {
    helperUtils.assertElementStatus(browser, 'visible', this.elements.yourDetailsHeader, 'Your Details Page is Loaded.. Header is visible');
    helperUtils.enterKeys(browser, 'useXpath', this.elements.yourName, name, name + ' Entered in Your name Field.');
    helperUtils.enterKeys(browser, 'useXpath', this.elements.mobileNo, mobileNo, mobileNo + ' Entered in Mobile Number Field.');
    helperUtils.enterKeys(browser, 'useXpath', this.elements.emailAddr, email, email + ' Entered in Email Field.');
    helperUtils.click(browser, 'useXpath', this.elements.viewResultsBtn, 'Clicked on View Results Button');
  },

  /** Selects the Provider based on data */
  selectProviderFromFilter(browser : NightwatchBrowser, providerName : string) {
    browser.pause(7000);
    helperUtils.click(browser, 'useXpath', this.elements.providerFilter, 'Provider Filter is Present and clicking on it.');
    helperUtils.click(browser, 'useXpath', '(//label[text()="' + providerName + '"]/../a)[1]', providerName + ' is Present in Filter section and Selecting the ' + providerName + ' Provider');
    helperUtils.click(browser, 'useXpath', this.elements.applyBtnfromProvider, 'Apply button is Visible clicking on it')
  },

  /** Validates the Exetel Products in result page*/
  validateExetelProduct(browser:NightwatchBrowser) {
    helperUtils.assertElementStatus(browser, 'visible', this.elements.exetelProductLogo, 'Validation Passed.. Exetel Logo is Present.');
    helperUtils.assertElementStatus(browser, 'visible', this.elements.exetelProduct, 'Validation Passed.. Exetel Product is Present.');
  },

  /** Validates the Home Loans Home Page Loaded or not*/
  validateHomeLoansPageLoad(browser:NightwatchBrowser) {
    helperUtils.assertElementStatus(browser, 'visible', this.elements.homeLoansPageHeader, 'Validation Passed.. Home Loans Page Loaded. Header is Visible.');
  },

  /** Validates and Click the Lendi Credit Guide Link on Home Page*/
  validateAndClickLendiCreditGuideLink(browser:NightwatchBrowser) {
    helperUtils.assertElementStatus(browser, 'visible', this.elements.lendiCreditGuideLink, 'Validation Passed.. Lendi Credit Guide is Visible.');
    helperUtils.click(browser, 'useXpath', this.elements.lendiCreditGuideLink, 'Lendi Credit Link is Present and clicking on it.');  
  }

};