// SALUDO INICIAL
alert("Bienvenido a Hoffman Destillery");

// INGRESAMOS AÑO DE NACIMIENTO
let fechaNacimiento = parseInt(prompt("Ingresa tu año de nacimiento \nEjemplo: 1995"));

// VALIDAMOS LA EDAD
if (fechaNacimiento == "" || isNaN(fechaNacimiento) || fechaNacimiento < 1900 || fechaNacimiento >= 2025) {
    alert("Formato de fecha inválido");
} else if (fechaNacimiento >= 1900 && fechaNacimiento < 2006) {

    // CREACIÓN DEL ARRAY PARA LAS BEBIDAS CON SUS CARACTERÍSTICAS
    const bebidas = [
        {
            id: 1,
            nombre: "Gin Hofman",
            medida: "500cc",
            precio: 4800,
        },
        {
            id: 2,
            nombre: "Gin Hofman",
            medida: "750cc",
            precio: 6300,
        },
        {
            id: 3,
            nombre: "Vermouth Perro Bissi",
            medida: "1 Litro",
            precio: 5200
        },
        {
            id: 4,
            nombre: "Vodka Hercion",
            medida: "750cc",
            precio: 5500
        },
        {
            id: 5,
            nombre: "Vodka Hercion Triple Destilled",
            medida: "750cc",
            precio: 12300
        },
        {
            id: 6,
            nombre: "Whisky Central Station",
            medida: "750cc",
            precio: 10400
        },
    ];

    // USANDO FILTER PARA MOSTRAR PRODUCTOS DENTRO DE UN RANGO ESPECÍFICO
    let precioMaximo = parseInt(prompt("Ingresa el precio máximo que estás dispuesto a gastar por unidad:"));

    let productosDisponibles = bebidas
        .filter(bebida => bebida.precio <= precioMaximo)
        .map((bebida, indice) => {
            return {
                // CAMBIANDO 'ÍNDICE' A 'indice' PARA QUE SEA CONSISTENTE
                indice: indice + 1,
                nombre: bebida.nombre,
                medida: bebida.medida,
                precio: bebida.precio
            };
        });

    // VERIFICANDO SI HAY PRODUCTOS DISPONIBLES DENTRO DEL RANGO SELECCIONADO
    if (productosDisponibles.length > 0) {

        // USANDO MAP PARA CREAR UN NUEVO ARRAY
        let listaProductos = productosDisponibles.map(bebida => `${bebida.indice}. ${bebida.nombre} - ${bebida.medida} - $${bebida.precio}`).join("\n");

        // DECLARANDO VARIABLES
        let seleccion;
        let bebidaSeleccionada;
        let cantidad;
        let confirmacion;

        // BUCLE PRINCIPAL PARA SELECCIONAR Y CONFIRMAR EL PEDIDO
        while (true) {
            seleccion = prompt("Los productos disponibles dentro de tu rango de precios son:\n" + listaProductos + "\n\nIngresa el número del producto que deseas adquirir");

            if (seleccion === null) {
                alert("Gracias por visitar Hoffman Destillery");
                break;
            }

            seleccion = parseInt(seleccion);

            if (!isNaN(seleccion) && seleccion >= 1 && seleccion <= productosDisponibles.length) {
                bebidaSeleccionada = productosDisponibles[seleccion - 1];

                // SI SE SELECCIONA UN PRODUCTO, PREGUNTAMOS POR LA CANTIDAD
                while (true) {

                    cantidad = prompt(`Has seleccionado: ${bebidaSeleccionada.nombre} de ${bebidaSeleccionada.medida}\nPrecio: $${bebidaSeleccionada.precio}\n\n¿Cuántas unidades deseas?`);

                    if (cantidad === null) {
                        break;
                    }

                    cantidad = parseInt(cantidad);

                    if (!isNaN(cantidad) && cantidad > 0) {

                        // SI LA CANTIDAD ES MAYOR A 0, CALCULAMOS EL PRECIO TOTAL
                        let precioTotal = bebidaSeleccionada.precio * cantidad;

                        // CONFIRMAMOS LA SELECCIÓN
                        confirmacion = confirm(`Has seleccionado ${cantidad} unidad(es) de ${bebidaSeleccionada.nombre} de ${bebidaSeleccionada.medida}\nPrecio total: $${precioTotal}\n\n¿Es correcto este pedido?`);

                        if (confirmacion) {
                            alert("Muchas gracias, pedido registrado con éxito");
                            break;
                        }
                        // REPETIMOS EL BUCLE HASTA QUE SE INGRESE UNA CANTIDAD VÁLIDA
                    } else {
                        alert("Cantidad inválida. Por favor, ingresa un número válido");
                    }
                }

                // REPETIMOS EL BUCLE HASTA QUE SE INGRESE UNA CANTIDAD VÁLIDA
                if (confirmacion === null) {
                    continue;
                }
            } else {
                alert("Selección inválida. Por favor, ingresa un número válido");
            }
        }
    } else {
        // SI NO HAY PRODUCTOS EN EL RANGO SELECCIONADO, FINALIZAMOS LA BUSQUEDA
        alert("No hay productos disponibles dentro del rango de precios especificado");

    }

    //LA CONDICION PRINCIPAL PARA EJECUTAR EL PROGRAMA
} else {
    alert("Para ingresar debes ser mayor a 18 años");
}