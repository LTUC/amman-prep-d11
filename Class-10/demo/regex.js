// regular expressions regx

// - finding something inside a string
// - validation 
// - replace part of a string

// / regex rule /

// let str = 'the java is 2 javaScript what the Car is to Carpet';
// let regex = /the/g
// let regex2 = /shihab/
// regex3=/^The/i

// // let result = regex.test(str)
// let result2 = str.match(regex)
// console.log(result2.length);

// let str2 = 'abhc abhc';
// let regex4 = /abc*/;//true
// let regex4 = /abc+/;//false

// let result3 = regex4.test(str2)
// console.log(result3)


// let str3 = 'QSD abc123';
// // let regex5 = /\d/
// let regex5 = /[A-Z a-z][0-9]/
// let result4 = regex5.test(str3);
// console.log(result4)

let str4 = 'ab hc a bh c';
let regex4 = /\s/g
let regex6 = /\s/

let result5 = regex4.test(str4);
console.log(result5)

console.log(str4.replace(regex4, "-"));//ab-hc-a-bh-c with g flag
console.log(str4.replace(regex6, "-"));//ab-hc a bh c without g flag

