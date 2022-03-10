//CRUD OPERATION 




let fs=require("fs");
//console.log(fs);


let path=require("path");
let filePath=path.join(__dirname,"file.txt");
//console.log(filePath);

//c create
fs.writeFileSync(filePath,"hello i am a ajay verma");//create file if file does not exit inn the folder and override if it is already present in the folder 

//r read
console.log("before update : ");
let content=fs.readFileSync(filePath,'utf-8');
console.log(content);

//try to write after the file not replace the file 

//u update
fs.appendFileSync(filePath," newly added content");
console.log("after update : ");
console.log(fs.readFileSync(filePath,'utf-8'));


//D delete
//fs.unlinkSync(filePath);
