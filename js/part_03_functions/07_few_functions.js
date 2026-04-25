
// foreach()
console.log("forreach function: - ")
let arr = [10,15,20];
n=0;
sum=0;
let print = (a) =>  {  console.log(a);     };

arr.forEach(print);

//mapfunction similar ot foreach() but stores array in new array
console.log("Map function: - ")
let newarray = arr.map((n)=>(n * n));

console.log(newarray);

// filter same as map but only if true

console.log("filter function: - ")
let even = arr.filter((n)=>(n%2==0));
console.log(even);

// every method return true or false accoring to the condition
console.log("every function: - give false becuse the array 10,15,20 has an odd number so condition is false.")
let ever = arr.every((n)=>(n%2==0));
console.log(ever);

// reudece method 
console.log("reduce function: - it have two aarugumnets accumaltor and element.")
let red = arr.reduce((acc,res)=>(acc+res));
console.log(red);


//default parameters
console.log("default parameter:");
function add (a,b=5) 
{ 
    return a+b;

};
console.log(add(3));
