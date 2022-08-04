//chaining via promises to reduce callback hell 


let fs = require("fs");

let f1KaPromise = fs.promises.readFile("f1.txt");

f1KaPromise.then(function(data){
    console.log(data+"");//when our f1 fill will read then after print their data
    let f2KaPromise = fs.promises.readFile("f2.txt");//and then make a promise on f2
    return f2KaPromise;//return 
}).then(function(data){  
    console.log(data+"");//when f2 file will read then print the data of f2
}).catch(function(error){
    console.log(error);
})