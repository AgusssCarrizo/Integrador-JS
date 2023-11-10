const productsData = [
   {
      id: 1,
      nombre: "Adidas Camo",
      precio: 500,
      imagen: "./img/Torso/Remeras/Adidas-Camo.webp",
      category: "remeras",
      logo: "img/logo/adidas.webp",
   },

   {
      id: 2,
      nombre: "Lacoste Cuelo Redondo",
      precio: 1500,
      imagen: "./img/Torso/Remeras/Cuello-Redondo.jpeg",
      category: "remeras",
      logo: "img/logo/lacoste.jpg",
   },

   {
      id: 3,
      nombre: "Puma Gris",
      precio: 1380,
      imagen: "./img/Torso/Remeras/Remera-Puma.webp",
      category: "remeras",
      logo: "img/logo/puma.jpeg",
   },
   {
      id: 4,
      nombre: "Azra Since 1972",
      precio: 1380,
      imagen: "./img/Torso/Remeras/remera-de-hombre-azra.jpeg",
      category: "remeras",
      logo: "img/logo/since.png",
   },

   {
      id: 5,
      nombre: "Taverniti Arios Institucional",
      precio: 500,
      imagen: "./img/Torso/Camperas/taverniti-Arios-Institucional.webp",
      category: "camperas",
      logo: "img/logo/taverniti.webp",
   },

   {
      id: 6,
      nombre: "Nieve-MHW-Firefall-II-",
      precio: 1500,
      imagen: "./img/Torso/Camperas/Nieve-MHW-Firefall-II-.jpeg",
      category: "camperas",
      logo: "img/logo/converse.png",
   },

   {
      id: 7,
      nombre: "Frisa Trama Rombos Bross",
      precio: 1380,
      imagen: "./img/Torso/Camperas/Frisa-Trama-Rombos-Bross.jpeg",
      category: "camperas",
      logo: "img/logo/converse.png",
   },
   {
      id: 8,
      nombre: "Fagnano Light Gris",
      precio: 1380,
      imagen: "./img/Torso/Camperas/Fagnano-LIGHT-grey.jpeg",
      category: "camperas",
      logo: "img/logo/converse.png",
   },

   {
      id: 9,
      nombre: "Working Beige",
      precio: 500,
      imagen: "./img/Torso/Camisas/Camisas_hombre_working_beige.jpeg",
      category: "camisas",
      logo: "img/logo/converse.png",
   },

   {
      id: 10,
      nombre: "Now SS",
      precio: 1500,
      imagen: "./img/Torso/Camisas/Manga-Corta-Now-SS.jpeg",
      category: "camisas",
   },

   {
      id: 11,
      nombre: "Cuadros Rojos",
      precio: 1380,
      imagen: "./img/Torso/Camisas/Manga-Larga-Cuadros-Rojo.webp",
      category: "camisas",
   },
   {
      id: 12,
      nombre: "Slim Fit",
      precio: 1380,
      imagen: "./img/Torso/Camisas/Slim-Fit.jpeg",
      category: "camisas",
      logo: "img/logo/converse.png",
   },

   {
      id: 13,
      nombre:
         "Botas Alaska Jade Trekking Impermeable Waterproof Negro NE CRUDA",
      precio: 500,
      imagen: "./img/zapatillas/deportivas/Montaña/Jade-Trekking.webp",
      category: "deportivas",
      logo: "img/logo/alaska-montain.webp",
   },

   {
      id: 14,
      nombre: "Botas Nexxt Redeem Waterproof Trekking Hiking",
      precio: 122.5,
      imagen:
         "./img/zapatillas/deportivas/Montaña/Botas-Nexxt-Redeem-Waterproof-Trekking-Hiking-Hombre-Green-1902159-GR.webp",
      category: "deportivas",
      logo: "img/logo/nexxt.jpeg",
   },

   {
      id: 15,
      nombre: "Botas Nexxt Kang Trekking Hiking",
      precio: 1500,
      imagen:
         "./img/zapatillas/deportivas/Montaña/Botas-Nexxt-Kang-Trekking-Hiking-Hombre-Green-1902168-GR.webp",
      category: "deportivas",
      logo: "img/logo/nexxt.jpeg",
   },
   {
      id: 16,
      nombre: "Botas Nexxt Trek Waterproof Trekking Hiking",
      precio: 1380,
      imagen:
         "./img/zapatillas/deportivas/Montaña/Botas-Nexxt-Trek-Waterproof-Trekking-Hiking-Hombre-Black-1902165-BA.webp",
      category: "deportivas",
      logo: "img/logo/nexxt.jpeg",
   },

   {
      id: 17,
      nombre: "New Balance Fresh oam X",
      precio: 500,
      imagen:
         "./img/zapatillas/deportivas/Running/New-Balance/Fresh-Foam-X-1080v12-Wide.jpeg",
      category: "deportivas",
      logo: "img/logo/new-balance.png",
   },

   {
      id: 18,
      nombre: "New Balance M1080C12",
      precio: 1500,
      imagen:
         "./img/zapatillas/deportivas/Running/New-Balance/New-Balance-M1080C12.webp",
      category: "deportivas",
      logo: "img/logo/new-balance.png",
   },

   {
      id: 19,
      nombre: "New Balance M520 V6",
      precio: 1500,
      imagen:
         "./img/zapatillas/deportivas/Running/New-Balance/New-Balance-M520-V6.jpeg",
      category: "deportivas",
      logo: "img/logo/new-balance.png",
   },
   {
      id: 20,
      nombre: "New Balance Disrupt",
      precio: 1380,
      imagen:
         "./img/zapatillas/deportivas/Running/New-Balance/New-Balance-Disrupt.jpeg",
      category: "deportivas",
      logo: "img/logo/new-balance.png",
   },

   {
      id: 21,
      nombre: "Nike Air Max",
      precio: 500,
      imagen: "./img/zapatillas/deportivas/Sportwear/Nike-Air-Max.webp",
      category: "deportivas",
      logo: "img/logo/nike.png",
   },

   {
      id: 22,
      nombre: "Run 60s",
      precio: 1500,
      imagen: "./img/zapatillas/deportivas/Sportwear/Run-60s-Black.jpeg",
      category: "deportivas",
      logo: "img/logo/nike.png",
   },

   {
      id: 23,
      nombre: "Nike Air Max Excee",
      precio: 1500,
      imagen:
         "./img/zapatillas/deportivas/Sportwear/zapatillas-nike-air-max-excee-blanca-510010cd4165103-1.jpeg",
      category: "deportivas",
      logo: "img/logo/nike.png",
   },
   {
      id: 24,
      nombre: "Nike Air Max Systm",
      precio: 1380,
      imagen:
         "./img/zapatillas/deportivas/Sportwear/zapatillas-nike-air-max-systm-gris-510010dm9537002-1.jpeg",
      category: "deportivas",
      logo: "img/logo/nike.png",
   },

   {
      id: 25,
      nombre: "Converse Chuck Taylor All Star Core Hi",
      precio: 500,
      imagen:
         "./img/zapatillas/Moda/Converse-Chuck-Taylor-All-Star-Core-Hi.jpeg",
      category: "moda",
      logo: "img/logo/converse.png",
   },

   {
      id: 26,
      nombre: "Converse Net Star",
      precio: 1500,
      imagen: "./img/zapatillas/Moda/Converse-Net-Star.jpeg",
      category: "moda",
      logo: "img/logo/converse.png",
   },

   {
      id: 27,
      nombre: "Cuck Taylor All Star Core OX Sportline",
      precio: 1500,
      imagen:
         "./img/zapatillas/Moda/Cuck-Taylor-All-Star-Core-OX-Sportline.webp",
      category: "moda",
      logo: "img/logo/converse.png",
   },
   {
      id: 28,
      nombre: "Converse Chuck 70ATCX LONA",
      precio: 1380,
      imagen:
         "./img/zapatillas/Moda/Zapatillas-Converse-Chuck.70-AT-CX-LONA.jpeg",
      category: "moda",
      logo: "img/logo/converse.png",
   },
];
const DivideProductsInParts = (size) => {
   const productsList = [];
   for (let i = 0; i < productsData.length; i += size)
      productsList.push(productsData.slice(i, i + size));
   console.log(productsList);
   return productsList;
};

const appState = {
   products: DivideProductsInParts(2),
   currentProductsIndex: 0,
   productsLimit: DivideProductsInParts(2).length,
   activeFilter: null,
};
