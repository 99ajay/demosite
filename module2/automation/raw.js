const puppeteer = require('puppeteer');  //require phase

let browserPromise = puppeteer.launch({ headless: false });  //it is doing promise to launch the browser //if headless is true then our browser is opened but hat will be not visible to us 

// browserPromise.then(function(browser){
//     console.log("Browser is opened");
//     let pagePromise = browser.newPage();
//     return pagePromise;
// }).then(function(page){
//     console.log("page is opened");
//     let urlPromise = page.goto('https://www.google.com/');
//     return urlPromise
// }).then(function(){
//     console.log("google is opened");

// })

let browserPromise=puppeteer.launch({headless : false});
browserPromise.then(function(browserInstance) //if promise is complete then pass browser instance 
{
    console.log("Browser is opened");
    let pagePromise=browserInstance.newPage(); //to open for the new page in the browser 
})
 