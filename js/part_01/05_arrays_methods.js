
//arrays methods

console.log("Methods of array:Push,Pop,Unshift,Shift");
arr=["car","bike","cycle"];
num = [1,2,3,4,5,6,7,8];

console.log("before methods");
console.log(arr);
console.log("after push methods");
arr.push("ship");
console.log(arr);
console.log("after pop methods");
console.log(arr.pop());
console.log("unshift methods");
arr.unshift("aeroplane");
console.log(arr);
console.log(" shift methods");
console.log(arr.shift());

//include() find whether the element is present or not..
console.log('tractor is present:');
console.log(arr.includes("tractor"));
console.log('car is present:');
console.log(arr.includes("car"));

//concatenate

console.log('name.concat(name) :');
console.log(arr.concat(num));
console.log('name.reverse() :');
console.log(num.reverse());

//splice
console.log(num);
console.log(num.splice(5));
console.log("after splice(5)",num);
console.log(num.splice(1,1));
console.log("after splice(1,1)",num);
console.log(num.splice(1,1,"car"));
console.log("after splice(1,1,car) : " ,num);

//
a=[4,3,6,7,2,8,1];
console.log(a);
console.log("Sort on the array a.sort() is : ",a.sort());
