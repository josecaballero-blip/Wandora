export interface Activity {
  name: string;
  description: string;
  icon: string;
}

export interface TravelTip {
  title: string;
  description: string;
}

export interface Destination {
  slug: string;
  name: string;
  country: string;
  continent: string;
  tagline: string;
  description: string;
  longDescription: string;
  image: string;
  gallery: string[];
  activities: Activity[];
  tips: TravelTip[];
  bestTime: string;
  avgBudget: string;
  language: string;
  currency: string;
  featured: boolean;
}

export const destinations: Destination[] = [
  {
    slug: "cartagena",
    name: "Cartagena de Indias",
    country: "Colombia",
    continent: "South America",
    tagline: "La Joya del Caribe Colombiano",
    description:
      "Ciudad amurallada con historia colonial, playas paradisíacas y una vibrante vida nocturna que te dejará sin aliento.",
    longDescription:
      "Cartagena de Indias es una de las ciudades más hermosas de América Latina. Su centro histórico amurallado, declarado Patrimonio de la Humanidad por la UNESCO, te transporta a la época colonial con sus calles empedradas, balcones floridos y plazas encantadoras. Más allá de sus muros, encontrarás playas de arena blanca en las Islas del Rosario, la vibrante vida nocturna de Getsemaní, y una gastronomía que fusiona sabores del Caribe, África y España. Cada rincón de Cartagena cuenta una historia de piratas, libertadores y amor tropical.",
    image:
      "https://images.unsplash.com/photo-1583531172066-4cd9c9248569?w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1583531172066-4cd9c9248569?w=800&q=80",
      "https://images.unsplash.com/photo-1569839333583-7375336cde4b?w=800&q=80",
      "https://images.unsplash.com/photo-1536086845120-8a645de57d64?w=800&q=80",
    ],
    activities: [
      {
        name: "Recorrer la Ciudad Amurallada",
        description:
          "Pasea por las calles coloniales, admira la arquitectura y descubre iglesias históricas.",
        icon: "castle",
      },
      {
        name: "Islas del Rosario",
        description:
          "Navega hasta este archipiélago de aguas cristalinas perfecto para snorkel y buceo.",
        icon: "waves",
      },
      {
        name: "Castillo San Felipe",
        description:
          "Explora la fortaleza más grande construida por los españoles en América.",
        icon: "fortress",
      },
      {
        name: "Barrio Getsemaní",
        description:
          "Descubre el arte callejero, la música en vivo y los bares más auténticos.",
        icon: "music",
      },
      {
        name: "Tour Gastronómico",
        description:
          "Prueba ceviches, arepas de huevo, cocadas y la mejor cocina caribeña.",
        icon: "food",
      },
    ],
    tips: [
      {
        title: "Mejor época",
        description:
          "Visita entre diciembre y abril para disfrutar del clima seco y soleado.",
      },
      {
        title: "Transporte",
        description:
          "Usa taxis oficiales o apps de transporte. El centro histórico se recorre mejor a pie.",
      },
      {
        title: "Seguridad",
        description:
          "Guarda tus pertenencias y evita zonas alejadas del centro por la noche.",
      },
    ],
    bestTime: "Diciembre - Abril",
    avgBudget: "$50-100 USD/día",
    language: "Español",
    currency: "Peso Colombiano (COP)",
    featured: true,
  },
  {
    slug: "medellin",
    name: "Medellín",
    country: "Colombia",
    continent: "South America",
    tagline: "La Ciudad de la Eterna Primavera",
    description:
      "Una ciudad reinventada con clima perfecto, innovación urbana y la calidez de su gente paisa.",
    longDescription:
      "Medellín ha pasado de ser una ciudad problemática a convertirse en un referente mundial de innovación y transformación urbana. Rodeada por montañas, con un clima primaveral durante todo el año, esta ciudad te sorprende con su sistema de metro y metrocable, sus parques biblioteca, la vibrante Comuna 13 llena de grafitis y escaleras eléctricas, y una escena gastronómica y de vida nocturna que no tiene igual. Los paisas son conocidos por su hospitalidad, y cada visita se convierte en una experiencia llena de calidez humana.",
    image:
      "https://images.unsplash.com/photo-1599487488167-5abb490d0017?w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1599487488167-5abb490d0017?w=800&q=80",
      "https://images.unsplash.com/photo-1577587230708-187fdbef4d91?w=800&q=80",
      "https://images.unsplash.com/photo-1568736333610-eae6e0ab0f6d?w=800&q=80",
    ],
    activities: [
      {
        name: "Comuna 13",
        description:
          "Recorre las famosas escaleras eléctricas y admira el arte urbano más impresionante.",
        icon: "art",
      },
      {
        name: "Metrocable",
        description:
          "Sube en teleférico y disfruta de vistas panorámicas espectaculares de la ciudad.",
        icon: "cable-car",
      },
      {
        name: "Plaza Botero",
        description:
          "Contempla las icónicas esculturas del maestro Fernando Botero en pleno centro.",
        icon: "sculpture",
      },
      {
        name: "Guatapé",
        description:
          "Excursión al colorido pueblo y sube los 740 escalones de la Piedra del Peñol.",
        icon: "mountain",
      },
      {
        name: "Parque Arví",
        description:
          "Naturaleza pura con senderos ecológicos, mercados campesinos y aire fresco.",
        icon: "tree",
      },
    ],
    tips: [
      {
        title: "Clima",
        description:
          "Temperatura promedio de 22°C todo el año. Lleva una chaqueta ligera para las noches.",
      },
      {
        title: "Moneda",
        description:
          "Usa apps de cambio para obtener las mejores tasas. Muchos lugares aceptan tarjeta.",
      },
      {
        title: "Vida nocturna",
        description:
          "El Poblado y Laureles son las zonas más populares para salir de noche.",
      },
    ],
    bestTime: "Todo el año",
    avgBudget: "$40-80 USD/día",
    language: "Español",
    currency: "Peso Colombiano (COP)",
    featured: true,
  },
  {
    slug: "cali",
    name: "Cali",
    country: "Colombia",
    continent: "South America",
    tagline: "La Capital Mundial de la Salsa",
    description:
      "Ritmo, sabor y alegría en cada esquina. Cali es la ciudad donde la música y el baile son un estilo de vida.",
    longDescription:
      "Santiago de Cali, la tercera ciudad más grande de Colombia, es reconocida mundialmente como la Capital de la Salsa. Aquí la música no es solo entretenimiento, es un modo de vida. Desde las escuelas de salsa hasta las salsotecas de Juanchito, cada noche es una fiesta. Pero Cali es mucho más: el barrio San Antonio con sus calles bohemias, el cerro de Cristo Rey con vistas panorámicas, la gastronomía vallecaucana con su famoso cholado, y una energía contagiosa que te hace sentir vivo. Los caleños son famosos por su alegría y su capacidad de convertir cualquier momento en celebración.",
    image:
      "https://images.unsplash.com/photo-1624227258787-63e51ed7c49d?w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1624227258787-63e51ed7c49d?w=800&q=80",
      "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?w=800&q=80",
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&q=80",
    ],
    activities: [
      {
        name: "Clases de Salsa",
        description:
          "Aprende a bailar salsa con los mejores instructores del mundo.",
        icon: "dance",
      },
      {
        name: "Salsotecas de Juanchito",
        description:
          "Vive la auténtica rumba caleña en los legendarios clubes de salsa.",
        icon: "music",
      },
      {
        name: "Barrio San Antonio",
        description:
          "Explora las calles bohemias, cafés artesanales y galerías de arte.",
        icon: "cafe",
      },
      {
        name: "Cristo Rey",
        description:
          "Sube al cerro para contemplar la ciudad desde las alturas.",
        icon: "mountain",
      },
      {
        name: "Zoológico de Cali",
        description:
          "Uno de los mejores zoológicos de Latinoamérica con fauna nativa.",
        icon: "animal",
      },
    ],
    tips: [
      {
        title: "Clima",
        description:
          "Cali es caliente (25-30°C). Usa ropa fresca y mantente hidratado.",
      },
      {
        title: "Salsa",
        description:
          "No necesitas saber bailar para disfrutar. Los locales te enseñan con gusto.",
      },
      {
        title: "Gastronomía",
        description:
          "No te vayas sin probar un cholado, empanadas vallecaucanas y lulada.",
      },
    ],
    bestTime: "Diciembre - Enero (Feria de Cali)",
    avgBudget: "$35-70 USD/día",
    language: "Español",
    currency: "Peso Colombiano (COP)",
    featured: true,
  },
  {
    slug: "bucaramanga",
    name: "Bucaramanga",
    country: "Colombia",
    continent: "South America",
    tagline: "La Ciudad Bonita de Colombia",
    description:
      "Parques, cañones espectaculares y deportes extremos rodeados de una naturaleza impresionante.",
    longDescription:
      "Bucaramanga, conocida como 'La Ciudad Bonita', es una joya escondida en el corazón de Santander. Rodeada de montañas y con más de 160 parques, esta ciudad combina naturaleza con modernidad. A pocos kilómetros encontrarás el impresionante Cañón del Chicamocha, uno de los más profundos del mundo, donde puedes hacer parapente, canopy y teleférico. El pueblo colonial de Girón, la Mesa de los Santos con sus actividades de aventura, y una gastronomía única con hormigas culonas, mute santandereano y carne oreada hacen de Bucaramanga un destino inolvidable.",
    image:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&q=80",
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800&q=80",
    ],
    activities: [
      {
        name: "Cañón del Chicamocha",
        description:
          "Vive la adrenalina del teleférico más largo de Sudamérica sobre un cañón impresionante.",
        icon: "canyon",
      },
      {
        name: "Parapente en Ruitoque",
        description:
          "Vuela sobre los valles santandereanos con vistas de ensueño.",
        icon: "paraglide",
      },
      {
        name: "Pueblo de Girón",
        description:
          "Pasea por las calles coloniales de este encantador pueblo patrimonio.",
        icon: "village",
      },
      {
        name: "Mesa de los Santos",
        description:
          "Deportes extremos: rappel, torrentismo, escalada en roca.",
        icon: "climb",
      },
      {
        name: "Mercado Central",
        description:
          "Prueba las famosas hormigas culonas y los dulces típicos santandereanos.",
        icon: "food",
      },
    ],
    tips: [
      {
        title: "Aventura",
        description:
          "Reserva tours de deportes extremos con operadores certificados.",
      },
      {
        title: "Clima",
        description:
          "Temperatura agradable de 23°C promedio. Perfecto para actividades al aire libre.",
      },
      {
        title: "Transporte",
        description:
          "Renta un auto para explorar los alrededores o usa tours organizados.",
      },
    ],
    bestTime: "Diciembre - Marzo",
    avgBudget: "$30-60 USD/día",
    language: "Español",
    currency: "Peso Colombiano (COP)",
    featured: false,
  },
  {
    slug: "bali",
    name: "Bali",
    country: "Indonesia",
    continent: "Asia",
    tagline: "La Isla de los Dioses",
    description:
      "Templos ancestrales, arrozales infinitos, playas volcánicas y una espiritualidad que transforma.",
    longDescription:
      "Bali es mucho más que una isla tropical. Es un universo de experiencias donde lo antiguo se encuentra con lo moderno. Desde los templos sagrados de Uluwatu al borde del acantilado, hasta los icónicos arrozales en terrazas de Tegallalang, cada paisaje parece sacado de un sueño. Ubud te ofrece yoga, arte y meditación entre selvas tropicales, mientras que Seminyak y Canggu son paraísos para surfistas y amantes de la buena vida. Los balineses, con su profunda espiritualidad hindú, te acogen con una sonrisa que ilumina más que el sol tropical.",
    image:
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800&q=80",
      "https://images.unsplash.com/photo-1555400038-63f5ba517a47?w=800&q=80",
      "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?w=800&q=80",
    ],
    activities: [
      {
        name: "Templo Uluwatu",
        description:
          "Contempla el atardecer desde este templo al borde del acantilado con danza Kecak.",
        icon: "temple",
      },
      {
        name: "Arrozales de Tegallalang",
        description:
          "Camina entre las terrazas de arroz más fotografiadas del mundo.",
        icon: "rice",
      },
      {
        name: "Surf en Canggu",
        description:
          "Atrapa las mejores olas en las playas más cool de Bali.",
        icon: "surf",
      },
      {
        name: "Yoga en Ubud",
        description:
          "Conecta cuerpo y mente en retiros de yoga rodeados de selva.",
        icon: "yoga",
      },
    ],
    tips: [
      {
        title: "Respeto",
        description:
          "Viste modestamente al visitar templos. Lleva un sarong.",
      },
      {
        title: "Transporte",
        description:
          "Renta una moto para moverte libremente o contrata un conductor privado.",
      },
      {
        title: "Regateo",
        description: "Es normal negociar precios en mercados y tiendas locales.",
      },
    ],
    bestTime: "Abril - Octubre",
    avgBudget: "$30-80 USD/día",
    language: "Bahasa Indonesia",
    currency: "Rupia Indonesia (IDR)",
    featured: true,
  },
  {
    slug: "paris",
    name: "París",
    country: "Francia",
    continent: "Europe",
    tagline: "La Ciudad de la Luz",
    description:
      "Arte, romance, gastronomía y una elegancia atemporal que convierte cada paseo en una obra maestra.",
    longDescription:
      "París no necesita presentación. La Ciudad de la Luz ha cautivado a viajeros durante siglos con su combinación única de arte, historia, moda y gastronomía. Desde la majestuosidad de la Torre Eiffel hasta los pasillos infinitos del Louvre, desde los cafés de Montmartre hasta los jardines de Versalles, cada esquina de París es una postal. Pero más allá de los iconos, París sorprende con sus barrios bohemios como Le Marais, sus mercados callejeros, sus bistrós escondidos y esa atmósfera romántica que convierte cualquier momento en un recuerdo inolvidable.",
    image:
      "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800&q=80",
      "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=800&q=80",
      "https://images.unsplash.com/photo-1550340499-a6c60fc8287c?w=800&q=80",
    ],
    activities: [
      {
        name: "Torre Eiffel",
        description:
          "Sube hasta la cima del monumento más icónico del mundo.",
        icon: "tower",
      },
      {
        name: "Museo del Louvre",
        description:
          "Admira la Mona Lisa y miles de obras maestras del arte universal.",
        icon: "art",
      },
      {
        name: "Montmartre",
        description:
          "Explora el barrio de los artistas con la basílica del Sacré-Cœur.",
        icon: "church",
      },
      {
        name: "Crucero por el Sena",
        description:
          "Navega bajo los puentes históricos con vistas iluminadas de noche.",
        icon: "boat",
      },
    ],
    tips: [
      {
        title: "Metro",
        description:
          "El metro es la forma más eficiente de moverse. Compra un pase semanal.",
      },
      {
        title: "Reservas",
        description:
          "Reserva entradas con anticipación para el Louvre y la Torre Eiffel.",
      },
      {
        title: "Gastronomía",
        description:
          "Prueba croissants frescos, quesos artesanales y vino francés.",
      },
    ],
    bestTime: "Abril - Junio, Septiembre - Octubre",
    avgBudget: "$100-200 USD/día",
    language: "Francés",
    currency: "Euro (EUR)",
    featured: true,
  },
  {
    slug: "tokyo",
    name: "Tokio",
    country: "Japón",
    continent: "Asia",
    tagline: "Donde el Futuro se Encuentra con la Tradición",
    description:
      "Tecnología de punta, templos milenarios, la mejor gastronomía del mundo y una cultura fascinante.",
    longDescription:
      "Tokio es una ciudad que desafía la imaginación. En un mismo día puedes rezar en un templo de 1,400 años, cruzar el cruce peatonal más concurrido del mundo en Shibuya, comer el mejor sushi de tu vida en un puesto diminuto de Tsukiji, y perderte en la locura neón de Akihabara. Esta megalópolis combina una eficiencia asombrosa con una cultura pop vibrante, jardines zen con rascacielos futuristas, y una tradición culinaria que tiene más estrellas Michelin que cualquier otra ciudad del planeta.",
    image:
      "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800&q=80",
      "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=800&q=80",
      "https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=800&q=80",
    ],
    activities: [
      {
        name: "Cruce de Shibuya",
        description:
          "Cruza la intersección más famosa del mundo entre miles de personas.",
        icon: "crossing",
      },
      {
        name: "Templo Senso-ji",
        description:
          "Visita el templo budista más antiguo de Tokio en Asakusa.",
        icon: "temple",
      },
      {
        name: "Akihabara",
        description:
          "Sumérgete en la cultura otaku, manga y electrónica japonesa.",
        icon: "game",
      },
      {
        name: "Sushi en Tsukiji",
        description:
          "Prueba el sushi más fresco del mundo en el mercado de pescado.",
        icon: "food",
      },
    ],
    tips: [
      {
        title: "JR Pass",
        description:
          "Compra el Japan Rail Pass para viajes ilimitados en tren bala.",
      },
      {
        title: "Efectivo",
        description: "Muchos lugares solo aceptan efectivo. Lleva yenes.",
      },
      {
        title: "Etiqueta",
        description:
          "No hables por teléfono en el metro y quítate los zapatos en casas y templos.",
      },
    ],
    bestTime: "Marzo - Mayo (Sakura), Octubre - Noviembre",
    avgBudget: "$80-150 USD/día",
    language: "Japonés",
    currency: "Yen Japonés (JPY)",
    featured: true,
  },
  {
    slug: "santorini",
    name: "Santorini",
    country: "Grecia",
    continent: "Europe",
    tagline: "El Paraíso Blanco y Azul del Egeo",
    description:
      "Atardeceres legendarios, pueblos blancos sobre acantilados volcánicos y aguas azules infinitas.",
    longDescription:
      "Santorini es la isla que parece haber sido diseñada para Instagram, pero la realidad supera cualquier foto. Sus pueblos de casas blancas con cúpulas azules se aferran a acantilados volcánicos sobre un mar infinitamente azul. Los atardeceres en Oia son legendarios, las playas de arena negra y roja son únicas en el mundo, y los viñedos producen algunos de los vinos más exclusivos de Grecia. Cada cena frente al mar, cada paseo por callejuelas empinadas, cada amanecer desde tu terraza se convierte en un momento que atesoras para siempre.",
    image:
      "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=800&q=80",
      "https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?w=800&q=80",
      "https://images.unsplash.com/photo-1560703650-ef3e0f254ae0?w=800&q=80",
    ],
    activities: [
      {
        name: "Atardecer en Oia",
        description:
          "Contempla el atardecer más famoso del mundo desde los acantilados.",
        icon: "sunset",
      },
      {
        name: "Playa Roja",
        description:
          "Visita esta playa única con acantilados de lava roja impresionantes.",
        icon: "beach",
      },
      {
        name: "Tour de Vinos",
        description:
          "Degusta los vinos volcánicos únicos de Santorini en bodegas locales.",
        icon: "wine",
      },
      {
        name: "Caldera en Barco",
        description:
          "Navega por la caldera volcánica y báñate en aguas termales naturales.",
        icon: "boat",
      },
    ],
    tips: [
      {
        title: "Temporada",
        description:
          "Evita julio-agosto si no te gustan las multitudes. Septiembre es ideal.",
      },
      {
        title: "Alojamiento",
        description:
          "Reserva con meses de anticipación, especialmente en Oia y Fira.",
      },
      {
        title: "Transporte",
        description: "Renta un ATV o quad para recorrer la isla libremente.",
      },
    ],
    bestTime: "Mayo - Junio, Septiembre - Octubre",
    avgBudget: "$120-250 USD/día",
    language: "Griego",
    currency: "Euro (EUR)",
    featured: false,
  },
  {
    slug: "cusco",
    name: "Cusco & Machu Picchu",
    country: "Perú",
    continent: "South America",
    tagline: "El Ombligo del Mundo Inca",
    description:
      "Ruinas ancestrales, montañas sagradas y una herencia inca que sigue viva en cada piedra.",
    longDescription:
      "Cusco fue la capital del Imperio Inca y hoy es la puerta de entrada a una de las Siete Maravillas del Mundo Moderno: Machu Picchu. La ciudad mezcla arquitectura inca con colonial española de una manera única. Sus calles empedradas, sus mercados coloridos, el Valle Sagrado con sus terrazas agrícolas y la Montaña de Siete Colores crean una experiencia que combina historia, aventura y misticismo. Aquí el pasado no es solo historia, es un modo de vida que se respira en cada ceremonia, en cada textil tejido a mano, en cada plato de la extraordinaria gastronomía peruana.",
    image:
      "https://images.unsplash.com/photo-1587595431973-160d0d163e19?w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1587595431973-160d0d163e19?w=800&q=80",
      "https://images.unsplash.com/photo-1526392060635-9d6019884377?w=800&q=80",
      "https://images.unsplash.com/photo-1580619305218-8423a7ef79b4?w=800&q=80",
    ],
    activities: [
      {
        name: "Machu Picchu",
        description:
          "Visita la ciudadela inca perdida entre las nubes, una de las 7 maravillas.",
        icon: "ruins",
      },
      {
        name: "Valle Sagrado",
        description:
          "Explora Ollantaytambo, Pisac y las salineras de Maras.",
        icon: "valley",
      },
      {
        name: "Montaña de 7 Colores",
        description:
          "Sube a la famosa Vinicunca con sus capas de colores naturales.",
        icon: "rainbow",
      },
      {
        name: "Plaza de Armas de Cusco",
        description:
          "Admira la catedral y los muros incas perfectamente tallados.",
        icon: "plaza",
      },
    ],
    tips: [
      {
        title: "Altura",
        description:
          "Cusco está a 3,400m. Tómate un día para aclimatarte y bebe mate de coca.",
      },
      {
        title: "Reservas",
        description:
          "Reserva entradas a Machu Picchu con semanas de anticipación.",
      },
      {
        title: "Tren",
        description:
          "El tren a Machu Picchu es una experiencia en sí mismo con vistas increíbles.",
      },
    ],
    bestTime: "Mayo - Septiembre",
    avgBudget: "$50-100 USD/día",
    language: "Español / Quechua",
    currency: "Sol Peruano (PEN)",
    featured: true,
  },
];

export function getDestinationBySlug(slug: string): Destination | undefined {
  return destinations.find((d) => d.slug === slug);
}

export function getFeaturedDestinations(): Destination[] {
  return destinations.filter((d) => d.featured);
}

export function getDestinationsByContinent(
  continent: string
): Destination[] {
  return destinations.filter((d) => d.continent === continent);
}
