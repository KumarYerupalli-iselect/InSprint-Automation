/** Night Watch Browser */
import { NightwatchBrowser } from "nightwatch";
/**Utils Object */
import {helperUtils} from "../utilities/helperUtils";


export const telcoSfdcPage = {

  elements : {
    usernameField : '//input[@id="username"]',
    passwordField : '//input[@id="password"]',
    loginBtn : '//input[@id="Login"]',
    showNavigationMenuBtn : '//button[@title="Show Navigation Menu"]',
    newBtn : '//a[@title="New"]',
    personAct : '//span[text()="Person Account"]/../span[1]',
    nextBtn : '//span[text()="Next"]/..',
    salutationDD : '//button[@name="salutation"]',
    firstName : '//input[@name="firstName"]',
    lastName : '//input[@name="lastName"]',
    preferredContactDD : '//button[contains(@aria-label,"Preferred Contact Method")]',
    email : '//input[@name="PersonEmail"]',
    saveBtn : '//button[text()="Save"]',
    mobilePhone : '//input[@name="PersonMobilePhone"]',
    oppurtunityNewBtn : '//span[@title="Opportunities"]/../../../../../../div[3]/div/ul/li/a',
    needAnalysisNewBtn : '//span[@title="Needs Analysis"]/../../../../../../div[3]/div/runtime_platform_actions-actions-ribbon/ul/li/runtime_platform_actions-action-renderer/runtime_platform_actions-executor-page-reference/slot/slot/lightning-button/button',
    leadSourceDD : '//span[@id="needAnalysisPageId:needAnalysisformId:leadsourcePanel"]//div/div[2]/select',
    addressField : '//input[@id="needAnalysisPageId:needAnalysisformId:j_id54:j_id55:address"]',
    impFeatureDD : '//select[@name="needAnalysisPageId:needAnalysisformId:yourNeedId:0:j_id122"]',
    typeOfHouseHoldDD : '//select[@name="needAnalysisPageId:needAnalysisformId:yourNeedId:1:j_id122"]',
    internetUsageDD : '//select[@name="needAnalysisPageId:needAnalysisformId:yourNeedId:2:j_id122"]',
    
    currentProviderDD : '//select[@name="needAnalysisPageId:needAnalysisformId:yourNeedId:4:j_id122"] ',
    typeOfContractDD : '//select[@name="needAnalysisPageId:needAnalysisformId:yourNeedId:5:j_id122"] ',
    ownOrRentDD : '//select[@name="needAnalysisPageId:needAnalysisformId:yourNeedId:6:j_id122"] ',
    moveIntoPropertyDD : '//select[@name="needAnalysisPageId:needAnalysisformId:yourNeedId:7:j_id122"]',
    moveInDateField : '//input[@class="slds-input datePickerCls hasDatepicker"]',
    dateFieldNextBtn : '//span[text()="Next"]/..',
    viewRecommBtn : '//a[text()="View Recommendations"]',

    allPlansBtn : '//span[text()="All Plans"]/..',
    exetelCB : '//li[text()="Exetel"]/input',
    applyFilterBtn : '//input[@value="Apply Filter"]',
    exetelLogo : '//img[@alt="Exetel.png"]',
    extraNBNProduct : '//td[text()="Extra-value nbn"]',
    exetelExtraNBNProdPrice : '//td[text()="Extra-value nbn"]/../../tr[3]/td/div[1]',

    searchBtn : '//button[text()="Search..."]',
    saerchBar : '//input[@placeholder="Search..."]',
    categoryDD : '//input[@role="combobox"]',
    categoryOpt : '(//span[@title="Accounts"])[1]',

    tabCloseBtn : '(//button[contains(@title,"Close")])[1]'

  },

  loginToSFDC(browser : NightwatchBrowser, uName : string, pwrd : string) {
    helperUtils.enterKeys(browser, 'useXpath', this.elements.usernameField, uName, 'Entering Username ' + uName);
    helperUtils.enterKeys(browser, 'useXpath', this.elements.passwordField, pwrd, 'Entering Password ' + pwrd);
    helperUtils.click(browser, 'useXpath', this.elements.loginBtn, 'Login Button is visible clicking on it.');
  },

  selectSection(browser:NightwatchBrowser, section : string) {
    helperUtils.click(browser, 'useXpath', this.elements.showNavigationMenuBtn, 'Clicking on Navigation Button');
    helperUtils.click(browser, 'useXpath', '//a[@data-itemid="' + section + '"]', section + ' Section Selected');
  },

  searchAccount(browser:NightwatchBrowser, accountName : string) {
    //browser.waitForElementPresent(this.elements.searchBtn, 20000, undefined, undefined, 'Waiting for Element to be present');
    browser.waitForElementPresent(this.elements.searchBtn, 20000, 2000, undefined, undefined, 'Waiting for Element to be present');
    helperUtils.click(browser, 'useXpath', this.elements.searchBtn, 'Clicked on Search Button');
    browser.pause(2000);
    helperUtils.click(browser, 'useXpath', this.elements.categoryDD, 'Clicked on Category DropDown');
    browser.pause(2000);
    helperUtils.click(browser,'useXpath', this.elements.categoryOpt, 'Selected Accounts Category');
    browser.pause(2000);
    helperUtils.enterKeys(browser, 'useXpath', this.elements.saerchBar, accountName, 'Enetered Account Name : ' + accountName);
    browser.pause(2000);
    helperUtils.click(browser, 'useXpath', '//mark[text()="'+ accountName +'"]/../../../../..', accountName + ' Account Selected');
  },

  createNewAccount(browser:NightwatchBrowser, salutation : string, firstName : string, lastName:string, preferredCtct : string, email :string) {
    helperUtils.click(browser, 'useXpath', this.elements.newBtn, 'Clicking on New Button');
    helperUtils.click(browser, 'useXpath', this.elements.personAct, 'Selecting Person Account Option');
    helperUtils.click(browser, 'useXpath', this.elements.nextBtn, 'Clicking on Next Button');
    helperUtils.click(browser, 'useXpath', this.elements.salutationDD, 'Clicked on Salutation Dropdown');
    helperUtils.click(browser, 'useXpath', '//span[text()="' + salutation + '"]', salutation + ' Saluation Selected');

    helperUtils.enterKeys(browser, 'useXpath', this.elements.firstName, firstName, 'Entering First Name : ' + firstName);
    helperUtils.enterKeys(browser, 'useXpath', this.elements.lastName, lastName, 'Entering Last Name : ' + lastName);

    helperUtils.moveToElement(browser, this.elements.mobilePhone, 'Moved to Preferred Contact Method DropDown');
    helperUtils.click(browser, 'useXpath', this.elements.preferredContactDD, 'Clicked on Preferred Contact method Dropdown');
    helperUtils.click(browser, 'useXpath', '//span[text()="' + preferredCtct + '"]', preferredCtct + ' Preferred Contact Method Selected');
    helperUtils.enterKeys(browser, 'useXpath', this.elements.email, email, 'Entering Email : ' + email);
    helperUtils.click(browser, 'useXpath', this.elements.saveBtn, 'Clicked on Save Button');
  },

  createNewOppurtunity(browser:NightwatchBrowser, vertical:string) {
    helperUtils.click(browser, 'useXpath', this.elements.oppurtunityNewBtn, 'New Oppurtunity Button is Presnt and Clicking on It.');
    helperUtils.moveToElement(browser, '//span[text()="'+ vertical +'"]/../span', 'Moved to ' + vertical + ' Oppurtunity.');
    helperUtils.click(browser, 'useXpath', '//span[text()="'+ vertical +'"]/../span', vertical + ' Vertical Oppurtunity Selected');
    helperUtils.click(browser, 'useXpath', this.elements.nextBtn, 'Clicked on Next Button');
  },

  createNewNeedAnalysis(browser:NightwatchBrowser, leadSource : string, address : string, impFeature : string, typeOfHouse : string, internetUsage : string, currentProvider : string, typeOfContract : string, ownOrRent : string, moveInProperty : string) {
    //browser.pause(10000);
    helperUtils.click(browser, 'useXpath', this.elements.needAnalysisNewBtn, 'New Need Analysis Button is Presnt and Clicking on It.');

    browser.pause(5000);
    browser.frame(2, function(result) {
      console.log(result);
    });

    helperUtils.moveToElement(browser, this.elements.leadSourceDD, 'Moved to Lead Source DD');
    helperUtils.click(browser, 'useXpath', this.elements.leadSourceDD, 'clicked on lead source drop down.');
    helperUtils.click(browser, 'useXpath', '//option[text()="'+ leadSource +'"]', leadSource + ' Lead Source is selected.');
    browser.pause(5000);

    helperUtils.enterKeys(browser, 'useXpath', this.elements.addressField, address, 'Entered Address : ' + address);
    helperUtils.click(browser, 'useXpath', '//li[text()="' + address + '"]', "Selected the Address from drop down");
    browser.pause(2000);
    browser.click('(//div[@class="slds-p-horizontal--small slds-p-vertical--small slds-size--1-of-1 slds-medium-size--2-of-3 slds-large-size--2-of-4"])[14]')
    browser.pause(2000);

    helperUtils.click(browser, 'useXpath', this.elements.impFeatureDD, 'clicked on most important feature drop down.');
    browser.pause(2000);
    helperUtils.click(browser, 'useXpath', '//option[text()="'+ impFeature +'"]', impFeature + ' important feature is selected.');
    browser.pause(2000);

    helperUtils.click(browser, 'useXpath', this.elements.typeOfHouseHoldDD, 'clicked on Type of Houshold you live in drop down.');
    browser.pause(2000);
    helperUtils.click(browser, 'useXpath', '//option[text()="'+ typeOfHouse +'"]', typeOfHouse + ' Type of House is selected.');
    browser.pause(2000);

    helperUtils.click(browser, 'useXpath', this.elements.internetUsageDD, 'clicked on Internet Usage drop down.');
    browser.pause(2000);
    helperUtils.click(browser, 'useXpath', '//option[text()="'+ internetUsage +'"]', internetUsage + ' Internet Usage is selected.');
    browser.pause(2000);

    helperUtils.click(browser, 'useXpath', this.elements.currentProviderDD, 'clicked on Current Provider drop down.');
    browser.pause(2000);
    helperUtils.click(browser, 'useXpath', '//option[text()="'+ currentProvider +'"]', currentProvider + ' Current Provider is selected.');
    browser.pause(2000);

    helperUtils.click(browser, 'useXpath', this.elements.typeOfContractDD, 'clicked on Type of COntract drop down.');
    browser.pause(2000);
    helperUtils.click(browser, 'useXpath', '//option[text()="'+ typeOfContract +'"]', typeOfContract + ' Type of Contract is selected.');
    browser.pause(2000);

    helperUtils.click(browser, 'useXpath', this.elements.ownOrRentDD, 'clicked on Own Or Rent drop down.');
    browser.pause(2000);
    helperUtils.click(browser, 'useXpath', '//option[text()="'+ ownOrRent +'"]', ownOrRent + ' option is selected.');
    browser.pause(3000);

    helperUtils.click(browser, 'useXpath', this.elements.moveIntoPropertyDD, 'clicked on Move in to Property drop down.');
    browser.pause(2000);
    helperUtils.click(browser, 'useXpath', '(//option[text()="'+ moveInProperty +'"])[2]', moveInProperty + ' option is selected.');
    browser.pause(3000);

    helperUtils.click(browser, 'useXpath', this.elements.moveInDateField, 'clicked on Move in Date Field.');
    browser.pause(2000);
    helperUtils.click(browser, 'useXpath', this.elements.dateFieldNextBtn, 'Clicked on Next Button in Date field');
    browser.pause(2000);
    helperUtils.click(browser, 'useXpath', '//a[text()="29"]', ' Selected date.');
    browser.pause(2000);

    helperUtils.click(browser, 'useXpath', this.elements.viewRecommBtn, 'Clicked on View Recommendations Button');

  },


  validateAndSelectProviderInRecommPage(browser:NightwatchBrowser, provider : string) {
    browser.pause(20000);
    browser.frame(2, function(result) {
      console.log(result);
    });
    helperUtils.moveToElement(browser, '//li[text()="'+ provider +'"]', 'Moved to Element');
    helperUtils.assertElementStatus(browser, 'visible', '//li[text()="'+ provider +'"]', provider + ' Provider is Present in Filter Section');
    helperUtils.click(browser, 'useXpath', this.elements.allPlansBtn, 'Clicked on All Plans Button');

    helperUtils.click(browser, 'useXpath', '//li[text()="'+ provider +'"]/input', 'Clicked on ' + provider + 'Checkbox in filter.');
    helperUtils.click(browser, 'useXpath', this.elements.applyFilterBtn, 'Clicked On Apply filter button');
  },

  validateExetelProduct(browser:NightwatchBrowser, expectedPrice : string) {
    helperUtils.assertElementStatus(browser, 'visible', this.elements.exetelLogo, 'Validation Passed : Exetel Logo is Visible');
    helperUtils.assertElementStatus(browser, 'visible', this.elements.extraNBNProduct, 'Validation Passed : Exetel Extra NBN Product is Visible');
    //var actualPrice = browser.useuseXpath().getText(this.elements.exetelExtraNBNProdPrice);
    browser.useXpath().assert.containsText(this.elements.exetelExtraNBNProdPrice, expectedPrice, 'Validation Passed : Exetel Extra NBN Product Price is correct');
    //console.log("Actual Price is : " + actualPrice);
    //browser.useuseXpath().assert.equal(actualPrice, expectedPrice, actualPrice + ' : Actual Price and ' + expectedPrice + ' : Expected Price Matches');
  },

  closeOpenedtab(browser:NightwatchBrowser) {
      if(browser.useXpath().assert.visible(this.elements.tabCloseBtn, 'Close Button is Visible.')) {
        helperUtils.click(browser,'useXpath', this.elements.tabCloseBtn, 'Clicked on Close button in Tab');
      } else {
        
      }
  }



  // selectLeadSource(browser:NightwatchBrowser, leadSource : string) {
  //   helperUtils.click(browser, 'useXpath', this.elements.leadSourceDD, 'clicked on lead source drop down.');
  //   helperUtils.click(browser, 'useXpath', '//option[text()="'+ leadSource +'"]', leadSource + ' Lead Source is selected.');
  // },





}