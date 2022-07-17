const fs = require("fs");

// console.log("Before ");

// let content=fs.readFileSync("file.txt",);
// console.log(content+" ");

// console.log("After");




console.log("Before ");

fs.readFile("file.txt",cb);  //remove sync and pass a callback to a function to skip current task to which callback is made in this way that task will run when all code run 

//console.log(content+"");

function cb(error,data){
    if(error){
        console.log(error);
    }else{
        console.log(data+"");
    }
}


console.log("After");