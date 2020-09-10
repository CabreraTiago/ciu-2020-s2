let listaParrafos = document.querySelectorAll("p");

for (let i = 0; i < listaParrafos.length; i++) {
    listaParrafos[i].addEventListener("click", function() {
        this.classList.toggle("resaltado")
    })
}