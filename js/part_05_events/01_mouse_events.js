// 1. Standard Click Event (Using addEventListener)
const clickBtn = document.querySelector("#clickBtn");
clickBtn.addEventListener("click", (event) => {
    console.log("Standard click detected!");
    clickBtn.style.backgroundColor = "lightgreen";
});

// 2. Double Click Event
const doubleBtn = document.querySelector("#doubleBtn");
doubleBtn.addEventListener("dblclick", () => {
    alert("You double-clicked the button!");
});

// 3. Mouse Enter and Leave (Hover Effects)
const hoverBtn = document.querySelector("#hoverBtn");

hoverBtn.addEventListener("mouseenter", () => {
    hoverBtn.textContent = "Mouse is inside!";
    hoverBtn.style.color = "red";
});

hoverBtn.addEventListener("mouseleave", () => {
    hoverBtn.textContent = "Hover Over Me";
    hoverBtn.style.color = "black";
});

// 4. Tracking Mouse Movement & Right Click
const interactionBox = document.querySelector("#box");

// Right-click event (contextmenu)
interactionBox.addEventListener("contextmenu", (e) => {
    e.preventDefault(); // Prevents the actual browser menu from appearing
    console.log("Right-click blocked on this box!");
    interactionBox.style.background = "orange";
});

// Mouse Down (When you press the button, before releasing)
interactionBox.addEventListener("mousedown", () => {
    interactionBox.textContent = "Release me!";
});

// Mouse Up (When you let go of the click)
interactionBox.addEventListener("mouseup", () => {
    interactionBox.textContent = "Interact with this box";
});