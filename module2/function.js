// let sum=10+3;
// let another_sum=23+8;
function sayHello()//function name)of_the_function
{
    //body of function
    console.log("hello i am a ajay verma");
}
sayHello();
//function with parameter 
function sum(num1,num2)
{
    let addition=num1+num2;
    console.log("addition of given numbers :" +addition);

}
sum(786,3736);
//function with return type
function multiply(num1,num2)
{
    return num1*num2;
}
let ans =multiply(45,67);
console.log(ans);



//storing a function in javascript 
let a=function sub(num1,num2)
{
    return num1-num2;
}
console.log(a(64838,7584));