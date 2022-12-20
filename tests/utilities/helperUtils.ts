import { NightwatchBrowser } from "nightwatch";

export const helperUtils = {
  click(
    browser: NightwatchBrowser,
    using: "useCss" | "useXpath",
    selector: string,
    successMsg: string
  ) {
    if (using == "useCss") {
      browser
        .useCss()
        .waitForElementPresent(
          selector,
          20000,
          1000,
          undefined,
          undefined,
          successMsg
        )
        .click(selector, () => {
          console.log("CallBack : clicked the webElement : " + successMsg);
        });
    } else {
      browser
        .useXpath()
        .waitForElementPresent(
          selector,
          20000,
          1000,
          undefined,
          undefined,
          successMsg
        )
        .click(selector, () => {
          console.log("CallBack : clicked the webElement : " + successMsg);
        });
    }
  },

  enterKeys(
    browser: NightwatchBrowser,
    using: "useCss" | "useXpath",
    selector: string,
    value: string | undefined,
    successMsg: string
  ) {
    if (using == "useCss") {
      this.verifyWebElementExistForInteraction(
        browser,
        "present",
        selector,
        20000,
        2000,
        undefined,
        successMsg
      );
      browser.useCss().sendKeys(selector, value, () => {
        console.log("CallBack :entering input value as " + value);
      });
    } else {
      this.verifyWebElementExistForInteraction(
        browser,
        "present",
        selector,
        20000,
        2000,
        undefined,
        successMsg
      );
      browser.useXpath().sendKeys(selector, value, () => {
        console.log("CallBack :entering input value as " + value);
      });
    }
  },

  /**
   * @param verificationType : element is present or displayed is checked
   * then we do other user actions on this webElement
   */
  verifyWebElementExistForInteraction(
    browser: NightwatchBrowser,
    verificationType: "present" | "visible" | "isVisible" | "isEnabled",
    selector: string,
    waitTime: number,
    pollTime: number,
    abortOnFailure: boolean | undefined,
    successMsg: string
  ) {
    if (verificationType === "present") {
      browser.useXpath().waitForElementPresent(
        selector,
        waitTime,
        pollTime,
        abortOnFailure,
        () => {
          console.log("CallBack : Status of webElement present");
        },
        successMsg
      );
    } else if (verificationType === "visible") {
      browser.useXpath().waitForElementVisible(
        selector,
        waitTime,
        pollTime,
        abortOnFailure,
        () => {
          console.log("CallBack : Status of webElement visible");
        },
        successMsg
      );
    } else if (verificationType === "isVisible") {
      browser.useXpath().isVisible(selector, () => {
        console.log("CallBack : Status of webElement isVisible");
      });
    } else if (verificationType === "isEnabled") {
      browser.useXpath().expect.element(selector).to.be.enabled;
    }
  },

  // /**
  //  * We check for the element to be absent (i.e) not present or visible
  //  * Eg: like loading Icon or etc
  //  */
  // verifyElementDoesNotExist(
  //   browser: NightwatchBrowser,
  //   verificationType: "notPresent" | "notVisible" | "notEnabled",
  //   selector: string,
  //   waitTime: number,
  //   pollTime : number,
  //   abortOnFailure: boolean | undefined,
  //   successMsg : string
  // ) {
  //   if (verificationType === "notPresent") {
  //     browser.useXpath().waitForElementNotPresent(selector, waitTime, pollTime, abortOnFailure,
  //       (status) => {
  //         console.log("CallBack : Status of webElement present" + status);
  //         return status;
  //       }, successMsg);
  //   } else if (verificationType === "notVisible") {
  //     browser.useXpath().waitForElementNotVisible(selector, waitTime, pollTime, abortOnFailure,
  //       (status) => {
  //         console.log("CallBack : Status of webElement visible" + status);
  //         return status;
  //       }, successMsg);
  //   } else if (verificationType === "notEnabled") {
  //     browser.useXpath().expect.element(selector).to.not.be.enabled;
  //   }
  // },

  /**
   *
   * @param whichFrame   - parent or child frames which we want to navigate to
   * @param frameIdentifier - name of the frameID or frameName which we want to switch to
   */
  handleFrames(
    browser: NightwatchBrowser,
    whichFrame: "parent" | "childFrames",
    frameIdentifier?: string
  ) {
    if (whichFrame == "parent" && frameIdentifier == null) {
      browser.frameParent((result) => {
        console.log("callBack : switching to parent frame " + result);
        return result;
      });
    } else if (whichFrame == "childFrames" && frameIdentifier != null) {
      browser.frame(frameIdentifier, (result) => {
        console.log("callBack : switching to parent frame " + result);
        return result;
      });
    }
  },

  assertWebElementOrItsText(
    browser: NightwatchBrowser,
    assertionType: "isEqual" | "toContain" | "isNotEqual" | "doesNotContain",
    selector: string,
    expectedText: string
  ) {
    switch (assertionType) {
      case "isEqual":
        browser.expect.element(selector).text.to.equal(expectedText);
        break;

      case "toContain":
        browser.expect.element(selector).text.to.contain(expectedText);

      case "isNotEqual":
        browser.expect.element(selector).text.to.not.equal(expectedText);
        break;

      case "doesNotContain":
        browser.expect.element(selector).text.to.not.contain(expectedText);
        break;
    }
  },

  switchToPrimaryWindow(browser: NightwatchBrowser) {
    browser.windowHandles((result) => {
      let handle = result.value[0];
      browser.switchWindow(handle);
    });
    return browser;
  },

  openURL(browser: NightwatchBrowser) {
    browser.url(browser.launch_url, (result) => {
      console.log(result);
    });
    return browser;
  },

  switchToOtherWindow(browser: NightwatchBrowser, windowIndexValue: number) {
    browser.windowHandles((result) => {
      let handle = result.value[windowIndexValue];
      browser.switchWindow(handle);
    });
    return browser;
  },

  browserActions(browser: NightwatchBrowser, action: "forward" | "back") {
    if (action == "forward") {
      browser.forward();
    } else if (action == "back") {
      browser.back();
    }
  },

  validateURL(
    browser: NightwatchBrowser,
    assertionType: "completeURL" | "partOfURL",
    expectedURL: string,
    successMsg: string
  ) {
    let savedUrl;
    if (assertionType == "completeURL") {
      browser.url((result) => {
        savedUrl = result;
      });
      browser.verify.urlEquals(expectedURL, successMsg);
    } else if (assertionType == "partOfURL") {
      browser.url((result) => {
        savedUrl = result;
      });
      browser.verify.urlContains(expectedURL, successMsg);
    }
    console.log(
      "URL from browser : " + savedUrl + "And our expected URL " + expectedURL
    );
  },

  validateTitle(
    browser: NightwatchBrowser,
    expectedTitle: string,
    successMsg: string
  ) {
    let actualTitle;
    browser.title(function (result) {
      actualTitle = result.value;
    });
    browser.verify.title(expectedTitle, successMsg);
    console.log(
      "URL from browser : " +
        actualTitle +
        "And our expected URL " +
        expectedTitle
    );
  },

  clearAndEnterInput(
    browser: NightwatchBrowser,
    selector: string,
    value: string
  ) {
    browser.clearValue(selector, () => {
      console.log("callBack : cleared the value of input field");
    });
    browser.sendKeys(selector, value, () => {
      console.log("CallBack :entering input value as " + value);
    });
  },

  moveToElement(browser: NightwatchBrowser, selector: string, message: string) {
    return browser
      .useXpath()
      .waitForElementVisible(
        selector,
        20000,
        2000,
        undefined,
        undefined,
        message
      )
      .getLocationInView(selector, (result) => {
        browser.moveToElement(selector, result.value[0], result.value[1]);
      });
  },

  moveToElement1(browser: NightwatchBrowser, selector: string) {
    try {
      browser.useXpath()
        .getLocationInView(selector, (result) => {
          browser.moveToElement(selector, result.value[0], result.value[1], function () {

          })
        })
    }
    catch (err) {
      console.log(err)
    }
    return browser;
  },

  random(length: number) {
    return Math.random().toString(16).substr(2, length);
  },

  assertElementStatus(
    browser: NightwatchBrowser,
    assertionType: "present" | "visible",
    selector: string,
    successMsg: string,
    using?: "useXpath" | "useCss"
  ) {
    if (using == "useCss") {
      switch (assertionType) {
        case "present":
          browser.useCss().assert.elementPresent(selector, successMsg);
          break;
        case "visible":
          browser.useCss().assert.visible(selector, successMsg);
          break;
      }
    } else {
      switch (assertionType) {
        case "present":
          browser.useXpath().assert.elementPresent(selector, successMsg);
          break;
        case "visible":
          browser.useXpath().assert.visible(selector, successMsg);
          break;
      }
    }
  },

  getDate(format: string, dateCount: number) {
    if (dateCount == undefined) dateCount = 0;
    let monthNames = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    var day = new Date();
    if (format == undefined) {
      return (
        day.getDate() +
        dateCount +
        "-" +
        monthNames[day.getMonth()] +
        "-" +
        day.getFullYear()
      );
    } else if (format == "dd-mm-yyyy") {
      var date = (day.getDate() + dateCount).toString();
      var month = (day.getMonth() + 1).toString();
      if (date.length == 1) date = "0" + date;
      if (month.length == 1) month = "0" + month;
      return date + "-" + month + "-" + day.getFullYear();
    }
  },

  waitForElementPresentToClick(
    browser: NightwatchBrowser,
    locator: "useCss" | "useXpath",
    selector,
    waitTime,
    selectorName
  ) {
    if (locator == "useCss") {
      browser
        .useCss()
        .waitForElementPresent(selector, waitTime, 100, false, (visible) => {
          if (visible)
            helperUtils.click1(browser, "css selector", selector, selectorName);
        });
    } else if (locator == "useXpath") {
      browser
        .useXpath()
        .waitForElementPresent(selector, waitTime, 100, false, (visible) => {
          if (visible)
            helperUtils.click1(browser, "xpath", selector, selectorName);
        });
    }
  },

  click1(
    browser: NightwatchBrowser,
    using: "css selector" | "xpath",
    selector: string,
    selectorName: string
  ) {
    return browser.click(using, selector, () => {
      console.log("CallBack : clicked the webElement : " + selectorName);
    });
  },

  enterInputValue(browser: NightwatchBrowser, selector: string, value: string) {
    return browser.setValue(selector, value, () => {
      console.log(`CallBack :entering input value as ${value}`);
    });
  },

  getAndVerifyPageTitle(browser: NightwatchBrowser, expectedTitle: string) {
    let actualTitle;
    browser.title(function (result) {
      actualTitle = result.value;
      console.log(
        "URL from browser : " +
          actualTitle +
          " And our expected URL " +
          expectedTitle
      );
      browser.verify.title(expectedTitle);
    });
  },

  verifyWebElementText(
    browser: NightwatchBrowser,
    selector,
    waitTime,
    abortOnFailure: true | false,
    expectedText
  ) {
    browser
      .useXpath()
      .waitForElementPresent(
        selector,
        waitTime,
        100,
        abortOnFailure,
        (present) => {
          if (present)
            browser.useXpath().getText(selector, (text) => {
              browser.assert.equal(text.value, expectedText);
            });
        }
      );
  },

  verifyAndEnterInputInTextBox(
    browser: NightwatchBrowser,
    selector: string,
    selectorName: string,
    value: string,
    waitTime: number,
    abortOnFailure: true | false
  ) {
    browser.waitForElementVisible(
      selector,
      waitTime,
      100,
      abortOnFailure,
      () => {
        console.log(`CallBack : Status of webElement visible ${selectorName}`);
        this.enterInputValue(browser, selector, value);
      },
      `Status of webElement present ${selectorName}`
    );
  },

  getAndVerifyURL(
    browser: NightwatchBrowser,
    assertionType: "completeURL" | "partOfURL",
    expectedURL: string
  ) {
    let savedUrl;
    if (assertionType == "completeURL") {
      browser.url((result) => {
        savedUrl = result.value;
        console.log(
          "URL from browser : " +
            savedUrl +
            " And our expected URL " +
            expectedURL
        );
      });
      browser.verify.urlEquals(expectedURL);
    } else if (assertionType == "partOfURL") {
      browser.url((result) => {
        savedUrl = result.value;
        console.log(
          "URL from browser : " +
            savedUrl +
            " And our expected URL " +
            expectedURL
        );
      });
      browser.verify.urlContains(expectedURL);
    }
  },

  /**
   * We check for the element to be absent (i.e) not present or visible
   * Eg: like loading Icon or etc
   */
  verifyElementDoesNotExist(
    browser: NightwatchBrowser,
    verificationType: "notPresent" | "notVisible" | "notEnabled",
    selector: string,
    waitTime: number,
    abortOnFailure: boolean | undefined
  ) {
    if (verificationType === "notPresent") {
      browser.waitForElementNotPresent(
        selector,
        waitTime,
        100,
        abortOnFailure,
        (status) => {
          console.log("CallBack : Status of webElement present" + status);
          return status;
        }
      );
    } else if (verificationType === "notVisible") {
      browser.waitForElementNotVisible(
        selector,
        waitTime,
        100,
        abortOnFailure,
        (status) => {
          console.log("CallBack : Status of webElement visible" + status);
          return status;
        }
      );
    } else if (verificationType === "notEnabled") {
      browser.expect.element(selector).to.not.be.enabled;
    }
  },

  enterInputValueAndClickEnter(
    browser: NightwatchBrowser,
    selector: string,
    value: string
  ) {
    browser.clearValue(selector, () => {
      browser.setValue(selector, [value, browser.Keys.ENTER]);
    });
  },

  assertWebElementVisiblityCss(
    browser: NightwatchBrowser,
    assertionType: "visible" | "invisible",
    selector: string
  ) {
    switch (assertionType) {
      case "visible":
        browser.expect.element(selector).to.be.visible;
        break;

      case "invisible":
        browser.expect.element(selector).to.not.be.visible;
    }
  },
};
