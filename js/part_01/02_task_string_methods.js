// string are immutable

// trim()
let msg= '  pass      ';
let a="language";
let b="PYTHON";
console.log(msg);
console.log(msg.trim());
console.log(msg);

//to uppercase and to lowercase
console.log("language to upper:- "+a.toUpperCase());
console.log("PYTHON to lower:- "+b.toLowerCase());

//method with arguments
let c="ilovequran";
console.log("index of l in ilovequran is : "+ c.indexOf("l"))

//slice method
console.log("slice method c.slice(-9,-5) in string is : "+ c.slice(-9,-5))
console.log("slice method c.slice(1) in string is : "+ c.slice(1))
console.log("slice method c.slice(-5,c.length) in string is : "+ c.slice(-5,c.length))

//replace method
console.log("replace method c.replace('read','love') in string is : "+  c.replace('love','read'))

//repeat method
console.log("repeat method c.repeat(5) in string is : "+  c.repeat(5));