// Habilita la funcionalidad del MenuBurge en la pagina de SingUp
import "../Components/MenuBurge.js";
// Habilita la funcionalidad del cambio de tema
import "../Components/Switch.js"

/*
    IndexSingUp -
        Archivo raiz del archivo: Public/Pages/SingUp.html

        - Responsable de manejar los eventos del formulario de Registro
 */

const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');
const forms = document.querySelectorAll('form');

/**@funtion [singUpButton] - Registrase
 * Escucha el evento para arreglar la clase 'right-panel-active'
 * que cambia de posición la tarjeta.
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
forms.forEach(form => {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        window.location.pathname = '../../Pages/Shop.html';
    })
})


