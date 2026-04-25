
let arr = [10,15,20];
n=0;
sum=0;
let aver = (arr) =>  { 
    for(let i = 0;i<arr.length;i++)
    {
        sum += arr[i];
        n++;

    }
    console.log(sum/n);
};

aver(arr);