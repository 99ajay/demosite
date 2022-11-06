//is the square of the number is even
//imperative way
const x=5;
const xsquared=x*x;
let iseven;

if(xsquared%2==0)
{
    iseven=true;
}
else{
    iseven=false;
}

console.log(iseven);


//declarative code 

const issquareeven=(x)=>((x*x)%2===0 ?true : false);
console.log(issquareeven(4));