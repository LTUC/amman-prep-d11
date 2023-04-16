// pass by value and pass by reference 
let num1 = 10;
let num2 = num1;

num1 = 100;

// console.log('num1 ', num1);//100
// console.log('num2 ', num2);//10


let person = {
    name: 'shihab',
    age: 38
}

let secondPerson = person;


secondPerson.name = "ahmad";


// console.log('person ', person);
// {
//   name :'shihab',
//     age:38
// }

// {
//   name :'ahmad',
//     age:38
// }
// console.log('secondPerson ',secondPerson);

// {
//   name :"ahmad",
//     age:38
// }


// you can use spreard operator ...

let arr1 = [1, 2, 3];
let arr2 = [1, 2, 3];

// console.log(arr1 == arr2);//false

//true

let person2 = person.name;

let person3 = person2;

person3 = 'omari';

console.log('person ', person)
console.log('person2 ', person2)
