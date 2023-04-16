let family = ['shihab', 'ahmad', 'laith', 'abed'];
// for (let i = 0; i < family.length; i++) {
//     console.log(family[i]);
// }

// family.forEach((item,i)=>{
//   console.log(item);
//   console.log(i)
// })

function displayNames(item, i) {
    console.log(item);
    console.log(i);
}

family.forEach(displayNames);