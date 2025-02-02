//
import "../Components/MenuBurge.js";
import "../Components/Switch.js"



const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');
const forms = document.querySelectorAll('form');

/**
 * @funtion [singUpButton] -  Registrase
 *  Escucha el evento para arreglar la clase 'right-panel-active' que cambia de posición la tarjeta.
 */
signUpButton.addEventListener('click', () => {
    container.classList.add("right-panel-active");
});

/**
 *  funtion [singInButton] - Iniciar sesion
 *  Escucha el evento para arreglar la clase 'right-panel-active' que cambia de posición la tarjeta.
 */
signInButton.addEventListener('click', (e) => {
    container.classList.remove("right-panel-active");
});

/**
 *  funtion [form] - NodoList de los formularios
 *  Escucha el evento para arreglar la clase 'right-panel-active' que cambia de posición la tarjeta.
 *  @param [e] - evento
 */
console.log(container)
forms.forEach(form => {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        window.location.pathname = '../../Pages/Shop.html';
        console.log('Hola desde el Form')
    })
})


