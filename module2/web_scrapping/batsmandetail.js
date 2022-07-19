const request = require("request");
const jsdom = require("jsdom");
const { JSDOM } = jsdom;

const link = "https://www.espncricinfo.com/series/ipl-2021-1249214/royal-challengers-bangalore-vs-kolkata-knight-riders-eliminator-1254115/full-scorecard";

request(link,cb);


function cb(error,response,html){
    if(error){
        console.log(error);
    }else{
        const dom = new JSDOM(html);
        const document = dom.window.document;
        let batsmen = document.querySelectorAll(".ds-w-full.ds-table.ds-table-xs.ds-table-fixed.ci-scorecard-table .ds-inline-flex.ds-items-center.ds-leading-none>a");
        for(let i=0;i<batsmen.length;i++){
            let batsmanLink = batsmen[i].href;
            let completeBatsmanLink = "https://www.espncricinfo.com"+batsmanLink;
             //console.log(completeBatsmanLink);
            request(completeBatsmanLink,cb2);
        }
    }
}


function cb2(error,response,html){
    if(error){
        console.log(error);
    }else{
        const dom = new JSDOM(html);
        const document = dom.window.document;
        let playerDetail = document.querySelectorAll(".ds-w-full.ds-bg-fill-content-prime.ds-overflow-hidden.ds-rounded-xl.ds-border.ds-border-line.ds-mb-4 div>span>h5");
       // let playerH5 = playerDetail.querySelectorAll("div h5");
        let fullName = playerDetail[0].textContent;
        let DOB = playerDetail[1].textContent;
        console.log("Full Name : ",fullName," Date of Birth : ",DOB);
    }
}