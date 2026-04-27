//get element by id 
console.log("getelementbyid = return element as an object or NULL if not present.");
console.log("id_obj = document.getElementById(container);");
console.log("id_obj.style.color = red");
id_obj = document.getElementById("container");
id_obj.style.color = "red";


//get element by classname
console.log("getelementbyClassName = get element as html collection or empty collection if not found");
class_obj = document.getElementsByClassName("item");
for (let i = 0; i < class_obj.length; i++) {
    class_obj[i].style.color = "blue";
}
   


//get element by tagname
console.log("getelementbyTagName = get element as html collection or empty collection if not found");
class_obj = document.getElementsByTagName("li");
class_obj[1].style.color = "green";


// query selector
console.dir(document.querySelector('p')); 
console.dir(document.querySelector('#main-img')); 
console.dir(document.querySelector('.card'));

console.dir(document.querySelectorAll("p"));

//
console.log("innerHTML,textContent,innerText")
para = document.querySelector("p");

console.log(para.innerHTML);


