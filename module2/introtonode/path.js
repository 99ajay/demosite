//"\Users\Dell\Desktop\demosite\module2\introtonode\os.js"
let path=require("path");
//console.log(path);
let extensionName=path.extname("\Users\Dell\Desktop\demosite\module2\introtonode\tempCodeRunnerFile.js");
console.log(extensionName);

let base_name=path.basename("\Users\Dell\Desktop\demosite\module2\introtonode\tempCodeRunnerFile.js");
console.log(base_name);
console.log(__dirname);//return directory name

console.log(__filename);//return path with file name



let baseName=path.basename(__filename);
console.log(baseName);

let dirPath=__dirname;
console.log(dirPath);
console.log(path.basename(dirPath));
let newFilePath=path.join(dirPath,"test.js");
console.log(newFilePath);

