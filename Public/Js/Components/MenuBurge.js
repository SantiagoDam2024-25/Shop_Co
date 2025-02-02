/*
    MenuBurge -
        Responsable de manejar los eventos del modal del menu Burger.
 */

const sectionBurger = document.getElementById('burger_container');
document.getElementById('burger').addEventListener('click', (e) => {
    sectionBurger.classList.add('show_burger');
    sectionBurger.style.display = 'flex';

    if(e.target.classList.contains('close')) sectionBurger.style.display = 'none';
})