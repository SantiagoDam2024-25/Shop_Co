/*
    SingUp -
        Responsable de cerrar el modal de oferta de descuento por ingresar.
 */

document.getElementById("closeSingUp").addEventListener("click", (e) => {
    e.preventDefault();
    document.getElementById("header_offer_text").style.display = "none";
})