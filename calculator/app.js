let Btn = document.querySelector(".box1");
let text = document.getElementById("text");
Btn.addEventListener("click" , (e) => {
   let target= e.target;
  if(target.innerHTML==="c"){
    text.value = "";
  }else if(target.classList.contains("number")){
    text.value += target.innerHTML ;
  }else if(target.classList.contains("operator")){
    let lastNum = text.value[text.value.length - 1];
    if(lastNum === "+"||
       lastNum === "-"||
       lastNum === "*"||
       lastNum === "/" 
    )
    {
    text.value = text.value.slice(0, -1)+target.innerHTML;
    }else{
        text.value += target.innerHTML;
    }
  }else if(target.innerHTML==="="){
    if(text.value.length !== 0 ){
    text.value = eval(text.value);
  }else{
    text.value = "";
  }
}else if(target.classList.contains("x")){
    text.value = text.value.slice(0, -1)
    ;
}
})


