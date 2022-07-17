//site---->https://www.npmjs.com/package/request
const request = require('request'); //gona use request command from package 
const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const link="https://www.espncricinfo.com/series/ipl-2021-1249214/chennai-super-kings-vs-kolkata-knight-riders-final-1254117/full-scorecard";
request(link,cb);

     function cb(error, response, html) {
     if(error)
     {
         console.error('error:', error); // Print the error if one occurred
     }
     else
     {   
         const dom=new JSDOM(html);
       //  const document=dom.window.document.querySelector("p").textContent;
        // console.log('body:', body); // Print the HTML for the Google homepage.
       // console.log(document);
       const document=dom.window.document;
       let teamsName=document.querySelectorAll(".ci-team-score.ds-flex.ds-justify-between.ds-items-center.ds-text-typo-title.ds-mb-2 .ds-text-tight-l.ds-font-bold");
       console.log(teamsName[0].textContent);
       console.log(teamsName[1].textContent);
     }
};






// request('http://www.google.com', cb);

// function cb(error, response , body) { //
// if(error)   
//      console.error('error:', error); // Print the error if one occurred
 
// else    //console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
//      console.log('body:', body); // Print the HTML for the Google homepage.
// }