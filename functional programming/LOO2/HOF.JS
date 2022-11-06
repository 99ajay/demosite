//MAP FILTER REDUCE 
let myarray=[1,2,3,4,5];

let newarray=myarray.map(function(x)
{
    return x*x;
})

console.log(myarray);
console.log(newarray);

//filter

let filterarray=myarray.filter(function(x)
{
 return x%2===0;
})

console.log(myarray);
console.log(filterarray);

//reudce 

//how we can use an array to the sum of an array

let sumarray=myarray.reduce(function(accumulator,x)
{
 return accumulator+x;
},0)

console.log(sumarray);