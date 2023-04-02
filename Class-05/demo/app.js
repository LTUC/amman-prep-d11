"use strict";

let grade = 10;
console.log(grade);

// // console.log("hello js from app.js ");

// // number string undefined boolean null object array 

// // primitive 
// // number string null undefined boolean
// // numbers > 10,-3,3.14
// // string 'anything',"asdscscsd" 
// // null 
// // undefined >>>
// // boolean >>> true,false

// // nonprimitive 
// // object >>> {property:value}
// // array >>> [1,2,3,4]

// // variables
// // var  / let / const
// // 4242fwdfsvs not a variable

// // - meaningful name 
// // - camelCase notation
// // - should start with letter or `$ _`
// // $userName 
// // - not a reserved keyword 
// // var function var ture
// // - js is case sensitive
// // var userName this is not equal to var UserName 

// var useName = 'shihab';
// var age = 37;
// var loveJs = true;
// var myPhoneNumber;//>>>>undefind null
// var hasCar = null;
// // console.log('myPhoneNumber >>> ',myPhoneNumber);

// // primitive immutable 
// var num1 = 5;
// var num2 = num1;
// num1 = 10;

// // console.log('num1 >>> ', num1);//10 
// // console.log('num2 >>> ', num2);//5  


// // nonprimitive mutable

// var arr1 = [1, 2, 3];
// var arr2 = arr1;
// // arr1=[1,2,3,4]
// arr1.push(4);
// arr2.push(5);
// // console.log('arr1 >>> ', arr1);//[1,2,3,4]
// // console.log('arr2 >>> ', arr2)//[1,2,3,4]

// // var >>> function scope 
// // var x = 100;
// // var y = 200;
// // function usingVar() {
// //     var x = 10;
// //     if (true) {
// //         var y = 20;
// //         console.log('x inside the if >>>> ', x);
// //     }
// //     console.log('x >>>> ', x);//10
// //     console.log('y >>>> ', y);//20
// // }
// // usingVar();
// // console.log('x >>>> ', x);
// // console.log('y >>>> ', y);


// // let >>> block scope
// // let x = 100;
// // let y = 200;
// function usingVar() {
//     let x = 10;
//     if (true) {
//         let y = 20;
//         console.log('x inside the if >>>> ', x);//10
//     }
//     console.log('x >>>> ', x);//10
//     // console.log('y >>>> ', y);//errora
// }
// // usingVar();
// // console.log('x >>>> ', x);//error
// // console.log('y >>>> ', y);//error

// // const pi = 3.14;
// // pi = 3;

// // alert('hi welcome to our site');
// // let userAnswer = confirm('do you like js?');
// // console.log('userAnswer >>>> ', userAnswer);

// // let userAnswer2 = prompt('what is your name ?');
// // console.log('userAnswer2 >>>> ', userAnswer2);

// // Operators

// // - arithmetic
// // + - * / % **
// let x = 2;
// let y = 3;
// let sum = x + y;
// // console.log(sum)


// let power = x ** y;
// // console.log(power);

// let a = 5;
// // a = a + 5; a += 5;

// let v1 = 10;
// let v2 = '3';
// let result = v1 + v2;
// // console.log('result', result);

// // comparison
// // <
// // >
// // <=
// // >=
// // ==
// // !=
// // ===
// // !==
// // let num4 = 10;
// // let num5 = 10;
// // if (num4 >= num5) {
// //     console.log('thank you ');
// // }

// let num6 = 100;
// // console.log(typeof (num6));
// let num7 = '100';
// // console.log(typeof (num7));
// // console.log(num6 === num7)
// // if (num6 != num7) {
// //     console.log('thank you ');
// // }


// // logical &&  ||   !

// // if ('') {
// //     console.log('yes');
// // }

// // if (num6 > num7) {
// //     // if ture this code 
// // } else {
// //     // if false this code
// // }
// // if (num6 > num7) {

// // } else if (num6 < num7) {

// // }
// // let userInput = parseInt(prompt('please enter a day number'));
// // console.log(typeof (userInput));

// switch (userInput) {
//     case 0:
//         console.log('Sunday');
//         break;
//     case 1:
//         console.log('Monday');
//         break;
//     case 2:
//         console.log('Tuesday');
//         break;
//     default:
//         console.log('no day');
//         break;
// }


// if (age >= 20) {
//     console.log('yes');
// } else {
//     console.log('no');
// }
// // (condition)?code if true : code if false

// // (age >= 20) ? console.log('yes') : console.log('no');

