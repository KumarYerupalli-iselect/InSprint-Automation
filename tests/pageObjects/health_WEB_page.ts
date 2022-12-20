import { NightwatchBrowser } from "nightwatch";
import {helperUtils} from "../utilities/helperUtils";
import * as data from "../appData/Sprint22Data.json";
import { inputDatas } from "../configFiles/global";



/**
 * Health Web Page
 */
export const healthWebPage = {

    elements: {
        coverDropdown: '#type-select',
        postcodeFld: '//input[@name="postcode"]',
        coverType : `//span[text()='${data.PS386Data.memebershipCoverType[0]}']`,
        submitButton: '//button[@type="submit"]',
        covertype: "(//div[@id='type-select']/descendant::label/span)",
        aboutYouPageHeader :"//h2[text()='About you']",

        bupaPartnerLink : '//a[@href="/health-insurance/bupa/"]',

        /** Needs Page Objects */
        currentlyNotCoveredType: "//p[text()='Currently not covered']/../..",
        minimalCoverOption: `(//div[@class="form-row HI-CC-qs-container"]/div[2]/label/descendant::p)[2]`,
        DOBField: "(//input[@placeholder='dd/mm/yyyy'])[1]",
        partnerDOBField: "(//input[@placeholder='dd/mm/yyyy'])[2]",
        LHCWording: "//div[@id='coverNLHC']/div",
        incomeTier: "(//p[text()='$90,000 and under'])[2]/../../..",
        singleParentTier: "(//p[text()='$180,001 to $210,000'])[8]/../../..",
        wholeFamilytier:"(//p[text()='$180,001 to $210,000'])[5]/../../..",
        rebatePercentage: "(//span[text()='We will display a 24.608% rebate.'])[1]",
        LearnMoreTxtLink: "(//a[text()='Learn more.'])[1]",
        aplDisclaimerCheckbox: "#aplDisclaimer",
        ContinueBtn: "//input[@value='Continue']",
        AdultDependantHeader: "//h2[text()='Adult Dependants']",
        adultDependantCheckBox: '#sf2_healthClientSession_adultDependanttrue',
        isPartnerCoveredByHealthFundCheckbox:'#sf2_healthClientSession_ptnPrevHealthFundNo',
        siteFeedBackBtn: "//a[text()='Site Feedback']",
        feedbackPopupHeader: `//h2[contains(text(),"We'd love to know what you think of our website so we can improve it!")]`,
        schedulleACallBtn:"//a[@id='infoFooterCallMe']",

        customizeYourCoverHeader: "//h2[text()='Customise your cover']",
        customizeYourHospitalCoverHeader: "#customiseYourCoverDiv > h2",
        customizeYourExtrasCoverHeader: "#extrasCoverMainDiv > h2",
        hospitalPlusExtraCover: "#hospitalCoverWithExtrasDivBtn",
        hospitalPlusCover: "#hospitalCoverDivBtn",
        alternatehospitalCover:"#sf3_hospitalCover",
        hospitaladdbenefit:"#sf3 > div:nth-child(3) > div > div > div:nth-child(2) > div.is-hospitalCover-sub-container > label > span.is-text",
        alternateextrasCover:"#sf3_extrasCover",
        extrasaddbenefit:"#sf3 > div:nth-child(3) > div > div > div:nth-child(3) > div.is-extrasCover-sub-container > label > span.is-text",
        Basic:"#hospitalCoverDiv > div.is-col-main > div.col.is-low > p",
        Bronze: "#hospitalCoverDiv > div.is-col-main > div.col.is-basic > p",
        Silver:"#hospitalCoverDiv > div.is-col-main > div.col.is-medium > p",
        Gold: "#hospitalCoverDiv > div.is-col-main > div.col.is-high > p",
        ExtraCover: "#extraCoverDivBtn",
        Dentalbenefit: "#extrasCoverItemsDiv > label:nth-child(1)",
        Majorbenefit: "#extrasCoverItemsDiv > label:nth-child(2)",
        Opticalbenefit: "#extrasCoverItemsDiv > label:nth-child(3)",
        checkboxParticipatinfun: "//input[@name='healthClientSession.disclaimer']",
        continueBtn: "#sf3-submit",
        yourprioredit: "#yourDetailsSideBarDiv > div.hrc-results-left-col.sf3_summary > div > div.is-m-col > span > i",
        yourNameFld: "//input[@id='projectWhiteName']",
        mobilenumberFld: "//input[@id='mobileField']",
        emailIDFld: "//input[@id='emailAddress']",
        submitBtn: "#sumbitsf4",
        saveCriteiaPopup: "//div[@id='teaching-bubble-popup']",
        optical: "//*[@id='extrasCoverItemsDiv']/label[3]",
        closeSaveCriteria:"//div[@id='teaching-bubble-popup']/div/div[1]",
        healthIcon : '(//a[@href="/health-insurance/"]//div)[1]',

        /** Results Page PO */

        editResultsBtn : '//a[text()="[ Edit Settings ]"]',
        deselectBtn : '//input[@id="deselectAllVendors"]',
        partnersCheckBox : `//label[text()='${data.PS386Data.Partner[0]}']/../div/input`,
        showProdNamesCB : '//h3[text()="Show product names"]/../div[1]/input',
        showProdIdsCB : '(//input[@name="healthClientSession.devModeHelper.showProductId"])[1]',
        editSettSubmitBtn : '//input[@id="DevMode_execute_0"]',

        selectBronzeCoverDot : '//li[@id="bronze-dot"]//span',
        priceDisplay : '(//label[text()="Annually"]//div//input)[1]',
        polPerProvDD : '(//select[@name="healthClientSession.maxProductsPerFund"])[1]',
        allProvOpt : '(//option[text()="all"])[1]',
        incomeTierDD : '(//select[@id="incometier-select"])[1]',
        customizeSubmitBtn : '(//div[@id="large-left-col-btn-container"]//div//input)[1]',

        adultDependantsHeader : '//h2[text()="Adult Dependants"]',
        adultDependantCB : '//input[@value="yes"]',
        productPrice : '//td[@data-new-policy-id="231125"]/div/div[2]/div/span',
        productLhcPrice : '//td[@data-new-policy-id="231125"]/div/div[2]/div[2]',

        /** Personal Details */
        persDetEditBtn : '(//p[text()="YOUR SEARCH"]/../..//span[@id="l-eidt-yourdetails"])[1]',
        addressClearBtn : '//div[@id="clearbox_btn"]',
        editAddressPlaceHolder : '//input[@name="healthClientSession.homeAddress"]',
        editDOBPlaceholder : '(//input[@name="dob"])[1]',
        editPartnersDob : '(//input[@name="dob"])[2]',
        editFormUpdateBtn : '//h2[text()="Your Details"]/../../div[3]//input[@value="Update"]',
        editFormCancelBtn : '//h2[text()="Your Details"]/../../div[3]//input[@value="Cancel"]',
        partnerCoveredByHealthFund : '//input[@value="Yes"]',
        adultDependantDOB : '(//input[@name="dependentDOB0"])[1]',

        bupaPartnerText : '//div[@class="visual-editor"]'
     },

    /**
     * Edits the Results Based on Partner
     */
    editResultsBasedOnPartner(browser:NightwatchBrowser, partner : string) {
        helperUtils.click(browser, 'useXpath', this.elements.editResultsBtn, 'Clicking on Edit Results Button');
        browser.pause(5000);
        browser.frame(null);
        browser.frame(0);
        helperUtils.click(browser, 'useXpath', this.elements.deselectBtn, 'Deselecting all the Funds');
        helperUtils.click(browser, 'useXpath', '//label[text()="'+ partner +'"]/../div/input', 'Selected Partner : ' +partner);
        helperUtils.click(browser, 'useXpath', this.elements.showProdNamesCB, 'Selected Yes to show the product names');
        helperUtils.click(browser, 'useXpath', this.elements.showProdIdsCB, 'Selected Yes to show the product ID');
        
        helperUtils.click(browser, 'useXpath', this.elements.editSettSubmitBtn, 'Clicked on Submit Button');
        browser.frameParent();
    },

    /**
     * Customize Personal Details
     */
     customizePersonalDetails(browser:NightwatchBrowser, 
        membershipType : string, addressChange : boolean, dobChange : boolean, 
        partnerdobChange:boolean, newEditAddressCode?:string, newEditAddress?: string , 
        newEditDOB? : string, partnerCoveredByFund?: string, adultDependantOpt?: string, 
        adultDepandantDOB?: string) { 

        helperUtils.click(browser, 'useXpath', this.elements.persDetEditBtn, 'Edit button is visible in Personal Details and clicking on it.');
        browser.pause(2000);
        if(membershipType == 'Just for me - male') {
            browser.doubleClick('//select[@id="healthClientSession.membershipType"]');
            browser.click('//option[text()="'+ membershipType +'"]');
            if(addressChange == true) {
                helperUtils.click(browser, 'useXpath', this.elements.addressClearBtn, 'Clicked on Adress clear Button');
                helperUtils.enterKeys(browser, 'useXpath', this.elements.editAddressPlaceHolder, newEditAddressCode, ' Entered Adddress Code : '+newEditAddressCode);
                helperUtils.click(browser, 'useXpath', '//div[text()="'+ newEditAddress +'"]', 'Clicked on th Adddress : ' +newEditAddress );
                browser.click('//h2[text()="Your Details"]');
            } else {
                console.log("No Address Changed");
            }

            if(dobChange == true) {
                browser.clearValue(this.elements.editDOBPlaceholder);
                helperUtils.enterKeys(browser, 'useXpath', this.elements.editDOBPlaceholder, newEditDOB, ' Edited with DOB : '+newEditDOB);
            } else {
                console.log ("No DOB Changed");
            }

            helperUtils.click(browser, 'useXpath', this.elements.editFormUpdateBtn, 'Clicked on Update Button in Edit Form');

        } else if (membershipType == 'For me and my partner') {
            browser.doubleClick('//select[@id="healthClientSession.membershipType"]');
            browser.click('//option[text()="'+ membershipType +'"]');

            if(dobChange == true) {
                browser.clearValue(this.elements.editDOBPlaceholder);
                helperUtils.enterKeys(browser, 'useXpath', this.elements.editDOBPlaceholder, newEditDOB, ' Edited with DOB : '+newEditDOB);
            } else {
                console.log ("No DOB Changed");
            }

            if(partnerdobChange == true) {
                browser.clearValue(this.elements.editPartnersDob);
                helperUtils.enterKeys(browser, 'useXpath', this.elements.editPartnersDob, newEditDOB, ' Edited with DOB for Partner : '+newEditDOB);
            } else {
                console.log ("No Partner DOB Changed");
            }
            //browser.execute('window.scrollTo(0,document.body.scrollHeight)');
            helperUtils.moveToElement(browser, this.elements.editFormUpdateBtn, 'Moved to Update Button');
            helperUtils.click(browser, 'useXpath', '//input[@value="'+ partnerCoveredByFund +'"]', ' Selcted '+partnerCoveredByFund+ ' Option for Partners Previous Covered Health Fund');
            if(addressChange == true) {
                helperUtils.click(browser, 'useXpath', this.elements.addressClearBtn, 'Clicked on Adress clear Button');
                helperUtils.enterKeys(browser, 'useXpath', this.elements.editAddressPlaceHolder, newEditAddressCode, ' Entered Adddress Code : '+newEditAddressCode);
                helperUtils.click(browser, 'useXpath', '//div[text()="'+ newEditAddress +'"]', 'Clicked on th Adddress : ' +newEditAddress );
                browser.click('//h2[text()="Your Details"]');
                browser.pause(1000);
                browser.click('//h2[text()="Your Details"]');
            } else {
                console.log("No Address Changed");
            }
            helperUtils.click(browser, 'useXpath', this.elements.editFormUpdateBtn, 'Clicked on Update Button in Edit Form');

        } else if (membershipType == 'For my whole family') {
            browser.doubleClick('//select[@id="healthClientSession.membershipType"]');
            browser.click('//option[text()="'+ membershipType +'"]');

            if(dobChange == true) {
                browser.clearValue(this.elements.editDOBPlaceholder);
                helperUtils.enterKeys(browser, 'useXpath', this.elements.editDOBPlaceholder, newEditDOB, ' Edited with DOB : '+newEditDOB);
            } else {
                console.log ("No DOB Changed");
            }

            if(partnerdobChange == true) {
                browser.clearValue(this.elements.editPartnersDob);
                helperUtils.enterKeys(browser, 'useXpath', this.elements.editPartnersDob, newEditDOB, ' Edited with DOB for Partner : '+newEditDOB);
            } else {
                console.log ("No Partner DOB Changed");
            }
            helperUtils.moveToElement(browser, this.elements.editFormUpdateBtn, 'Moved to Update Button');
            helperUtils.click(browser, 'useXpath', '//input[@value="'+ partnerCoveredByFund +'"]', ' Selcted '+partnerCoveredByFund+ ' Option for Partners Previous Covered Health Fund');
            
            if(adultDependantOpt == 'Yes') {
                helperUtils.click(browser, 'useXpath', '//input[@name="healthClientSession.adultDependant" and @value="yes"]', 'Clicked on Adult Dependant Yes Option');
                helperUtils.enterKeys(browser, 'useXpath', this.elements.adultDependantDOB, adultDepandantDOB, 'Entered Adult Dependant DOB : ' +adultDepandantDOB);
                browser.doubleClick('(//select[@name="dependentType0"])[1]');
                helperUtils.click(browser, 'useXpath', '(//option[text()="Part-time tertiary student"])[1]', 'Selected Part time tertiary Student Option');
            } else {
                helperUtils.click(browser, 'useXpath', '//input[@name="healthClientSession.adultDependant" and @value="no"]', 'Clicked on Adult Dependant no Option');
            }

            if(addressChange == true) {
                browser.click('//option[text()="'+ membershipType +'"]');
                helperUtils.click(browser, 'useXpath', this.elements.addressClearBtn, 'Clicked on Adress clear Button');
                helperUtils.enterKeys(browser, 'useXpath', this.elements.editAddressPlaceHolder, newEditAddressCode, ' Entered Adddress Code : '+newEditAddressCode);
                //helperUtils.click(browser, 'useXpath', '//div[text()="'+ newEditAddress +'"]', 'Clicked on th Adddress : ' +newEditAddress );
                browser.doubleClick('//div[text()="'+ newEditAddress +'"]');
                browser.pause(3000);
                browser.click('//h2[text()="Your Details"]');
            } else {
                console.log("No Address Changed");
            }

            helperUtils.moveToElement(browser, this.elements.editFormUpdateBtn, 'Moved to Update Button');
            helperUtils.click(browser, 'useXpath', this.elements.editFormUpdateBtn, 'Clicked on Update Button in Edit Form');
        } else if (membershipType == 'For my family - single parent') {
            browser.doubleClick('//select[@id="healthClientSession.membershipType"]');
            browser.click('//option[text()="'+ membershipType +'"]');

            if(dobChange == true) {
                browser.clearValue(this.elements.editDOBPlaceholder);
                helperUtils.enterKeys(browser, 'useXpath', this.elements.editDOBPlaceholder, newEditDOB, ' Edited with DOB : '+newEditDOB);
            } else {
                console.log ("No DOB Changed");
            }
            helperUtils.moveToElement(browser, this.elements.editFormUpdateBtn, 'Moved to Update Button');
            
            if(adultDependantOpt == 'yes') {
                helperUtils.click(browser, 'useXpath', '//input[@name="healthClientSession.adultDependant" and @value="'+ adultDependantOpt +'"]', 'Clicked on Adult Dependant '+adultDependantOpt+' Option');
                helperUtils.enterKeys(browser, 'useXpath', this.elements.adultDependantDOB, adultDepandantDOB, 'Entered Adult Dependant DOB : ' +adultDepandantDOB);
                browser.doubleClick('(//select[@name="dependentType0"])[1]');
                helperUtils.click(browser, 'useXpath', '(//option[text()="Part-time tertiary student"])[1]', 'Selected Part time tertiary Student Option');
            } else {
                helperUtils.click(browser, 'useXpath', '//input[@name="healthClientSession.adultDependant" and @value="'+ adultDependantOpt +'"]', 'Clicked on Adult Dependant '+adultDependantOpt+' Option');
            }

            if(addressChange == true) {
                helperUtils.click(browser, 'useXpath', this.elements.addressClearBtn, 'Clicked on Adress clear Button');
                helperUtils.enterKeys(browser, 'useXpath', this.elements.editAddressPlaceHolder, newEditAddressCode, ' Entered Adddress Code : '+newEditAddressCode);
                //helperUtils.click(browser, 'useXpath', '//div[text()="'+ newEditAddress +'"]', 'Clicked on th Adddress : ' +newEditAddress );
                browser.doubleClick('//div[text()="'+ newEditAddress +'"]')
                // browser.click('//h2[text()="Your Details"]');
                // browser.pause(2000);
                // browser.click('//h2[text()="Your Details"]');
            } else {
                console.log("No Address Changed");
            }

            helperUtils.moveToElement(browser, this.elements.editFormUpdateBtn, 'Moved to Update Button');
            helperUtils.click(browser, 'useXpath', this.elements.editFormUpdateBtn, 'Clicked on Update Button in Edit Form');
        }
        
    },

    /**
     * customizes the cover based on inputs
     */
    customizeCoverDetails(browser:NightwatchBrowser, coverType: string, priceType : string,  incomeTierType : string) {
        /** Selects the Type of Cover Eg : Bronze, gold, silver */
        helperUtils.moveToElement(browser, '//li[@id="'+ coverType +'"]//span', " Moved to Element");
        //helperUtils.click(browser, 'useXpath', '//li[@id="'+ coverType +'"]//span', 'Selected ' + coverType + ' Cover');
        helperUtils.moveToElement(browser, '//a[@title="Terms & Conditions"]', " Moved to Element");
        /** selects the mode of price Eg : Fortnightly, Monthly, Annually */
        helperUtils.click(browser, 'useXpath', '(//label[text()="'+priceType+'"]//div//input)[1]', 'Selected ' + priceType + ' Mode of Price');
        helperUtils.moveToElement(browser, '//a[@title="Terms & Conditions"]', " Moved to Element");
        /** Selects the Number of Providers to be displayed on results page */
        helperUtils.click(browser, 'useXpath', this.elements.polPerProvDD, 'clicked on policy per provider dropdown.');
        helperUtils.moveToElement(browser, '//a[@title="Terms & Conditions"]', " Moved to Element");
        helperUtils.click(browser, 'useXpath', this.elements.allProvOpt, 'Selected Show all providers option');
        /** Selects the Income Tier Mode Eg : Tier 1, Tier 2*/
        helperUtils.moveToElement(browser, '//a[@title="Terms & Conditions"]', " Moved to Element");
        helperUtils.click(browser, 'useXpath', this.elements.incomeTierDD, 'clicked on income tier dropdown.');
        helperUtils.click(browser, 'useXpath', '(//option[text()="'+ incomeTierType +'"])[1]', 'Selected ' + incomeTierType +' income tier option');
        helperUtils.click(browser, 'useXpath', this.elements.customizeSubmitBtn, 'Clicked on Submit Button in Customize cover section');
    },
   
    /**
     * Clicks on Health Icon
     * @param browser Nightwatch Browser
     */
     clickOnHealthIcon(browser : NightwatchBrowser) {
        helperUtils.click(browser, 'useXpath', this.elements.healthIcon, 'Health Icon is Present on iSelect Home Page and Clicking on It.');
    },

    /** Fills the Details in Home Page and navigates to Your Needs Page */
    fillHomePage(browser: NightwatchBrowser, coverType : string, postCode : string, address : string){
        helperUtils.waitForElementPresentToClick(browser,'useCss', this.elements.coverDropdown, 20000, 'Membership Dropdown clicked');
        helperUtils.click(browser, 'useXpath', '//span[text()="'+ coverType +'"]', 'Selecting the' + coverType + ' MembershipCoverType');
        helperUtils.enterInputValue(browser, this.elements.postcodeFld, postCode);
        helperUtils.click(browser, 'useXpath', '//div[contains(text(), "'+ address +'")]', 'Selecting the Address : ' + address);
        helperUtils.click(browser, 'useXpath', this.elements.submitButton, 'Clicking on StartBtn');
        browser.pause(inputDatas.shortWaits);
        return  helperUtils.getAndVerifyPageTitle(browser, data.PS386Data.aboutPageTitle);
    },

    selectCoverTypeCoverConsideration(browser: NightwatchBrowser){
        helperUtils.click(browser, 'useXpath', this.elements.currentlyNotCoveredType, 'Currently Not Covered option is selected');
        helperUtils.click(browser, 'useXpath', this.elements.minimalCoverOption, "Coming off my Parents Policy option is selected");      
    },

    /**Fills the Your Needs Page in Health */
    fillYourNeedsPage(browser: NightwatchBrowser, age:string, incomeTier : string, incomeCode : string, adultDepOpt?: string){
        this.selectCoverTypeCoverConsideration(browser);
        browser.pause(3000);
        helperUtils.enterInputValueAndClickEnter(browser, this.elements.DOBField, age);
        browser.click('//p[text()="Your Government Rebate"]');
        helperUtils.click(browser, 'useXpath', "(//p[text()='"+ incomeTier +"'])["+ incomeCode +"]/../../..", "Selecting the Income Tier"); 

        helperUtils.moveToElement(browser, this.elements.ContinueBtn, "Moved to Down of the Page");
        browser.isVisible(this.elements.adultDependantsHeader, (result) => {
            let value = result.value;
            if(value == true) {
                helperUtils.click(browser, 'useXpath', '//input[@value="'+ adultDepOpt +'"]', 'Selected ' + adultDepOpt + ' option');
            } else {
                console.log("No Adult Dependant.. Sorry");
            }
        })

        helperUtils.click(browser,'useCss', this.elements.aplDisclaimerCheckbox, 'Checking Terms and Conditions and Privacy collection Notice');
        helperUtils.click(browser, 'useXpath', this.elements.ContinueBtn, 'Clicking on Continue Button');   
     },

     /**Fills the Your Priorities Page in Health */
     fillYourPrioritiesPage(browser: NightwatchBrowser, cover : string, coverLevel ?: string){
        if(cover == 'Hospital + Extras') {
            helperUtils.click(browser,'useXpath','//span[text()="'+ cover +'"]/..', cover + ' Cover option is selected')
            helperUtils.assertElementStatus(browser,'visible',this.elements.customizeYourHospitalCoverHeader, 'Customize your hospital cover header is visible', 'useCss');
            browser.useCss().getText(this.elements.customizeYourHospitalCoverHeader, (text)=>{
                console.log(" Printing the Text : " + text.value);
            })
            helperUtils.click(browser,'useXpath','//p[text()="'+ coverLevel +'"]/../..', coverLevel + ' category is selected');
            helperUtils.click(browser,'useXpath',this.elements.checkboxParticipatinfun, 'Clicking on Participating Funds check box');
            helperUtils.click(browser,'useCss',this.elements.continueBtn, 'Clicking on Continue Button');
        } else {
            helperUtils.click(browser,'useXpath','//span[text()="'+ cover +'"]/..', cover + ' Cover option is selected');
            helperUtils.click(browser,'useXpath',this.elements.checkboxParticipatinfun, 'Clicking on Participating Funds check box');
            helperUtils.click(browser,'useCss',this.elements.continueBtn, 'Clicking on Continue Button');
        }
        
    },

    /**Fills the Your details Page in Health */
    fillYourDetailsPage(browser:NightwatchBrowser) {
        helperUtils.enterKeys(browser, 'useXpath', this.elements.yourNameFld, 'iSelect test', 'Entering the Name : iSelect test');
        helperUtils.enterKeys(browser, 'useXpath', this.elements.mobilenumberFld, '0400 000 000', 'Entering the Mobile Number : 0400 000 000');
        helperUtils.enterKeys(browser, 'useXpath', this.elements.emailIDFld, 'kumar.yerupalli@iselect.com.au', 'Entering the Mail ID : kumar.yerupalli@iselect.com.au');
        browser.pause(3000);
        helperUtils.click(browser,'useCss', this.elements.submitBtn, 'Submit Button');
    },

    /** Validates the Results Page */
    validateResultsPage(browser:NightwatchBrowser) {
        browser.useXpath().waitForElementVisible(this.elements.saveCriteiaPopup, inputDatas.extendedwaits, 500, false, )
        browser.refresh();
        //     if(isVisible.value){
        //         helperUtils.click(browser,'useXpath', this.elements.closeSaveCriteria, "Closed the Save Search Criteria Pop-up");
        //         browser.execute('window.scrollTo(0,-250)');
        //     }
        // }, 'Save Search Criteria Popup is visible');
    },

    validateProductLHCPrice(browser: NightwatchBrowser, productID : string, productLhcPrice : string) {
        browser.useXpath().getText('//td[@data-new-policy-id="'+ productID +'"]/div/div[2]/div[2]',(text)=>{
            console.log(text.value);
            var lhcActualText = text.value
            lhcActualText = lhcActualText.toString();
            lhcActualText = lhcActualText.substr(3,6);
            lhcActualText = lhcActualText.trim();
            console.log(lhcActualText);
            browser.assert.equal(lhcActualText, productLhcPrice, "Actual LHC Price "+ lhcActualText + " Matches with LHC Price "+productLhcPrice);
        })
    },

    validateProductPrice(browser:NightwatchBrowser, productName : string, excess : string, productID : string, productPrice : string, coverType ? : string) {
        if(coverType == 'Extras Only') {
            browser.pause(5000);
            browser.useXpath().getText('//td[@data-new-policy-id="'+ productID +'"]/div/div[2]/div/span',(text)=>{
            console.log(text.value);
            var priceActualText = text.value
            priceActualText = priceActualText.toString();
            priceActualText = priceActualText.substr(1,7);
            priceActualText = priceActualText.trim();
            console.log(priceActualText);
            browser.assert.equal(priceActualText, productPrice, "Actual Price "+ priceActualText + " Matches with Expected Price "+productPrice);
            });
        } else {
            helperUtils.click(browser, 'useXpath', '//span[text()="'+ productName +'"]/../div/select/option[text()="$500 Excess"]', 'Product Excess is Selected');
            helperUtils.click(browser, 'useXpath', '//span[text()="'+ productName +'"]/../div/select/option[text()="'+ excess +'"]', excess + ' is Selected');
            browser.pause(5000);
            browser.useXpath().getText('//td[@data-new-policy-id="'+ productID +'"]/div/div[2]/div/span',(text)=>{
                console.log(text.value);
                var priceActualText = text.value
                priceActualText = priceActualText.toString();
                priceActualText = priceActualText.substr(1,7);
                priceActualText = priceActualText.trim();
                console.log(priceActualText);
                browser.assert.equal(priceActualText, productPrice, "Actual Price "+ priceActualText + " Matches with Expected Price "+productPrice);
            });
        }
        
    },

    validateProductDualPricing(browser:NightwatchBrowser, productName : string, excess : string, productID : string, productPrice : string) {
        helperUtils.click(browser, 'useXpath', '//span[text()="'+ productName +'"]/../div/select/option[text()="$500 Excess"]', 'Product Excess is Selected');
        helperUtils.click(browser, 'useXpath', '//span[text()="'+ productName +'"]/../div/select/option[text()="'+ excess +'"]', excess + ' is Selected');
        browser.pause(2000);
        browser.useXpath().getText('//td[@data-new-policy-id="'+ productID +'"]/div[2]/div/strong',(text)=>{
            console.log(text.value);
            var priceActualText = text.value
            priceActualText = priceActualText.toString();
            priceActualText = priceActualText.substr(1,7);
            priceActualText = priceActualText.trim();
            console.log(priceActualText);
            browser.assert.equal(priceActualText, productPrice, "Actual Price "+ priceActualText + " Matches with Expected Price "+productPrice);
        });
    },

    validateProductLHCDualPricing(browser: NightwatchBrowser, productID : string, productLhcPrice : string) {
        browser.useXpath().getText('//td[@data-new-policy-id="'+ productID +'"]/div[2]/div[2]',(text)=>{
            console.log(text.value);
            var lhcActualText = text.value
            lhcActualText = lhcActualText.toString();
            lhcActualText = lhcActualText.substr(3,6);
            lhcActualText = lhcActualText.trim();
            console.log(lhcActualText);
            browser.assert.equal(lhcActualText, productLhcPrice, "Actual LHC Price "+ lhcActualText + " Matches with LHC Price "+productLhcPrice);
        })
    },

    async verifyAndValidateProduct(browser:NightwatchBrowser, productName : string, excess : string, productID : string, productPrice : string, productLhcPrice : string, coverType ?: string) {
        if(await browser.waitForElementPresent('//span[text()="' + productName + '"]', 5000, 500, undefined, undefined, 'Product is Visible')) {
            if(coverType == 'Extras Only') {
                this.validateProductPrice(browser, productName, excess, productID, productPrice, coverType);
            } else {
                this.validateProductPrice(browser, productName, excess, productID, productPrice);
                this.validateProductLHCPrice(browser, productID, productLhcPrice);
            }
        } else {
            console.log("Product Not Visible");
        } 
    },

    async verifyAndValidateProductDualPricing(browser:NightwatchBrowser, productName : string, excess : string, productID : string, productPrice : string, productLhcPrice : string) {
        if(await browser.waitForElementPresent('//span[text()="'+ productName +'"]', 5000, 500, undefined, undefined, 'Product is Visible')) {
            this.validateProductDualPricing(browser, productName, excess, productID, productPrice);
            this.validateProductLHCDualPricing(browser, productID, productLhcPrice);
        } else {
            console.log("Product Not Visible");
        } 
    },

    validateBUPAPartnersPage(browser:NightwatchBrowser) {
        helperUtils.click(browser, 'useXpath', this.elements.bupaPartnerLink, 'Clicked on Bupa Partner');
        browser.pause(2000);
        browser.getText(this.elements.bupaPartnerText, (res) => {
            browser.waitForElementVisible(this.elements.bupaPartnerText, 5000, 500, undefined, undefined, 'Text is : '+res.value);
        })  
    }

  };
  
