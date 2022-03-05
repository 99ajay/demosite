// console.log("i am in");
// console.log("ajay verma");
// //variable in js and data type;
// let a=230;//number
// console.log(a);
// let char='a';
// console.log(char);//character
// let str='i am string';//string;
// console.log(str);
// let bool=true;//boolean
// console.log(bool);
// //loops
// // console.log(1);
// // console.log(2);
// // console.log(3);
// for(let i=1;i<5;i++)
// {
//     console.log(i);
// }
// let count =10;
// while(count >0)
// {
//     console.log(count);
//     count--;
// }
//program to check is prime;
let n=13;
let flag=true;
if(n<=1)
{
    flag=false;
}
for(let i=2;i*i<=n;i++)
{
    if(n%i==0)
    {
        flag=false;
    }
}
if(flag)
{
    console.log("number is prime number")
}
else{
    console.log("number is not prime number ");
}