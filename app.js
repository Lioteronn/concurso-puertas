const botonCerrar = document.querySelector(".boton-cerrar");
const cartaNavidad = document.querySelector(".carta-navidad");
const containerInterior = document.querySelector(".container-interior");
const titulo = containerInterior.firstElementChild;
const subTitulo = document.querySelector(".subtitulo");
const carruselImagenes = document.querySelector("#carousel-container");

let indexAnimacion = 1;

botonCerrar.addEventListener("click", function () {
    cartaNavidad.classList.add("animacion-carta");
    titulo.classList.add("animacion-carta");
    subTitulo.classList.add("animacion-carta");
    containerInterior.classList.add("animacion-carta");
    carruselImagenes.classList.add("animacion-carta");
    console.log(subTitulo);

    switch (indexAnimacion) {
        case 1:
            cartaNavidad.style.padding = "0";
            containerInterior.style.borderRadius = "0px";
            titulo.style.scale = "0";
            subTitulo.style.display = "block";
            subTitulo.style.scale = "1";
            cartaNavidad.style.height = "500px";
            carruselImagenes.style.scale = "1";

            setTimeout(function () {
                carruselImagenes.style.opacity = "1";
            }, 800); 

    }
});

let currentIndex = 0;
const totalSlides = document.querySelectorAll('.slide').length;

function showSlide(index) {
    const slider = document.getElementById('image-slider');
    const slideWidth = document.querySelector('.slide').clientWidth;
    slider.style.transform = `translateX(${-index * slideWidth}px)`;
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides;
    showSlide(currentIndex);
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    showSlide(currentIndex);
}

window.onload = function() {
    document.getElementById("audio-one").load();
    document.getElementById("audio-one").play();

}