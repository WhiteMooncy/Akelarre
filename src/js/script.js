document.addEventListener('DOMContentLoaded', function() {
    const navbar = document.getElementById('navbar');
    
    // Estado inicial
    navbar.classList.add('initial');
    
    // Cambiar clase al hacer scroll
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.remove('initial');
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
            navbar.classList.add('initial');
        }
    });
});