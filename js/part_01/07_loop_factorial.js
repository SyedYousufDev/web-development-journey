

let n = prompt("Enter a number to find its factorial. Thank YOu");
let factorial = 1;

for (let i = 1; i <= n; i++) {
    factorial *= i;
}

console.log(`factorial of ${n} is ${factorial}`);