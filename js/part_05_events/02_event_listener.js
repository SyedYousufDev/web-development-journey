const btn = document.querySelector("button");

btn.addEventListener("click", () => {
  console.log("Button clicked via addEventListener!");
});


const bt = document.querySelector(".bt");
//this in eventlistener
bt.addEventListener("click", function() {
console.log(this.innerText);
this.style.backgroundColor = "lightblue"; 
});
//event listener is used on every element not just mouse.

//There are also events for keyboard keypressed and key up etc



// //change event and input event

// user.addEventListener("change", function () {
//   console.log("change event");
//   console.log("final value = ", this.value);
// });

// user.addEventListener("input", function () {
//   console.log("input event");
//   console.log("final value = ", this.value);
// });