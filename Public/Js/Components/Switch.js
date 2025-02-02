/*
    Switch -
        Encargado de agregar o quitar la clase para manejar los modo de colores.
 */

document.querySelectorAll('.switch').forEach((btn) => {
    btn.addEventListener('click', (e) => {
        document.body.classList.toggle('dark');
    })
})
