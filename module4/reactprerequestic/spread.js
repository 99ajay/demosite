let arr=[1,2,3];

// let arr2=arr;
// console.log(arr);
// console.log(arr2);

let arr2=[...arr]//called spred operator it make new memory location of array in the heap

arr2[2]=10;
console.log(arr);
console.log(arr2);

//use of spred operator is in copy the array 

//spread operator with objects;

let obj={
    name:"adam",address:{country:"USA",state:{
        stateName:"NewYork",pincode:123456
    }}}

//shallow copy//ek hi level par changes 
let obj2={...obj};

obj2.name="ajay";

// console.log(obj.name);
// console.log(obj2.name);

// obj2.address=
// {
//     country:"india",state:"delhi",pincode:12345
// }
obj2.address.country="India";

 

console.log(obj.name);
console.log(obj.address);
console.log("##################");
console.log(obj2.name);
console.log(obj2.address);

console.log("deep copy................................????????????????????????????????????");
// //deep copy

let obj4={...obj};

console.log(obj.address);
console.log(obj4.address);

let obj3=JSON.parse(JSON.stringify(obj))

obj3.address.country="japan";
console.log(obj.address.country);
console.log(obj3.address.country);
