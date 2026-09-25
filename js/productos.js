import {getAllProducts} from "./json.js";
const products = await getAllProducts();

const mainEl = document.querySelector("#catalogCard2");
const renderizarProductos = ({Nombre,Imagen_URL,Precio_Base,Peso_Valor,Peso_Unidad}) => {
	const productCard = `
    <div class="col-12 col-sm-6 col-md-4 col-xl-3">
        <div class="catalog-card text-center">
            <div>
                <span class="brand-subtext">Boupetique Selection</span>
                
                <div class="catalog-img-box" data-bs-toggle="modal" data-bs-target="#modalProducto1">
                    <img src="${Imagen_URL}" 
                            class="catalog-img" alt="Alimento">
                </div>

                <p class="catalog-title">${Nombre}${Peso_Valor}${Peso_Unidad}</p>
            </div>

            <div>
                <div class="price-box">
                    <span class="price-current">$${Precio_Base}</span>
                </div>

                <button class="btn-catalog-select" data-bs-toggle="modal" data-bs-target="#modalProducto1">
                    Seleccionar opciones
                </button>
            </div>
        </div>
    </div>
    `;
    mainEl.insertAdjacentHTML("afterend", productCard);
}
products.map((product) => renderizarProductos(product))
console.log(products);