const chk = document.querySelector("#chk");
const nav = document.querySelector("nav");
var numberButtons = document.querySelectorAll("button").length;


    chk.addEventListener("change", () =>{
    document.body.classList.toggle('dark');
    nav.classList.toggle('darky');

    for(var i = 0; i < numberButtons; i++){  

            document.querySelectorAll('button')[i].classList.toggle('blacks')
    } 
 })

    
  function img(){
    const checkbox = document.querySelector("#chk");
    const img = document.querySelector("img");
    if(checkbox.checked){
    img.setAttribute('src', 'logo2.jpg'); 
    }else{
        img.setAttribute('src', 'logo.jpg');
    }   
    
    
}
  
