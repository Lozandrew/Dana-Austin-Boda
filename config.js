/* ════════════════════════════════════════════════════════════
   CONFIGURACIÓN DEL EVENTO · Edita SOLO este archivo por cliente
   ════════════════════════════════════════════════════════════ */
const CONFIG = {

  idiomaDefault: "es",       // idioma si no hay preferencia guardada
  detectarNavegador: true,   // true = usa el idioma del celular del invitado la 1ª vez

  textos: {
    es: {
      tituloPagina:        "Dana & Austin | Encuentra tu Mesa",
      titulo:              "Dana & Austin",
      instrucciones:       "Ingresa tu nombre y apellido para conocer tu mesa:",
      placeholder:         "Ej. Dana Spivey",
      botonBuscar:         "Buscar Mesa",
      botonRegresar:       "Buscar nuevo invitado",
      bienvenida:          "¡Qué alegría contar con tu presencia!",
      bienvenidaAnfitriona:"¡Tonight is the night!",
      alertaVacio:         "Por favor escribe un nombre",
      errorNombre:         "No encontramos ese nombre exacto en la lista 😢",
      errorHint:           "Por favor, verifica la ortografía.",
      errorLista:          "La lista de invitados no está disponible ahorita 😢",
      errorListaHint:      "Recarga la página en unos minutos.",

      mensajeMesa:             '¡Hola {nombre}!<br>Tu lugar es la: <strong>Mesa {mesa}</strong>',
      mensajeAnfitriona:       '¡Hola {nombre}! <br> ¡Felicidades por tu boda! <br> Tu lugar es la: <strong>Mesa de {mesa}</strong><br><span class="extra-anfitriona">{extraAnfitriona}</span>',
      mensajeAnfitrionaNumero: '¡Hola {nombre}! <br> ¡Felicidades por tu boda! <br> Tu lugar es la: <strong>Mesa {mesa}</strong><br><span class="extra-anfitriona">{extraAnfitriona}</span>',
      mensajeNinos:            '¡Hola {nombre}!<br>Tu lugar es la: <strong>Mesa de {mesa}</strong><br><br><span class="aviso-ninos">{avisoNinos}</span>',
      extraAnfitriona:   '✨ ¡Disfruta al máximo tu fiesta! ✨',
      avisoNinos:        'Pregunta por el servicio de niñeras',
    },

    en: {
      tituloPagina:        "Dana & Austin | Find Your Table",
      titulo:              "Dana & Austin",
      instrucciones:       "Enter your first and last name to find your table:",
      placeholder:         "e.g. Dana Spivey",
      botonBuscar:         "Find My Table",
      botonRegresar:       "Search another guest",
      bienvenida:          "We're so happy you're here!",
      bienvenidaAnfitriona:"Tonight is the night!",
      alertaVacio:         "Please type a name",
      errorNombre:         "We couldn't find that exact name on the list 😢",
      errorHint:           "Please check the spelling.",
      errorLista:          "The guest list is not available right now 😢",
      errorListaHint:      "Please reload the page in a few minutes.",

      mensajeMesa:             'Hi {nombre}!<br>Your seat is at: <strong>Table {mesa}</strong>',
      mensajeAnfitriona:       'Hi {nombre}! <br> Congratulations on your wedding! <br> Your seat is at: <strong>the {mesa} Table</strong><br><span class="extra-anfitriona">{extraAnfitriona}</span>',
      mensajeAnfitrionaNumero: 'Hi {nombre}! <br> Congratulations on your wedding! <br> Your seat is at: <strong>Table {mesa}</strong><br><span class="extra-anfitriona">{extraAnfitriona}</span>',
      mensajeNinos:            'Hi {nombre}!<br>Your seat is at: <strong>the {mesa} Table</strong><br><br><span class="aviso-ninos">{avisoNinos}</span>',
      extraAnfitriona:   '✨ Enjoy your party to the fullest! ✨',
      avisoNinos:        'Ask about the nanny service',
    },
  },

  especiales: {
    anfitriones: ["Dana Spivey", "Austin Spivey"],
    mesasNinos: ["ninos", "niños"],
  },

  datos: {
    urlInvitados: "https://api.jsonbin.io/v3/b/6ad7c5b9ffd5d160537d2956/latest",
  },

  tema: {
    colores: {
      primario:         "#C8622D",
      acento:           "#D4A017",
      instrucciones:    "#A0522D",
      fondo:            "#FDF8F3",
      tarjeta:          "rgba(255, 255, 255, 0.90)",
      bordeTarjeta:     "rgba(200, 98, 45, 0.12)",
      texto:            "#5C3A21",
      borde:            "#E8D5C0",
      inputFondo:       "#FFFFFF",
      separador:        "#F5EBE0",
      sugerenciasHover: "rgba(200, 98, 45, 0.10)",
      error:            "#C94C6E",
      errorHint:        "#9B9B4A",
      aviso:            "#6B2D5B",
    },
    fuentes: {
      titulo: { nombre: "Cinzel", pesos: "400;500" },
      texto:  { nombre: "Inter",  pesos: "300;400;600" },
    },
    imagenes: {
      fondo:          "imagenes/fondo-app.jpg?v=1",
      fondoPosicion:  "35% center",    // ← ajusta aquí por evento
      croquis:        "imagenes/croquis-{mesa}.jpg",
      croquisGeneral: "imagenes/croquis-general.jpg",
    },
  },
};