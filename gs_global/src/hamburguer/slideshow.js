let indiceSlide = 0;
const slides = document.querySelectorAll(".slide");

function mostrarSlide(n) {
    slides.forEach(slide => slide.style.display = "none");
    slides[n].style.display = "block";
}

function mudarSlide(direcao) {
    indiceSlide += direcao;
    if (indiceSlide >= slides.length) indiceSlide = 0;
    if (indiceSlide < 0) indiceSlide = slides.length - 1;
    mostrarSlide(indiceSlide);
}

// Inicializa o primeiro slide
mostrarSlide(indiceSlide);