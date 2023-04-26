// Array.reduce( fn(acc,val,idx){},initVal)

let numbers = [1, 2, 3, 4];
// let sum;
let sum = numbers.reduce((acc, val, i) => {
    console.log(acc);
    acc = acc + val;
    // acc = acc * val;

    return acc;
}, 0);

// console.log(sum);

// "" 0
// change the shape of your data
let family = [
    { name: "ahmad", role: "dad" },
    { name: "laila", role: "mum" },
    { name: "sofyan", role: "bro" },
    { name: "lana", role: "sis" },
];

let newFamily = family.reduce((acc, val, i) => {
    acc[val.role] = val.name;

    return acc
}, {})



console.log(newFamily);