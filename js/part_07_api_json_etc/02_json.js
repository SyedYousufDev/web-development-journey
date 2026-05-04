
let jsonRes = '{"fact":"The first formal cat show was held in England in 1871; in America, in 1895.","length":75}';

let validRes = JSON.parse(jsonRes);
console.log(" JSON.parse(jsonRes);");
console.log(validRes);



StrRes = JSON.stringify(validRes);
console.log("JSON.stringify(validRes);");
console.log(StrRes);