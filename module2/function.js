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
//
let a=function sub(num1,num2)//that is why it is called because it can store in the variable//
{
    return num1-num2;
}
console.log(a(64838,7584));
//area of the circle 
 let f=function area_of_circle(radius)
{
    return 3.14*radius*radius;
}
console.log(f(5.98));



//area of the rectangle 
let rectangle=function area_of_rectangle(length,breath)
{
    return length*breath;
}
console.log(rectangle(67,86));


//IIFE->Immediately invoked function expression
(function()
{
    console.log("hello from IIFE");
})();

//IIFE with parameter
    (function(num1,num2)
    {
        console.log(num1/num2);
    })(10,6);
