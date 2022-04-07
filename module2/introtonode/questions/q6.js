//read content of unorganised folder and print each file type
//for example abc.mp3 --> print Audio File
//            xyz.mp4 --> print Video File

const { readdirSync } = require("fs");

//            fsd.jpeg -> print Image File
fs=require("fs");
path=require("path");
let folderpath=path.join(__dirname,"..","unorganised");
console.log(folderpath);
let content=readdirSync(folderpath);
let arr1=[];
let arr2=[];
let arr3=[];
//console.log(content);
for(let i=0;i<content.length;i++)
{
  let name=content[i];
  let extname=path.extname(name);
  if(extname==".mp3")
  {
      arr1.push(content[i]);
  }
  if(extname==".mp4")
  {
      arr2.push(content[i]);
  }
  if(extname==".png" ||extname==".jpeg" )
  {
      arr3.push(content[i]);
  }
}
console.log("Adio file--->"+arr1);
console.log("vedio file--->"+arr2);
console.log("image file--->"+arr3);
 


