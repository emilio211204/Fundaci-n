// Manejo del cambio de secciones con desvanecimiento de imágenes
let currentSection = 0; // Variable para rastrear la sección actual
const sections = document.querySelectorAll('.hero');
const sectionImages = document.querySelectorAll('.hero .media'); // Imágenes en cada sección

// Función para cambiar de sección con desvanecimiento
function changeSection() {
    sections.forEach((section, index) => {
        // Cuando la sección es la actual, se muestra
        if (index === currentSection) {
            section.style.opacity = 1;
            sectionImages[index].style.opacity = 1; // Muestra la imagen de la sección actual
        } else {
            section.style.opacity = 0;
            sectionImages[index].style.opacity = 0; // Desvanece la imagen de la sección anterior
        }
    });
}

// Evento de desplazamiento para cambiar la sección
window.addEventListener('scroll', () => {
    const offset = window.scrollY;
    // Cambiar la sección cuando el desplazamiento alcanza el final de la sección anterior
    if (offset > sections[1].offsetTop - window.innerHeight / 2) {
        currentSection = 1;
    } else {
        currentSection = 0;
    }

    changeSection();
});

// Inicialización: Desvanecer las secciones al cargar la página
document.addEventListener('DOMContentLoaded', changeSection);

// Selecciona el contenedor de imágenes
var imageContainer = document.querySelector('.image-container');

// Selecciona las imágenes dentro del contenedor
var imageContainerImages = imageContainer.querySelectorAll('.image');

// Establece el índice de la imagen actual
var currentIndex = 0;

// Establece el tiempo de transición entre imágenes
var transitionTime = 3000; // 3 segundos

// Función para cambiar la imagen actual
function changeImage() {
    // Oculta la imagen actual
    imageContainerImages[currentIndex].style.display = 'none';

    // Incrementa el índice para pasar a la siguiente imagen
    currentIndex++;

    // Si se ha llegado al final de las imágenes, vuelve al principio
    if (currentIndex >= imageContainerImages.length) {
        currentIndex = 0;
    }

    // Muestra la nueva imagen
    imageContainerImages[currentIndex].style.display = 'block';
}

// Establece un intervalo para cambiar la imagen cada 3 segundos
setInterval(changeImage, transitionTime);