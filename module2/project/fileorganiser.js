

// let inputarr=process.argv;
// console.log(inputarr);

// //['pathnode','pathtofile','inputpassed_in_terminal']

// let input=inputarr[2];
// console.log(input);

let fs=require("fs");
let path=require("path");
let folderPath=process.argv[2];

//console.log(folderpath)
let folderExists=fs.existsSync(folderPath);

let extensions = {
    Audio:[".mp3"],
    Video:[".mp4",".mkv"],
    Document:[".doc",".xlsx",".pdf",".txt"],
    Image:[".jpeg",".jpg",".png",".gif"],
    Software:[".exe"]
};



if(folderExists)
{
    //we will code
    //console.log("path is valid!!!")
    let files = fs.readdirSync(folderPath);
    for(let i=0;i<files.length;i++){
        let ext = path.extname(files[i]);
        let nameOfFolder = giveFolderName(ext);
        console.log("Ext--",ext,"Folder--",nameOfFolder);
    }
}

else{
    console.log("enter a valid path!!!!!!!!!");
}


function giveFolderName(ext){
    for(let key in extensions){
        let extArr = extensions[key];
        for(let i=0;i<extArr.length;i++){
            if(extArr[i] == ext){
                return key;
            }
        }
    }
    return 'Others'
}