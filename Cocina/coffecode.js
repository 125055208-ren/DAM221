let productos = [
    { id: 1, nombre: "Café Americano", precio: 35, tipo: "bebida" },
    { id: 2, nombre: "Capuchino", precio: 45, tipo: "bebida" },
    { id: 3, nombre: "Latte", precio: 50, tipo: "bebida" },
    { id: 4, nombre: "Moka", precio: 55, tipo: "bebida" },
    { id: 5, nombre: "Chocolate Caliente", precio: 45, tipo: "bebida" },
    { id: 6, nombre: "Té Chai", precio: 40, tipo: "bebida" },
    { id: 7, nombre: "Croissant", precio: 35, tipo: "postre" },
    { id: 8, nombre: "Cheesecake", precio: 60, tipo: "postre" },
    { id: 9, nombre: "Galleta de Chocolate", precio: 25, tipo: "postre" },
    { id: 10, nombre: "Brownie", precio: 40, tipo: "postre" }
];

let carrito = [];
let pedidos = [];
let total = 0;


function listarProductos() {
    const tabla = document.getElementById("tablaProductos");
    tabla.innerHTML = "";

    productos.forEach(producto => {
        tabla.innerHTML += `
            <tr>
                <td>${producto.id}</td>
                <td>${producto.nombre}</td>
                <td>$${producto.precio.toFixed(2)}</td>
                <td>${producto.tipo}</td>
                <td>
                    <button onclick="eliminarProducto(${producto.id})" class="eliminar">
                        Eliminar
                    </button>
                </td>
            </tr>
        `;
    });
}


function buscarProducto() {
    const id = Number(document.getElementById("buscarId").value);
    
    if (!id) {
        listarProductos();
        return;
    }

    const producto = productos.find(p => p.id === id);
    const tabla = document.getElementById("tablaProductos");
    
    tabla.innerHTML = "";

    if (producto) {
        tabla.innerHTML = `
            <tr>
                <td>${producto.id}</td>
                <td>${producto.nombre}</td>
                <td>$${producto.precio.toFixed(2)}</td>
                <td>${producto.tipo}</td>
                <td>
                    <button onclick="eliminarProducto(${producto.id})" class="eliminar">
                        Eliminar
                    </button>
                </td>
            </tr>
        `;
    } else {
        tabla.innerHTML = `<tr><td colspan="5" style="text-align:center;">Producto no encontrado</td></tr>`;
    }
}


function productosBaratos() {
    const baratos = productos.filter(p => p.precio <= 40);
    const tabla = document.getElementById("tablaProductos");
    
    tabla.innerHTML = "";
    
    if (baratos.length === 0) {
        tabla.innerHTML = `<tr><td colspan="5" style="text-align:center;">No hay productos baratos</td></tr>`;
        return;
    }

    baratos.forEach(producto => {
        tabla.innerHTML += `
            <tr>
                <td>${producto.id}</td>
                <td>${producto.nombre}</td>
                <td>$${producto.precio.toFixed(2)}</td>
                <td>${producto.tipo}</td>
                <td>
                    <button onclick="eliminarProducto(${producto.id})" class="eliminar">
                        Eliminar
                    </button>
                </td>
            </tr>
        `;
    });
}


function productosCaros() {
    const caros = productos.filter(p => p.precio > 40);
    const tabla = document.getElementById("tablaProductos");
    
    tabla.innerHTML = "";

    if (caros.length === 0) {
        tabla.innerHTML = `<tr><td colspan="5" style="text-align:center;">No hay productos caros</td></tr>`;
        return;
    }

    caros.forEach(producto => {
        tabla.innerHTML += `
            <tr>
                <td>${producto.id}</td>
                <td>${producto.nombre}</td>
                <td>$${producto.precio.toFixed(2)}</td>
                <td>${producto.tipo}</td>
                <td>
                    <button onclick="eliminarProducto(${producto.id})" class="eliminar">
                        Eliminar
                    </button>
                </td>
            </tr>
        `;
    });
}


function filtrarBebidas() {
    const bebidas = productos.filter(p => p.tipo === "bebida");
    const tabla = document.getElementById("tablaProductos");
    
    tabla.innerHTML = "";

    bebidas.forEach(producto => {
        tabla.innerHTML += `
            <tr>
                <td>${producto.id}</td>
                <td>${producto.nombre}</td>
                <td>$${producto.precio.toFixed(2)}</td>
                <td>${producto.tipo}</td>
                <td>
                    <button onclick="eliminarProducto(${producto.id})" class="eliminar">
                        Eliminar
                    </button>
                </td>
            </tr>
        `;
    });
}


function filtrarPostres() {
    const postres = productos.filter(p => p.tipo === "postre");
    const tabla = document.getElementById("tablaProductos");
    
    tabla.innerHTML = "";

    postres.forEach(producto => {
        tabla.innerHTML += `
            <tr>
                <td>${producto.id}</td>
                <td>${producto.nombre}</td>
                <td>$${producto.precio.toFixed(2)}</td>
                <td>${producto.tipo}</td>
                <td>
                    <button onclick="eliminarProducto(${producto.id})" class="eliminar">
                        Eliminar
                    </button>
                </td>
            </tr>
        `;
    });
}


