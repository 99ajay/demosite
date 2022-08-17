class Person{
    constructor(name,age){
        this.name = name,
        this.age = age
    }
    welcome(){
        console.log("hello "+ this.name);
    }
}

class Teacher extends Person{
    constructor(name,age,classStrength){
        super(name,age);  //we call constructor of teachers and set the value 
        this.classStrength = classStrength;
    }
}

class Student extends Person{
    constructor(name,age,cgpa){
        super(name,age)
        this.cgpa = cgpa;
    }
}

let person = new Person("Adam",25);//creating class of object
console.log(person);

let teacher = new Teacher("Aman",23,58);
console.log(teacher);

let student = new Student("Ayush",22,9);
console.log(student);

person.welcome();
student.welcome();