const categoriesContainer = document.querySelector(".li-opc");
const categoriesList = document.querySelectorAll(".category");
const homes = document.querySelector(".homes");
const sliderContainer = document.getElementById("homes");
const productContainer = document.querySelector(".productos");
const menuBtn = document.querySelector(".navbarMenu");
const cartBtn = document.querySelector(".navbarCart");
const cartBtnClose = document.querySelector(".closeShopping");
const cartBtnOpen = document.querySelector(".navbar");
const extendedMenu = document.querySelector(".li-opc");
const cartMenu = document.querySelector(".cart");
const overlay = document.querySelector(".overlay");
const productsCart = document.querySelector(".cart-container");
const cartBubble = document.querySelector(".cart-bubble");
const cartTotal = document.querySelector(".total");

let cart = JSON.parse(localStorage.getItem("cart")) || [];

const saveCart = () => {
   localStorage.setItem("cart", JSON.stringify(cart));
};

const createProductTemplate = (e, i) => {
   const {id, nombre, precio, imagen} = e;
   return `
    <div class="product-1" >
      <img class="img-info" src="${imagen}" alt="${nombre}" />
      <div class="info">
        <h2>${nombre}</h2>
        <p> $${precio}</p>
        <div class="boton">
          <button 
          class="btn-add"
           data-id='${id}'
            data-name='${nombre}'
             data-img='${imagen}'>
            Añadir al carrito
          </button>
          <img src="${imagen}" alt="${nombre}" />
        </div>
      </div>
    </div>
  `;
};

const renderProducts = (productsList) => {
   productContainer.innerHTML += productsList
      .map(createProductTemplate)
      .join("");
};

//logica de filtros
const isIniactiveFilterBtn = (element) => {
   return (
      element.classList.contains("category") && !element.classList.add("active")
   );
};

const changeBtnActiveState = (filter) => {
   const categories = [...categoriesList];
   categories.forEach((btn) => {
      if (btn.dataset.category !== filter) {
         btn.classList.remove("active");
         return;
      }
      btn.classList.add("active");
   });
};

const changeFilterState = (element) => {
   appState.activeFilter = element.dataset.category;
   changeBtnActiveState(appState.activeFilter);
};

const renderFilteredProducts = () => {
   const {activeFilter, currentProductsIndex, products} = appState;
   productContainer.innerHTML = "";
   if (!activeFilter) {
      appState.currentProductsIndex = 0;
      renderProducts(products[currentProductsIndex]);
      return;
   }
   const filteredProducts = productsData.filter(
      (product) => product.category === activeFilter
   );
   renderProducts(filteredProducts);
};

const apllyFilter = ({target}) => {
   if (!isIniactiveFilterBtn(target)) return;
   changeFilterState(target);
   renderFilteredProducts();
};

//ocultar y mostrar home como filtro
sliderContainer.style.display = "flex";
productContainer.style.display = "none";
const homeFilter = () => {
   sliderContainer.style.display = "flex";
   productContainer.style.display = "none";
};

const homeFiltered = (event) => {
   const target = event.target;
   if (isIniactiveFilterBtn(target)) {
      sliderContainer.style.display = "none";
      productContainer.style.display = "flex";
      changeFilterState(target);
      renderFilteredProducts();
   }
};

//Menú hamburguesa

const toggleCart = () => {
   cartBtnOpen.classList.add("active");
   cartBtn.classList.add("activeColor");
   overlay.classList.add("show-overlay");
};
const closeCart = () => {
   cartBtnOpen.classList.remove("active");
   cartBtn.classList.remove("activeColor");
   overlay.classList.remove("show-overlay");
};
const toggleMenu = () => {
   extendedMenu.classList.toggle("open-menu");
   overlay.classList.toggle("show-overlay");
   menuBtn.classList.toggle("activeColor");
};
const closeOnnClick = (e) => {
   extendedMenu.classList.remove("open-menu");
   overlay.classList.remove("show-overlay");
   menuBtn.classList.remove("activeColor");
};
const closeOnScroll = () => {
   cartBtnOpen.classList.remove("active");
   overlay.classList.remove("show-overlay");
   extendedMenu.classList.remove("open-menu");
   menuBtn.classList.remove("activeColor");
};

//logica del carrito
/*
const renderCart = () => {
   if (!cart.length) {
      productsCart.innerHTML = `<p> No hay productos en el carrito. </p>`;
      return;
   }
   productsCart.innerHTML = cart.map(createCartProductTemplate).join("");
};
const createCartProductTemplatee = (product) => {
   const {id, nombre, precio, imagen, quantity} = product;
   return `
    <div class="cont-cart-prod">
      <img class="img-cart" src="${imagen}" alt="${nombre}" />
      <div class="infoCart">
        <h2>${nombre}</h2>
        <p>Precio: ${precio}</p>
         <div class="item-handler">
            <span class="quantity-handler down" data-id=${id}>-</span>
            <span class="item-quantity">${quantity}</span>
            <span class="quantity-handler up" data-id=${id}>+</span>
         </div>
      </div>
    </div>
  `;
};
const createProductData = (e, i) => {
   const {id, nombre, precio, imagen} = e;
   return {id, nombre, precio, imagen};
};
const addUnitToProduct = (product) => {
   cart = cart.map((cartProduct) => {
      return cartProduct.id === product.id
         ? {...cartProduct, quantity: cartProduct.quantity + 1}
         : cartProduct;
   });
};
const addProduct = (e) => {
   if (!e.target.classList.contains("btn-add")) return;
   console.log(e.target.dataset);
   const product = createProductData(e.target.dataset);

   if (isExistingCartProduct(product)) {
      addUnitToProduct(product);
   } else {
      createCartProduct(product);
   }
   updateCartState();
};

const updateCartState = () => {
   saveCart();
   renderCart();
   ShowCartTotal();
   renderCartBubble();
};

const renderCartBubble = () => {
   cartBubble.textContent = cart.reduce((acc, cur) => acc + cur.quantity, 0);
};
const showCartBubble = () => {
   cartBubble.textContent = cart.reduce((acc, cur) => acc + cur.quantity, 0);
};
const showCartTotal = () => {
   const total = cart.reduce(
      (acc, cur) => acc + Number(cur.precio) * cur.quantity,
      0
   );

   cartTotal.textContent = `$ ${total}`;
};
const isExistingCartProduct = (product) => {
   return cart.some((item) => item.id === product.id);
};

const createCartProduct = (product) => {
   cart = [...cart, {...product, quantity: 1}];
};
 */
const init = () => {
   renderProducts(productsData);
   categoriesContainer.addEventListener("click", apllyFilter);
   homes.addEventListener("click", homeFilter);
   categoriesContainer.addEventListener("click", homeFiltered);
   menuBtn.addEventListener("click", toggleMenu);
   extendedMenu.addEventListener("click", closeOnnClick);
   cartBtn.addEventListener("click", toggleCart);
   cartBtnClose.addEventListener("click", closeCart);
   window.addEventListener("scroll", closeOnScroll);
   /*window.addEventListener("DOMContentLoaded", renderCart);
   window.addEventListener("DOMContentLoaded", showCartBubble);
   window.addEventListener("DOMContentLoaded", showCartTotal);*/

   //productContainer.addEventListener("click", addProduct);
};

init();
