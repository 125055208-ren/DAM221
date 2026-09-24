
function simularCocinaConPromesa(numPedido) {
    return new Promise((resolve, reject) => {
        const azar = Math.floor(Math.random() * 3) + 1;

        setTimeout(() => {
            if (azar === 1) {
                
                resolve(`Notificación de cicina...El Pedido #${numPedido} está listo.`);
            } else if (azar === 2) {
                
                reject(`NOTIFICACIÓN DE COCINA A CAJA: Falta un ingrediente para completar el Pedido #${numPedido}. Se requiere reajustar o cancelar.`);
            } else {
               
                reject(`NOTIFICACIÓN DE COCINA A CAJA: Ocurrió un inconveniente técnico en cocina con el Pedido #${numPedido}.`);
            }
        }, 2500); 
    });
}

function hacerPedido() {
    if (carrito.length === 0) {
        alert("Agrega productos antes de realizar el pedido.");
        return;
    }

    const numPedido = pedidos.length + 1;
    const nuevoPedido = {
        numero: numPedido,
        productos: [...carrito],
        subtotal: subtotal,
        iva: iva,
        total: total,
        estado: "Enviado a cocina..."
    };

    pedidos.push(nuevoPedido);

    carrito = [];
    subtotal = 0;
    iva = 0;
    total = 0;

    mostrarCarrito();
    calcularTotal();
    listarPedidos();

    simularCocinaConPromesa(numPedido)
        .then((mensajeExito) => {
            nuevoPedido.estado = "Preparado y listo para entregar";
            alert(mensajeExito);
        })
        .catch((notificacionCaja) => {
           
            nuevoPedido.estado = `Notificación en Caja: ${notificacionCaja}`;
            alert(`[AVISO A CAJA]\n${notificacionCaja}`);
        })
        .finally(() => {
            listarPedidos(); 
        });
}

function listarPedidos() {
    const lista = document.getElementById("listaPedidos");
    if (!lista) return;

    lista.innerHTML = "";

    if (pedidos.length === 0) {
        lista.innerHTML = `<div class="mensaje">No hay pedidos realizados.</div>`;
        return;
    }

    pedidos.forEach(({ numero, productos, subtotal, iva, total, estado }) => {
        let itemsHTML = productos.map(({ nombre, cantidad, precio }) => 
            `<p>${nombre} x${cantidad} - $${(precio * cantidad).toFixed(2)}</p>`
        ).join('');

        lista.innerHTML += `
            <div class="pedido-card">
                <h3>Pedido #${numero}</h3>
                ${itemsHTML}
                <p>Subtotal: $${subtotal.toFixed(2)}</p>
                <p>IVA (16%): $${iva.toFixed(2)}</p>
                <p><strong>Total: $${total.toFixed(2)}</strong></p>
                <div class="estado-cocina"><strong>Estado Cocina:</strong> ${estado}</div>
            </div>
        `;
    });
}

actualizarVistasCliente();
mostrarCarrito();
calcularTotal();
listarPedidos();