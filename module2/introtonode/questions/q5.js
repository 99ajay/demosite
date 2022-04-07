//move a file\

//there is no direct way to move the file from one directory to another directory method is that first we copy the file from one directory to where we have to move paste there and then delete the sourcepath of that file from there
let fs=require("fs");
let path=require("path");

console.log(__dirname);
let sourcepath=path.join(__dirname,"file11.txt");

let destinationpath=path.join(__dirname,"..","..","file11.txt");
console.log(sourcepath);
console.log(destinationpath);

fs.copyFileSync(sourcepath,destinationpath);
fs.unlinkSync(sourcepath);///deleting after moving the file
