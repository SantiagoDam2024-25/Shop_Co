// const settingSection = document.getElementById('settingSection');
// const settingBtn = document.getElementById("settingBtn")
//     .addEventListener("click", (e) => {
//         e.preventDefault();
//         console.log('clicked1');
//         settingSection.style.display = 'flex';
//     });
//
// const closeSetting = document.getElementById("closeSetting")
//     .addEventListener('click', (e) => {
//         e.preventDefault();
//         console.log('clicked');
//         settingSection.style.display = 'none';
//     })
//
// console.log("Hola bb")
//
// export {settingSection, closeSetting};


// BtnsOpenClose.js


const settingSection = document.getElementById('settingSection');
const settingBtn = document.getElementById("settingBtn");
const closeSetting = document.getElementById("closeSetting");

// Verificamos que los elementos existen antes de añadir eventos
if (settingBtn) {
    settingBtn.addEventListener("click", (e) => {
        e.preventDefault();
        console.log('clicked1');
        settingSection.style.display = 'flex';
    });
}

if (closeSetting) {
    closeSetting.addEventListener("click", (e) => {
        e.preventDefault();
        console.log('clicked');
        settingSection.style.display = 'none';
    });
}

console.log("Hola bb");

// No es necesario exportar las variables a menos que las uses en otro archivo
