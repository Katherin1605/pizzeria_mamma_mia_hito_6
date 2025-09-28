export const pizzas = [
  {
    desc: "La pizza napolitana, de masa tierna y delgada pero bordes altos, es la versión propia de la cocina napolitana de la pizza redonda. El término pizza napoletana, por su importancia histórica o regional, se emplea en algunas zonas como sinónimo de pizza tonda.",
    id: "P001",
    img: "https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fpizza-1239077_640_cl.jpg?alt=media&token=6a9a33da-5c00-49d4-9080-784dcc87ec2c",
    ingredients: ["mozzarella", "tomates", "jamón", "orégano"],
    name: "napolitana",
    price: 5950,
  },
  {
    desc: "La pizza española es un tipo de pizza que incorpora ingredientes característicos de la gastronomía española, como el chorizo, pimentones, aceitunas, y a veces jamón o cebolla, sobre una base de masa de pizza tradicional con salsa de tomate y queso mozzarella. Es conocida por su sabor robusto y picante, y es una opción popular en muchas pizzerías alrededor del mundo.",
    id: "P002",
    img: "https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fcheese-164872_640_com.jpg?alt=media&token=18b2b821-4d0d-43f2-a1c6-8c57bc388fab",
    ingredients: ["mozzarella", "tomates", "jamón", "choricillo"],
    name: "española",
    price: 7250,
  },
  {
    desc: "La pizza de salame es una preparación culinaria clásica que consiste en una base de masa, salsa de tomate, queso (principalmente mozzarella) y rodajas de salame, un tipo de embutido curado de origen italiano. Se caracteriza por su sabor intenso y agradable, a menudo complementado con especias como orégano, y su textura puede variar desde una masa crujiente hasta una más esponjosa, dependiendo de la receta y método de cocción. ",
    id: "P003",
    img: "https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fpizza-1239077_640_com.jpg?alt=media&token=e7cde87a-08d5-4040-ac54-90f6c31eb3e3",
    ingredients: ["mozzarella", "tomates", "salame", "orégano"],
    name: "salame",
    price: 5990,
  },
  {
    desc: "cuatro estaciones (o quattro stagioni) es una pizza italiana dividida en cuatro secciones distintas, cada una con ingredientes que representan las cuatro estaciones del año, como champiñones para el otoño, aceitunas y jamón para el invierno, alcachofas para la primavera, y tomates para el verano, aunque los ingredientes específicos pueden variar. La característica principal es que los ingredientes de cada sección no se mezclan, sino que se presentan de forma separada para crear un contraste de sabores y texturas.",
    id: "P004",
    img: "https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fpizza-2000595_640_c.jpg?alt=media&token=61325b6e-a1e0-441e-b3b5-7335ba13e8be",
    ingredients: ["mozzarella", "salame", "aceitunas", "champiñones"],
    name: "cuatro estaciones",
    price: 9590,
  },
  {
    desc: "de bacon es una pizza cubierta con tiras o trozos de bacon (tocino) sobre una base de masa, salsa de tomate y queso mozzarella, aunque puede incluir ingredientes adicionales como jamón, cebolla, champiñones o diferentes tipos de queso. El bacon puede variar desde laminado, desmenuzado o en trozos, y se cocina hasta quedar crujiente, aportando un sabor ahumado y salado que complementa la riqueza del queso y la acidez de la salsa de tomate.",
    id: "P005",
    img: "https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fpizza-salame.jpg?alt=media&token=ab3d4bf8-01f2-4810-982b-bd7fb6b517b2",
    ingredients: ["mozzarella", "tomates cherry", "bacon", "orégano"],
    name: "bacon",
    price: 6450,
  },
  {
    desc: "La pizza de pollo picante es un platillo versátil que combina el sabor del pollo con el picante de ingredientes como chiles, salsas picantes o especias, sobre una base de pizza. Las variedades incluyen pizzas con salsa buffalo y tocino, recetas inspiradas en la cocina coreana o griega, pizzas con jalapeños, o incluso opciones veganas, adaptándose a los gustos de cada persona. Es una opción popular para quienes disfrutan de sabores intensos y un toque de picante en su comida.",
    id: "P006",
    img: "https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fpizza-2000595_640_c.jpg?alt=media&token=61325b6e-a1e0-441e-b3b5-7335ba13e8be",
    ingredients: ["mozzarella", "pimientos", "pollo grillé", "orégano"],
    name: "pollo picante",
    price: 8500,
  },
];

// Simulación de un carrito de compras
export const pizzaCart = [
  {
    id: "P001",
    name: "napolitana",
    price: 5950,
    count: 1,
    img: "https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fpizza-1239077_640_cl.jpg?alt=media&token=6a9a33da-5c00-49d4-9080-784dcc87ec2c",
  },
  {
    id: "P002",
    name: "española",
    price: 7250,
    count: 1,
    img: "https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fcheese-164872_640_com.jpg?alt=media&token=18b2b821-4d0d-43f2-a1c6-8c57bc388fab",
  },
  {
    id: "P003",
    name: "salame",
    price: 5990,
    count: 1,
    img: "https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fpizza-1239077_640_com.jpg?alt=media&token=e7cde87a-08d5-4040-ac54-90f6c31eb3e3",
  },
];
