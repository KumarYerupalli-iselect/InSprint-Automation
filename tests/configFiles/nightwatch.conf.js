const path = require('path');
const allureReporter = require('nightwatch-allure');

module.exports = {

  // An array of folders (excluding subfolders) where your tests are located;
  // if this is not specified, the test source must be passed as the second argument to the test runner.

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

  reporter: (results,done)=>{
    const reporter = new allureReporter.NightwatchAllureReporter({});
    reporter.write(results,done);
  },

  test_settings: {
    default: {
      screenshots: {
        enabled: true,
        path: "tests_output/failedScreenshots",
        on_failure: true,
        on_error: true
      },
      launch_url: 'https://wwwuat.iselect.com.au/health-insurance/',
      skip_testcases_on_fail: false,

      data: {
        SFDC: {
          URL : 'https://test.salesforce.com/',
          Username : 'kumar.yerupalli@iselect.com.au.uat',
          Password : 'Tressa1618!'
        },
        TC001 : {
          userName : 'xxxx@uatiSelect.com',
          password : 'xxxpassword'
        }
        
      }

    },

      desiredCapabilities: {
        browserName: 'chrome',
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
      }
    },

    prod: {
      launch_url: 'https://www.iselect.com.au/',
      screenshots: {
        enabled: true,
        path: "tests_output/failedScreenshots",
        on_failure: true,
        on_error: true
      },
      skip_testcases_on_fail: false,

      data: {

        TC001 : {
          userName : 'xxxx@iSelect.com',
          password : 'xxxpassword'
        }

      }

      },
      desiredCapabilities: {
        browserName: 'chrome',
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
      }
    }