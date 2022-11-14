let pe = require('pretty-error').start();
pe.skipNodeFiles();
pe.appendStyle({
   
   'pretty-error > header > title > kind': {
      display: 'none'
   },

   'pretty-error > header > colon': {
      display: 'none'
   },

   'pretty-error > header > message': {    
      color: 'bright-white',
      background: 'cyan',
      padding: '0 1' 
   },

   'pretty-error > trace > item': {
      marginLeft: 2,
      bullet: '"<grey>o</grey>"'
   },

   'pretty-error > trace > item > header > pointer > file': {
      color: 'bright-cyan'
   },

   'pretty-error > trace > item > header > pointer > colon': {
      color: 'cyan'
   },

   'pretty-error > trace > item > header > pointer > line': {
      color: 'bright-cyan'
   },

   'pretty-error > trace > item > header > what': {
      color: 'bright-white'
   },

   'pretty-error > trace > item > footer > addr': {
      display: 'none'
   }
});

export const inputDatas = {
  sWaits: 10,
  shortestWaits: 1000,
  shortWaits: 4000,
  mediumWaits: 6000,
  longwaits: 10000,
  extendedwaits: 15000,
  password: "Testing@LL",
  userName: "test@yopmail.com",
  testSearchData: "Elon Musk",
  uName: "xxxxxxxxxxx@gmail.com",
  pwd: "xxxxxxxx",
}

const allureReporter = require('nightwatch-allure');
module.exports = {
  reporter: (results,done)=>{
   const reporter = new allureReporter.NightwatchAllureReporter({});
   reporter.write(results,done);
 }
};
