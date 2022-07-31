const puppeteer=require("puppeteer");

let browserPromise=puppeteer.launch({headless:false});

let page;
browserPromise.then(function(browser){
     console.log("browser is opened");
     //console.log(browser);
     let pagePromise=browser.newPage();
     return pagePromise;

}).then(function(pageInstance){
    console.log("page is opened");
    page=pageInstance;
    let urlPromise=page.goto(" https://www.hackerrank.com/");
    return urlPromise;
}).then(function(){
    console.log("hackerrank page is opened");
    let waitPromise=page.waitForSelector(".menu-item-2887 a");
    return waitPromise;

}).then(function(){
    let clickPromise=page.click(".menu-item-2887 a");
    return ;
})