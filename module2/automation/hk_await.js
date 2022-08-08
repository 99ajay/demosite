const puppeteer=require("puppeteer");
const mail="hitani4016@chimpad.com";
const pass="12345qwert";
const code =require('./code');


(async function(){
    let browser = await puppeteer.launch({ headless: false, defaultViewport: null,args: ['--start-fullscreen'] });
    let page = await browser.newPage();
    await page.goto('https://www.hackerrank.com/');
    await waitAndClick(".menu-item-2887 a",page);
    await page.waitForSelector("a .fl-button-text");
    await page.evaluate(function(){
        let btns = document.querySelectorAll("a .fl-button-text");
        btns[1].click();
        return;
    });
    await page.waitForSelector("#input-1");
    await page.type("#input-1",mail,{ delay: 100 });
    await page.type("#input-2",pass,{delay:100});
    await waitAndClick(".ui-btn.ui-btn-large.ui-btn-primary.auth-button.ui-btn-styled",page);
    await waitAndClick('[data-automation="algorithms"]',page);
    await page.waitForSelector(".filter-group");
    await page.evaluate(function(){
        let allDivs = document.querySelectorAll(".filter-group");
        let div = allDivs[3];
        let clickSelector = div.querySelector(".ui-checklist-list-item input");
        clickSelector.click();
        return;
    });
    await page.waitForSelector('.challenges-list .js-track-click.challenge-list-item');
    let questionsArr = await page.evaluate(function(){
        let arr = [];
        let aTags = document.querySelectorAll('.challenges-list .js-track-click.challenge-list-item');
        for(let i=0;i<aTags.length;i++){
            let link =  aTags[i].href;
            console.log(link);
            arr.push(link);
        }
        return arr;
    })
    for(let i=0;i<questionsArr.length;i++){
        await questionSolver(questionsArr[i],code.answers[i],page);
    }
    await browser.close();
})();
 

async function waitAndClick(selector,page){
    await page.waitForSelector(selector);
    await page.click(selector);
}

async function questionSolver(question,answer,page){
    await page.goto(question);
    await waitAndClick('.checkbox-wrap>input',page);
    await waitAndClick(".ui-tooltip-wrapper .input.text-area.custominput.auto-width",page);
    await page.type('.ui-tooltip-wrapper .input.text-area.custominput.auto-width',answer);
    await page.keyboard.down('Control');
    await page.keyboard.press('A');
    await page.keyboard.press('X');
    await page.keyboard.up('Control');
    await waitAndClick('.monaco-editor.no-user-select.vs',page);
    await page.keyboard.down('Control');
    await page.keyboard.press('A');
    await page.keyboard.press('V');
    await page.keyboard.up("Control");
    await waitAndClick('.ui-btn.ui-btn-normal.ui-btn-primary.pull-right.hr-monaco-submit.ui-btn-styled',page);
}