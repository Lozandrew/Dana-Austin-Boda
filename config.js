/* ════════════════════════════════════════════════════════════
   CONFIGURACIÓN DEL EVENTO · Edita SOLO este archivo por cliente
   ════════════════════════════════════════════════════════════ */
const CONFIG = {

  textos: {
    tituloPagina:       "Dana & Austin  | Encuentra tu Mesa",  // pestaña del navegador
    titulo:             "Dana & Austin",
    instrucciones:      "Ingresa tu nombre y apellido para conocer tu mesa:",
    placeholder:        "Ej. Dana Spivey",
    botonBuscar:        "Buscar Mesa",
    botonRegresar:      "Buscar nuevo invitado",
    bienvenida:         "¡Qué alegría contar con tu presencia!",
    bienvenidaAnfitriona: "¡Tonight is the night!",
    alertaVacio:        "Por favor escribe un nombre",
    errorNombre:        "No encontramos ese nombre exacto en la lista 😢",
    errorHint:          "Por favor, verifica la ortografía.",

    // Plantillas: {nombre} y {mesa} se reemplazan solos
    mensajeMesa:       '¡Hola {nombre}!<br>Tu lugar es la: <strong>Mesa {mesa}</strong>',
    mensajeAnfitriona: '¡Hola {nombre}! <br> ¡Felicidades por tu boda! <br> Tu lugar es la: <strong>Mesa de {mesa}</strong><br><span class="extra-anfitriona">{extraAnfitriona}</span>',
    mensajeAnfitrionaNumero: '¡Hola {nombre}! <br> ¡Felicidades por tu boda! <br> Tu lugar es la: <strong>Mesa {mesa}</strong><br><span class="extra-anfitriona">{extraAnfitriona}</span>',
    mensajeNinos:      '¡Hola {nombre}!<br>Tu lugar es la: <strong>Mesa de {mesa}</strong><br><br><span class="aviso-ninos">{avisoNinos}</span>',
    extraAnfitriona:   '✨ ¡Disfruta al máximo tu fiesta! ✨',
    avisoNinos:        'Pregunta por el servicio de niñeras',
  },

  especiales: {
    anfitriones: ["Dana Spivey","Austin Spivey"],        // festejado(a): quinceañera, novios, graduado…
    mesasNinos: ["ninos", "niños"],     // mesas con aviso especial y sin croquis
  },

  datos: {
    urlInvitados: "https://api.jsonbin.io/v3/b/6ad7c5b9ffd5d160537d2956/latest",
},

  tema: {
  colores: {
    // Colores principales de la marca
    primario:         "#C8622D",                    // olivo - natural, elegante
    acento:           "#D4A017",                    // dorado - números de mesa, highlights
    instrucciones:    "#A0522D",                    // terracota - texto instruccional
    
    // Fondos y superficies
    fondo:            "#FDF8F3",                    // crema con tinte verdoso muy suave
    tarjeta:          "rgba(255, 255, 255, 0.90)", // blanco semi-transparente
    bordeTarjeta:     "rgba(200, 98, 45, 0.12)",  // olivo suave
    
    // Textos y bordes
    texto:            "#5C3A21",                    // olivo muy oscuro (legible)
    borde:            "#E8D5C0",                    // beige verdoso
    
    // Inputs y formularios
    inputFondo:       "#FFFFFF",                    // blanco puro
    separador:        "#F5EBE0",                    // crema muy claro
    
    // Estados y feedback
    sugerenciasHover: "rgba(200, 98, 45, 0.10)",  // olivo transparente
    error:            "#C94C6E",                    // rosa - errores
    errorHint:        "#9B9B4A",                    // terracota - hint
    aviso:            "#6B2D5B",                    // púrpura - mensajes informativos
  },
    fuentes: {
      titulo: { nombre: "Cinzel",     pesos: "400;500" },
      texto:  { nombre: "Inter", pesos: "300;400;600" },
    },
    imagenes: {
      fondo:          "imagenes/fondo-app.jpg?v=1",
      croquis:        "imagenes/croquis-{mesa}.jpg",   // {mesa} = número de mesa
      croquisGeneral: "imagenes/croquis-general.jpg",
    },
  },
};

