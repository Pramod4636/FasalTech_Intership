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

const numbers = [1,2,3,4] ;
const newnumber = [...numbers,5,6];
console.log(numbers,newnumber);

const fun1 = (...arg) => {
    for( let i = 0 ; i < arg.length ; ++i )
      console.log(arg[i]," ");
}

fun1(12,3,43,5,6,7);
fun1(3,5);

// Distructuring array : (unpacing )

const number = [1,2,3];
const [num1,,num3] = number;

console.log("distrucing array : ", num1,num3);