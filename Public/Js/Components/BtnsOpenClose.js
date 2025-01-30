//Codigo que abre el modal de Setting en la página de Shop.


// Icon para abrir el modal.
const settingBtn = document.getElementById("settingBtn");

// Icon para cerrar el modal.
const closeSetting = document.getElementById("closeSetting");

// Section donde se renderizara el modal.
const settingSection = document.getElementById('settingSection');

// Verificamos que los elementos existen antes de añadir eventos.
// Renderiza el modal.

if (settingBtn) {
    settingBtn.addEventListener("click", (e) => {
        e.preventDefault();
        settingSection.style.display = 'flex';
    });
}

// Asigna display none para esconder el modal de Setting.
if (closeSetting) {
    closeSetting.addEventListener("click", (e) => {
        e.preventDefault();
        console.log('clicked');
        settingSection.style.display = 'none';
    });
}