

//spread
console.log("spread, code is let arr = [10,15,20]; console.log(...arr, 1,2,3); : - ")
let arr = [10,15,20];

console.log(...arr, 1,2,3);

//rest
console.log("rest , used in function args : - u can use pr(...args) and min(msg,..args).")
function pr(...args) {
    for (let i = 1; i <args.length; i++) {
    console.log("You give the number",args[i])
}
    
}

function min(msg, ...args) {
    console.log(msg);
    return args.reduce((min, el) => {
        if (min > el) {
            return el;
        } else {
            return min;
        }
    });
}

console.log("Distructing functions: let [winner, runnerup, secondRunnerup] = names;");
let names = ["tony", "bruce", "peter", "steve"];
console.log(names);
// let winner = names[0];
// let runnerup = names[1];
// let secondRunnerup = names[2];

let [winner, runnerup, secondRunnerup] = names;
console.log("winner",winner);

// distruct for objects
console.log("distruct for objects->let { username: user, password } = student;")
const student = {
    name: "karan",
    age: 14,
    class: 9,
    subjects: ["hindi", "english", "math", "science"],
    username: "karan@123",
    password: "abcd",
};

let { username: user, password } = student;