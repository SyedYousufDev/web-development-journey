
h1 = document.querySelector("h1");
function changeColor(color, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      h1.style.color = color;
      resolve("color changed!");
    }, delay);
  });
}

async function demo() {
    await changeColor("red", 1000);
    await changeColor("orange", 1000);
    await changeColor("blue", 1000);
    await changeColor("blue", 1000);
}

//use try and catch to handle rejection and the program execute smoothly without craching

// try{
// await changecolor();}
// catch(err){
//     console.log(err);
// }
//

