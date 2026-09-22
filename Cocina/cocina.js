const readline = require("readline");

let productos = [
  {id:1, nombre:"Café Americano", precio:35, tipo:"bebida"},
  {id:2, nombre:"Capuchino", precio:45, tipo:"bebida"},
  {id:3, nombre:"Latte", precio:50, tipo:"bebida"},
  {id:4, nombre:"Moka", precio:55, tipo:"bebida"},
  {id:5, nombre:"Chocolate Caliente", precio:45, tipo:"bebida"},
  {id:6, nombre:"Té Chai", precio:40, tipo:"bebida"},
  {id:7, nombre:"Croissant", precio:35, tipo:"postre"},
  {id:8, nombre:"Cheesecake", precio:60, tipo:"postre"},
  {id:9, nombre:"Galleta de Chocolate", precio:25, tipo:"postre"},
  {id:10, nombre:"Brownie", precio:40, tipo:"postre"}
];

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function listarProductos() {
  console.log("\n----- TODOS LOS PRODUCTOS -----");

  productos.forEach(producto => {
    console.log(
      producto.id + ". " +
      producto.nombre + " - $" +
      producto.precio + " - " +
      producto.tipo
    );
  });
}


function buscarProducto(id) {
  const producto = productos.find(producto => producto.id === id);

  console.log("\n----- PRODUCTO ENCONTRADO -----");

  if (producto) {
    console.log(
      producto.nombre +
      " - $" +
      producto.precio +
      " - " +
      producto.tipo
    );
  } else {
    console.log("Producto no encontrado.");
  }
}



function productosBaratos() {
  const baratos = productos.filter(producto => producto.precio <= 23
    0);

  console.log("\n----- PRODUCTOS BARATOS -----");

  baratos.forEach(producto => {
    console.log(producto.nombre + " - $" + producto.precio);
  });
}


function productosCaros() {
  const caros = productos.filter(producto => producto.precio > 20);

  console.log("\n----- PRODUCTOS CAROS -----");

  caros.forEach(producto => {
    console.log(producto.nombre + " - $" + producto.precio);
  });
}



function filtrarBebidas() {
  const bebidas = productos.filter(producto => producto.tipo === "bebida");

  console.log("\n----- BEBIDAS -----");

  bebidas.forEach(producto => {
    console.log(producto.nombre + " - $" + producto.precio);
  });
}


function filtrarPostres() {
  const postres = productos.filter(producto => producto.tipo === "postre");

  console.log("\n----- POSTRES -----");

  postres.forEach(producto => {
    console.log(producto.nombre + " - $" + producto.precio);
  });
}


function menu() {
  console.log(`
========== COCINA ==========
1. Listar productos
2. Buscar producto
3. Mostrar productos baratos
4. Mostrar productos caros
5. Mostrar bebidas
6. Mostrar postres
7. Salir
`);

  rl.question("Selecciona una opción: ", opcion => {

    if (opcion === "1") {
      listarProductos();
      menu();

    } else if (opcion === "2") {
      rl.question("Escribe el ID del producto: ", id => {
        buscarProducto(Number(id));
        menu();
      });

    } else if (opcion === "3") {
      productosBaratos();
      menu();

    } else if (opcion === "4") {
      productosCaros();
      menu();

    } else if (opcion === "5") {
      filtrarBebidas();
      menu();

    } else if (opcion === "6") {
      filtrarPostres();
      menu();

    } else if (opcion === "7") {
      console.log("Programa terminado.");
      rl.close();

    } else {
      console.log("Opción no válida.");
      menu();
    }
  });
}

menu();