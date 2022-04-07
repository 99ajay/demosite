// read content of unorganised folder and make  an array which has extension name of each file
let fs=require("fs");
const path=require("path");
let folderkapath=path.join(__dirname,"..","unorganised");
console.log(folderkapath);
let content=fs.readdirSync(folderkapath);
console.log(content);
let extarr=[];
for(let i=0;i<content.length;i++)
{
    let name=content[i];
    let extname=path.extname(name);
    extarr.push(extname);
}
console.log(extarr);

