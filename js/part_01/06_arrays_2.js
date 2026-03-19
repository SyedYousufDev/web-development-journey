
//array refrencing

arr=['a','b','c','d'];
arrcopy=arr;
console.log(arr);




arrcopy.push('e');
console.log("after arrcopy.push('e'); arr= ",arr);

//const array

//we can add or remove elemnets from const array but not fully override array.
const arr2=[1,3,4,5];

 //arr2=[6,7,8,9]; //error ->TypeError: Assignment to constant variable.

//nested array

let nest = [[1,2],[3,4],[5,6]];
console.log("Nested array : \n",nest);