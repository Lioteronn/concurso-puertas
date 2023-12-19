const botonCerrar = document.querySelector(".boton-cerrar");
const cartaNavidad = document.querySelector(".carta-navidad");
const containerInterior = document.querySelector(".container-interior");
const titulo = containerInterior.firstElementChild;
const subTitulo = document.querySelector(".subtitulo");

let indexAnimacion = 1;

botonCerrar.addEventListener("click", function() {
    cartaNavidad.classList.add("animacion-carta");
    titulo.classList.add("animacion-carta");
    subTitulo.classList.add("animacion-carta");
    containerInterior.classList.add("animacion-carta");
    console.log(subTitulo);

    switch (indexAnimacion) {
        case 1:
            cartaNavidad.style.padding = "0";
            containerInterior.style.borderRadius = "0px";
            titulo.style.scale = "0";
            subTitulo.style.display = "block";
            indexAnimacion++;
            break;
        case 2:
            subTitulo.style.scale = "1";
            cartaNavidad.style.height = "600px";
            i++;
    }
});