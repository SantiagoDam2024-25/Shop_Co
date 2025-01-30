import { fetchProducts } from "../services/Api.js";

console.log('Hola desde ProductDetails');
const params = new URLSearchParams(window.location.search.substring(1));

document.addEventListener("DOMContentLoaded", async () => {
    const product = await fetchProducts(window.location.search.substring(1));

    try{
        const container = document.querySelector(".product_detail");
        console.log(container)
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
                            <span class="material-symbols-rounded">remove</span>
                            <span class="btns_quantify-number">1</span>
                            <span class="material-symbols-rounded">add</span>
                        </article>
                        <article class="btns_car">
                            <a href="#" class="title">Agregar al carrito</a>
                        </article>
                    </article>
                </section>



                `;
        console.log(productElement);
        container.appendChild(productElement);

    } catch (error) {
        console.log(error);
    }
})

// Función para generar las estrellas en función del rating
function getStarsHTML(rating) {
    let starsHTML = "";
    for (let i = 1; i <= 5; i++) {
        if (i <= Math.floor(rating)) {
            starsHTML += `<span class="material-symbols-rounded star">star</span>`; // Estrella llena
        } else {
            starsHTML += `<span class="material-symbols-rounded star">star_border</span>`; // Estrella vacía
        }
    }
    return starsHTML;
}