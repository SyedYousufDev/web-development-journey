
 country = ["Australia", "Germany", "United States of America","Albania"];

 function find_longest(country){
    ansIdx=0;
   for (let i = 0; i < country.length; i++) { 
        ans=country[ansIdx].length;
        curr=country[i].length;
        
        if (ans<curr) { 
            ansIdx = i;
        } 
    }
    return country[ansIdx];
 };

 console.log(find_longest(country));