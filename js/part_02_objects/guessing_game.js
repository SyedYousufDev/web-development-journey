
const max = Number(prompt("Enter the Maximum range in which you want to guess my number."));  



const random = Math.floor(Math.random() * max) + 1;
let guess = prompt("Guess the number.");

while(true) {
    if (guess == "quit") {
        console.log("Quitting ");
        break;
    }
    
    guess = Number(guess);  
    
    if (guess == random) {
        console.log("You guessed the number right. That is ", random);
        break;
    } else if (guess > random) {
        guess = prompt("Your number is very large. Please guess the number again.");
    } else {  
        guess = prompt("Your number is very small. Please guess the number again.");
    }
}
