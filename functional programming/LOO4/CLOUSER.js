
// function calculate(a,b)
// {
//     let result =a+b;
//     return result;
// }

// console.log(calculate(2,3));

// console.log(result);//not possible to access outside the function rule of javascript either declare by var or let does not matter 


function add()
{
    let a=4;//lexical scope

    function addchild()
    {
        console.log(a+5);
    }
    addchild();
}
add();


