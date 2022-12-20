/** Night Watch Browser */
import { NightwatchBrowser} from "nightwatch";
/**Utils Object */
import {helperUtils} from "../utilities/helperUtils";

export const energywebpage = {

    elements : {
        energyAddressBar : '//input[@id="address"]',
        elecAndGasIcon : '(//a[@href="/energy/"]//div)[1]',
        startBtn : '//button[text()="Start"]',
        callUsElement : '//a[text()="13 19 20"]',
        openingHoursLink : '//a[text()="Opening Hours"]',
        opeingHrsPage : '//div[@id="primary"]',
        errorPageHeader : '//h1[text()="Terribly Sorry about this."]',
        errorPageParaContent : '//h2[text()="We aren\'t able to offer you an energy comparision right now."]',

        approvedProductListLink : '//a[text()="Approved Product List"]',
        approvedProductListPopUp: '//h2[text()="Participating Providers and Plans for Comparison"]',
        header : '//h2[text()="Residential Providers"]',
        tcLink : '//a[text()="Terms and Conditions"]',
        tcPopup : '//h1[text()="Terms and conditions for the use of the iSelect website"]/..',
        privacyCollectionNoticeLink : '//a[text()="Privacy Collection Notice"]',
        privacyCollectionNoticePageTitle : 'iSelect - Privacy Collection Notice - Energy',
        privacyCollectionNoticeHeader : '//h1[text()="Privacy Collection Notice – Energy"]',
        frameCloseBtn : '//button[@title="Close (Esc)"]',

        preferToTalkText : '//p[@class="prefer-to-call"]//span',

        lookToCompareQtn : '         What are you looking to compare?                  ',
        elecAndGasOpt : '//span[text()="Electricity & Gas"]/../../input',
        elecOpt : '//span[text()=" Electricity"]/../../input',
        gasOpt : '//span[text()="Gas"]/../../input',

        typeOfPropertyQtn : '         What type of property?         ',
        myHomeOpt : '//span[text()="My home"]/../../input',
        myBusinessOpt : '//span[text()=" My business"]/../../input',

        ownOpt : '//label[text()="Own"]/../input',
        rentOpt : '//label[text()="Rent"]/../input',

        movingToHouseYesOpt : '//input[@id="movehouse"]',
        movintToHouseNoOpt : '//input[@id="compareplans"]',

        solarPanelYesOpt : '(//h2[text()="Your Electricity Details"]/../fieldset/div[1]/div[2]/div/div/input)[1]',
        solarPanelNoOpt:'(//h2[text()="Your Electricity Details"]/../fieldset/div[1]/div[2]/div/div/input)[2]',


        yourSummarySection : '//h2[text()="Your summary"]/..',
        continueBtn : '//input[@value="Continue"]',

        moveInDate : '//input[@id="datepicker"]',
        connectToBroadBandYesOption : '//label[text()="Yes"]/../input[@id="broadbandyesproperty"]',
        connectToBroadBandNoOption : '//label[text()="No"]/../input[@id="broadbandnoproperty"]',
        elecProvListDD : '//select[@id="elecproviderlist_usage"]',
        elecProvListOpt : '//select[@id="elecproviderlist_usage"]//option[text()="Cova U"]',

        gasProvListDD : '//select[@id="gasproviderlist_usage"]',
        gasProvListOpt : '//select[@id="gasproviderlist_usage"]//option[text()="ActewAGL"]',

        complianceCB : '//input[@name="Compliancecheckbox"]',
        termsAndConditionsCB : '//input[@name="privacycheckbox"]',

        /******************Your Details Page *********************/
        yourName : '//input[@name="fullName"]',
        mobileNo : '//input[@name="MobileNo"]',
        emailAdd : '//input[@name="EmailAddress"]',
        viewResultsBtn : '//input[@value="View Results"]',
        yourMobileNo : '//input[@name="MobileNo"]',
        yourEmail : '//input[@name="EmailAddress"]',
        backBtn : '//input[@value="BACK"]',

        /*****************Contact Us Chat Window ******************/
        contactUsBtn : '//span[@id="helpButtonSpan"]',
        cntUsChatForm : '//div[@class="formContent embeddedServiceSidebarForm"]',

        productOnresultPage : '(//span[text()="NSW Simply Energy Saver+ Ausgrid 28/19% ^"])[2]',

        simplyEnergyLogo : '//a[@href="/energy/energy-providers/simply-energy/"]//img',
        viewOurEnergyPartnersBtn : '//a[text()="View our energy partners"]',
        viewOurPartnerSimplyEnergyLogo : '//a[@href="/energy-providers/simply-energy/"]//img',

        didYouKnowSection : '//h2[text()="Did you know?"]/../../..',

        /**Compare page */
        comparePageHeader : '//h1[text()="Electricity & Gas Comparison"]',
        yourSearchHeader : '//h2[text()="SEARCH"]/..//h2[text()="YOUR"]',

        yourSearchSection : '//div[@id="urSum"]',
        saveSearchBtn : '//li[text()="Search saved"]',
        shareSearchBtn : '//a[text()="Share this search"]',
        providerSection : '//div[@id="refOpt"]//h2[text()="Provider"]/..',
        contAndEnergyFacSheetSection : '//div[@id="refOpt"]//h2[text()="Contract length "]/..',
        lookingToCompSection : '//div[text()="I am looking to compare"]/..',
        plsBeAwareSection : '//b[text()="Please be aware:"]/../..',
        paginationSection : '//b[text()="View page"]/../..',
        shareSearchEmail : '//input[@id="email"]',
        shareSearchSaveBtn : '//input[@value="Save"]',
        emailSentMsg : '//h3[text()="An email will be sent to you shortly."]',

        providerCB : '//input[@value="EnergyAustralia"]',
        providerClearAllBtn : '(//a[text()="Clear All"])[1]',
        applyNowBtn : '(//a[text()="apply now"])[1]',
        viewPlanDetBtn : '(//a[text()="VIEW PLAN DETAILS"])[8]',
        viewPlanDetApplyBtn : '(//a[@id="applyBtn"])[2]',
        viewPlanDetEmailPlanDetBtn : '//a[@id="emailPlan"]',
        viewPlanDetDetailsPage : '//h3[text()="Features"]/..',

        estimatedCostToolTipBtn : '(//h2[text()="Estimated Costs"]/../div/div[2]/a)[8]',
        estimatedCostPopUp : '//h1[text()="Estimated Cost"]/..',
        
        addElecBillBtn : '//a[text()="Add my electricity bill"]',
        selectElecProviderField : '//select[@id="elecproviderlist"]',
        electricityBillingDayField : '//input[@id="Electricity_BillingDays"]',
        singleRateField : '//input[@id="singleRate"]/..',
        twoRateField : '//input[@id="twoRate"]/..',
        touField : '//input[@id="TOU"]/..',
        elecGetYourEstimatedCost : '(//input[@value="Get your estimated cost"])[1]',
        elecCancelBtn :'(//input[@value="CANCEL"])[1]',

        addGasBillBtn : '//a[text()="Add my gas bill"]',
        selectGasProvField : '//select[@id="gasproviderlist"]',
        gasBillingDayField : '//input[@name="Gas_BillingDays"]',
        gassPeakField : '//input[@id="Gas_peak"]',
        gassOffPeakField : '//input[@id="Gas_offPeak"]',
        gasGetYourEstimatedCost : '(//input[@value="Get your estimated cost"])[2]',
        gasCancelBtn :'(//input[@value="CANCEL"])[2]',

        estmtdElecPrice : '(//b[text()="Electricity"]/../../div[2]/div//p[text()="/30 days"])[8]',
        estmtdGasPrice : '(//b[text()="Gas"]/../../div[2]/div//p[text()="/30 days"])[8]',

        aglApplyNowBtn : '(//div[text()="AGL"])[2]/../div[12]//a[text()="apply now"]',
        continueWithThisPlanBtn : '//input[@value="Continue with this plan"]',
        /** Contact details Page */
        titleDD : '//select[@name="title"]',
        dayField : '//select[@id="birthDay"]',
        monthField : '//select[@id="birthMonth"]',
        yearFiled : '//select[@id="birthYear"]',
        addAccHolderNoOpt : '//input[@id="secAccNo"]',
        addAccHolderYesOpt : '//input[@id="secAccYes"]',
        contactDetNextBtn : '//input[@id="sec1Btn"]',

        /** Personal Details Page */
        identificationTypeField : '//select[@id="holderCurDrive"]',
        identificationTypeOpt : '//option[text()="Drivers Licence - VIC"]',

        identificationNumberField : '//input[@id="Electricity_License"]',
        licenseExpiryday : '//select[@id="Licence_expiry_day"]',
        licenseExpiryMonth : '//select[@id="Licence_expiry_month"]',
        licenseExpiryYear : '//select[@id="Licence_expiry_year"]',
        
        concessionHolderField : '//select[@id="holderConsCard"]',

        personalDetNextBtn : '//input[@id="sec2Btn"]',

        /** Connection Details Page*/
        unitField : '//input[@id="resunitno"]',
        streetNo : '//input[@id="resstreetno"]',
        streetName : '//input[@id="streetNameRes"]',
        streetType : '//select[@id="streetNameResType_S"]',
        findAddr : '//a[@id="res"]',
        findaddrRadioBtn : '//input[@name="resAddress"]',
        connectionDetNextBtn : '//input[@id="sec3Btn"]',

        /** Terms and conditions Page */
        productDetailsCB : '(//input[@name="productdetailsConsent"])[1]',
        compCB : '//input[@title="TermsConditions"]',
        digitalSignCB : '(//input[@name="productdetailsConsent"])[2]',
        emaiConsentCB : '//input[@name="emailConsent"]',
        marketConsentCB : '//input[@name="marketingConsent"]',
        creditConsentCB : '//input[@name="creditConsent"]',
        digiSignField : '//input[@id="digiFullName"]',
        submitBtn : '//input[@id="secAllBtn"]',
        confirmationMsg : '//td[text()="Reference ID"]',

        /** PS-1047 Ticket */
        PartnerAwardsHeader : '//h3[text()="2019 Partner Awards"]',
        eccLogo : '//a[@href="https://www.cuac.org.au/eccc"]',
        iSelectABNNo : '//i[text()=" iSelect Media Pty Ltd.  "]'
         


    },

    /** Validates the Partner Awards and Ecc Logo removed or not */
    validatePartnerAwardsAndECCLogoRemove(browser : NightwatchBrowser) {
        helperUtils.moveToElement(browser, this.elements.iSelectABNNo, "Moved to Bottom of the Page");
        browser.isPresent(this.elements.PartnerAwardsHeader, (result) => {
            let value = result.value;
            if(value == false) {
                browser.assert.equal(value, false, 'Validation Successful... Partner Awards is removed.');
            } else {
                console.log("Failedd");
            }
        });
        browser.isPresent(this.elements.eccLogo, (result) => {
            let value = result.value;
            if(value == false) {
                browser.assert.equal(value, false, 'Validation Successful... ECC Logo is removed.');
            } else {
                console.log("Failedd");
            }
        });
    },

    /**
     * Select the Partner from Results Page
     */
     selectPartnerFromResultsPage(browser:NightwatchBrowser) {
        browser.waitForElementVisible(this.elements.yourSearchHeader, 10000, 100, undefined, undefined, 'Validation Successful... View Results Page Loaded..');
        browser.click('//div[@class="closeBubble"]');
        helperUtils.verifyWebElementExistForInteraction(browser, 'visible', this.elements.aglApplyNowBtn, 20000, 2000, undefined, 'Apply Now Button is Visible and clicking on it');
        browser.click(this.elements.aglApplyNowBtn);
        browser.frame(0);
        helperUtils.click(browser, 'useXpath', '//input[@value="Continue with this plan"]', 'Clicked on Continue with this Plan Button');
        browser.frameParent();
    },

    /**
     * Clicks on Electricity and Gas Icon
     * @param browser Nightwatch Browser
     */
    clickOnElecAndGasIcon(browser : NightwatchBrowser) {
        helperUtils.click(browser, 'useXpath', this.elements.elecAndGasIcon, 'Electricity And Gas Icon is Present on iSelect Home Page and Clicking on It.');
    },

    /**
     * Enters the Address in Energy Home Page
     * @param browser NightWatch Browser
     * @param postcode PostCode
     */
    enterAddress(browser:NightwatchBrowser, postcode : string){
        helperUtils.enterKeys(browser, 'useXpath', this.elements.energyAddressBar, postcode, 'Address Search Bar is Visible And Entering Address Code : ' + postcode);
    },

    /**
     * Clicks on Drop Down Option From Address Bar in Energy Home Page
     * @param browser NightWatch Browser
     * @param addrOption AddressOption DataObject
     */
    clickOnAddressOption(browser: NightwatchBrowser, addrOption : string) {
        helperUtils.verifyWebElementExistForInteraction(browser, 'present','//div[text()="'+ addrOption +'"]',20000, 2000, undefined, '-');
        browser.pause(3000);
        helperUtils.moveToElement(browser, '//div[text()="'+ addrOption +'"]', 'Hovering to Address DropDown Option');
        helperUtils.click(browser, 'useXpath', '//div[text()="'+ addrOption +'"]', 'Selected Address : ' + addrOption);
        helperUtils.click(browser, 'useXpath', this.elements.startBtn, 'Start Button is Visible and Clicking On it');
    },

    /**
     * Validates Needs Page
     */
    validateNeedsPageLoadedOrNot(browser : NightwatchBrowser) {
        browser.assert.titleContains('iSelect - Electricity Comparison | Gas Rates | Compare Energy Rates', 'Validation Successful... Needs Page loaded');
    },

    /**
     * Validates Error Page
     */
    validateErrorPage(browser : NightwatchBrowser) {
        helperUtils.verifyWebElementExistForInteraction(browser, 'visible', this.elements.errorPageHeader, 10000, 1000, undefined, 'Validation Successful.. Error Page Loaded and Header Present');
        helperUtils.verifyWebElementExistForInteraction(browser, 'visible', this.elements.errorPageParaContent, 10000, 1000, undefined, 'Validation Successful.. Error Page Loaded and Paragraph Content Present');
    },
    

    /**
     * Validates the Call Us Section in Your Usage Page
     * @param browser Night Watch Browser
     */
     validateCallUsSection(browser:NightwatchBrowser) {
        helperUtils.verifyWebElementExistForInteraction(browser, 'visible', this.elements.callUsElement, 20000, 2000, undefined, 'Call Us Element is Visbile.');
        helperUtils.click(browser, 'useXpath', this.elements.openingHoursLink, 'Opening Hours Link is Visbile, Clicking on the link');
        helperUtils.switchToOtherWindow(browser, 1);
        helperUtils.verifyWebElementExistForInteraction(browser, 'visible', this.elements.opeingHrsPage, 20000, 2000, undefined, 'Opening Hrs Page Loaded');
    },

    /**
     * Click and validates the Approved Product link in Mandatory Section
     */
    clickAndValidateApprProdList(browser:NightwatchBrowser){
        helperUtils.click(browser, 'useXpath', this.elements.approvedProductListLink, 'Approved Product List link is Visible Clicking on it.');
        browser.frame(0);
        helperUtils.assertElementStatus(browser, 'visible', this.elements.approvedProductListPopUp, 'Approved Product List Pop Up is Visible');
        browser.frame(null);
        helperUtils.click(browser, 'useXpath', this.elements.frameCloseBtn, 'Clicked on Close Button');
        
    },

    /**
     * Click and validates the Terms and Conditions link in Mandatory Section
     */
    clickAndValidateTClink(browser:NightwatchBrowser){
        helperUtils.click(browser, 'useXpath', this.elements.tcLink, 'Terms And Conditions link is Visible Clicking on it.');
        browser.frame(0);
        helperUtils.assertElementStatus(browser, 'visible', this.elements.tcPopup, 'Terms And Conditions Pop Up is Visible');
        browser.frame(null);
        helperUtils.click(browser, 'useXpath', this.elements.frameCloseBtn, 'Clicked on Close Button');
        
    },

    /**
     * Click and validates the Privacy Collection Notice link in Mandatory Section
     */
    clickAndValidatePrivCollNotilink(browser:NightwatchBrowser){
        helperUtils.click(browser, 'useXpath', this.elements.privacyCollectionNoticeLink, 'Privacy Collection Notice link is Visible Clicking on it.');
        helperUtils.verifyWebElementExistForInteraction(browser, 'visible', this.elements.privacyCollectionNoticeHeader, 10000, 1000, undefined, 'Privacy Collection Notice Header is Visible.')
        helperUtils.validateTitle(browser, this.elements.privacyCollectionNoticePageTitle, 'Privacy Collection Notice Page is Loaded Successfully and Title Matches');
    },

    /**
     * Validates the Prefer to Talk Text is present below the Search Bar or not
     */
    validatePreferToTalk(browser : NightwatchBrowser) {
        helperUtils.assertElementStatus(browser, 'visible', this.elements.preferToTalkText, 'Prefer to talk? Call 131920 Text is Visible');

    },

    /**
     * Clicks on "What you are looking to compare" Options Based on Data
     * @param browser NightWatchBrowser
     */
    clickOnLookToCompOpts(browser : NightwatchBrowser, optValue : string) {
        helperUtils.click(browser, 'useXpath', '//span[text()="' + optValue + '"]/../../input', optValue + ' Value is Present and Clicked on it.'); 
    },

    /**
     * Clicks on "What type of property?" Options Based on Data
     * @param browser NightWatchBrowser
     */
     clickOnTypeOfPropertyOpts(browser : NightwatchBrowser, optValue : string) {
        helperUtils.click(browser, 'useXpath', '//span[text()="' + optValue + '"]/../../input', optValue + ' Value is Present and Clicked on it.'); 
    },

    /**
     * Clicks on "Do you own or rent the property?" Options Based on Data
     * @param browser NightWatchBrowser
     */
     clickOnOwnOrRentPropOpts(browser : NightwatchBrowser, optValue : string) {
        helperUtils.click(browser, 'useXpath', '//label[text()="' + optValue + '"]/../input', optValue + ' Value is Present and Clicked on it.');   
    },

    /**
     * Clicks on "Are you moving into this property?" Options Based on Data
     * @param browser NightWatchBrowser
     */
     clickOnMoveIntoThisPropOpts(browser : NightwatchBrowser, optValue : string) {
        helperUtils.click(browser, 'useXpath', '//input[@id="' + optValue + '"]', optValue + ' Value is Present and Clicked on it.');
    },

    /**
     * Clicks on "Do you have a recent electricity bill available? *" Options Based on Data
     * @param browser NightWatchBrowser
     */
     clickOnRecentElecBillQtnOpts(browser : NightwatchBrowser, optValue : string) {
        helperUtils.click(browser, 'useXpath', '//label[text()="'+ optValue +'"]/..//input[@name="elecScenario"]', optValue + ' is Clicked in.. Do you have a recent electricity bill available? *');
    },

    /**
     * Clicks on "Do you have a recent Gas bill available? *" Options Based on Data
     * @param browser NightWatchBrowser
     */
     clickOnRecentGasBillQtnOpts(browser : NightwatchBrowser, optValue : string) {
        helperUtils.click(browser, 'useXpath', '//label[text()="'+ optValue +'"]/..//input[@name="gasScenario"]', optValue + ' is Clicked in.. Do you have a recent gas bill available? *');
    },

    /**
     * Fills the Move in Date
     * @param browser NightwatchBrowser
     */
    fillMoveInDate(browser : NightwatchBrowser) {
        //var moveInDate1 = helperUtils.getDate('dd-mm-yyyy', 3);
        //var moveInDate = moveInDate1?.toString()
        helperUtils.enterKeys(browser, 'useXpath', this.elements.moveInDate, '27-05-2022', '27-05-2022' + ' Entered in Move In Date');
        browser.click(this.elements.yourSummarySection);
    },

    /**
     * Clicks on "Do you also need to connect a broadband or home entertainment service?" Options
     * @param browser NightwatchBrowser
     * @param optValue OptionValue
     */
    clickOnConnToBBOpts(browser : NightwatchBrowser, optValue : string) {
        if(optValue == 'YES') {
            helperUtils.click(browser, 'useXpath', this.elements.connectToBroadBandYesOption, 'Clicked on ' + optValue + ' Option');
        } else {
            helperUtils.click(browser, 'useXpath', this.elements.connectToBroadBandNoOption, 'Clicked on ' + optValue + ' Option');
        }
    },

    /**
     * Clicks on 'Do you have rooftop solar panels?' Options
     * @param browser NightWatchBrowser
     */
    clicksOnRoofTopPanelOpts(browser:NightwatchBrowser, optValue : string) {
        if(optValue == 'YES') {
            helperUtils.click(browser, 'useXpath', this.elements.solarPanelYesOpt, 'Clicked on ' + optValue + ' Option');
        } else {
            helperUtils.click(browser, 'useXpath', this.elements.solarPanelNoOpt, 'Clicked on ' + optValue + ' Option');
        }
    },

    /**
     * Selects the Electricity Provider From the List
     * @param browser NightWatchBrowser
     */
    selectElecProvFromList(browser:NightwatchBrowser, optValue : string) {
        helperUtils.click(browser, 'useXpath', this.elements.elecProvListDD, 'Clicked on Electricty Provider List Dropdown');
        helperUtils.click(browser, 'useXpath', '//select[@id="elecproviderlist_usage"]//option[text()="' + optValue + '"]', optValue + ' Option Clicked')
    },

    /**
     * Selects Electricity Usage.
     * @param browser NightWatchBrowser
     * @param usage Electricity Usage
     */
    selectElecUsage(browser:NightwatchBrowser, usage:string) {
        helperUtils.click(browser, 'useXpath', '//div[@data-form-showif="sfelec=1 and vert!=gas and customerType=RES"]/div[2]/ul/li/label/div/div/input[@value="' + usage + '"]', usage + ' Usage Type Selected.');
    },

    /**
     * Selects the Gas Provider From the List
     * @param browser NightWatchBrowser
     */
     selectGasProvFromList(browser:NightwatchBrowser, optValue : string) {
        helperUtils.click(browser, 'useXpath', this.elements.gasProvListDD, 'Clicked on Electricty Provider List Dropdown');
        helperUtils.click(browser, 'useXpath', '//select[@id="gasproviderlist_usage"]//option[text()="' + optValue + '"]', optValue + ' Option Clicked')
    },

    /**
     * Selects Gas Usage.
     * @param browser NightWatchBrowser
     * @param usage Gas Usage
     */
     selectGasUsage(browser:NightwatchBrowser, usage:string) {
        helperUtils.click(browser, 'useXpath', '//div[@data-form-showif="sfgas=1 and vert!=electricity and customerType=RES"]/div[2]/ul/li/label/div/div/input[@value="' + usage + '"]', usage + ' Usage Type Selected.');
    },

    /**
     * Validates the "What you are looking to compare" Question and its Options are Present or not.
     */
    validateLookToCompQtnAndOptns(browser:NightwatchBrowser) {
        helperUtils.assertElementStatus(browser, 'visible', this.elements.elecAndGasOpt, 'Electricity and Gas Option is Visible in... "What you are looking to compare?" Question');
        helperUtils.assertElementStatus(browser, 'visible', this.elements.elecOpt, 'Electricity Option is Visible in... "What you are looking to compare?" Question');
        helperUtils.assertElementStatus(browser, 'visible', this.elements.gasOpt, 'Gas Option is Visible in... "What you are looking to compare?" Question');
    },

    /**
     * Validates the "What type of property?" Question and its Options are Present or not.
     */
     validateTypeOfPropQtnAndOptns(browser:NightwatchBrowser) {
        helperUtils.assertElementStatus(browser, 'visible', this.elements.myHomeOpt, 'My Home Option is Visible in... "What type of property?" Question');
        helperUtils.assertElementStatus(browser, 'visible', this.elements.myBusinessOpt, 'My Business Option is Visible in... "What type of property?" Question');
        
    },

     /**
     * Validates the "Do you own or rent the property?" Question and its Options are Present or not.
     */
      validateOwnOrRentQtnAndOptns(browser:NightwatchBrowser) {
        helperUtils.assertElementStatus(browser, 'present', this.elements.ownOpt, 'Own Option is Visible in... "Do you own or rent the property?" Question');
        helperUtils.assertElementStatus(browser, 'present', this.elements.rentOpt, 'Rent Option is Visible in... "Do you own or rent the property?" Question');  
    },

    /**
     * Validates the "Are you moving into this property?" Question and its Options are Present or not.
     */
     validateAreYouMovInToPropertOptions(browser:NightwatchBrowser) {
        helperUtils.assertElementStatus(browser, 'present', this.elements.movingToHouseYesOpt, 'Yes Option is Visible in... "Are you moving into this property?" Question');
        helperUtils.assertElementStatus(browser, 'present', this.elements.movintToHouseNoOpt, 'No Option is Visible in... "Are you moving into this property?" Question');   
    },

    /**
     * Validates the Your Summary Section in Your Needs Page
     */
    validateYourSummarySection(browser:NightwatchBrowser) {
        helperUtils.assertElementStatus(browser, 'visible', this.elements.yourSummarySection, 'Your Summary Section is Visible');
    },

    /**
     * Validates the " Do you have rooftop solar panels? " Question and its Options are Present or not.
     */
     validateDoYouHaveRoofTopSolarPanelsOptions(browser:NightwatchBrowser) {
        helperUtils.assertElementStatus(browser, 'present', this.elements.solarPanelYesOpt, 'Yes Option is Visible in... " Do you have rooftop solar panels? " Question');
        helperUtils.assertElementStatus(browser, 'present', this.elements.solarPanelNoOpt, 'No Option is Visible in... " Do you have rooftop solar panels? " Question');   
    },

    /**
     * Validates the "Who is Your Current Electricity Provider? " Question and its Options are present or not.
     */
    validateWhoIsYourCurrElecProv(browser:NightwatchBrowser, optValue : string) {
        helperUtils.assertElementStatus(browser, 'present', '//select[@name="Electricity_SupplierNonSA"]//option[text()="' + optValue + '"]', optValue + ' Option Value is Present in " Who is Your Current Electricity Provider? " ');
    },

    /**
     * Validates the "Who is Your Current Gas Provider? " Question and its Options are present or not.
     */
     validateWhoIsYourCurrGasProv(browser:NightwatchBrowser, optValue : string) {
        helperUtils.assertElementStatus(browser, 'present', '//select[@name="Gas_Supplier"]//option[text()="' + optValue + '"]', optValue + ' Option Value is Present in " Who is Your Current Gas Provider? " ');
    },

    /**
     * Validates the Error Message Notification
     * @param multi : In Case of Multiple useXpaths Data: boolean value
     */
    validateErrorMsgNotif(browser : NightwatchBrowser, errMsg : string, multi?: boolean) {
        if(multi == true) {
            helperUtils.assertElementStatus(browser, 'visible', '(//div[text()="' + errMsg + '"])[2]', errMsg + ' - Error Message is Visible.');
        } else {
            helperUtils.assertElementStatus(browser, 'visible', '//div[text()="' + errMsg + '"]', errMsg + ' - Error Message is Visible.');
        }
    },

    /**
     * Clicks on Continue Button
     */
    clickOnContinueBtn(browser:NightwatchBrowser) {
        helperUtils.click(browser, 'useXpath', this.elements.continueBtn, 'Clicked on Continue Button');
    },

    /**
     * Clicks on Compliance Checkbox in needs page
     */
    clickOnComplianceCB(browser:NightwatchBrowser) {
        helperUtils.click(browser, 'useXpath', this.elements.complianceCB , 'Compliance Checkbox is Visible clicking On it.');
    },

     /**
     * Clicks on Terms And Conditions Checkbox in needs page
     */
      clickOnTermsAndCOnditionsCB(browser:NightwatchBrowser) {
        helperUtils.click(browser, 'useXpath', this.elements.termsAndConditionsCB , 'Terms & Conditions Checkbox is Visible clicking On it.');
    },

    /**
     * Enters all the details in Your Details Page
     */
    enterYourDetails(browser:NightwatchBrowser, name : string, mobileNo : string, email : string) {
        helperUtils.enterKeys(browser, 'useXpath', this.elements.yourName, name , 'Entered Name : ' +name);
        helperUtils.enterKeys(browser, 'useXpath', this.elements.mobileNo, mobileNo , 'Entered Mobile Number : ' +mobileNo);
        helperUtils.enterKeys(browser, 'useXpath', this.elements.emailAdd, email , 'Entered Email Address : ' +email);   
    },

    /**
     * Clicks on View Results Button
     */
    clickOnViewResultsBtn(browser:NightwatchBrowser) {
        helperUtils.click(browser, 'useXpath', this.elements.viewResultsBtn, 'Clicks on view results button');
    },

    /**
     * Validate Contact Us Chat Window
     */
    validateContactUsChatWindow(browser:NightwatchBrowser){
        helperUtils.click(browser, 'useXpath', this.elements.contactUsBtn, 'Clicks on Contact Us button');
        helperUtils.verifyWebElementExistForInteraction(browser, 'visible', this.elements.cntUsChatForm, 20000, 1000, undefined, 'Validation Successful... contact us form is visible');
    },

    /**
     * Validate Product is Present or not.
     */
     validateProductPresentInResultsPage(browser:NightwatchBrowser){
        helperUtils.verifyWebElementExistForInteraction(browser, 'visible', '(//span[text()="NSW Simply Energy Saver+ Ausgrid 28/19% ^"])[2]', 20000, 1000, undefined, 'Validation Successful... ');
     },

     /** Validates the Updated URL for Energy */
     validateUpdatedURL(browser:NightwatchBrowser, updatedUrl : string, existingUrl : string, i: number) {
        browser.assert.urlEquals(updatedUrl, 'VALIDATION SUCCESS: \nEXISTING URL :::  ' + existingUrl + '\nUPDATED TO ::: ' +  updatedUrl);
        browser.saveScreenshot('./tests/screenshots/'+ i +'.png');
     },

     validateSimplyEnergyLogo(browser:NightwatchBrowser) {
        helperUtils.verifyWebElementExistForInteraction(browser, 'visible', this.elements.simplyEnergyLogo, 10000, 100, undefined, 'Simply Energy is added to Energy Home Page under Our Partners Section');
        helperUtils.click(browser, 'useXpath', this.elements.viewOurEnergyPartnersBtn, 'Clicked on View Our partners button');
        helperUtils.verifyWebElementExistForInteraction(browser, 'visible', this.elements.viewOurPartnerSimplyEnergyLogo, 10000, 100, undefined, 'Simply Energy is Present in View our Partners Page');
        browser.back();
        helperUtils.enterKeys(browser, 'useXpath', this.elements.energyAddressBar, '200', 'Entered Address code');
        helperUtils.click(browser, 'useXpath', '//div[text()=" 2000, Sydney"]', 'Selected Address from dropdown');
        helperUtils.click(browser, 'useXpath', this.elements.startBtn, 'Clicked on Start Button');
        helperUtils.click(browser, 'useXpath', this.elements.approvedProductListLink, 'Clicked on Approved Product List Link');
        browser.frame(0);
        for(let i=1; i<=6; i++) {
            helperUtils.verifyWebElementExistForInteraction(browser, 'visible', '(//li[text()="Simply Energ"])['+ i +']', 5000, 100, undefined, 'Simply Energy is Present in Providers Page');
        }
        browser.frameParent();
     },

     /**
     * Validate and fill the Your Details Page
     */
    validateAndFillYourDetPage(browser : NightwatchBrowser, validate? : boolean) {
        if(validate == true) {
            browser.waitForElementVisible(this.elements.yourName, 10000, 100, undefined, undefined, 'Your Details Page Loaded..');
            helperUtils.assertElementStatus(browser, 'visible', this.elements.yourName, 'Validation Successful.... Your Name Field is Visible');
            helperUtils.assertElementStatus(browser, 'visible', this.elements.yourMobileNo, 'Validation Successful.... Your Mobile No Field is Visible');
            helperUtils.assertElementStatus(browser, 'visible', this.elements.yourEmail, 'Validation Successful.... Your Email Address Field is Visible');
            helperUtils.assertElementStatus(browser, 'visible', this.elements.yourSummarySection, 'Validation Successful.... Your Summary Section is Visible');
            helperUtils.assertElementStatus(browser, 'visible', this.elements.didYouKnowSection, 'Validation Successful.... Did You Know Section is Visible');
            helperUtils.assertElementStatus(browser, 'visible', this.elements.viewResultsBtn, 'Validation Successful.... View Results Button is Visible');
            helperUtils.assertElementStatus(browser, 'visible', this.elements.backBtn, 'Validation Successful.... Back Button is Visible');
        } else {
            helperUtils.enterKeys(browser, 'useXpath', this.elements.yourName, 'iSelect Test', 'Entered the Name : iSelect Test');
            helperUtils.enterKeys(browser, 'useXpath', this.elements.yourMobileNo, '0400-000-000', 'Entered the Mobile Number : 0400-000-000');
            helperUtils.enterKeys(browser, 'useXpath', this.elements.yourEmail, 'kumar.yerupalli@iselect.com.au', 'Entered the Email : kumar.yerupalli@iselect.com.au');
            browser.pause(3000);
            helperUtils.click(browser, 'useXpath', this.elements.viewResultsBtn, 'Clicked on View results Button');
            // browser.pause(3000);
            // browser.waitForElementVisible(this.elements.yourSearchHeader, 10000, 100, undefined, undefined, 'Validation Successful... View Results Page Loaded..');
            //browser.click('//div[@class="closeBubble"]');
        }
        
    },

     
}