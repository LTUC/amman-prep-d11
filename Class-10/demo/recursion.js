//recursion 
// factorial 
// 5! ?
// 5! = 5*4*3*2*1
// 6! = 6*5*4*3*2*1
// 7! = 7*6*5*4*3*2*1
// 1!= 1
// 0!= 1

// n! = n * (n-1)!

function fact(n) {
    if (n == 0 || n == 1) {
        return 1;
    } else {
        return n * fact(n - 1);
    }
}

// console.log(fact(4));

// num = 6 calculate the sumasion of the number from num to 1 

function sumNum(n) {
    if (n == 1) return 1;
    else {
        return n + sumNum(n - 1);
    }
}

// console.log(sumNum(5));

function fib(n) {
    if (n == 0 || n == 1) {
        return n;
    } else {
        return fib(n - 1) + fib(n - 2);
    }
}
console.log(fib(5));