// 'use strict';
// let ahmadAlfar = {
//     fName: 'Ahmad',
//     lName: 'Alfar',
//     gender: 'male',
//     age: 23,
//     id: 2023101010,
//     doesLoveCoffee: false,
//     school: {
//         schoolName: 'ASAC',
//         tellMe: function () {
//             console.log('hi my name is ' + this.schoolName);
//         }
//     },
//     talk: function () {
//         // console.log('hi my name is ' + ahmadAlfar.fName);
//         console.log('hi my name is ' + this.fName);
//     }

// }

// let bayan = {
//     fName: 'Bayan',
//     lName: 'Hamdeh',
//     gender: 'female',
//     age: 22,
//     id: 2023202020,
//     doesLoveCoffee: true,
//     talk: function () {
//         // console.log('hi my name is ' + bayan.fName);
//         console.log('hi my name is ' + this.fName);

//     }
// }
// // ahmadAlfar.talk();
// // bayan.talk();
// // ahmadAlfar.school.tellMe();

// console.log(ahmadAlfar);
// console.log(bayan);

// console.log(bayan.lName);
// console.log(bayan['age']);

// ahmadAlfar.grade = 89;

// ahmadAlfar.age = 25;

// console.log('after', ahmadAlfar);
// console.log('after', bayan);

function Student(firstName, lastName, gender, banana, id, doesLoveCoffee) {
    this.fName = firstName;
    this.lName = lastName;
    this.gender = gender;
    this.age = banana;
    this.id = id;
    this.doesLoveCoffee = doesLoveCoffee;
}

Student.prototype.talk = function () {
    // console.log('hi my name is ' + bayan.fName);
    console.log('hi my name is ' + this.fName);
    console.log('hi my age is ' + this.age);
}
let ahmadAlfar = new Student('Ahmad', 'Alfar', 'male', 23, 2023101010, false);
let bayan = new Student('Bayan', 'Hamdeh', 'female', 22, 2023202020, true);

// ahmadAlfar.tall = 180;
console.log(ahmadAlfar);
ahmadAlfar.talk();
console.log(bayan);
bayan.talk();

