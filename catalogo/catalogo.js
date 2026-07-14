// 1. TUS ARRAYS DE DATOS (Agrupados por categorías)
const ebikesCategoria = [
    { 
        id: "ebikes-1", 
        nombre: "Contessa Strike eRIDE 930", 
        modelo: "290584", 
        precio: "$71,150", 
        imagen: "imagenes-catalogo/modelo-290584.avif",
        especificaciones: ["Horquilla RockShox SID 3P 120mm", "RS Nude 5 RL3, 120 mm", "Frenos Shimano SLX"]
    },
    { 
        id: "ebikes-2", 
        nombre: "Strike eRIDE 940", 
        modelo: "290546", 
        precio: "$73,400", 
        imagen: "imagenes-catalogo/modelo-290546.avif",
        especificaciones: ["Horquilla FOX 34 Float 140mm", "Transmisión Shimano XT"]
    }
];

const gravelCategoria = [
    { 
        id: "gravel-1", 
        nombre: "ADDICT GRAVEL 40 MY26 kaki green/carbon black", 
        modelo: "425367", 
        precio: "$57,500", 
        imagen: "imagenes-catalogo/modelo-425367.avif",
        especificaciones: ["Cuadro de carbono HMF Addict Gravel", 
            "Horquilla Addict Gravel HMF Carbon", 
            "Transmisión Shimano GRX RD-RX820, 24 velocidades",
            "Juego de ruedas Syncros RP2.0 Dis", 
            "Cubiertas Schwalbe G-One RX"]
    },
        { 
        id: "gravel-2", 
        nombre: "ADDICT GRAVEL 30 MY26 WHITE/SPLATTER BLUE", 
        modelo: "425366", 
        precio: "$55,950", 
        imagen: "imagenes-catalogo/modelo-425366.avif",
        especificaciones: ["Cuadro de carbono HMF Addict Gravel", 
            "Horquilla Addict Gravel HMF Carbon", 
            "Transmisión Shimano GRX RD-RX822 GS, 12 velocidades",
            "Juego de ruedas Syncros RP2.0 Disc", 
            "Cubiertas Schwalbe G-One RX"]
    }
];

const montanaCategoria = [
    { 
        id: "montana-1", 
        nombre: "CONTESSA ACTIVE 50 PETROLEO", 
        modelo: "286383", 
        precio: "$11,500", 
        imagen: "imagenes-catalogo/modelo-286383.avif",
        especificaciones: ["Cuadro de aleación Active 700/900", 
            "Horquilla Suntour XCE28 100 mm", 
            "Shimano TX800 16, velocidades",
            "Frenos de disco hidráulicos Tektro", 
            "Kenda Booster"]
    },
        { 
        id: "spark-rc-2", 
        nombre: "CONTESSA SCALE 900 COMP", 
        modelo: "291329", 
        precio: "$22,000", 
        imagen: "imagenes-catalogo/modelo-291329.avif",
        especificaciones: ["Cuadro de aluminio Scale 6061 con cableado interno", 
            "Horquilla RockShox Judy Silver", 
            "Rines Syncros X-20",
            "Frenos hidráulicos Shimano MT200"]
    }
];


// 2. LA FUNCIÓN REUTILIZABLE
function renderizarCatalogo(listaProductos, idContenedor) {
    // Buscamos el contenedor directamente usando el ID que le pasemos
    const elementoContenedor = document.getElementById(idContenedor);
    
    // Si el contenedor con ese ID no existe en el HTML actual, salimos para evitar errores
    if (!elementoContenedor) return;

    // Limpiamos el contenedor por seguridad
    elementoContenedor.innerHTML = '';

    listaProductos.forEach((bici, index) => {
        const esElUltimo = index === listaProductos.length - 1;

        // Convertimos el array de textos en etiquetas <li>
        const especificacionesHtml = bici.especificaciones
            .map(item => `<li>${item}</li>`)
            .join('');

        // Inyectamos la plantilla (Se corrigió ${specificacionesHtml} por ${especificacionesHtml})
        elementoContenedor.innerHTML += `
            <section class="container-md my-5" id="${bici.id}">
                <div class="row align-items-center justify-content-center">
                    <div class="col-md-6 text-center">
                        <img style="max-height: 500px; width: auto;" src="${bici.imagen}" class="img-fluid" alt="${bici.nombre}">
                    </div>
                    <div class="col-md-6 align-self-center px-md-5">
                        <h2 style="color: #0D2953;" class="fw-bold">${bici.nombre}</h2>
                        <h3 style="color: #C62828;">Modelo: ${bici.modelo}</h3>
                        <h3 style="color: #7A4E2E;">${bici.precio}</h3>
                        <h2>Vistazo rápido</h2>
                        <ul>
                            ${especificacionesHtml}
                        </ul>
                        <button type="button" class="btn btn-outline-danger me-md-2">
                            Agregar al carrito
                        </button>
                    </div>
                </div>
            </section>
            ${esElUltimo ? '' : '<hr style="border: none; border-top: 2px solid; margin: 80px auto; opacity: 0.2;">'}
        `;
    });
}


// Se pasa: (El Array de datos, "El ID del contenedor en el HTML")
renderizarCatalogo(ebikesCategoria, "contenedor-productos-1");
renderizarCatalogo(gravelCategoria, "contenedor-productos-2");
renderizarCatalogo(montanaCategoria, "contenedor-productos-3");