// 'use strict';
// /**************************arrays******************************/
// let userName;
// let myFavMeals = ['shawarmah', 'mansaf', 'magloobeh', 'salad'];
// console.log(myFavMeals);
// // let myArry = ['shihab', 37, 182, 'green'];
// let topMeal = myFavMeals[2];
// console.log('my favorite meal is ' + topMeal);
// console.log(`my favorite food is ${topMeal}`);

// myFavMeals[4] = 'falfel';

// console.log(myFavMeals);

// myFavMeals[10] = "fries";
// console.log(myFavMeals);
// console.log('index 5', myFavMeals[5]);

// let favTopics = [];
// // console.log(favTopics);
// favTopics.push('javascrpit');
// favTopics.push('html');
// favTopics.push('css');

// favTopics.unshift("nodejs");
// favTopics.pop();
// favTopics.shift();
// // console.log(favTopics);

// // console.log(favTopics);


// /**************************loops******************************/
// console.log(1)
// console.log(2)
// console.log(3)
// console.log(4)

// // for/while/do while / forin/foreach

// for (let i = 1; i <= 4; i++) {
//     console.log(i);
// }

// let i = 1;
// while (i <= 4) {
//     console.log(i);
//     i++;
// }

// let topics = ['html', 'css', 'js', 'nodejs', 'react'];
// console.log(topics[0]);
// console.log(topics[1]);
// console.log(topics[2]);
// console.log(topics[3]);

// for (let i = 0; i < topics.length; i++) {
//     console.log(topics[i]);
// }

// let password = '';
// do {
//     password = prompt('enter your password');
// } while (password !== '1234');

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = [7, 8, 9];
const arr4 = [10, 11, 12];
const arr5 = [13, 14, 15];
const arr6 = [16, 17, 18];
const arr7 = [19, 20, 21];
const arr8 = [22, 23, 24];
const arr9 = [25, 26, 27];
const arr10 = [28, 29, 30];

// let avg1 = 0;
// let sum1 = 0;
// for (let i = 0; i < arr1.length; i++) {
//     sum1 = sum1 + arr1[i];
// }
// avg1 = sum1 / arr1.length;
// console.log(avg1);

// let avg2 = 0;
// let sum2 = 0;
// for (let i = 0; i < arr2.length; i++) {
//     sum2 = sum2 + arr2[i];
// }
// avg2 = sum2 / arr2.length;
// console.log(avg2);

// function declaration 
// function expression

// arrow function

// function arrAvg(params) {

//     return 1;
// }

// console.log(arrAvg());
// let returnedThing = arrAvg();

function calcAvg(arr) {
    let sum = 0;
    let avg = 0;
    for (let i = 0; i < arr.length; i++) {
        // sum = sum + arr[i];
        sum += arr[i];
    }
    avg = sum / arr.length;
    // console.log(`The Avg for the array = ${avg}`);
    return avg;
}

// console.log('The avg for arr1 is ', calcAvg(arr1));
// console.log('The avg for arr2 is ', calcAvg(arr2));
// console.log('The avg for arr3 is ', calcAvg(arr3));
// console.log('The avg for arr4 is ', calcAvg(arr4));


function sumItems(n1, n2) {
    return n1 + n2;
    // return n1 * n2;
}

// console.log(sumItems(2, 5));

function checkElement(arr, item) {
    for (let i = 0; i < arr.length; i++) {
        if (item === arr[i]) {
            return 'yes';
        }
    }
    return 'no';
}
console.log('function declaration ', checkElement([1, 6, 5, 4], 3));

// function expression
const checkElement2 = function (arr, item) {
    for (let i = 0; i < arr.length; i++) {
        if (item === arr[i]) {
            return 'yes';
        }
    }
    return 'no';
}

console.log('function expression ', checkElement2([1, 6, 5, 3], 3));

// let userInput = parseInt(prompt('please enter a number'));
console.log('function expression ', checkElement2([1, 6, 5, 3], userInput));


// arrow function
function funcName(params) {
    //code 
    //code 
}

const variableName = (params) => {
    //code 
    // code

    // return;
}

function multi(a, b) {
    return a * b;
}

const multiArrow = (a, b) => {
    return a * b;
}

const multiArrow2 = (a, b) => a * b;


const square = (num) => {
    return num * num;
}
const square2 = num => num * num;