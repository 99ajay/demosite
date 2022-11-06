//impure function

let a=9;
function addnum(b)
{
    console.log("the sum id ",a+b);
}

addnum(2);
addnum(2);

//pure function

function addnum2(a,b)
{
     return a+b;
}

console.log(addnum2(2,3));