
url = "https://official-joke-api.appspot.com/random_joke";

fetch(url)
.then((res)=>
{
    return res.json();
})
.then((data)=>
{
    console.log("Data 01 = ",data);
    return fetch(url);

})
.then((res)=>
{
    return res.json();
})
.then((data)=>
{
    console.log("Data 02 = ",data);
    

})



.catch((err)=>
    {
        console.log("Error - ",err);
    });