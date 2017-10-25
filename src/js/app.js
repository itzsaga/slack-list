// Bulma
import 'bulma/bulma.sass'

// Font Awesome
import 'font-awesome/scss/font-awesome.scss';

// ====== TOGGLE NAVBAR-MENU AND NAVBAR-BURGER

(function() {
    var burger = document.querySelector('#nav-toggle');
    var menu = document.querySelector('#nav-menu');
    burger.addEventListener('click', function() {
        burger.classList.toggle('is-active');
        menu.classList.toggle('is-active');
    });
})();