// Evento del icon X que cierra el modal de Sing Up and get a desc.

document.getElementById("closeSingUp").addEventListener("click", (e) => {
    e.preventDefault();
    document.getElementById("header_offer_text").style.display = "none";
})