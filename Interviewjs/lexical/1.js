console.log(varname);
var varname=10;
console.log(varname);
function fn()
{
    console.log(varname);
    var varname=20;
    function b()
    {
        console.log("line number 10",varname);
    }
    console.log(varname);
}
fn();