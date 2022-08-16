//this keyword is for reference purpose to any object
//this keyword's value will depend upon how it is called?
//1. function invocation
//2. method invocation

console.log(this);// globally call kia hai 

function abc(){
    console.log("this inside a function",this);
}
 //abc(); //function invocation  ---->global objects created;

 let obj1 = {
    name:"Aman",
    age:23,
    test:function()
    {
        this.def(); //method invocation --->not global object
    },
    def : function()
    {
        console.log(this);
    }
}
obj1.test();


console.log("tttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttt");
//jisme this hai us function ko dekhna hai ki how is that inviked if function invocation then ---global objects,else---object


let obj = {
    name:"Aman",
    age:23,
    def:function(){
        // console.log(this);
        function klm(){
            console.log(this);
        }
        klm(); //function invocation--->global object
    }
}
 
console.log("$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$");
obj.def();        //method invocation
console.log("##################################")
let ghi = obj.def;
ghi(); //function invocation