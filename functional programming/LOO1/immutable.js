//functional programming provide to write immutable code
//immutable code --does not change after the excution of programm 
//mutable means code can change after the programm excutioin of programm 

const person1 ={
    name:'adam',
    age:25
}

//const person2=person1;

//person2.name='steve';
// 1. const person2=Object.assign({},person1)
// person2.name='steve';

//spread operator
const person2={...person1};
person2.name='steve';

console.log(person1);
console.log(person2);