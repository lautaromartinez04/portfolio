AOS.init();

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));

        target.scrollIntoView({
            behavior: 'smooth', 
            block: 'start'
        });
    });
});

$(document).ready(function() {
    // Inicializar Fancybox
    $("[data-fancybox='images']").fancybox({
        loop: true // Para habilitar el bucle infinito del carrusel
    });
});