let cp = require("child_process");
console.log(cp);
//cp.execSync("code");
//cp.execSync("gnome-calculator");

let content=cp.execSync("node test.js");

console.log(""+content);

 