const nav = document.querySelector(".nav");
const open =  document.querySelector(".open");
const close = document.querySelector(".close");

open.addEventListener("click", () => {
    nav.classList.add("visible");
});

close.addEventListener("click", () => {
    nav.classList.remove("visible");
});

var map = L.map('map').setView([-33.88868,151.27731], 15);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
maxZoom: 19,
attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

var marker = L.marker([-33.88868,151.27731]).addTo(map);
marker.bindPopup("La gazpacheria").openPopup();


window.addEventListener("DOMContentLoaded",function(){
    if(window.innerWidth < 550){
        let elementos = document.querySelectorAll(".flist");
        elementos.forEach(function(elemento){
            elemento.parentNode.removeChild(elemento);
        });
    }
});