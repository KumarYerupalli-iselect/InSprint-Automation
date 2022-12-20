/** Night Watch Browser */
import { NightwatchBrowser } from "nightwatch";
/**Utils Object */
import {helperUtils} from "../utilities/helperUtils";


export const homeContentsPage = {
  
  elements : {
    insuranceLink : '//button[text()="Insurance"]',
    homeAndContentsIcon : '//span[text()="Home & Contents Insurance"]/../..',
    getStartedBtn : '//button[text()="Get started"]',
    homeAndContentsHeading:"//h1[text()='Compare Home and Contents Insurance']",
    insurance:"//span[text()='Insurance']",
    utilities:"//span[text()='Utilities']",
    finance:"//span[text()='Finance']",
    movingHouse:"//span[text()='Moving house?']",
    health:"//li[@class='menu-item menu-level-2-item   menu-health']",
    life:"//li[@class='menu-item menu-level-2-item   menu-life']",
    car:"//li[@class='menu-item menu-level-2-item   menu-car']",
    businessInsurance:"//li[@class='menu-item menu-level-2-item   menu-business']",
    travel:"//li[@class='menu-item menu-level-2-item   menu-travel']",
    pet:"//li[@class='menu-item menu-level-2-item   menu-pet']",
    overseasVisitors:"//li[@class='menu-item menu-level-2-item   menu-healthovc']",
    electricityAndGas:"//li[@class='menu-item menu-level-2-item   menu-energy']",
    internet:"//li[@class='menu-item menu-level-2-item   menu-broadband']",
    mobilePlans:"//li[@class='menu-item menu-level-2-item   menu-mobile']",
    homeLoans:"//li[@class='menu-item menu-level-2-item   menu-homeloans']",
    carLoans:"//li[@class='menu-item menu-level-2-item clickout-menu  menu-car-loans']",
    personalLoans:"//li[@class='menu-item menu-level-2-item clickout-menu  menu-personal-loans']",
    businessLoans:"//li[@class='menu-item menu-level-2-item   menu-business-loans']",
    creditCard:"//li[@class='menu-item menu-level-2-item clickout-menu  menu-credit-cards']",
    incomeProtection:"//li[@class='menu-item menu-level-2-item   menu-income']",
    aboutIselect:"//a[text()='About iSelect']",
    participatingInsurersLink:"//a[text()='Participating insurers']",
    participatingInsurers:"//h2[text()='Participating Insurers']",
    closeButton:"//button[@class='mfp-close']",
    financialGuideLink:"//li[@id='nav-menu-item-31756']",
    termsAndConditionsLink:"//a[text()='Terms & Conditions']",
    privacyPolicyLink:"//a[text()='Privacy Policy']",
    facebook:"//a[@title='iSelect on Facebook']",
    twitter:"//a[@title='iSelect on Twitter']",
    linkedIn:"//a[@title='iSelect on LinkedIn']",
    youTube:"//a[@title='iSelect on YouTube']",
    linkedInuser:"(//span[text()='LinkedIn'])[1]",
    call:"(//span[text()='13 19 20'])[2]",
    callHover:"(//div[@class='opening-hours'])[2]",
    homeContentsPartners:"//h2[text()='Our range of Home and Contents partners']",
    homeContentsInsurance:"//h2[text()='What is Home & Contents insurance? ']",
    homeContentsCalculator:"//h2[text()='Sum Insured Home Contents Calculator']",
    homeContentsProducts:"//h2[text()='What different Home & Contents products are available?']",
    homeContentsQuestions:"//h2[text()='Frequently asked questions']",
    homeContentsInterestedIn:"//h2[text()='You might be interested in...']",
    faqExpansion:"//div[@class='faq-panel expanded']",
    faq1:"(//div[@class='faq-panel-heading'])[2]",
    faq5:"(//div[@class='faq-panel-heading'])[5]",
    calculateNowButton:"//a[text()='Calculate now']",
    calculateNow:"//a[text()='Calculate now']",
    calculateClickHere:"//a[text()='Click here']",
    calculateNowInside:"//div[text()='Sum Insured Home Contents Calculator']",
    calculatePopUp:"//h4[text()='How this Contents Calculator works']",
    calculateClose:"//button[text()='Close']",
    calculateAddressBox:"//input[@name='gnafaddress']",
    calculate:"//button[text()='Calculate!']",
    calculateSumInsurance:"//a[text()='Sum Insured Pty Ltd']",
    calculateAddressOpt:"//li[@class='ui-menu-item'][6]",
    calculateAgreeButton:"//button[text()='Agree']",
    propertyType:"(//div[@class='t-item resume-sub-title'])[1]",
    occupancyType:"(//div[@class='t-item resume-sub-title'])[2]",
    noOfBedrooms:"(//div[@class='t-item resume-sub-title'])[5]",
    noOfOccupants:"(//div[@class='t-item resume-sub-title'])[6]",
    standardOfContents:"(//div[@class='t-item resume-sub-title'])[7]",
    quantityOfContents:"(//div[@class='t-item resume-sub-title'])[8]",
    otherRooms:"(//div[@class='t-item resume-sub-title'])[9]",
    specialItems:"(//div[@class='t-item resume-sub-title'])[10]",
    occupancyTypeOwner:"//div[@id='occupancy-type-box']/button[1]",
    hoverOwner:"//span[text()='Owner occupier']",
    hoverTenanted:"//span[text()='Tenanted']",
    occupancyTypeTenant:"//div[@id='occupancy-type-box']/button[2]",

    getStarted:"//button[text()='Get started']",
    yourDetails:"//h1[text()=' Your Details']",
    propertyAddress:"(//label[@class='question-title control-label ng-binding'])[1]",
    addressField:"//input[@name='addressLookup']",
    addressValidation:"//li[text()='Please enter an address']",
    addressOkButton:"(//button[text()=' Ok '])[1]",
    address:"//a[@title='10 BENNETTS LANE, MELBOURNE VIC 3000']",
    manualAddress:"//li[@class='ng-scope']",
    addressUnit:"//label[text()=' Unit / flat number ']",
    streetNo:"//label[text()=' Street Number ']",
    street:"//label[text()=' Street ']",
    streetType:"//label[text()=' Street type ']",
    postcode:"//label[text()=' Postcode ']",
    addressAutomatedSearch:"//button[text()=' Back to automated search ']",
    addressPostcode:"//input[@name='postcode']",
    manualAddressOkButton:"(//button[text()=' Ok '])[2]",
    streetNoErr:"//div[text()='Please enter a street number']",
    streetErr:"//div[text()='Please enter a street name']",
    streetTypeErr:"//div[text()='Please enter a street type']",
    postcodeErr:"//div[text()='Please enter a postcode']",
    verifyPostcode:"//a[@title='NORTH ADELAIDE SA 5006']",
    lookingTodayQue:"//label[text()=' What are you looking for today? ']",
    newCoverOpt:"//span[text()=' Looking for new cover ']",
    existingCoverOpt:"//span[text()=' Reviewing my existing cover ']",
    areYouTheQUe:"//label[text()=' Are you the ']",
    homeOwner:"//span[text()=' Home Owner ']",
    renter:"//span[text()=' Renter ']",
    landLord:"//span[text()=' Landlord ']",
    mortgagePropQue:"(//label[text()=' Do you have a mortgage on the property? '])[2]",
    mortgagePropQue1:"(//label[text()=' Do you have a mortgage on the property? '])[1]",
    mortgageYesOpt:"(//span[text()=' Yes '])[2]",
    mortgageNoOpt:"(//span[text()=' No '])[2]",
    mortgageNoOpt1:"(//span[text()=' No '])[1]",
    propertyOccupiedQue:"(//label[text()=' How is the property occupied? '])[1]",
    ownerOccupied:"//span[text()=' Owner Occupied ']",
    ownerYetToOccupy:"//span[text()=' Owner - yet to occupy ']",
    holidayHomeNotRented:"//span[text()=' Holiday Home - Not Rented ']",
    holidayHomeMayBeRented:"(//span[text()=' Holiday Home - May be Rented '])[1]",
    areYouTheEdit:"(//button[@class='btn btn-default'])[7]",
    rentedToTenants:"//span[text()=' Rented to Tenants ']",
    unoccupiedMaybeRented:"//span[text()=' Unoccupied-May be rented ']",
    holidayHomeOwner:"(//span[text()=' Holiday Home - May be Rented '])[2]",
    moveInYear:"(//input[@id='question$move_in'])[1]",
    yearOkBtn:"(//button[text()=' Ok '])[6]",
    insuranceQue:"(//label[text()=' What type of insurance do you need? '])[2]",
    homeAndContents:"(//span[text()=' Home and Contents '])[2]",
    contentsOnly:"(//span[text()=' Contents Only '])[3]",
    homeOnly:"(//span[text()=' Home Only '])[2]",
    policyStartDate:"//label[text()=' Policy Start date ']",
    datePicker:"//button[@ng-click='$ctrl.openPicker()']",
    datePickerOk:"(//button[text()='Ok'])[1]",
    corporateTitleComplex:"//label[text()=' Is the property part of a body corporate/strata title complex? ']",
    corporateComplexYes:"(//span[text()=' Yes '])[4]",
    corporateComplexNo:"(//span[text()=' No '])[4]",
    typeInsuringProperty:"(//label[text()=' What type of property are you insuring? '])[3]",
    freeStandingHouse:"(//span[text()=' Freestanding House '])[3]",
    homeUnit:"(//span[text()=' Home Unit '])[3]",
    townHouse:"(//span[text()=' Townhouse '])[3]",
    appartment:"(//span[text()=' Apartment/Flat '])[3]",
    terraceHouse:"(//span[text()=' Terrace House '])[3]",
    duplex:"(//span[text()=' Duplex '])[3]",
    semiDetached:"(//span[text()=' Semi Detached '])[3]",
    villa:"(//span[text()=' Villa '])[3]",
    grannyFlat:"(//span[text()=' Granny Flat '])[3]",
    otherProperty:"(//span[text()=' Other '])[5]",
    externalWallMaterial:"//label[text()=' Main construction material of the external walls ']",
    brickVeneer:"//span[text()=' Brick Veneer ']",
    brickOrDouble:"//span[text()=' Brick/ Double Brick ']",
    timberWeather:"//span[text()=' Timber Weatherboard ']",
    cement:"//span[text()=' Concrete/Cement ']",
    fibro:"//span[text()=' Non-Asbestos Fibro ']",
    stone:"//span[text()=' Stone ']",
    metal:"//span[text()=' Metal/Iron/Steel/Aluminium/Zinc ']",
    otherCladding:"//span[text()=' Other Cladding ']",
    asbestos:"(//span[text()=' Asbestos '])[1]",
    hebel:"//span[text()=' Hebel ']",
    otherWallMaterial:"(//span[text()=' Other '])[6]",

    addressOfPropertyQtn : '//label[text()=" What\'s the address of the property? "]',
    addressSearchBar : '//input[@name="addressLookup"]',
    addressOkBtn : '(//button[text()=" Ok "])[1]',
    whtAreULookForTodayQtn : "//label[text()=' What are you looking for today? ']",
    areYouTheQtn : '//label[text()=" Are you the "]',
    doYuHaveMortageQtn : '(//label[text()=" Do you have a mortgage on the property? "])[2]',
    propertyOccupiedQtn : '(//label[text()=" How is the property occupied? "])[1]',
    moveinPropertyYearQtn : '(//label[text()=" What year did you move into the property? (YYYY) "])[1]',
    moveInPropYearField : '(//input[@id="question$move_in"])[1]',
    moveInYearOkBtn : '(//button[text()=" Ok "])[6]',
    typeOfInsuranceQtn : '(//label[text()=" What type of insurance do you need? "])[2]',
    policyStartDateQtn : '//label[text()=" Policy Start date "]',
    policyStrtDateOkBtn : '//button[text()="Ok"]',
    strataTitleComplexQtn : '//label[text()=" Is the property part of a body corporate/strata title complex? "]',
    typeOfPropInsuringQtn : '(//label[text()=" What type of property are you insuring? "])[3]',
    mainConstrMaterialQtn : '//label[text()=" Main construction material of the external walls "]',
    mainConstMaterialOfRoofQtn : '//label[text()=" Main construction material of the roof "]',
    yearHomeWasBuiltQtn : '//label[text()=" What year was the home built? "]',
    securityFeaturesQtn : '//label[text()=" What security features do you have? "]',
    securityFeaturesOkBtn : '(//button[text()=" Ok "])[10]',
    businessActivityQtn : '//label[text()=" Is there any business activity conducted on the property? "]',
    totalCostToBuildQtn : '(//label[text()=" What is the total cost to rebuild your home at today\'s prices? "])[2]',
    totalCostToBuildField : '(//input[@id="question$building_sum_insured"])[2]',
    totalCostToBuildOkBtn : '(//button[text()=" Ok "])[12]',
    totalCostToReplaceContntsQtn : '(//label[text()=" What is the total cost to replace your contents at today\'s prices? "])[2]',
    totalCostToReplaceField : '//input[@id="question$contents_sum_insured"]',
    totalCostToReplaceOkBtn : '(//button[text()=" Ok "])[13]',
    extraCoverOnSpecifiedContentsQtn : '//label[text()=" Do you want extra cover for any specified contents items within the home? "]',
    optionalCoverForItemsQtn : '//label[text()=" Do you want optional cover for items you take away from the home, including specified high value items? "]',
    oldestPolicyHolderDOBQtn : '//label[text()=" What is the oldest policyholder\'s date of birth? "]',
    oldestPolicyHolderDOBField : '//input[@id="question$policy_holder_dob"]',
    oldestPolicyHolderDOBOkBtn : '(//button[text()="Ok"])[2]',
    residentsOlderThanPoliHolderQtn : '//label[text()=" Are there any residents older than the policyholder? "]',
    anyoneAtHomeRetireQtn : '//label[text()=" Is anyone at the home retired? "]',
    last5YearsBulgariesQtn : '//label[text()=" In the last 5 years has any policy holder or household member had any thefts or burglaries or made any insurance claims for home and/or contents including personal effects? "]',
    termsAndCondCB : '//input[@id="checkUnderstand"]',
    viewResultsBtn : '//button[text()="VIEW RESULTS"]',

    participatingHomeInsuLink : '//a[text()="iSelect General’s participating home and contents insurers"]',
    termsAndCondLink : '//a[text()="Terms & Conditions"]',
    privacyCollectionNoticeLink : '//a[text()="Privacy Collection Notice"]',
    iSelectFSGLink : '//a[text()="iSelect General’s Financial Services Guide."]',
    mandatStatement1 : '//span[text()=" Any advice provided on this website is of a general nature and does not take into account your objectives, financial situation or needs. Please consider whether the product is suitable for you before making any purchasing decision. "]',
    mandateStatement2 : '//div[@id="terms_check"]',

    /** Your Details */
    firstName : '//input[@name="userFirstName"]',
    lastName : '//input[@name="userLastName"]',
    mobileNo : '//input[@name="userMobileInputId"]',
    email : '//input[@name="userEmail"]',
    submitBtn : '//button[@id="capture_btn"]'
  },

  clickOnHomeAndConIcon(browser:NightwatchBrowser){
    helperUtils.click(browser, 'useXpath', this.elements.insuranceLink, 'Clicked on Insurance Section');
    helperUtils.click(browser, 'useXpath', this.elements.homeAndContentsIcon, 'Clicked on Home and Contents Icon');
    helperUtils.click(browser, 'useXpath', this.elements.getStartedBtn, 'Clicked on Get Started button');
  },

  verifyHomeContentsSiteLaunch(browser:NightwatchBrowser){
    //browser.pause(20000);
    //browser.waitForElementVisible(this.elements.homeAndContentsHeading, 20000, 2000, undefined, undefined, 'Header Text Visible');
    //browser.assert.textEquals(this.elements.homeAndContentsHeading, 'Compare Home and Contents Insurance', 'Validation Successful.. Home and contents Heading Text Matches');
    helperUtils.assertElementStatus(browser, 'visible', this.elements.insurance,'Validation Successful.. Insurance Hover button is Visible');
    helperUtils.assertElementStatus(browser, 'visible', this.elements.utilities,'Validation Successful.. Utilities Hover button is Visible');
    helperUtils.assertElementStatus(browser, 'visible', this.elements.finance,'Validation Successful.. Finance Hover button is Visible');
    helperUtils.assertElementStatus(browser, 'visible', this.elements.movingHouse,'Validation Successful.. Moving house Hover button is Visible');
    browser.click(this.elements.insurance);
  },


 verifyUIofHomePage(browser:NightwatchBrowser){
  helperUtils.assertElementStatus(browser,"visible",this.elements.health,"Validation successful.. Health hover button is visible");
  helperUtils.assertElementStatus(browser,"visible",this.elements.life,"Validation successful.. Life hover button is visible");
  helperUtils.assertElementStatus(browser,"visible",this.elements.car,"Validation successful.. Car hover button is visible");
  helperUtils.assertElementStatus(browser,"visible",this.elements.businessInsurance,"Validation successful.. Business Insurance Hover button is visible");
  helperUtils.assertElementStatus(browser,"visible",this.elements.travel,"Validation successful.. Travel hover button is visible");
  helperUtils.assertElementStatus(browser,"visible",this.elements.pet,"Validation successful.. Pet hover button is visible");
  helperUtils.assertElementStatus(browser,"visible",this.elements.overseasVisitors,"Validation successful.. Overseas visitors hover button is visible");
  browser.click(this.elements.utilities);
  helperUtils.assertElementStatus(browser,"visible",this.elements.electricityAndGas,"Validation successful.. Electrity and Gas hover button is visible");
  helperUtils.assertElementStatus(browser,"visible",this.elements.internet,"Validation Successful.. Internet hover button is visible");
  helperUtils.assertElementStatus(browser,"visible",this.elements.mobilePlans,"Validation successful.. Mobile Plans hover button is visible");
  browser.click(this.elements.finance);
  helperUtils.assertElementStatus(browser,"visible",this.elements.homeLoans,"Validation successful.. Home Loans hover button is visible");
  helperUtils.assertElementStatus(browser,"visible",this.elements.carLoans,"Validation successful.. Car Loans hover button is visible");
  helperUtils.assertElementStatus(browser,"visible",this.elements.personalLoans,"Validation successful.. Personal Loans hover button is visible");
  helperUtils.assertElementStatus(browser,"visible",this.elements.businessLoans,"Validation successful.. Business Loans hover button is visible");
  helperUtils.assertElementStatus(browser,"visible",this.elements.creditCard,"Validation successful.. Credit card hover button is visible");
  helperUtils.assertElementStatus(browser,"visible",this.elements.incomeProtection,"Validation successful.. Income protection hover button is visible");
 },




 verifyFooterLinks(browser:NightwatchBrowser){
  browser.execute('window.scrollTo(0, document.body.scrollHeight)');
  helperUtils.assertElementStatus(browser, "visible", this.elements.aboutIselect, "Validation successful.. About iSelect link is visible");
  browser.isEnabled(this.elements.participatingInsurersLink, (result) => {
    browser.assert.equal(result.value, true, 'Participating Insurers link is Visible and Enabled.');
  })
  //browser.click(this.elements.participatingInsurersLink)
  /*browser.frame(0,()=>{
    console.log('inside frame')
    helperUtils.assertWebElementOrItsText(browser,"isEqual",this.elements.participatingInsurers,"Participating Insurers")
  })
  browser.click(this.elements.closeButton)
  helperUtils.switchToOtherWindow(browser,1)*/
  //helperUtils.validateURL(browser,"completeURL","https://wwwuat.iselect.com.au/popup-home-content-participating-provider/","provider")
  //browser.back()
  //browser.pause(2000)
  browser.click(this.elements.financialGuideLink);
  helperUtils.switchToOtherWindow(browser,1);
  helperUtils.validateURL(browser,"completeURL","https://wwwuat.iselect.com.au/general-insurance-financial-services-guide/","service guide link is visible and enabled");
  browser.closeWindow();
  helperUtils.switchToPrimaryWindow(browser);
  browser.waitForElementVisible(this.elements.termsAndConditionsLink, 20000, 2000, undefined, undefined, 'Validation Successful.. Terms and Conditions link is visible.');
  //browser.click(this.elements.termsAndConditionsLink);
  //browser.pause(3000);
  //helperUtils.validateURL(browser,"partOfURL","https://wwwuat.iselect.com.au/popup-disclaimer/","Validation Successful.. Terms and conditions link is Enabled" );
  //browser.back();
  browser.waitForElementVisible(this.elements.privacyPolicyLink, 20000, 2000, undefined, undefined, 'Validation Successful.. Privacy Policy link is visible.');
  browser.isEnabled(this.elements.privacyPolicyLink, (result) => {
    browser.assert.equal(result.value, true, 'Validation Successful.. Privacy Policy link is Enabled.');
  })
 },


 verifySocialMedia(browser:NightwatchBrowser){
  browser.click(this.elements.facebook);
  helperUtils.switchToOtherWindow(browser,1);
  helperUtils.validateURL(browser,"partOfURL","facebook.com/iselect","Validation successful.. Facebook link is accessible");
  browser.closeWindow();
  helperUtils.switchToPrimaryWindow(browser);
  browser.pause(2000);
  browser.execute('window.scrollTo(0,-300)');
  browser.pause(2000);
  browser.click(this.elements.twitter);
  helperUtils.switchToOtherWindow(browser,1);
  helperUtils.validateURL(browser,"partOfURL","twitter.com/iselect","Validation successful.. Twitter link is accessible");
  browser.closeWindow();
  helperUtils.switchToPrimaryWindow(browser);
  browser.pause(2000);
  browser.click(this.elements.linkedIn);
  helperUtils.switchToOtherWindow(browser,1);
  helperUtils.validateURL(browser,"partOfURL","linkedin.com/","Validation successful.. Linkedin link is accessible");
  browser.closeWindow();
  helperUtils.switchToPrimaryWindow(browser);
  browser.pause(2000);
  browser.click(this.elements.youTube);
  helperUtils.switchToOtherWindow(browser,1);
  helperUtils.validateURL(browser,"partOfURL","youtube.com/MriSelect","Validation successful.. Youtube link is accessible");
  browser.closeWindow();
  helperUtils.switchToPrimaryWindow(browser);
 },

 verifyCallIconAndOthers(browser:NightwatchBrowser){
  browser.execute('window.scrollTo(0,600)');
  helperUtils.moveToElement(browser, this.elements.call, "Hovered to Call button");
  helperUtils.assertElementStatus(browser,"visible",this.elements.callHover,"Validation successful.. Call hover button is visible");
  helperUtils.moveToElement(browser, this.elements.homeContentsPartners, "Hovered to Home contents partners section");
  browser.assert.textEquals(this.elements.homeContentsPartners, 'Our range of Home and Contents partners', 'Validation Successful.. Home contents partners section Header Text Matches');

  helperUtils.moveToElement(browser, this.elements.homeContentsInsurance, "Hovered to Home contents insurance section");
  helperUtils.assertElementStatus(browser,"visible",this.elements.homeContentsInsurance,"Home and Contents Insurance hover button is visible");
  helperUtils.moveToElement(browser, this.elements.homeContentsCalculator, "Hovered to Home contents Calculator section button");
  browser.assert.textEquals(this.elements.homeContentsCalculator, 'Sum Insured Home Contents Calculator', 'Validation Successful.. Home contents Calculator section Header Text Matches');
  
  helperUtils.moveToElement(browser, this.elements.homeContentsProducts, "Hovered to Home contents products section");
  browser.assert.textEquals(this.elements.homeContentsProducts, 'What different Home & Contents products are available?', 'Validation Successful.. Home contents Products section Header Text Matches');
  
  helperUtils.moveToElement(browser, this.elements.homeContentsQuestions, "Hovered to Home contents questions section");
  browser.assert.textEquals(this.elements.homeContentsQuestions, 'Frequently asked questions', 'Validation Successful.. Home contents Question section Text Matches');
  
  helperUtils.moveToElement(browser, this.elements.homeContentsInterestedIn, "Hovered to Home contents Interested In section");
  browser.assert.textEquals(this.elements.homeContentsInterestedIn, 'You might be interested in...', 'Validation Successful.. Home contents Interested In section Text Matches');
  
 },


 frequentlyAskedQuestions(browser:NightwatchBrowser){
  browser.isEnabled(this.elements.faq1, (result) => {
    browser.assert.equal(result.value, true, "validation successful.. FAQ-1 +icon is enabled");
  });

  browser.isEnabled(this.elements.faq5, (result) => {
    browser.assert.equal(result.value, true, "validation successful.. FAQ-5 +icon is enabled");
  });
 },
    
fillYourDetailsForm(browser:NightwatchBrowser) {
    this.validateSubmitBtn(browser);
    helperUtils.enterKeys(browser, 'useXpath', this.elements.firstName, 'iselect', 'Entered first name : iselect');
    helperUtils.enterKeys(browser, 'useXpath', this.elements.lastName, 'test', 'Entered last name : test');
    helperUtils.enterKeys(browser, 'useXpath', this.elements.mobileNo, '0400000000', 'Entered mobile no : 0400000000');
    this.validateSubmitBtn(browser);
    //browser.execute("document.body.style.zoom='80%'");
    browser.executeScript("document.getElementById('capture_btn').click()");
},

enterAddress(browser:NightwatchBrowser, address : string) {
    helperUtils.verifyWebElementExistForInteraction(browser, 'visible', this.elements.addressOfPropertyQtn, 20000, 200, undefined, 'What\'s the address of the property? Question is Visible.');
    helperUtils.enterKeys(browser, 'useXpath', this.elements.addressSearchBar, address, 'Entered Address : ' + address);
    helperUtils.click(browser, 'useXpath', '//a[@title="'+ address +'"]', 'Clicked on ' + address);
    helperUtils.click(browser, 'useXpath', this.elements.addressOkBtn, 'Clicked on OK Button');
},

selectWhatAreYouLookingQtn(browser:NightwatchBrowser, option : string) {
    helperUtils.verifyWebElementExistForInteraction(browser, 'visible', this.elements.whtAreULookForTodayQtn, 20000, 200, undefined, 'What are you looking for today? Question is Visible');
    helperUtils.click(browser, 'useXpath', '//span[text()="'+option+'"]/../..', 'Clicked on ' + option + ' Option');
},

selectAreYouTheQtn (browser : NightwatchBrowser, option : string) {
    helperUtils.verifyWebElementExistForInteraction(browser, 'visible', this.elements.areYouTheQtn, 20000, 200, undefined, 'Are you the? Question is Visible');
    helperUtils.click(browser, 'useXpath', '//span[text()="'+ option +'"]/../..', 'Clicked on ' + option + ' Option');
},

selectDoYouHaveMortageQtn (browser : NightwatchBrowser, option : string) {
    helperUtils.verifyWebElementExistForInteraction(browser, 'visible', this.elements.doYuHaveMortageQtn, 20000, 200, undefined, 'Do you have a mortgage on the property? Question is Visible');
    helperUtils.click(browser, 'useXpath', '(//span[text()="'+ option +'"]/../../../button[@id="question$mortgage_property$option$"])[2]', 'Clicked on ' + option + ' Option');
},

selectHowPropOccupiedQtn (browser : NightwatchBrowser, option : string) {
    helperUtils.verifyWebElementExistForInteraction(browser, 'visible', this.elements.propertyOccupiedQtn, 20000, 200, undefined, 'How is the property occupied? Question is Visible');
    helperUtils.click(browser, 'useXpath', '//span[text()="'+ option +'"]/../../../button[@id="question$occupancy_details$option$"]', 'Clicked on ' + option + ' Option');
},

fillMoveInYear(browser:NightwatchBrowser, year:string, OwnerType? : string) {
    if(OwnerType == ' Renter ') {
        helperUtils.verifyWebElementExistForInteraction(browser, 'visible', '(//label[text()=" What year did you move into the property? (YYYY) "])[2]', 20000, 200, undefined, 'What year did you move into the property? (YYYY) Question is Visible');
        helperUtils.enterKeys(browser, 'useXpath', '(//input[@id="question$move_in"])[2]', year, 'Entered Year : '+ year);
        helperUtils.click(browser, 'useXpath', '(//button[text()=" Ok "])[7]', 'Clicked on OK Button');
    }else{
        helperUtils.verifyWebElementExistForInteraction(browser, 'visible', this.elements.moveinPropertyYearQtn, 20000, 200, undefined, 'What year did you move into the property? (YYYY) Question is Visible');
        helperUtils.enterKeys(browser, 'useXpath', this.elements.moveInPropYearField, year, 'Entered Year : '+ year);
        helperUtils.click(browser, 'useXpath', this.elements.moveInYearOkBtn, 'Clicked on OK Button');
    }  
},

selectWhtTypeOfInsuranceQtn (browser : NightwatchBrowser, option : string) {
    helperUtils.verifyWebElementExistForInteraction(browser, 'visible', this.elements.typeOfInsuranceQtn, 20000, 200, undefined, 'What type of insurance do you need? Question is Visible');
    helperUtils.click(browser, 'useXpath', '(//span[text()="'+ option +'"]/../../../button[@id="question$cover_type$option$"])[2]', 'Clicked on ' + option + ' Option');
},

selectPolicyStartDateQtn (browser : NightwatchBrowser) {
    helperUtils.verifyWebElementExistForInteraction(browser, 'visible', this.elements.policyStartDateQtn, 20000, 200, undefined, 'Policy Start Date Question is Visible');
    helperUtils.click(browser, 'useXpath', this.elements.policyStrtDateOkBtn, 'Clicked on OK Button');
},

selectStrataComplexQtn (browser : NightwatchBrowser, option : string) {
    helperUtils.verifyWebElementExistForInteraction(browser, 'visible', this.elements.strataTitleComplexQtn, 20000, 200, undefined, 'Is the property part of a body corporate/strata title complex? Question is Visible');
    helperUtils.click(browser, 'useXpath', '//span[text()="'+ option +'"]/../../../button[@id="question$strata_body_corporate$option$"]', 'Clicked on ' + option + ' Option');
},

selecTypeOfPropInsuringQtn (browser : NightwatchBrowser, option : string) {
    helperUtils.verifyWebElementExistForInteraction(browser, 'visible', this.elements.typeOfPropInsuringQtn, 20000, 200, undefined, 'What type of property are you insuring? Question is Visible');
    helperUtils.click(browser, 'useXpath', '(//span[text()="'+ option +'"]/../../../button[@id="question$property_type$option$"])[3]', 'Clicked on ' + option + ' Option');
},

selecMainConstMaterialQtn (browser : NightwatchBrowser, option : string) {
    helperUtils.verifyWebElementExistForInteraction(browser, 'visible', this.elements.mainConstrMaterialQtn, 20000, 200, undefined, 'Main construction material of the external walls Question is Visible');
    helperUtils.click(browser, 'useXpath', '(//span[text()="'+ option +'"]/../../../button[@id="question$wall_construction$option$"])[1]', 'Clicked on ' + option + ' Option');
},

selecMainConstMaterialOfRoofQtn (browser : NightwatchBrowser, option : string) {
    helperUtils.verifyWebElementExistForInteraction(browser, 'visible', this.elements.mainConstMaterialOfRoofQtn, 20000, 200, undefined, 'Main construction material of the roof Question is Visible');
    helperUtils.click(browser, 'useXpath', '(//span[text()="'+ option +'"]/../../../button[@id="question$roof_construction$option$"])[1]', 'Clicked on ' + option + ' Option');
},

selecYearHomeBuiltQtn (browser : NightwatchBrowser, option : string) {
    helperUtils.verifyWebElementExistForInteraction(browser, 'visible', this.elements.yearHomeWasBuiltQtn, 20000, 200, undefined, 'What year was the home built? Question is Visible');
    helperUtils.click(browser, 'useXpath', '(//span[text()="'+ option +'"]/../../../button[@id="question$year_of_construction$option$"])[1]', 'Clicked on ' + option + ' Option');
},

selecSecurtiyFeaturesQtn (browser : NightwatchBrowser, option : string) {
    helperUtils.verifyWebElementExistForInteraction(browser, 'visible', this.elements.securityFeaturesQtn, 20000, 200, undefined, 'What security features do you have? Question is Visible');
    helperUtils.click(browser, 'useXpath', '(//span[text()="'+ option +'"]/../../../button[@id="question$security_features$option$24_hour_monitored"])[1]', 'Clicked on ' + option + ' Option');
    helperUtils.click(browser, 'useXpath', this.elements.securityFeaturesOkBtn, 'Clicked on Ok Button');
},

selecIsThereBusinessActivityQtn (browser : NightwatchBrowser, option : string) {
    helperUtils.verifyWebElementExistForInteraction(browser, 'visible', this.elements.businessActivityQtn, 20000, 200, undefined, 'Is there any business activity conducted on the property? Question is Visible');
    helperUtils.click(browser, 'useXpath', '(//span[text()="'+ option +'"]/../../../button[@id="question$business_activity$option$"])[1]', 'Clicked on ' + option + ' Option');
},

fillTotalCostToBuildQtn(browser:NightwatchBrowser, price:string) {
    helperUtils.verifyWebElementExistForInteraction(browser, 'visible', this.elements.totalCostToBuildQtn, 20000, 200, undefined, 'What is the total cost to rebuild your home at today\'s prices?  Question is Visible');
    helperUtils.enterKeys(browser, 'useXpath', this.elements.totalCostToBuildField, price, 'Entered Price : '+ price);
    helperUtils.click(browser, 'useXpath', this.elements.totalCostToBuildOkBtn, 'Clicked on OK Button');
},

fillTotalCostToReplaceContentsQtn(browser:NightwatchBrowser, price:string) {
    helperUtils.verifyWebElementExistForInteraction(browser, 'visible', this.elements.totalCostToReplaceContntsQtn, 20000, 200, undefined, 'What is the total cost to replace your contents at today\'s prices?  Question is Visible');
    helperUtils.enterKeys(browser, 'useXpath', this.elements.totalCostToReplaceField, price, 'Entered Price : '+ price);
    helperUtils.click(browser, 'useXpath', this.elements.totalCostToReplaceOkBtn, 'Clicked on OK Button');
},

selectExtrasCoverOnSpecContsQtn (browser : NightwatchBrowser, option : string) {
    helperUtils.verifyWebElementExistForInteraction(browser, 'visible', this.elements.extraCoverOnSpecifiedContentsQtn, 20000, 200, undefined, 'Do you want extra cover for any specified contents items within the home? Question is Visible');
    helperUtils.click(browser, 'useXpath', '(//span[text()="'+ option +'"]/../../../button[@id="question$specified_contents$option$"])[1]', 'Clicked on ' + option + ' Option');
},

selecOptCoverForItemsQtn (browser : NightwatchBrowser, option : string) {
    helperUtils.verifyWebElementExistForInteraction(browser, 'visible', this.elements.optionalCoverForItemsQtn, 20000, 200, undefined, 'Do you want optional cover for items you take away from the home, including specified high value items? Question is Visible');
    helperUtils.click(browser, 'useXpath', '(//span[text()="'+ option +'"]/../../../button[@id="question$awayhome_specified_contents$option$"])[1]', 'Clicked on ' + option + ' Option');
},

fillPolicyHolderDOB(browser:NightwatchBrowser, dob:string) {
    helperUtils.verifyWebElementExistForInteraction(browser, 'visible', this.elements.oldestPolicyHolderDOBQtn, 20000, 200, undefined, 'What is the oldest policyholder\'s date of birth? Question is Visible');
    helperUtils.enterKeys(browser, 'useXpath', this.elements.oldestPolicyHolderDOBField, dob, 'Entered DOB : '+ dob);
    helperUtils.click(browser, 'useXpath', this.elements.oldestPolicyHolderDOBOkBtn, 'Clicked on OK Button');
},

selectAreThereResidentsOlderQtn (browser : NightwatchBrowser, option : string) {
    helperUtils.verifyWebElementExistForInteraction(browser, 'visible', this.elements.residentsOlderThanPoliHolderQtn, 20000, 200, undefined, 'Are there any residents older than the policyholder? Question is Visible');
    helperUtils.click(browser, 'useXpath', '(//span[text()="'+ option +'"]/../../../button[@id="question$residents_policyholder$option$"])[1]', 'Clicked on ' + option + ' Option');
},

selectAnyOneAtHomeRetiredQtn (browser : NightwatchBrowser, option : string) {
    helperUtils.verifyWebElementExistForInteraction(browser, 'visible', this.elements.anyoneAtHomeRetireQtn, 20000, 200, undefined, 'Is anyone at the home retired? Question is Visible');
    helperUtils.click(browser, 'useXpath', '(//span[text()="'+ option +'"]/../../../button[@id="question$retired_home$option$"])[1]', 'Clicked on ' + option + ' Option');
},

selectLast5YearsBulgariesQtn (browser : NightwatchBrowser, option : string) {
    helperUtils.verifyWebElementExistForInteraction(browser, 'visible', this.elements.last5YearsBulgariesQtn, 20000, 200, undefined, 'In the last 5 years has any policy holder or household member had any thefts or burglaries or made any insurance claims for home and/or contents including personal effects? Question is Visible');
    helperUtils.click(browser, 'useXpath', '(//span[text()="'+ option +'"]/../../../button[@id="question$previous_incidents$option$"])[1]', 'Clicked on ' + option + ' Option');
},

clickOnTermsAndCondCB(browser:NightwatchBrowser) {
    helperUtils.click(browser, 'useXpath', this.elements.termsAndCondCB, 'Clicked on Terms and Conditions Checkbox');
},

clickOnMandatoryLinks(browser:NightwatchBrowser) {
    helperUtils.click(browser, 'useXpath', this.elements.participatingHomeInsuLink, 'Participating Insurers link is Visible and Clicked on it');
    browser.pause(2000);
    helperUtils.switchToOtherWindow(browser, 1);
    browser.closeWindow();

    helperUtils.switchToPrimaryWindow(browser);
    helperUtils.click(browser, 'useXpath', this.elements.termsAndCondLink, 'Terms And Conditions link is Visible and Clicked on it');
    browser.pause(2000);
    helperUtils.switchToOtherWindow(browser, 1);
    browser.closeWindow();

    helperUtils.switchToPrimaryWindow(browser);
    helperUtils.click(browser, 'useXpath', this.elements.privacyCollectionNoticeLink, 'Privacy Collection Notice link is Visible and Clicked on it');
    browser.pause(2000);
    helperUtils.switchToOtherWindow(browser, 1);
    browser.closeWindow();

    helperUtils.switchToPrimaryWindow(browser);
    helperUtils.click(browser, 'useXpath', this.elements.iSelectFSGLink, 'iSelect FSG link is Visible and Clicked on it');
    browser.pause(2000);
    helperUtils.switchToOtherWindow(browser, 1);
    browser.closeWindow();

    helperUtils.switchToPrimaryWindow(browser);

},

validateViewResultsBtn(browser:NightwatchBrowser) {
    browser.useXpath().isEnabled(this.elements.viewResultsBtn, (result) => {
        console.log(result.value);
        if(result.value == true) {
            browser.assert.equal(result.value, true, 'View Results Button is Enabled');
        } else {
            browser.assert.equal(result.value, false, 'View Results Button is Disabled');
        }  
    });
},

validateSubmitBtn(browser:NightwatchBrowser) {
    browser.waitForElementVisible(this.elements.submitBtn, 20000, 200, undefined, undefined, 'Submit Button is visible');
    browser.useXpath().isEnabled(this.elements.submitBtn, (result) => {
        console.log(result.value);
        if(result.value == true) {
            browser.assert.equal(result.value, true, 'Submit Button is Enabled');
        } else {
            browser.assert.equal(result.value, false, 'Submit Button is Disabled');
        }  
    });
},

clickOnViewResultsBtn(browser:NightwatchBrowser) {
    helperUtils.click(browser, 'useXpath', this.elements.viewResultsBtn, 'Clicked on View Results Button');
},

fillExtraDetailsForRenter(browser:NightwatchBrowser) {
    helperUtils.click(browser, 'useXpath', '(//span[text()=" January "]/../..)[2]', 'Selected January month for Which month Question');
    helperUtils.click(browser, 'useXpath', '(//span[text()=" Contents Only "]/../..)[1]', 'Selected Contents Only insurance for Which Type of Insurance Question');
},

fillExtraDetailsForLandlord(browser:NightwatchBrowser) {
    helperUtils.click(browser, 'useXpath', '//span[text()=" Rented to Tenants "]/../..', 'Selected Rented To Tenants Option');
    helperUtils.click(browser, 'useXpath', '//span[text()=" Real Estate Agent "]/../..', 'Selected Real Estate Agent Option');
    helperUtils.click(browser, 'useXpath', '(//button[@id="question$written_agreement$option$"])[2]', 'Selected No Option for written lease agreement');
}

};





