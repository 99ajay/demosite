const puppeteer=require("puppeteer");
const mail="hitani4016@chimpad.com";
const pass="12345qwert";

let browserPromise=puppeteer.launch({ headless: false, defaultViewport: null, args: ['--start-maximized'] });

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
    return clickPromise;
}).then(function()
{
    let waitPromise=page.waitForSelector("a .fl-button-text");
    return waitPromise;
}).then(function()
{
    let domclickPromise=page.evaluate(function()
    {
        let btns=document.querySelectorAll("a .fl-button-text");
        btns[1].click();
        return;
    })
    return domclickPromise;
}).then(function()
{
    let waitPromise=page.waitForSelector("#input-1");
    return waitPromise;
}).then(function()
{
    let mailrypedpromise=page.type('#input-1',mail,{delay: 100});
    return mailrypedpromise;
    
   
}).then(function()
{
    let passtypepromise=page.type("#input-2",pass,{delay: 100});
    return passtypepromise;
}).then(function()
{
    let clickfinal=page.click(".ui-btn.ui-btn-large.ui-btn-primary.auth-button.ui-btn-styled");
    return clickfinal;
}).then(function()
{
    console.log("login successful");
    return page.waitForSelector('[data-automation="algorithms"]');
}).then(function()
{
    
    return page.click('[data-automation="algorithms"]');
}).then(function()
{
    return page.waitForSelector(".filter-group");
}).then(function()
{
    let domselectpromise=page.evaluate(function()
    {
        let alldivs=document.querySelectorAll(".filter-group");
        let div=alldivs[3];
        let clickselector=div.querySelectorAll(".ui-checklist-list-item input");
        clickselector[0].click();
        return;
    })
    return domselectpromise;
}).then(function()
{
    console.log("warm up selected");
    return page.waitForSelector(".challenges-list .js-track-click.challenge-list-item");
}).then(function()
{

})