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

    // Seleccionar la segunda barra de navegación
    const navbarPlatos = document.getElementById('navbar-platos');

    // Obtener la posición inicial de la barra de navegación
    const navbarOffsetTop = navbarPlatos.offsetTop;

    // Agregar un evento de scroll
    window.addEventListener('scroll', () => {
        if (window.scrollY >= navbarOffsetTop) {
            navbarPlatos.classList.add('sticky'); // Agregar clase sticky
        } else {
            navbarPlatos.classList.remove('sticky'); // Quitar clase sticky
        }
    });
});