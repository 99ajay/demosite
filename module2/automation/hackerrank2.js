const puppeteer=require("puppeteer");
const mail="hitani4016@chimpad.com";
const pass="12345qwert";
const code =require('./code');

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
    return waitAndClick(".menu-item-2887 a");
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
    return waitAndClick('[data-automation="algorithms"]');
}).then(function()
{
    return page.waitForSelector(".filter-group");
}).then(function()
{
    let domselectpromise=page.evaluate(function()
    {
        let alldivs=document.querySelectorAll(".filter-group");
        let div=alldivs[3];
        let clickSelector=div.querySelector(".ui-checklist-list-item input");
       clickSelector.click( {clickCount:2});
       return ;
        
    })
    return domselectpromise;
}).then(function()
{
    console.log("warm up selected");
    return page.waitForSelector(".challenges-list .js-track-click.challenge-list-item");
}).then(function()
{
   let arrpromise=page.evaluate(function()
   {
    let arr=[];
    let alltags=document.querySelectorAll('.challenges-list .js-track-click.challenge-list-item');
    for(let i=0;i<alltags.length;i++)
    {
        let link=alltags[i].href;
        console.log(link);
        arr.push(link);
    }
    return arr;
   })
   return arrpromise;
}).then(function(questionarr)
{
    console.log(questionarr);
    let questionPromise=questionSolver(questionarr[0],code.answers[0]);
    return questionPromise;
})


function waitAndClick(selector){
    return new Promise(function(resolve,reject){
        let waitPromise = page.waitForSelector(selector);
        waitPromise.then(function(){
            let clickPromise = page.click(selector);
            return clickPromise;
        }).then(function(){
            resolve();
        });
    })
}




function questionSolver(question,answer){
    return new Promise(function(resolve,reject){
        let linkPromise = page.goto(question);
        linkPromise.then(function(){
            return waitAndClick('.checkbox-wrap>input');
        }).then(function()
        {
            return waitAndClick(".ui-tooltip-wrapper .input.text-area.custominput.auto-width");
        }).then(function()
        {
            console.log("on the text page");
            let typepromise=page.type('.ui-tooltip-wrapper .input.text-area.custominput.auto-width',answer);
            return typepromise;
        }).then(function()
        {
            let holdcontrol=page.keyboard.down('Control');
            return holdcontrol;
        }).then(function()
        {
             let pressA=page.keyboard.press('A');
             return pressA;
        }).then(function()
        {
            let pressX=page.keyboard.press('X');
            return pressX;

        }).then(function()
        {
            let upcontrol=page.keyboard.up('Control');
            return upcontrol;
        }).then(function()
        {
            return waitAndClick(".monaco-editor.no-user-select .vs");
        }).then(function()
        {
            return page.keyboard.down('Control');
        }).then(function()
        {
            return page.keyboard.press('A');
        }).then(function()
        {
            return page.keyboard.press('V');
        }).then(function()
        {
            return waitAndClick(".ui-btn.ui-btn-normal.ui-btn-primary.pull-right.hr-monaco-submit.ui-btn-styled");

        }).then(function()
        {
            console.log("question one has been compeletely submitted");
        })
    })
}