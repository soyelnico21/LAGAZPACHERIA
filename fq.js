const nav = document.querySelector(".nav");
const open =  document.querySelector(".open");
const close = document.querySelector(".close");

open.addEventListener("click", () => {
    nav.classList.add("visible");
});

close.addEventListener("click", () => {
    nav.classList.remove("visible");
});


const faqs = document.querySelectorAll(".faq");

faqs.forEach(faq => {
    faq.addEventListener("click", () => {
        faq.classList.toggle("active");
    });
});

window.addEventListener("DOMContentLoaded",function(){
    if(window.innerWidth < 550){
        let elementos = document.querySelectorAll(".flist");
        elementos.forEach(function(elemento){
            elemento.parentNode.removeChild(elemento);
        });
    }
});