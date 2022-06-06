"use strict";
const baseConfig = require("./nightwatch.conf.js");
const config = Object.assign(Object.assign({}, baseConfig), {
  webdriver: {
    start_process: false,
    host: "hub-cloud.browserstack.com",
    port: 443,
  },
});
config.test_settings.default.desiredCapabilities["browserstack.userName"] =
  process.env.BROWSERSTACK_USER;
config.test_settings.default.desiredCapabilities["browserstack.accessKey"] =
  process.env.BROWSERSTACK_KEY;
config.test_settings.default.desiredCapabilities.chromeOptions.args = [];

config.test_settings.firefox = {
  desiredCapabilities: {
    os: "Windows",
    os_version: "XP",
    browserName: "Firefox",
    browser_version: "47.0",
    ["browserstack.local"]: true,
  },
};
config.test_settings.chrome = {
  desiredCapabilities: {
    os: "Windows",
    os_version: "11",
    browserName: "Chrome",
    browser_version: "90.0",
    ["browserstack.local"]: true,
  },
};
config.test_settings.safari = {
  desiredCapabilities: {
    os: "OS X",
    os_version: "Big Sur",
    browserName: "Safari",
    browser_version: "14.0",
    ["browserstack.local"]: true,
    ["browserstack.debug"]: true,
    ["browserstack.networkLogs"]: true,
  },
};

for (var i in config.test_settings) {
  var test_setting = config.test_settings[i];
  test_setting["selenium_host"] = config.webdriver.host;
  test_setting["selenium_port"] = config.webdriver.port;
}
module.exports = config;
