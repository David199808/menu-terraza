/*
  ============================================================
  MENÚ DE LA TERRAZA GRILL HOUSE
  ------------------------------------------------------------
  Este es el ÚNICO archivo que hay que tocar para cambiar
  platos, precios, descripciones o fotos.

  Cada sección tiene:
    id      → nombre corto sin espacios (se usa en el enlace)
    titulo  → lo que se ve en pantalla
    grupo   → "comida" o "bebidas"
    estilo  → "tarjetas" (con foto) o "lista" (compacto)
    nota    → (opcional) texto destacado de la sección
    items   → los platos

  Cada plato tiene:
    nombre       → nombre del plato
    precio       → número SIN puntos (30000 = $30.000)
    descripcion  → (opcional)
    opcion       → (opcional) ej. "Elige tu salsa: BBQ o chimichurri"
    foto         → (opcional) ruta de la imagen en img/platos/
    destacado    → (opcional) etiqueta, ej. "Más pedido"
    agotado      → (opcional) true para mostrarlo como agotado
  ============================================================
*/

const MENU = [
  {
    id: "platos-fuertes",
    titulo: "Platos fuertes",
    grupo: "comida",
    estilo: "tarjetas",
    items: [
      {
        nombre: "Brocheta mixta",
        precio: 30000,
        descripcion: "Pollo, lomo fino de res y chorizo, con papas a la francesa, ensalada y salsas de la casa."
      },
      {
        nombre: "Brocheta de camarones",
        precio: 40000,
        descripcion: "Camarones en salsa de la casa, con papas a la francesa, ensalada y salsas de la casa.",
        foto: "img/platos/brocheta-camarones.jpg"
      },
      {
        nombre: "Picada mixta premium",
        precio: 35000,
        descripcion: "100 g de pollo, 100 g de lomo de res y chorizo en rodajas, con papas a la francesa y salsas de la casa.",
        opcion: "Elige tu salsa: BBQ o chimichurri",
        foto: "img/platos/picada-mixta.jpg"
      },
      {
        nombre: "Mazorcada premium",
        precio: 35000,
        descripcion: "180 g de pollo, chorizo, papas a la francesa, maíz dulce en salsa de la casa y queso.",
        foto: "img/platos/mazorcada.jpg"
      }
    ]
  },
  {
    id: "antojos",
    titulo: "Antojos Terraza",
    grupo: "comida",
    estilo: "tarjetas",
    items: [
      {
        nombre: "Salchipapa de la casa",
        precio: 30000,
        descripcion: "3 salchichas rancheras, 1 chorizo, queso, tocineta, papas a la francesa y salsas de la casa."
      },
      {
        nombre: "Choripapa junior",
        precio: 15000,
        descripcion: "Papas a la francesa, chorizo, queso y salsas."
      },
      {
        nombre: "Salchi junior",
        precio: 15000,
        descripcion: "Papas a la francesa, salchicha ranchera, queso y salsas."
      }
    ]
  },
  {
    id: "hamburguesas",
    titulo: "Hamburguesas a la parrilla",
    grupo: "comida",
    estilo: "tarjetas",
    nota: "Cámbiala de pan a patacón por solo $2.000 más",
    items: [
      {
        nombre: "Grill House",
        precio: 23000,
        descripcion: "150 g de carne de res a la parrilla, queso, mermelada de tocineta con cebolla, vegetales y salsas de la casa.",
        foto: "img/platos/grill-house.jpg"
      },
      {
        nombre: "Grill House doble",
        precio: 32000,
        descripcion: "300 g de carne de res a la parrilla, queso, mermelada de tocineta con cebolla, vegetales y salsas de la casa."
      },
      {
        nombre: "Grill Imperial",
        precio: 23000,
        descripcion: "150 g de carne a la parrilla, queso, BBQ de cholupa, tocineta crocante, aros de cebolla, lechuga y pepinillos.",
        foto: "img/platos/grill-imperial.jpg"
      },
      {
        nombre: "Americana",
        precio: 23000,
        descripcion: "150 g de carne a la parrilla, queso, BBQ texana, aros de cebolla, huevo frito, tocineta crocante y salsa de la casa.",
        foto: "img/platos/americana.jpg"
      },
      {
        nombre: "Mexicana",
        precio: 23000,
        descripcion: "150 g de carne a la parrilla, queso, salsa de la casa, tocineta crocante, pico de gallo, jalapeños y Doritos."
      },
      {
        nombre: "Gaucha",
        precio: 25000,
        descripcion: "150 g de carne a la parrilla, queso, salsa de la casa, chorizo, vegetales y chimichurri cremoso."
      },
      {
        nombre: "Queso apanado",
        precio: 25000,
        descripcion: "150 g de carne a la parrilla, queso apanado en panko, tocineta crocante, BBQ de cholupa y salsa de la casa."
      }
    ]
  },
  {
    id: "smash",
    titulo: "Hamburguesas smash",
    grupo: "comida",
    estilo: "tarjetas",
    items: [
      {
        nombre: "Doble smash",
        precio: 25000,
        descripcion: "2 carnes smash de 80 g, queso, mermelada de tocineta, pepinillos y salsa de la casa."
      },
      {
        nombre: "Triple smash",
        precio: 32000,
        descripcion: "3 carnes smash de 80 g, queso, mermelada de tocineta, pepinillos y salsa de la casa."
      },
      {
        nombre: "Oklahoma doble",
        precio: 25000,
        descripcion: "2 carnes de 80 g con cebolla a la plancha, queso, pepinillos, tocineta crocante y salsa de la casa.",
        foto: "img/platos/oklahoma-doble.jpg"
      },
      {
        nombre: "Oklahoma triple",
        precio: 32000,
        descripcion: "3 carnes de 80 g con cebolla a la plancha, queso, pepinillos, tocineta crocante y salsa de la casa.",
        foto: "img/platos/oklahoma-triple.jpg"
      }
    ]
  },
  {
    id: "pollo",
    titulo: "Hamburguesa de pollo",
    grupo: "comida",
    estilo: "tarjetas",
    items: [
      {
        nombre: "Pollo apanado BBQ",
        precio: 25000,
        descripcion: "150 g de pollo apanado en panko, pepinillos, tocineta crocante, salsa de la casa y BBQ de cholupa.",
        foto: "img/platos/pollo-apanado.jpg"
      }
    ]
  },
  {
    id: "adicionales",
    titulo: "Adicionales",
    grupo: "comida",
    estilo: "lista",
    items: [
      { nombre: "Porción de papas a la francesa", precio: 6000 },
      { nombre: "Michelada", precio: 2000, descripcion: "Para acompañar tu cerveza." }
    ]
  },

  /* ---------------------- BEBIDAS ---------------------- */
  {
    id: "cocteles",
    titulo: "Cócteles",
    grupo: "bebidas",
    estilo: "lista",
    items: [
      { nombre: "Piña colada", precio: 20000, descripcion: "Coco, piña, ron y leche condensada." },
      { nombre: "Mojito de fresa", precio: 18000, descripcion: "Ron blanco, hierbabuena, fresas, azúcar, limón y Sprite." },
      { nombre: "Margarita frozen azul", precio: 20000, descripcion: "Tequila, limón, curazao y azúcar." }
    ]
  },
  {
    id: "sodas",
    titulo: "Sodas saborizadas",
    grupo: "bebidas",
    estilo: "lista",
    items: [
      { nombre: "Soda de frutos rojos", precio: 13000, descripcion: "Cereza, limón, perlas explosivas de cereza y soda." },
      { nombre: "Soda laguna azul", precio: 13000, descripcion: "Blueberry, limón, perlas explosivas de blueberry y soda." }
    ]
  },
  {
    id: "malteadas",
    titulo: "Malteadas",
    grupo: "bebidas",
    estilo: "lista",
    items: [
      { nombre: "Malteada de café", precio: 14000 },
      { nombre: "Malteada de Baileys", precio: 14000 },
      { nombre: "Malteada de vainilla", precio: 14000 }
    ]
  },
  {
    id: "jugos",
    titulo: "Jugos y limonadas",
    grupo: "bebidas",
    estilo: "lista",
    items: [
      { nombre: "Batido de coco", precio: 13000, descripcion: "Extracto de coco, leche condensada, leche y coco rallado." },
      { nombre: "Limonada de coco", precio: 13000, descripcion: "Extracto de coco, leche condensada, leche y limón." },
      { nombre: "Limonada cerezada", precio: 13000, descripcion: "Extracto de cereza, agua, limón y azúcar." },
      { nombre: "Limonada maracumango", precio: 13000, descripcion: "Extracto de mango y maracuyá, agua, limón y azúcar." },
      { nombre: "Limonada natural", precio: 9000, descripcion: "Limón, agua, azúcar y hielo." }
    ]
  },
  {
    id: "cervezas",
    titulo: "Cervezas",
    grupo: "bebidas",
    estilo: "lista",
    items: [
      { nombre: "Águila", precio: 6000 },
      { nombre: "Cola y Pola", precio: 6000 },
      { nombre: "Coronita", precio: 8000 },
      { nombre: "Club Colombia", precio: 7000 }
    ]
  },
  {
    id: "sin-alcohol",
    titulo: "Sin alcohol",
    grupo: "bebidas",
    estilo: "lista",
    items: [
      { nombre: "Agua", precio: 4000 },
      { nombre: "Coca-Cola 400 ml", precio: 4500 },
      { nombre: "Ginger personal", precio: 4500 },
      { nombre: "Bretaña personal", precio: 4500 },
      { nombre: "Sprite", precio: 4500 }
    ]
  }
];
