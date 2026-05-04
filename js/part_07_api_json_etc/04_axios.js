
btn=document.querySelector("button");
p=document.querySelector("p");

btn.addEventListener("click",async ()=>{
    fact = await getFacts();
    p.innerText=fact;
})

let url = "https://catfact.ninja/fact";

async function getFacts() {
  try {
    let res = await axios.get(url);
   
    return res.data.fact;

  } catch (e) {
    console.log("error - ", e);
  }

}