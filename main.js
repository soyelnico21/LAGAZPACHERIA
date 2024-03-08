const nav = document.querySelector(".nav");
const open =  document.querySelector(".open");
const close = document.querySelector(".close");

open.addEventListener("click", () => {
    nav.classList.add("visible");
})

close.addEventListener("click", () => {
    nav.classList.remove("visible");
})

const btnleft = document.querySelector(".btn-left");
const btnright = document.querySelector(".btn-right");
const sliders = document.querySelector(".sliders");
const images = document.querySelector(".slider-section");

btnleft.addEventListener("click", e => movetoleft() )
btnright.addEventListener("click", e => movetoright() )

setInterval(() => {
    movetoright()
}, 3000);

let operation = 0;
let counter = 0;

function movetoright(){
    if(counter >= 2){
        operation = 0;
        counter= 0;
        sliders.style.transform = `translate(-${operation}%)`; 
        sliders.style.transition = "none";   
        return;
    }
    counter++;
    operation = operation + 33.3;
    sliders.style.transform = `translate(-${operation}%)`;
    sliders.style.transition = "all ease .6s";
}
function movetoleft(){
    counter--;
    if(counter <0){
        operation = 33.3*2;
        counter= 2;
        sliders.style.transform = `translate(-${operation}%)`;    
        sliders.style.transition = "none";  
        return;
    }
    operation = operation - 33.3;
    sliders.style.transform = `translate(-${operation}%)`;
    sliders.style.transition = "all ease .6s";
   
}
