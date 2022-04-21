const fs = require("fs");

console.log("Before ");

fs.readFile("file.txt",cb);
//console.log(content+"");

function cb(error,data){
    if(error){
        console.log(error);
    }else{
        console.log(data+"");
    }
}


console.log("After");