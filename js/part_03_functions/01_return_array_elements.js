
 //JavaScript function that returns array elements larger than a number.

 let array=[3,66,8,3,2,9,1,4,5,22,33,27,29,21,11,18];
 console.log(array);
 let num = Number(prompt("Enter the number to show the larger elements from it in array"));
 

 function show_large(array,num){
    for(let i=0;i<array.length;i++){
        if(array[i]>num){
            console.log(array[i]);
        }
    }
 };
 show_large(array,num);