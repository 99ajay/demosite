//const require=require("request");
const jsdom =require("jsdom");
const request = require("request");
let fs=require("fs");
const{JSDOM} =jsdom;
const link="https://www.espncricinfo.com/series/ipl-2021-1249214/match-results";
let leaderboard=[];
let counter=0;
request(link,cb);
function cb(error,response,html)
{
    if(error)
    {
        console.log(error);
    }
    else{
        const dom=new JSDOM(html);
        const document=dom.window.document;
        let allscorecard = document.querySelectorAll(".ds-flex.ds-mx-4.ds-pt-2.ds-pb-3.ds-space-x-4.ds-border-t.ds-border-line-default-translucent");
        // let count=0;
        for(let i=0;i<allscorecard.length;i++)
        {
            let x=allscorecard[i].querySelectorAll("span>a");
          //  console.log(x.length);
          let y=x[2].href;
          let completescorecardlink="https://www.espncricinfo.com"+y;
          //console.log(completescorecardlink);
          request(completescorecardlink,cb2);
           counter++;
        }
        // console.log(count);
    }
}



function cb2(error,response,html){
    if(error){
        console.log(error);
    }else{
        const dom = new JSDOM(html);
        const document = dom.window.document;
        let playerDetail = document.querySelectorAll(".ds-w-full.ds-table.ds-table-xs.ds-table-fixed.ci-scorecard-table");
        for(let i=0;i<playerDetail.length;i++)
        {
            let rows=playerDetail[i].querySelectorAll("tbody tr");
            for(let j=0;j<rows.length-4;j++)
            {
                let tds=rows[j].querySelectorAll("td");
                if(tds.length>1)
                {
                    let nameoo=tds[0].textContent;
                    let run=tds[2].textContent;
                    let balls=tds[3].textContent;
                    let four=tds[5].textContent;
                    let six=tds[6].textContent;
                   // console.log("Name : ",nameoo,"           Runs : ",run,"        balls : ",balls,"    four : ",four,"     Six : ",six);
                    processPlayer(nameoo,run,balls,four,six);

                }
            }
            counter--;
            if(counter==0)
            {
                //console.log(leaderboard);
                let data = JSON.stringify(leaderboard);
                fs.writeFileSync('BatsmenStats.json',data);
            }
        }
      
        
    }
}

// processPlayer('Rohit','15','4','2','4');
// processPlayer('Virat','50','20','4','3')
// processPlayer('Rohit','40','20','1','2');
//console.log(leaderboard);

function processPlayer(name,runs,balls,fours,sixes){
    runs = Number(runs);
    balls = Number(balls);
    fours = Number(fours);
    sixes = Number(sixes);
    for(let i=0;i<leaderboard.length;i++){
        let playerObj = leaderboard[i];
        if(playerObj.Name == name){
            //will do some work here
            playerObj.Runs+=runs;
            playerObj.Balls+=balls;
            playerObj.Fours+=fours;
            playerObj.Sixes+=sixes;
            return;
        }
    }
    // code coming here means we did not find our player inside leaderboard
    let obj = {
        Name:name,
        Runs:runs,
        Balls:balls,
        Fours:fours,
        Sixes:sixes
    }
    leaderboard.push(obj);
}