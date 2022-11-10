var fs = require('fs');
var path = require('path');
var handlebars = require('handlebars');
var library     = require('@fortawesome/fontawesome-svg-core').library;
  var dom         = require('@fortawesome/fontawesome-svg-core').dom;
  var icon        = require('@fortawesome/fontawesome-svg-core').icon;
  var fas         = require('@fortawesome/free-solid-svg-icons').fas;


module.exports = {
  write : function(results, options, done) {

    let testcases=[];
    let files=Object.keys(results.modules);
    let passedTestcases = 0;
    let failedTestcases = 0;
    let filteredTestsArray=[];
    let filteredTestDetails={};
    console.log("********");
    let filteredTestCount=0;
    for(let file of files){
      let tcs=Object.keys(results.modules[file]["completed"]);
      for(let tc of tcs){
        let t={};
        t["testScenario"]=file;
        t["testCase"]=tc;
        t["time"]=results.modules[file]["completed"][tc]["time"];
        t["passed"]=results.modules[file]["completed"][tc]["passed"];
        t["failed"]=results.modules[file]["completed"][tc]["failed"];
        testcases.push(t);
        if(t["failed"]>0)
          failedTestcases++;
        else if(t["passed"]>=1)
          passedTestcases++;
        let obj = t;
        obj['assertions'] = [...results.modules[file]["completed"][tc]['assertions']];
        //if(filteredTestsArray.length<5)
          filteredTestsArray.push(obj);
        if(Object.keys(filteredTestDetails).indexOf(file)<0){
          filteredTestDetails[file]={};
          filteredTestDetails[file]['completed']={};
        }
        if(filteredTestCount<11){
          // console.log("building details obj");
          // console.log(tc);
          
          
          filteredTestDetails[file]['completed'][tc]={};
          filteredTestDetails[file]['completed'][tc]= results.modules[file]['completed'][tc];
          filteredTestCount++;
          //console.log(filteredTestDetails[file]['completed']);
      }
      }
    }
    
    var reportFilename = 'InSprint Automation Report.html';
    var reportFilePath = path.join('./tests/reports', reportFilename);

    // read the html template
    fs.readFile('html-reporter.hbs', function(err, data) {
      if (err) throw err;

      var template = data.toString();
      handlebars.registerHelper('replaceAndConcate', function(fileName) {
        let updateFileName=fileName.replaceAll(':','').replaceAll('-','');
        updateFileName = updateFileName.replace(/  +/g, ' ');
        console.log('./tests_output/screenshot/' + updateFileName.replaceAll(' ', '-') + '.png');
        return './tests_output/screenshots/' + updateFileName.replaceAll(' ', '-') + '.png';
});

      library.add(fas);

  handlebars.registerHelper('fontawesome-css', function () {
    return new Handlebars.SafeString(
      dom.css()
    )
  });

  handlebars.registerHelper('fontawesome-icon', function (args) {
    return new handlebars.SafeString(
      icon({ prefix: 'fas', iconName: args.hash.icon }).html
    )
  });

  handlebars.registerHelper('addOne', function(value) {
  return value + 1;
});

     let dataVal = {
        results   : results,
        options   : options,
        timestamp : new Date().toLocaleDateString("en-US",{weekday:'long',month:'long',year:'numeric',day:'numeric'}),
        browser   : options.filename_prefix.split('_').join(' '),
        totalScenarios : files.length,
        totalTestCases : passedTestcases+failedTestcases,
        testcases : testcases,
        totalPassed : passedTestcases,
        totalFailed : failedTestcases,
        totalTests: results.passed + results.failed + results.errors,
        filteredTests : filteredTestsArray,
        filteredTestInfo : filteredTestDetails
      }
      // merge the template with the test results data
      var html = handlebars.compile(template)(dataVal);

      // let pages = document.getElementsByClassName('paginate_button');
      // for(let itr=0;itr<pages.length;itr++){
      //   pages[itr].addEventListener('click',(evt)=>{
      //     let newData={...data,filteredTests:filteredTestsArray,filteredTestInfo:filteredTestDetails}
      //     // let updatedContent = html(newData);
      //     //  $("#paginatedTable").empty().append(updatedContent);
      //     handlebars.compile(template)(newData);
      //   })
      // }

      // write the html to a file
      fs.writeFile(reportFilePath, html, function(err) {
        if (err) throw err;
        console.log('Report generated: ' + reportFilePath);
        done();
      });
    });
  }
};