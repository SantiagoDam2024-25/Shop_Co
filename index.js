console.log('Happy developing ✨')

const settingSection = document.getElementById('settingSection');
const settingBtn = document.getElementById("settingBtn")
    .addEventListener("click", (e) => {
    e.preventDefault();
    console.log('clicked1');
    settingSection.style.display = 'flex';
});

const closeSetting = document.getElementById("closeSetting")
    .addEventListener('click', (e) => {
        e.preventDefault();
        console.log('clicked');
        settingSection.style.display = 'none';
})

