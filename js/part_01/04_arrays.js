
// length of arraya
let info= ["ali khan","22","3.16"];
console.log("length of array is: "+info.length)
console.log("length of array[0] element is: "+info[0].length)
console.log("printing of array[0][4] is: "+info[0][4])
console.log("printing of array[0].substring(4) till last is: "+info[0].substring(4))

//arrays are mutable
console.log("\n\narrays are mutable\n");
console.log(info)
info[0]="ali";
console.log(info)
info[6]="last element";
console.log(info)