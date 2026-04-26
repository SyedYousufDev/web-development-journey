
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
   


