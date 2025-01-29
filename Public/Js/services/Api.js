export const fetchHome = async () => {
    const res = await fetch('https://fakestoreapi.com/products?limit=5')
        return res.json();
}


// fetch('https://fakestoreapi.com/products?limit=5')
//     .then(res => res.json())
//     .then(products => {
//         const productsContainer = document.querySelector('.products_line'); // Contenedor donde agregar los productos
//         console.log("Api Home");
//         products.forEach(product => {
//             // Crear el elemento 'a' del producto
//             const productLink = document.createElement('a');
//             productLink.classList.add('product');
//             productLink.href = "Public/Pages/ProductDetailPage.html"; // Puedes cambiarlo dinámicamente si lo necesitas
//
//             // Crear el contenedor de la imagen
//             const productImgDiv = document.createElement('div');
//             productImgDiv.classList.add('product_img');
//
//             const productImg = document.createElement('img');
//             productImg.classList.add('product_img-img');
//             productImg.src = product.image;
//             productImg.alt = product.title;
//
//             productImgDiv.appendChild(productImg);
//
//             // Crear el contenedor del texto
//             const productTxtDiv = document.createElement('div');
//             productTxtDiv.classList.add('product_txt');
//
//             const productTitle = document.createElement('h4');
//             productTitle.classList.add('product_txt-title');
//             productTitle.textContent = product.title;
//
//             // Crear el contenedor de estrellas y valoración
//             const productStarsDiv = document.createElement('div');
//             productStarsDiv.classList.add('product_stars');
//
//             const starsContainer = document.createElement('div');
//             starsContainer.classList.add('product_stars_container');
//
//             // Generar estrellas dinámicamente
//             const rating = Math.round(product.rating.rate); // Redondear la calificación
//             for (let i = 0; i < 5; i++) {
//                 const star = document.createElement('span');
//                 star.classList.add('material-symbols-rounded', 'star');
//                 star.textContent = i < rating ? 'star' : 'star_border'; // Estrella llena o vacía
//                 starsContainer.appendChild(star);
//             }
//
//             const starValueDiv = document.createElement('div');
//             starValueDiv.classList.add('product_star-value');
//
//             const starValueTitle = document.createElement('h6');
//             starValueTitle.classList.add('product_start-value-title');
//             starValueTitle.textContent = `${product.rating.rate}/5`;
//
//             starValueDiv.appendChild(starValueTitle);
//             productStarsDiv.appendChild(starsContainer);
//             productStarsDiv.appendChild(starValueDiv);
//
//             // Crear contenedor de precios
//             const productPricesDiv = document.createElement('div');
//             productPricesDiv.classList.add('product_prices');
//
//             const price = document.createElement('p');
//             price.classList.add('price');
//             price.textContent = `$${product.price}`;
//
//             // Precio viejo (simulado con un 20% más)
//             const oldPrice = document.createElement('p');
//             oldPrice.classList.add('price_old');
//             oldPrice.textContent = `$${(product.price * 1.2).toFixed(2)}`;
//
//             // Descuento (simulado con un 20%)
//             const discount = document.createElement('p');
//             discount.classList.add('price_percentage');
//             discount.textContent = '20%';
//
//             productPricesDiv.appendChild(price);
//             productPricesDiv.appendChild(oldPrice);
//             productPricesDiv.appendChild(discount);
//
//             // Ensamblar todo
//             productTxtDiv.appendChild(productTitle);
//             productTxtDiv.appendChild(productStarsDiv);
//             productTxtDiv.appendChild(productPricesDiv);
//
//             productLink.appendChild(productImgDiv);
//             productLink.appendChild(productTxtDiv);
//
//             productsContainer.appendChild(productLink);
//         });
//     })
//     .catch(error => console.error('Error cargando los productos:', error));
