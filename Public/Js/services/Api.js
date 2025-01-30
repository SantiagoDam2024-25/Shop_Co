// Documento donde tenemos las llamadas a la Api de FakeApi
// https://fakestoreapi.com/

// Ejecuta el Fetch para los productos del Home - Método [GET]
export const fetchHome = async () => {
    const res = await fetch('https://fakestoreapi.com/products?limit=5')
        return res.json();
}

// Ejecuta el Fetch para todos los productos del Shop - Método [GET]
export const fetchAllProducts = async () => {
    const res = await fetch('https://fakestoreapi.com/products');
    return res.json();
}

// Ejecuta el Fetch para un producto del ProductDetail - Método [GET]
export const fetchProducts = async (id) => {
    const res = await fetch(`https://fakestoreapi.com/products/${id}`);
    return res.json();
}