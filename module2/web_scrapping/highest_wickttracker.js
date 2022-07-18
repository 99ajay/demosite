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
        const document =  dom.window.document;
        let runmax=0;
        let batsman="";
        let bowlersTable = document.querySelectorAll(".ds-w-full.ds-table.ds-table-xs.ds-table-fixed.ci-scorecard-table");
       
        for(let i=0;i<bowlersTable.length;i++){
            let rows = bowlersTable[i].querySelectorAll("tbody tr");
            for(let j=0;j<rows.length-4;j++){
                let tds = rows[j].querySelectorAll("td");
                if(tds.length>1){
                    let nameoo = tds[0].textContent;
                    let run = tds[2].textContent;
                    const running=(+run);
                    //console.log(typeof running);
                    
                    console.log("Name of batsman ---> ",nameoo,"     runs ---> ",run);
                    if(running>runmax)
                    {
                        runmax=running;
                        console.log(runmax);
                        batsman=nameoo;
                    }
                    
                }
            }
        }
        
        console.log("Name of Highest run maker : ",batsman);
        console.log("total run makes      : ",runmax);
    }
    
}