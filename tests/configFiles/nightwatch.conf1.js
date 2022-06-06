const path = require('path');

module.exports = {
  src_folders: ["./tests/build/functionalTests/Regression"],
  page_objects_path: ["./tests/build/pageObjects"],
  globals_path: "../build/configFiles/global.js",

  webdriver: {
    start_process: true,
    port: 4444,
    server_path: require('chromedriver').path,
    cli_args: [
      // very verbose geckodriver logs
      // '-vv'
    ]
  },

  webdriver: {
    start_process: true,
    port: 4444,
    server_path: require("chromedriver").path1,
    cli_args: [
      // very verbose geckodriver logs
      // '-vv'
    ],
  },



  test_settings: {
    default: {
      //disable_error_log: false,
      launch_url: "https://wwwuat.iselect.com.au/energy/",

      screenshots: {
        enabled: true,
        path: "tests_output/failedScreenshots",
        on_failure: true,
        on_error: true
      },
      skip_testcases_on_fail: false,
      desiredCapabilities: {
        browserName: "chrome",
        alwaysMatch: {
          // Enable this if you encounter unexpected SSL certificate errors in Firefox
          // acceptInsecureCerts: true,
          'goog:chromeOptions': {
            "w3c": true,
            args: [
              // '-headless',
              // '-verbose'
            ],
          }
        }
      },
    },

    PROD: {
      //disable_error_log: false,
      launch_url: "https://www.iselect.com.au/energy/",

      screenshots: {
        enabled: true,
        path: "tests_output/failedScreenshots",
        on_failure: true,
        on_error: true,
      },
      skip_testcases_on_fail: false,
      desiredCapabilities: {
        browserName: "chrome",
        "goog:chromeOptions": {
          args: [],
        },
      },

    },

    //////////////////////////////////////////////////////////////////////////////////
    // Configuration for when using the browserstack.com cloud service               |
    //                                                                               |
    // Please set the username and access key by setting the environment variables:  |
    // - BROWSERSTACK_USER                                                           |
    // - BROWSERSTACK_KEY                                                            |
    // .env files are supported                                                      |
    //////////////////////////////////////////////////////////////////////////////////
  //   browserstack: {
  //     selenium: {
  //       host: "hub-cloud.browserstack.com",
  //       port: 443,
  //     },
  //     // More info on configuring capabilities can be found on:
  //     // https://www.browserstack.com/automate/capabilities?tag=selenium-4
  //     desiredCapabilities: {
  //       "bstack:options": {
  //         userName: "${BROWSERSTACK_USER}",
  //         accessKey: "${BROWSERSTACK_KEY}",
  //       },
  //     },

  //     disable_error_log: true,
  //     webdriver: {
  //       timeout_options: {
  //         timeout: 15000,
  //         retry_attempts: 3,
  //       },
  //       keep_alive: true,
  //       start_process: false,
  //     },
  //   },

  //   "browserstack.local": {
  //     extends: "browserstack",
  //     desiredCapabilities: {
  //       "browserstack.local": true,
  //     },
  //   },

  //   "browserstack.chrome": {
  //     extends: "browserstack",
  //     desiredCapabilities: {
  //       browserName: "chrome",
  //       chromeOptions: {
  //         w3c: true,
  //       },
  //     },
  //   },

  //   "browserstack.firefox": {
  //     extends: "browserstack",
  //     desiredCapabilities: {
  //       browserName: "firefox",
  //     },
  //   },

  //   "browserstack.ie": {
  //     extends: "browserstack",
  //     desiredCapabilities: {
  //       browserName: "internet explorer",
  //       browserVersion: "11.0",
  //     },
  //   },

  //   "browserstack.safari": {
  //     extends: "browserstack",
  //     desiredCapabilities: {
  //       browserName: "safari",
  //     },
  //   },

  //   "browserstack.local_chrome": {
  //     extends: "browserstack.local",
  //     desiredCapabilities: {
  //       browserName: "chrome",
  //     },
  //   },

  //   "browserstack.local_firefox": {
  //     extends: "browserstack.local",
  //     desiredCapabilities: {
  //       browserName: "firefox",
  //     },
  //   },
  //   //////////////////////////////////////////////////////////////////////////////////
  //   // Configuration for when using the Selenium service, either locally or remote,  |
  //   //  like Selenium Grid                                                           |
  //   //////////////////////////////////////////////////////////////////////////////////
  //   selenium_server: {
  //     // Selenium Server is running locally and is managed by Nightwatch
  //     selenium: {
  //       start_process: true,
  //       port: 4444,
  //       server_path: Services.seleniumServer
  //         ? Services.seleniumServer.path
  //         : "",
  //       cli_args: {
  //         "webdriver.gecko.driver": Services.geckodriver
  //           ? Services.geckodriver.path
  //           : "",
  //         "webdriver.chrome.driver": Services.chromedriver
  //           ? Services.chromedriver.path
  //           : "",
  //       },
  //     },
  //   },
   },
};

// function loadServices() {
//   try {
//     Services.seleniumServer = require("selenium-server");
//   } catch (err) {}

//   try {
//     Services.chromedriver = require("chromedriver");
//   } catch (err) {}

//   try {
//     Services.geckodriver = require("geckodriver");
//   } catch (err) {}
// }
