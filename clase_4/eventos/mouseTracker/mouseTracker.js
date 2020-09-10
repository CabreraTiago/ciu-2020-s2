let imagen = document.querySelector("img");

document.body.addEventListener("mousemove", function(infoEvento) {
    imagen.style.top = infoEvento.clientY;
    imagen.style.left = infoEvento.clientX;
});