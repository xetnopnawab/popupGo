var open = document.querySelector("button");
var modal = document.querySelector("#modal");
var cross = document.querySelector("#cross");

open.addEventListener('click',function(){
    if(modal.style.left == ("149.99%")){
        modal.style.left = ("49.99%");
    }
    else{
        modal.style.left = ("50%");
    }
});

cross.addEventListener('click',function(){
   
    if(modal.style.left == ("50%")){
        modal.style.left = ("149.99%");
    }
    else if(modal.style.left == ("49.99%")){
        modal.style.left = ("-100%");
    }
});