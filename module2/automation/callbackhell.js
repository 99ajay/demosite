const fs = require("fs");

console.log("Before ");

fs.readFile("f1.txt", function (error,data){
    if(error){
        console.log(error);
    }else{
        console.log(data+"");
        fs.readFile("f2.txt",function(error,data){
            if(error){
                console.log(error);
            }else{
                console.log(data+"");
            }
        });
    }
});

console.log("After");
//this is known as callback hell