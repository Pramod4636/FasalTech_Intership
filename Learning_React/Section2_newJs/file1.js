import abc from "./exp1.js";

// diff let and const 
let a = 30 ; 

const b = 40 ; 

a = 40 ; 

const multipy = (num) => { console.log(2*num);}

console.log(multipy(3));

console.log(abc(35,4));


class Human {

    constructor() {
        this.gender = 'male';

    }
    printGender() {
        console.log(this.gender);    
    }
}


class Person extends Human{
    constructor(){
        super();
        this.name = 'Max ';
    }
    printMyName(){
        console.log(this.name);
    }
}

const person = new Person();
person.printMyName();
person.printGender();
