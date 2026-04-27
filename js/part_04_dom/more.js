//manipulating attributes
obj = document.querySelector('img');

console.log(obj.getAttribute('id'));

obj.setAttribute('id','spotify-pic');
console.log(obj.getAttribute('id'));

//style manipulating

console.log(obj.style);

//classlist
sec = document.querySelector('section');
console.log(sec.classList);
//classList.remove()
//classList.add()
//classList.contains()
//classList.toggle()




//Navigation

//obj.parentElement
//obj.nextSibling
//obj.childern
//obj.NextElementSibling

//Adding Element

let newp = document.createElement('p');
let newpi = document.createElement('p');
newp.innerText = "Hi, I am Yusuf.";
newpi.innerText = "How are you?";

let body = document.querySelector('body');
body.appendChild(newp);//same can removechild and remove
newp.append(newpi);







