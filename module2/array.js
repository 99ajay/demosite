//empty array
let arr = [];
console.log(arr);

//array with element 
let elearr=[1,2,3,4,5,"hello i am a array",'false','c',4.5];
console.log(elearr);
//array is zero based indexing
console.log("element at 4th index: "+elearr[4]);

console.log("element at 0th index: " +elearr[0]);

//change an element in a array 
elearr[3]="nothing";
console.log(elearr);

//array method

//1.push

console.log("array before push: "+elearr);
elearr.push("new item");
console.log("array after push :" +elearr);
//push->add item at last in the array 
console.log("################################################################################");