function agregarProducto() {
    const id = Number(document.getElementById("id").value);
    const nombre = document.getElementById("nombre").value.trim();
    const precio = Number(document.getElementById("precio").value);
    const tipo = document.getElementById("tipo").value;

    if (!id || !nombre || precio <= 0) {
        alert("Completa todos los campos.");
        return;
    }

    const existe = productos.some(p => p.id === id);

    if (existe) {
        alert("Ya existe un producto con ese ID.");
        return;
    }

    productos.push({ id, nombre, precio, tipo });

    limpiarFormulario();
    listarProductos();
    cargarMenuCliente();
}


function editarProducto() {
    const id = Number(document.getElementById("id").value);
    const producto = productos.find(p => p.id === id);

    if (!producto) {
        alert("No existe un producto con ese ID.");
        return;
    }

    const nombre = document.getElementById("nombre").value.trim();
    const precio = Number(document.getElementById("precio").value);
    const tipo = document.getElementById("tipo").value;

    if (nombre) producto.nombre = nombre;
    if (precio > 0) producto.precio = precio;
    if (tipo) producto.tipo = tipo;

    limpiarFormulario();
    listarProductos();
    cargarMenuCliente();

    alert("Producto editado correctamente.");
}


function eliminarProducto(id) {
    productos = productos.filter(p => p.id !== id);
    carrito = carrito.filter(p => p.id !== id);

    calcularTotal();
    mostrarCarrito();
    listarProductos();
    cargarMenuCliente();
}


function cargarMenuCliente() {
    const menu = document.getElementById("menuCliente");
    menu.innerHTML = "";

    productos.forEach(producto => {
        menu.innerHTML += `
            <div class="producto-card">
                <h3>${producto.nombre}</h3>
                <p><i>(${producto.tipo})</i></p>
                <div class="precio">$${producto.precio.toFixed(2)}</div>
                <input type="number" id="cantidad-${producto.id}" min="1" value="1" class="cantidad">
                <button onclick="agregarAlCarrito(${producto.id})">Agregar</button>
            </div>
        `;
    });
}

function agregarAlCarrito(id) {
    const producto = productos.find(p => p.id === id);
    const cantidadInput = document.getElementById(`cantidad-${id}`);
    const cantidad = Number(cantidadInput.value);

    if (!producto || cantidad <= 0) return;

    const productoCarrito = carrito.find(item => item.id === id);

    if (productoCarrito) {
        productoCarrito.cantidad += cantidad;
    } else {
        carrito.push({ ...producto, cantidad });
    }

    mostrarCarrito();
    calcularTotal();
}

function mostrarCarrito() {
    const carritoHTML = document.getElementById("carrito");
    carritoHTML.innerHTML = "";

    if (carrito.length === 0) {
        carritoHTML.innerHTML = `<div class="mensaje">No hay productos seleccionados.</div>`;
        return;
    }

    carrito.forEach(producto => {
        const subtotal = producto.precio * producto.cantidad;
        carritoHTML.innerHTML += `
            <div class="item-carrito">
                <div>
                    <strong>${producto.nombre}</strong><br>
                    $${producto.precio.toFixed(2)} x 
                    <input type="number" min="1" value="${producto.cantidad}" 
                           class="cantidad" style="width:50px;" 
                           onchange="editarCantidad(${producto.id}, this.value)">
                    = $${subtotal.toFixed(2)}
                </div>
                <button onclick="eliminarDelCarrito(${producto.id})" class="eliminar">X</button>
            </div>
        `;
    });
}

function editarCantidad(id, nuevaCantidad) {
    const producto = carrito.find(item => item.id === id);
    if (!producto) return;

    nuevaCantidad = Number(nuevaCantidad);
    if (nuevaCantidad <= 0) {
        eliminarDelCarrito(id);
    } else {
        producto.cantidad = nuevaCantidad;
        calcularTotal();
        mostrarCarrito();
    }
}

function eliminarDelCarrito(id) {
    carrito = carrito.filter(p => p.id !== id);
    calcularTotal();
    mostrarCarrito();
}

function calcularTotal() {
    total = carrito.reduce((sum, item) => sum + (item.precio * item.cantidad), 0);
    document.getElementById("total").textContent = total.toFixed(2);
}

function hacerPedido() {
    if (carrito.length === 0) {
        alert("Agrega productos antes de realizar el pedido.");
        return;
    }

    const nuevoPedido = {
        numero: pedidos.length + 1,
        productos: [...carrito],
        total: total
    };

    pedidos.push(nuevoPedido);

    carrito = [];
    total = 0;

    mostrarCarrito();
    calcularTotal();
    listarPedidos();

    alert(`¡Pedido #${nuevoPedido.numero} realizado con éxito!`);
}

function listarPedidos() {
    const lista = document.getElementById("listaPedidos");
    lista.innerHTML = "";

    if (pedidos.length === 0) {
        lista.innerHTML = `<div class="mensaje">No hay pedidos realizados.</div>`;
        return;
    }

    pedidos.forEach(pedido => {
        let itemsHTML = pedido.productos.map(p => 
            `<p>${p.nombre} x${p.cantidad} - $${(p.precio * p.cantidad).toFixed(2)}</p>`
        ).join('');

        lista.innerHTML += `
            <div class="pedido-card">
                <h3>Pedido #${pedido.numero}</h3>
                ${itemsHTML}
                <strong>Total: $${pedido.total.toFixed(2)}</strong>
            </div>
        `;
    });
}

function limpiarFormulario() {
    document.getElementById("id").value = "";
    document.getElementById("nombre").value = "";
    document.getElementById("precio").value = "";
    document.getElementById("buscarId").value = "";
}

// Inicialización al cargar la página
listarProductos();
cargarMenuCliente();
mostrarCarrito();
calcularTotal();
listarPedidos();