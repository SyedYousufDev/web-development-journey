
let n = 5;

let square = (n) =>  n*n;

console.log(square(4));

//print hello 5 times with interval 2 sec each
let id = setInterval(() =>  { console.log("Hello world")},2000);

setTimeout(()=>
    {
        clearInterval(id);
     },2000 * 5);
