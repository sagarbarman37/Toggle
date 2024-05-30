let inputEl = document.querySelector(".input");
let bodyEl = document.querySelector("body");
// inputEl.checked = "false"

function updateBody(){
  if(inputEl.checked){
    bodyEl.style.backgroundColor= "black"
  }else{
    bodyEl.style.backgroundColor= "white"
  }
}

inputEl.addEventListener("input", ()=>{
  updateBody()
})