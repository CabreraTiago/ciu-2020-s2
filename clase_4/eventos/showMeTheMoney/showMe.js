let botones = document.querySelectorAll("button");
let imagenes = document.querySelectorAll("img");

for (let i = 0; i < botones.length; i++) {
    botones[i].addEventListener("click", function() {
        imagenes[i].classList.toggle("oculto");
    })
}

for (let j = 0; j < imagenes.length; j++) {
    imagenes[j].addEventListener("click", function() {
        this.classList.toggle("oculto");
    })
}