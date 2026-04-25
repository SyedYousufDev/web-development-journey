
let num = prompt("Enter a number ot decide wether it is even or not.");

let is_even = (num) =>  { 
    if(num%2==0){
        console.log(`The number ${num} is Even.`);
    }
    else{
        console.log(`The number ${num} is NOT Even.`);
    }
};

is_even(num);