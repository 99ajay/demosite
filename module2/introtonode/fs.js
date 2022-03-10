let fs=require("fs");
//console.log(fs);


let path=require("path");
let filePath=path.join(__dirname,"file.txt");
//console.log(filePath);

fs.writeFileSync(filePath,"hello i am a ajay verma");
//fs.writeFileSync()