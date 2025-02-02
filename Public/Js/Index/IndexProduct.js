// @function { fetchProducts } - Encargada de realizar la llamada a la API
import { fetchProducts } from "../services/Api.js";
// Habilita la funcionalidad del modal en la página de detalle de producto
import "../Components/BtnsOpenClose.js";
// Habilita la funcionalidad de SingUp en la página de detalle de producto
import "../Components/SingUp.js"
// Habilita la funcionalidad del modal de MenuBurger en la página de detalle de producto
import "../Components/MenuBurge.js"
// Habilita el Switch para cambiar de tema
import "../Components/Switch.js"

/*
    IndexProduct -
        Archivo raiz del archivo: Public/Pages/ProductDetailPage.html

        - Encargado de la logica para renderizar la data de la API
        - Encargado de manejar los click del agregar producto
 */

// valueCar - Contador de las unidades a agregar al carrito
let valueCar = 0;

// Evento que escucha el click donde aumenta o reduce la cantidad
document.addEventListener("click", (event) => {
    let valueCar = document.getElementById("value");

    if (event.target.classList.contains("more")) {
        valueCar.innerText++;

        console.log("Sumar producto al carrito", valueCar);
    } else if (event.target.classList.contains("less") && (valueCar.innerText > 1)) {
        --valueCar.innerText;
    }
});

// Evento que hace la consulta a la API y renderiza la data.
document.addEventListener("DOMContentLoaded", async () => {
    const product = await fetchProducts(window.location.search.substring(1));

    try{
        const container = document.querySelector(".product_detail");
        const productElement = document.createElement("section");
        productElement.classList.add("product_detail");

        productElement.innerHTML = `
          <section class="product_detail_photo">
                <div class="photo-principal">
                    <img src=${product.image} class="photo-big">
                </div>
            </section>
                <section class="section_detail_text">
                    <article class="section_detail_text-title">
                        <h1 class="title">${product.title}</h1>
                        <div class="product_stars
                            <div class="product_stars_container
                                <span class="material-symbols-rounded star">star</span
                                <span class="material-symbols-rounded star">star</span>
                                <span class="material-symbols-rounded star">star</span>
                                <span class="material-symbols-rounded star">star</span>
                                <span class="material-symbols-rounded star">star</span>
                            </div>
                            <div class="product_star-value">
                                <h6 class="product_start-value-title">4/5</h6>
                            </div>
                        </div>
                        <div class="product_prices">
                            <p class="price">${product.price}</p>
                            <p class="price_old">$100</p>
                            <p class="price_percentage">20%</p>
                        </div>
                        <p class="description">${product.description}</p>
                    </article>
                    <div class="home-line">
                        <div class="home-line-color"></div>
                    </div>
                    <article class="section_detail_text-selects">
                        <h4 class="title">Select Colors</h4>
                        <article class="article_colors">
                            <div class="colors brown"></div>
                            <div class="colors green"></div>
                            <div class="colors blue"></div>
                        </article>
                    </article>
                    <div class="home-line">
                        <div class="home-line-color"></div>
                    </div>
                    <article class="section_detail_text-choose">
                        <h4 class="title">Choose Size</h4>
                        <article class="article_size">
                            <h5 class="article_size-txt">Small</h5>
                            <h5 class="article_size-txt">Medium</h5>
                            <h5 class="article_size-txt">Large</h5>
                            <h5 class="article_size-txt">X-Large</h5>
                        </article>
                    </article>
                    <div class="home-line">
                        <div class="home-line-color"></div>
                    </div>
                    <article class="section_detail_text-btns">
                        <article class="btns_quantity">
                            <span class="material-symbols-rounded less" id="less">remove</span>
                            <span class="btns_quantify-number quantify" id="value">${valueCar}</span>
                            <span class="material-symbols-rounded more" id="more">add</span>
                        </article>
                        <article class="btns_car">
                            <a href="#" class="title">Agregar al carrito</a>
                        </article>
                    </article>
                </section>
                `;
        container.appendChild(productElement);

    } catch (error) {
        console.error(error);
    }
})


