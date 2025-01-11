window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 0) {
        // Desaparece la imagen cuando se hace scroll
        header.style.setProperty('--header-opacity', '0');
    } else {
        // Vuelve la imagen cuando estamos al principio
        header.style.setProperty('--header-opacity', '1');
    }
});

document.addEventListener("DOMContentLoaded", () => {
    const imageContainer = document.querySelector('.image-container');
    const topImage = imageContainer.querySelector('.image.top');
    const bottomImage = imageContainer.querySelector('.image.bottom');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                topImage.style.transform = 'translateY(-100%)';
                topImage.style.opacity = '0';
                bottomImage.style.transform = 'translateY(0)';
                bottomImage.style.opacity = '1';
            } else {
                topImage.style.transform = 'translateY(0)';
                topImage.style.opacity = '1';
                bottomImage.style.transform = 'translateY(100%)';
                bottomImage.style.opacity = '0';
            }
        });
    }, { threshold: 0.5 });

    observer.observe(imageContainer);
});