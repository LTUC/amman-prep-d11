'use strict';
var abc;
//global 
//local 
//1.block scope
//2.function scope 

// global
let x = 10;
function test() {
    console.log('inside function', x);
}

console.log('outside function', x)

test();

// block scope
{
    let y = 100;
}

// if(){

// }

// console.log('y inside a {} ', y);

// function scope
function multiply(first, second) {
    let result = first * second;
    let message = '';
    if (result > 0) {
        message = 'positive';
    }
    else {
        message = 'negative';
    }
    return `the result is ${result} and the message is ${message}`;
}
// console.log(multiply(2, 3));
// hoisting
// let s;
console.log(s);
let s = "shihab";

// console.log(abc);
// abc = 10;

// age = 10;
// console.log(age);

// let s;
// console.log(s);
// s = 'shihab';

// function example() {
//     console.log(s);
//     let s = 'shihab';
// }
// example();