const results =document.querySelector("#results");
const buttons = document.querySelector(".buttons");
buttons.addEventListener("click",(e)=>{
 
if(e.target.tagName !=="BUTTON"){
  return;
}

if(e.target.textContent==="C"){
  results.textContent="";
  return;
}
if(e.target.textContent==="="){
  results.textContent= eval(results.textContent);
  return;
}

if (e.target.textContent === "X") {
      results.textContent += "*";
      return;
    }
    if(e.target.textContent==="←"){
      results.textContent= results.textContent.slice(0,-1);
      return;
    }

results.textContent += e.target.textContent
})




























