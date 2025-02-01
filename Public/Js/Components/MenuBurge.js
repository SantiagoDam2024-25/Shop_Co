const sectionBurger = document.getElementById('burger_container');

document.getElementById('burger').addEventListener('click', (e) => {
    sectionBurger.style.display = 'flex';

    if(e.target.classList.contains('close')) sectionBurger.style.display = 'none'
})