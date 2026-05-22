export interface Activity {
  name: string;
  description: string;
  icon: string;
}

export interface TravelTip {
  title: string;
  description: string;
}

export interface BookingLink {
  name: string;
  url: string;
  type: "hotel" | "activity" | "flight";
}

export interface Accommodation {
  name: string;
  type: "hotel" | "hostal" | "airbnb" | "resort";
  pricePerNight: number;
  currency: "COP" | "USD";
  rating: number;
  url: string;
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
  avgBudgetCOP: string;
  language: string;
  currency: string;
  featured: boolean;
  bookingLinks: BookingLink[];
  flightSearchUrl: string;
  accommodations: Accommodation[];
  flightPriceFrom: string;
  flightPriceCOP: string;
}

export const destinations: Destination[] = [
  {
    slug: "bogota",
    name: "Bogota",
    country: "Colombia",
    continent: "America del Sur",
    tagline: "La Atenas Sudamericana",
    description:
      "Capital vibrante con museos de clase mundial, gastronomia gourmet y una vida cultural inigualable.",
    longDescription:
      "Bogota, la capital de Colombia, es una metropolis de mas de 8 millones de habitantes que combina historia colonial con modernidad. La Candelaria, su centro historico, alberga el Museo del Oro con la coleccion de orfebreria prehispanica mas grande del mundo, y el Museo Botero con obras del maestro colombiano. Monserrate, a 3,152 metros, ofrece vistas panoramicas espectaculares. La zona G y Usaquen son epicentros gastronomicos donde la cocina colombiana se reinventa. De noche, la Zona Rosa y Chapinero vibran con bares, restaurantes y una escena cultural que no para.",
    image: "https://images.unsplash.com/photo-1568307970720-a1948948e444?w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1599493758267-c6c884c4a860?w=800&q=80",
      "https://images.unsplash.com/photo-1577587230708-187fdbef4d91?w=800&q=80",
      "https://images.unsplash.com/photo-1536086845232-6a5d65e6e5b3?w=800&q=80",
    ],
    activities: [
      { name: "Museo del Oro", description: "La coleccion de orfebreria prehispanica mas grande del mundo con mas de 55,000 piezas.", icon: "museum" },
      { name: "Monserrate", description: "Sube al cerro tutelar de Bogota en teleferico o funicular con vistas de toda la ciudad.", icon: "mountain" },
      { name: "La Candelaria", description: "Recorre el centro historico con calles empedradas, iglesias coloniales y arte callejero.", icon: "castle" },
      { name: "Museo Botero", description: "Admira las obras del maestro Fernando Botero y artistas internacionales, entrada gratuita.", icon: "art" },
      { name: "Usaquen", description: "Mercado de pulgas dominical, restaurantes gourmet y ambiente bohemio en el norte.", icon: "market" },
    ],
    tips: [
      { title: "Altura", description: "Bogota esta a 2,640m. Toma un dia para aclimatarte y vistete en capas." },
      { title: "Transporte", description: "Usa TransMilenio o apps como InDriver. El trafico puede ser intenso en horas pico." },
      { title: "Clima", description: "Temperatura promedio 14C. Lleva siempre una chaqueta y paraguas." },
    ],
    bestTime: "Diciembre - Marzo, Julio - Agosto",
    avgBudget: "$40-90 USD/dia",
    avgBudgetCOP: "$165.000-370.000 COP/dia",
    language: "Espanol",
    currency: "Peso Colombiano (COP)",
    featured: true,
    bookingLinks: [
      { name: "Booking.com", url: "https://www.booking.com/city/co/bogota.html", type: "hotel" },
      { name: "Airbnb", url: "https://www.airbnb.com/s/Bogota--Colombia/homes", type: "hotel" },
      { name: "GetYourGuide", url: "https://www.getyourguide.com/bogota-l702/", type: "activity" },
    ],
    flightSearchUrl: "https://www.skyscanner.com/transport/flights/nyca/boga/",
    accommodations: [
      { name: "Hotel de la Opera", type: "hotel", pricePerNight: 520000, currency: "COP", rating: 4.7, url: "https://www.booking.com/hotel/co/de-la-opera.html" },
      { name: "Masaya Bogota", type: "hostal", pricePerNight: 75000, currency: "COP", rating: 4.5, url: "https://www.booking.com/hotel/co/masaya-bogota.html" },
      { name: "Apartamento Chapinero", type: "airbnb", pricePerNight: 180000, currency: "COP", rating: 4.6, url: "https://www.airbnb.com/s/Bogota--Colombia/homes" },
    ],
    flightPriceFrom: "Desde $130 USD",
    flightPriceCOP: "Desde $538.000 COP",
  },
  {
    slug: "cartagena",
    name: "Cartagena de Indias",
    country: "Colombia",
    continent: "America del Sur",
    tagline: "La Joya del Caribe Colombiano",
    description:
      "Murallas centenarias, playas cristalinas, historia viva y el mejor atardecer del Caribe te esperan.",
    longDescription:
      "Cartagena de Indias es una ciudad que atrapa todos los sentidos. Declarada Patrimonio de la Humanidad por la UNESCO, su centro historico amurallado es un laberinto de calles empedradas, balcones florecidos, iglesias coloniales y plazas donde el tiempo parece detenerse. Pero Cartagena es mucho mas que historia: sus playas en las Islas del Rosario son un paraiso de aguas turquesas, su gastronomia fusiona sabores africanos, espanoles e indigenas, y su vida nocturna en Getsemani es una explosion de musica, arte callejero y cultura viva.",
    image: "https://images.unsplash.com/photo-1583531172005-814194fd1f83?w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1580975556833-3c7d8de41706?w=800&q=80",
      "https://images.unsplash.com/photo-1569839333583-7375336cde4b?w=800&q=80",
      "https://images.unsplash.com/photo-1536086845232-6a5d65e6e5b3?w=800&q=80",
    ],
    activities: [
      { name: "Ciudad Amurallada", description: "Recorre las calles coloniales del centro historico declarado Patrimonio de la Humanidad.", icon: "castle" },
      { name: "Islas del Rosario", description: "Navega hasta este archipielago de aguas cristalinas y arrecifes de coral.", icon: "island" },
      { name: "Cafe del Mar", description: "Disfruta el atardecer mas espectacular sobre las murallas con musica chill.", icon: "sunset" },
      { name: "Castillo de San Felipe", description: "Explora la fortaleza militar mas grande de America construida por los espanoles.", icon: "fortress" },
      { name: "Getsemani", description: "Vive el barrio mas cool de Cartagena con arte callejero, bares y rumba.", icon: "art" },
    ],
    tips: [
      { title: "Clima", description: "Temperatura de 28-32C todo el ano. Usa protector solar y mantente hidratado." },
      { title: "Transporte", description: "Camina por el centro historico. Para las playas, usa lanchas desde el Muelle de la Bodeguita." },
      { title: "Seguridad", description: "Es segura para turistas. Evita zonas alejadas de noche y negocia precios antes." },
    ],
    bestTime: "Diciembre - Abril",
    avgBudget: "$50-100 USD/dia",
    avgBudgetCOP: "$200.000-400.000 COP/dia",
    language: "Espanol",
    currency: "Peso Colombiano (COP)",
    featured: true,
    bookingLinks: [
      { name: "Booking.com", url: "https://www.booking.com/city/co/cartagena.html", type: "hotel" },
      { name: "Airbnb", url: "https://www.airbnb.com/s/Cartagena--Colombia/homes", type: "hotel" },
      { name: "GetYourGuide", url: "https://www.getyourguide.com/cartagena-l391/", type: "activity" },
    ],
    flightSearchUrl: "https://www.skyscanner.com/transport/flights/nyca/ctga/",
    accommodations: [
      { name: "Hotel Charleston Santa Teresa", type: "hotel", pricePerNight: 850000, currency: "COP", rating: 4.8, url: "https://www.booking.com/hotel/co/charleston-santa-teresa.html" },
      { name: "Selina Cartagena", type: "hostal", pricePerNight: 120000, currency: "COP", rating: 4.3, url: "https://www.booking.com/hotel/co/selina-cartagena.html" },
      { name: "Casa en el Centro Historico", type: "airbnb", pricePerNight: 280000, currency: "COP", rating: 4.7, url: "https://www.airbnb.com/s/Cartagena--Colombia/homes" },
    ],
    flightPriceFrom: "Desde $150 USD",
    flightPriceCOP: "Desde $620.000 COP",
  },
  {
    slug: "medellin",
    name: "Medellin",
    country: "Colombia",
    continent: "America del Sur",
    tagline: "La Ciudad de la Eterna Primavera",
    description:
      "Innovacion, naturaleza exuberante, arte urbano y la calidez de su gente hacen de Medellin un destino unico.",
    longDescription:
      "Medellin ha pasado de ser una ciudad con un pasado dificil a convertirse en un modelo global de transformacion urbana. Ubicada en el Valle de Aburra a 1,500 metros de altitud, goza de un clima primaveral perfecto durante todo el ano. Sus sistemas de transporte innovadores como el Metrocable te llevan a miradores con vistas impresionantes, mientras que la Comuna 13 es hoy un museo de arte urbano a cielo abierto. Guatape ofrece la famosa Piedra del Penol con 740 escalones y vistas de ensueno.",
    image: "https://images.unsplash.com/photo-1568736333610-eae6e0d4dbbb?w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1599413987323-60e0a3b62823?w=800&q=80",
      "https://images.unsplash.com/photo-1595981267686-e5e3bc058ded?w=800&q=80",
      "https://images.unsplash.com/photo-1572722250878-b4c9a7ea6187?w=800&q=80",
    ],
    activities: [
      { name: "Comuna 13", description: "Descubre la transformacion urbana mas inspiradora del mundo con grafitis espectaculares.", icon: "graffiti" },
      { name: "Plaza Botero", description: "Contempla las iconicas esculturas del maestro Fernando Botero en pleno centro.", icon: "sculpture" },
      { name: "Guatape", description: "Excursion al colorido pueblo y sube los 740 escalones de la Piedra del Penol.", icon: "mountain" },
      { name: "Parque Arvi", description: "Naturaleza pura con senderos ecologicos, mercados campesinos y aire fresco.", icon: "tree" },
    ],
    tips: [
      { title: "Clima", description: "Temperatura promedio de 22C todo el ano. Lleva una chaqueta ligera para las noches." },
      { title: "Moneda", description: "Usa apps de cambio para obtener las mejores tasas. Muchos lugares aceptan tarjeta." },
      { title: "Vida nocturna", description: "El Poblado y Laureles son las zonas mas populares para salir de noche." },
    ],
    bestTime: "Todo el ano",
    avgBudget: "$40-80 USD/dia",
    avgBudgetCOP: "$165.000-330.000 COP/dia",
    language: "Espanol",
    currency: "Peso Colombiano (COP)",
    featured: true,
    bookingLinks: [
      { name: "Booking.com", url: "https://www.booking.com/city/co/medellin.html", type: "hotel" },
      { name: "Airbnb", url: "https://www.airbnb.com/s/Medellin--Colombia/homes", type: "hotel" },
      { name: "GetYourGuide", url: "https://www.getyourguide.com/medellin-l4034/", type: "activity" },
    ],
    flightSearchUrl: "https://www.skyscanner.com/transport/flights/nyca/mdea/",
    accommodations: [
      { name: "Hotel Dann Carlton Medellin", type: "hotel", pricePerNight: 450000, currency: "COP", rating: 4.5, url: "https://www.booking.com/hotel/co/dann-carlton-medellin.html" },
      { name: "Los Patios Hostel", type: "hostal", pricePerNight: 80000, currency: "COP", rating: 4.6, url: "https://www.booking.com/hotel/co/los-patios-hostel.html" },
      { name: "Apartamento El Poblado", type: "airbnb", pricePerNight: 200000, currency: "COP", rating: 4.8, url: "https://www.airbnb.com/s/Medellin--Colombia/homes" },
    ],
    flightPriceFrom: "Desde $120 USD",
    flightPriceCOP: "Desde $496.000 COP",
  },
  {
    slug: "cali",
    name: "Cali",
    country: "Colombia",
    continent: "America del Sur",
    tagline: "La Capital Mundial de la Salsa",
    description:
      "Ritmo, sabor y alegria en cada esquina. Cali es la ciudad donde la musica y el baile son un estilo de vida.",
    longDescription:
      "Santiago de Cali, la tercera ciudad mas grande de Colombia, es reconocida mundialmente como la Capital de la Salsa. Aqui la musica no es solo entretenimiento, es un modo de vida. Desde las escuelas de salsa hasta las salsotecas de Juanchito, cada noche es una fiesta. El barrio San Antonio con sus calles bohemias, el cerro de Cristo Rey con vistas panoramicas, y la gastronomia vallecaucana con su famoso cholado hacen de Cali un destino vibrante.",
    image: "https://images.unsplash.com/photo-1616091216791-a5360ab66dc0?w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1616091093714-ccc305e8c4e7?w=800&q=80",
      "https://images.unsplash.com/photo-1533106497176-45ae19e68ba2?w=800&q=80",
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&q=80",
    ],
    activities: [
      { name: "Clases de Salsa", description: "Aprende a bailar salsa con los mejores instructores del mundo.", icon: "dance" },
      { name: "Salsotecas de Juanchito", description: "Vive la autentica rumba calena en los legendarios clubes de salsa.", icon: "music" },
      { name: "Barrio San Antonio", description: "Explora las calles bohemias, cafes artesanales y galerias de arte.", icon: "cafe" },
      { name: "Cristo Rey", description: "Sube al cerro para contemplar la ciudad desde las alturas.", icon: "mountain" },
    ],
    tips: [
      { title: "Clima", description: "Cali es caliente (25-30C). Usa ropa fresca y mantente hidratado." },
      { title: "Salsa", description: "No necesitas saber bailar para disfrutar. Los locales te ensenan con gusto." },
      { title: "Gastronomia", description: "No te vayas sin probar un cholado, empanadas vallecaucanas y lulada." },
    ],
    bestTime: "Diciembre - Enero (Feria de Cali)",
    avgBudget: "$35-70 USD/dia",
    avgBudgetCOP: "$145.000-290.000 COP/dia",
    language: "Espanol",
    currency: "Peso Colombiano (COP)",
    featured: true,
    bookingLinks: [
      { name: "Booking.com", url: "https://www.booking.com/city/co/cali.html", type: "hotel" },
      { name: "Airbnb", url: "https://www.airbnb.com/s/Cali--Colombia/homes", type: "hotel" },
      { name: "GetYourGuide", url: "https://www.getyourguide.com/cali-l106226/", type: "activity" },
    ],
    flightSearchUrl: "https://www.skyscanner.com/transport/flights/nyca/clia/",
    accommodations: [
      { name: "Hotel Intercontinental Cali", type: "hotel", pricePerNight: 380000, currency: "COP", rating: 4.4, url: "https://www.booking.com/hotel/co/intercontinental-cali.html" },
      { name: "Viajero Cali Hostel", type: "hostal", pricePerNight: 65000, currency: "COP", rating: 4.3, url: "https://www.booking.com/hotel/co/viajero-cali.html" },
      { name: "Casa en San Antonio", type: "airbnb", pricePerNight: 160000, currency: "COP", rating: 4.6, url: "https://www.airbnb.com/s/Cali--Colombia/homes" },
    ],
    flightPriceFrom: "Desde $130 USD",
    flightPriceCOP: "Desde $538.000 COP",
  },
  {
    slug: "santa-marta",
    name: "Santa Marta",
    country: "Colombia",
    continent: "America del Sur",
    tagline: "Donde la Sierra Nevada Besa el Mar",
    description:
      "La ciudad mas antigua de Colombia con playas virgenes, la Sierra Nevada y el mistico Parque Tayrona.",
    longDescription:
      "Santa Marta es la ciudad mas antigua de Colombia, fundada en 1525. Aqui la Sierra Nevada, la montana costera mas alta del mundo, desciende directamente al Mar Caribe creando paisajes de ensueno. El Parque Nacional Tayrona es su joya natural: playas virgenes rodeadas de selva tropical, piedras gigantes y aguas cristalinas. La Ciudad Perdida, una de las trekking mas epicas de Sudamerica, te lleva por la selva hasta ruinas precolombinas. Taganga y Minca complementan con buceo y cafe de montana.",
    image: "https://images.unsplash.com/photo-1536086845232-6a5d65e6e5b3?w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800&q=80",
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80",
      "https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?w=800&q=80",
    ],
    activities: [
      { name: "Parque Tayrona", description: "Playas virgenes entre selva tropical y piedras gigantes en el Caribe.", icon: "beach" },
      { name: "Ciudad Perdida", description: "Trekking de 4 dias por la selva hasta ruinas precolombinas a 1,200m.", icon: "ruins" },
      { name: "Minca", description: "Pueblo de montana con cascadas, avistamiento de aves y fincas cafeteras.", icon: "coffee" },
      { name: "Taganga", description: "Pueblo de pescadores con buceo espectacular y ambiente relajado.", icon: "diving" },
    ],
    tips: [
      { title: "Tayrona", description: "Reserva entrada con anticipacion. No hay electricidad ni senial en el parque." },
      { title: "Ciudad Perdida", description: "Solo se accede con tour guiado de 4-6 dias. Necesitas buena condicion fisica." },
      { title: "Clima", description: "Caliente y humedo (28-33C). Lleva repelente, protector solar y mucha agua." },
    ],
    bestTime: "Diciembre - Abril, Julio - Agosto",
    avgBudget: "$35-80 USD/dia",
    avgBudgetCOP: "$145.000-330.000 COP/dia",
    language: "Espanol",
    currency: "Peso Colombiano (COP)",
    featured: true,
    bookingLinks: [
      { name: "Booking.com", url: "https://www.booking.com/city/co/santa-marta.html", type: "hotel" },
      { name: "Airbnb", url: "https://www.airbnb.com/s/Santa-Marta--Colombia/homes", type: "hotel" },
      { name: "GetYourGuide", url: "https://www.getyourguide.com/santa-marta-l4040/", type: "activity" },
    ],
    flightSearchUrl: "https://www.skyscanner.com/transport/flights/nyca/smra/",
    accommodations: [
      { name: "Hotel Boutique Don Pepe", type: "hotel", pricePerNight: 350000, currency: "COP", rating: 4.6, url: "https://www.booking.com/hotel/co/boutique-don-pepe.html" },
      { name: "Dreamer Hostel", type: "hostal", pricePerNight: 60000, currency: "COP", rating: 4.7, url: "https://www.booking.com/hotel/co/dreamer-hostel.html" },
      { name: "Cabana en Minca", type: "airbnb", pricePerNight: 150000, currency: "COP", rating: 4.8, url: "https://www.airbnb.com/s/Minca--Colombia/homes" },
    ],
    flightPriceFrom: "Desde $100 USD",
    flightPriceCOP: "Desde $414.000 COP",
  },
  {
    slug: "san-andres",
    name: "San Andres y Providencia",
    country: "Colombia",
    continent: "America del Sur",
    tagline: "El Mar de los Siete Colores",
    description:
      "Islas paradisiacas con el mar mas cristalino del Caribe, cultura raizal y arrecifes de coral unicos.",
    longDescription:
      "San Andres y Providencia son dos islas colombianas en pleno Mar Caribe, mas cerca de Nicaragua que de Colombia continental. San Andres es famosa por su 'Mar de los Siete Colores', aguas tan cristalinas que puedes ver el fondo a metros de profundidad. Providencia, declarada Reserva de Biosfera por la UNESCO, es aun mas virgen y espectacular. La cultura raizal, mezcla de influencias africanas, britanicas y caribenas, le da una identidad unica con musica, gastronomia y un ingles criollo propio.",
    image: "https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80",
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&q=80",
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800&q=80",
    ],
    activities: [
      { name: "Johnny Cay", description: "Islote paradisiaco con arena blanca, palmeras y aguas color turquesa.", icon: "island" },
      { name: "El Acuario", description: "Snorkel en aguas cristalinas entre peces tropicales y estrellas de mar.", icon: "diving" },
      { name: "Providencia", description: "Isla virgen con Crab Cay, snorkel en la barrera de coral y McBean Lagoon.", icon: "beach" },
      { name: "La Piscinita", description: "Piscina natural entre rocas con peces de colores que puedes alimentar.", icon: "fish" },
    ],
    tips: [
      { title: "Tarjeta de turismo", description: "Necesitas comprar la tarjeta de turismo al llegar al aeropuerto ($150.000 COP aprox)." },
      { title: "Providencia", description: "Vuela o toma lancha rapida desde San Andres. Reserva con anticipacion." },
      { title: "Compras", description: "San Andres es zona franca. Aprovecha para comprar perfumes y electronica." },
    ],
    bestTime: "Enero - Abril",
    avgBudget: "$60-120 USD/dia",
    avgBudgetCOP: "$248.000-497.000 COP/dia",
    language: "Espanol / Ingles Criollo",
    currency: "Peso Colombiano (COP)",
    featured: true,
    bookingLinks: [
      { name: "Booking.com", url: "https://www.booking.com/city/co/san-andres.html", type: "hotel" },
      { name: "Airbnb", url: "https://www.airbnb.com/s/San-Andres--Colombia/homes", type: "hotel" },
      { name: "GetYourGuide", url: "https://www.getyourguide.com/san-andres-l4043/", type: "activity" },
    ],
    flightSearchUrl: "https://www.skyscanner.com/transport/flights/boga/adza/",
    accommodations: [
      { name: "Hotel Decameron San Luis", type: "resort", pricePerNight: 650000, currency: "COP", rating: 4.4, url: "https://www.booking.com/hotel/co/decameron-san-luis.html" },
      { name: "El Viajero San Andres", type: "hostal", pricePerNight: 90000, currency: "COP", rating: 4.3, url: "https://www.booking.com/hotel/co/el-viajero-san-andres.html" },
      { name: "Cabana frente al mar", type: "airbnb", pricePerNight: 250000, currency: "COP", rating: 4.7, url: "https://www.airbnb.com/s/San-Andres--Colombia/homes" },
    ],
    flightPriceFrom: "Desde $180 USD",
    flightPriceCOP: "Desde $745.000 COP",
  },
  {
    slug: "bucaramanga",
    name: "Bucaramanga",
    country: "Colombia",
    continent: "America del Sur",
    tagline: "La Ciudad Bonita de Colombia",
    description:
      "Parques, canones espectaculares y deportes extremos rodeados de una naturaleza impresionante.",
    longDescription:
      "Bucaramanga, conocida como 'La Ciudad Bonita', es una joya escondida en el corazon de Santander. Rodeada de montanas y con mas de 160 parques, esta ciudad combina naturaleza con modernidad. A pocos kilometros encontraras el impresionante Canon del Chicamocha, uno de los mas profundos del mundo, donde puedes hacer parapente, canopy y teleferico. El pueblo colonial de Giron, la Mesa de los Santos con sus actividades de aventura, y una gastronomia unica hacen de Bucaramanga un destino inolvidable.",
    image: "https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&q=80",
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800&q=80",
      "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=800&q=80",
    ],
    activities: [
      { name: "Canon del Chicamocha", description: "Vive la adrenalina del teleferico mas largo de Sudamerica sobre un canon impresionante.", icon: "canyon" },
      { name: "Parapente en Ruitoque", description: "Vuela sobre los valles santandereanos con vistas de ensueno.", icon: "paraglide" },
      { name: "Pueblo de Giron", description: "Recorre este pueblo colonial de calles empedradas y puentes de piedra.", icon: "castle" },
      { name: "Mesa de los Santos", description: "Deportes extremos, senderismo y vistas del Canon del Chicamocha.", icon: "adventure" },
    ],
    tips: [
      { title: "Clima", description: "Temperatura agradable de 23-27C. Perfecto para actividades al aire libre." },
      { title: "Gastronomia", description: "Prueba las hormigas culonas, mute santandereano, cabrito y arepa santandereana." },
      { title: "Aventura", description: "Reserva parapente y actividades extremas con operadores certificados." },
    ],
    bestTime: "Diciembre - Marzo, Julio - Agosto",
    avgBudget: "$30-60 USD/dia",
    avgBudgetCOP: "$124.000-248.000 COP/dia",
    language: "Espanol",
    currency: "Peso Colombiano (COP)",
    featured: false,
    bookingLinks: [
      { name: "Booking.com", url: "https://www.booking.com/city/co/bucaramanga.html", type: "hotel" },
      { name: "Airbnb", url: "https://www.airbnb.com/s/Bucaramanga--Colombia/homes", type: "hotel" },
      { name: "GetYourGuide", url: "https://www.getyourguide.com/bucaramanga-l106261/", type: "activity" },
    ],
    flightSearchUrl: "https://www.skyscanner.com/transport/flights/nyca/bga0/",
    accommodations: [
      { name: "Hotel Dann Carlton Bucaramanga", type: "hotel", pricePerNight: 320000, currency: "COP", rating: 4.3, url: "https://www.booking.com/hotel/co/dann-carlton-bucaramanga.html" },
      { name: "Kasa Guane Hostel", type: "hostal", pricePerNight: 55000, currency: "COP", rating: 4.5, url: "https://www.booking.com/hotel/co/kasa-guane.html" },
      { name: "Apartamento Cabecera", type: "airbnb", pricePerNight: 140000, currency: "COP", rating: 4.7, url: "https://www.airbnb.com/s/Bucaramanga--Colombia/homes" },
    ],
    flightPriceFrom: "Desde $110 USD",
    flightPriceCOP: "Desde $455.000 COP",
  },
  {
    slug: "barranquilla",
    name: "Barranquilla",
    country: "Colombia",
    continent: "America del Sur",
    tagline: "La Puerta de Oro de Colombia",
    description:
      "Carnaval, cumbia, alegria costera y una energia contagiosa que te hace bailar desde que llegas.",
    longDescription:
      "Barranquilla es la cuarta ciudad mas grande de Colombia y sede del segundo carnaval mas grande del mundo, declarado Patrimonio Inmaterial de la Humanidad por la UNESCO. La ciudad vibra con cumbia, vallenato y champeta. Su gastronomia costera es espectacular: butifarra, arepa de huevo, sancocho y jugos de frutas tropicales. El Malecon del Rio Magdalena ofrece paseos al atardecer, y los barrios como El Prado muestran arquitectura republicana impresionante.",
    image: "https://images.unsplash.com/photo-1533106497176-45ae19e68ba2?w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&q=80",
      "https://images.unsplash.com/photo-1551632811-561732d1e306?w=800&q=80",
      "https://images.unsplash.com/photo-1488085061387-422e29b40080?w=800&q=80",
    ],
    activities: [
      { name: "Carnaval de Barranquilla", description: "Vive el segundo carnaval mas grande del mundo con desfiles, musica y color.", icon: "carnival" },
      { name: "Malecon del Rio", description: "Paseo al atardecer junto al Rio Magdalena con restaurantes y cultura.", icon: "sunset" },
      { name: "Museo del Caribe", description: "Descubre la cultura y biodiversidad del Caribe colombiano.", icon: "museum" },
      { name: "Bocas de Ceniza", description: "Donde el Rio Magdalena se encuentra con el Mar Caribe, un espectaculo natural.", icon: "river" },
    ],
    tips: [
      { title: "Carnaval", description: "Si vienes por el Carnaval (febrero), reserva con meses de anticipacion." },
      { title: "Clima", description: "Muy caliente todo el ano (28-34C). Hidratate constantemente." },
      { title: "Rumba", description: "La vida nocturna es increible. Via 40 y el centro son los epicentros." },
    ],
    bestTime: "Febrero (Carnaval), Diciembre",
    avgBudget: "$30-65 USD/dia",
    avgBudgetCOP: "$124.000-269.000 COP/dia",
    language: "Espanol",
    currency: "Peso Colombiano (COP)",
    featured: false,
    bookingLinks: [
      { name: "Booking.com", url: "https://www.booking.com/city/co/barranquilla.html", type: "hotel" },
      { name: "Airbnb", url: "https://www.airbnb.com/s/Barranquilla--Colombia/homes", type: "hotel" },
      { name: "GetYourGuide", url: "https://www.getyourguide.com/barranquilla-l106248/", type: "activity" },
    ],
    flightSearchUrl: "https://www.skyscanner.com/transport/flights/nyca/baqa/",
    accommodations: [
      { name: "Hotel Sonesta Barranquilla", type: "hotel", pricePerNight: 380000, currency: "COP", rating: 4.4, url: "https://www.booking.com/hotel/co/sonesta-barranquilla.html" },
      { name: "Casa de Huespedes El Prado", type: "hostal", pricePerNight: 70000, currency: "COP", rating: 4.2, url: "https://www.booking.com/hotel/co/casa-huespedes-prado.html" },
      { name: "Apartamento Norte", type: "airbnb", pricePerNight: 150000, currency: "COP", rating: 4.5, url: "https://www.airbnb.com/s/Barranquilla--Colombia/homes" },
    ],
    flightPriceFrom: "Desde $120 USD",
    flightPriceCOP: "Desde $497.000 COP",
  },
  {
    slug: "eje-cafetero",
    name: "Eje Cafetero",
    country: "Colombia",
    continent: "America del Sur",
    tagline: "Paisaje Cultural Cafetero del Mundo",
    description:
      "Montanas verdes, fincas cafeteras, el Valle de Cocora con sus palmas de cera y pueblos de colores.",
    longDescription:
      "El Eje Cafetero colombiano, declarado Paisaje Cultural Cafetero de la Humanidad por la UNESCO, comprende los departamentos de Caldas, Quindio y Risaralda. Aqui nace uno de los mejores cafes del mundo entre montanas verdes y paisajes de postal. El Valle de Cocora alberga la palma de cera del Quindio, el arbol nacional, que alcanza hasta 60 metros de altura. Salento es un pueblo de colores con arquitectura tipica paisa, y las fincas cafeteras ofrecen experiencias inmersivas donde aprendes todo el proceso del cafe.",
    image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&q=80",
      "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=800&q=80",
      "https://images.unsplash.com/photo-1551632811-561732d1e306?w=800&q=80",
    ],
    activities: [
      { name: "Valle de Cocora", description: "Senderismo entre las palmas de cera mas altas del mundo en un paisaje de ensueno.", icon: "tree" },
      { name: "Salento", description: "Pueblo colorido con artesanias, trucha fresca y vistas del Quindio.", icon: "village" },
      { name: "Tour de Cafe", description: "Visita fincas cafeteras y aprende todo el proceso del grano a la taza.", icon: "coffee" },
      { name: "Termales de Santa Rosa", description: "Aguas termales naturales rodeadas de selva y cascadas.", icon: "hotspring" },
    ],
    tips: [
      { title: "Clima", description: "Templado (18-24C) con lluvias frecuentes. Lleva impermeable y botas." },
      { title: "Cafe", description: "Compra cafe directamente en las fincas. Es mas fresco y economico." },
      { title: "Transporte", description: "Renta un carro o usa Willys (jeeps) tradicionales para moverte entre pueblos." },
    ],
    bestTime: "Junio - Agosto, Diciembre - Febrero",
    avgBudget: "$30-65 USD/dia",
    avgBudgetCOP: "$124.000-269.000 COP/dia",
    language: "Espanol",
    currency: "Peso Colombiano (COP)",
    featured: true,
    bookingLinks: [
      { name: "Booking.com", url: "https://www.booking.com/region/co/eje-cafetero.html", type: "hotel" },
      { name: "Airbnb", url: "https://www.airbnb.com/s/Salento--Colombia/homes", type: "hotel" },
      { name: "GetYourGuide", url: "https://www.getyourguide.com/armenia-l106214/", type: "activity" },
    ],
    flightSearchUrl: "https://www.skyscanner.com/transport/flights/boga/peia/",
    accommodations: [
      { name: "Hotel Sazagua", type: "hotel", pricePerNight: 480000, currency: "COP", rating: 4.8, url: "https://www.booking.com/hotel/co/sazagua.html" },
      { name: "Hostel Trail", type: "hostal", pricePerNight: 50000, currency: "COP", rating: 4.6, url: "https://www.booking.com/hotel/co/hostel-trail-salento.html" },
      { name: "Finca Cafetera", type: "airbnb", pricePerNight: 180000, currency: "COP", rating: 4.9, url: "https://www.airbnb.com/s/Salento--Colombia/homes" },
    ],
    flightPriceFrom: "Desde $90 USD",
    flightPriceCOP: "Desde $373.000 COP",
  },
  {
    slug: "leticia",
    name: "Leticia y el Amazonas",
    country: "Colombia",
    continent: "America del Sur",
    tagline: "La Puerta al Pulmon del Mundo",
    description:
      "Selva amazonica, comunidades indigenas, delfines rosados y la biodiversidad mas rica del planeta.",
    longDescription:
      "Leticia es la capital del departamento del Amazonas, ubicada en la triple frontera entre Colombia, Brasil y Peru. Desde aqui accedes a la selva amazonica colombiana, una de las regiones con mayor biodiversidad del planeta. Puedes avistar delfines rosados, pescar piranas, visitar comunidades indigenas como los Tikuna, navegar por el rio Amazonas y dormir en lodges en medio de la selva. La Isla de los Micos y el Parque Amacayacu son imperdibles.",
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1551632811-561732d1e306?w=800&q=80",
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800&q=80",
      "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800&q=80",
    ],
    activities: [
      { name: "Delfines Rosados", description: "Nada con delfines rosados del Amazonas en su habitat natural.", icon: "dolphin" },
      { name: "Comunidades Indigenas", description: "Visita comunidades Tikuna y conoce su cultura ancestral.", icon: "village" },
      { name: "Isla de los Micos", description: "Interactua con monos en su habitat en una isla en el Amazonas.", icon: "monkey" },
      { name: "Caminata Nocturna", description: "Explora la selva de noche y descubre la fauna nocturna amazonica.", icon: "moon" },
    ],
    tips: [
      { title: "Acceso", description: "Solo se llega por avion desde Bogota (2h) o por rio. No hay carreteras." },
      { title: "Vacunas", description: "Vacuna de fiebre amarilla obligatoria. Lleva repelente fuerte." },
      { title: "Triple frontera", description: "Puedes cruzar a Tabatinga (Brasil) y Santa Rosa (Peru) sin visa." },
    ],
    bestTime: "Julio - Octubre (aguas bajas)",
    avgBudget: "$50-100 USD/dia",
    avgBudgetCOP: "$207.000-414.000 COP/dia",
    language: "Espanol / Lenguas Indigenas",
    currency: "Peso Colombiano (COP)",
    featured: false,
    bookingLinks: [
      { name: "Booking.com", url: "https://www.booking.com/city/co/leticia.html", type: "hotel" },
      { name: "Airbnb", url: "https://www.airbnb.com/s/Leticia--Colombia/homes", type: "hotel" },
      { name: "GetYourGuide", url: "https://www.getyourguide.com/leticia-l106289/", type: "activity" },
    ],
    flightSearchUrl: "https://www.skyscanner.com/transport/flights/boga/leta/",
    accommodations: [
      { name: "Decameron Decalodge Ticuna", type: "resort", pricePerNight: 450000, currency: "COP", rating: 4.2, url: "https://www.booking.com/hotel/co/decalodge-ticuna.html" },
      { name: "Amazon B&B", type: "hostal", pricePerNight: 80000, currency: "COP", rating: 4.4, url: "https://www.booking.com/hotel/co/amazon-bb-leticia.html" },
      { name: "Lodge en la Selva", type: "airbnb", pricePerNight: 200000, currency: "COP", rating: 4.6, url: "https://www.airbnb.com/s/Leticia--Colombia/homes" },
    ],
    flightPriceFrom: "Desde $160 USD",
    flightPriceCOP: "Desde $662.000 COP",
  },
  {
    slug: "villa-de-leyva",
    name: "Villa de Leyva",
    country: "Colombia",
    continent: "America del Sur",
    tagline: "Joya Colonial de Boyaca",
    description:
      "Uno de los pueblos coloniales mejor conservados de America con la plaza empedrada mas grande de Colombia.",
    longDescription:
      "Villa de Leyva es un pueblo colonial en el departamento de Boyaca que parece congelado en el tiempo. Su plaza principal, completamente empedrada y sin un solo arbol, es la mas grande de Colombia y una de las mayores de Sudamerica. Las calles de piedra, las casas blancas con balcones, los museos paleontologicos con fosiles reales, y los vinedos circundantes crean una experiencia unica. El Desierto de la Candelaria, las pozas azules y la Cascada La Periquera complementan este destino magico.",
    image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1536086845232-6a5d65e6e5b3?w=800&q=80",
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800&q=80",
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&q=80",
    ],
    activities: [
      { name: "Plaza Mayor", description: "La plaza empedrada mas grande de Colombia, rodeada de arquitectura colonial.", icon: "plaza" },
      { name: "Pozas Azules", description: "Piscinas naturales de agua azul turquesa en medio de un paisaje desertico.", icon: "water" },
      { name: "Museo El Fosil", description: "Fosil de Kronosaurus de 120 millones de anos encontrado en la region.", icon: "museum" },
      { name: "Vinedos Ain Karim", description: "Degustacion de vinos colombianos en vinedos a 2,200 metros de altura.", icon: "wine" },
    ],
    tips: [
      { title: "Transporte", description: "A 4 horas de Bogota por carretera. No hay aeropuerto, llega en bus o carro." },
      { title: "Clima", description: "Frio y seco (12-20C). Lleva ropa abrigada, especialmente de noche." },
      { title: "Fin de semana", description: "Evita puentes festivos si no te gustan las multitudes." },
    ],
    bestTime: "Diciembre - Marzo (seco)",
    avgBudget: "$25-55 USD/dia",
    avgBudgetCOP: "$103.000-228.000 COP/dia",
    language: "Espanol",
    currency: "Peso Colombiano (COP)",
    featured: false,
    bookingLinks: [
      { name: "Booking.com", url: "https://www.booking.com/city/co/villa-de-leyva.html", type: "hotel" },
      { name: "Airbnb", url: "https://www.airbnb.com/s/Villa-de-Leyva--Colombia/homes", type: "hotel" },
      { name: "GetYourGuide", url: "https://www.getyourguide.com/villa-de-leyva-l106328/", type: "activity" },
    ],
    flightSearchUrl: "https://www.skyscanner.com/transport/flights/nyca/boga/",
    accommodations: [
      { name: "Hotel Plazuela de San Agustin", type: "hotel", pricePerNight: 280000, currency: "COP", rating: 4.6, url: "https://www.booking.com/hotel/co/plazuela-san-agustin.html" },
      { name: "Renacer Hostel", type: "hostal", pricePerNight: 45000, currency: "COP", rating: 4.4, url: "https://www.booking.com/hotel/co/renacer-villa-de-leyva.html" },
      { name: "Casa Colonial", type: "airbnb", pricePerNight: 160000, currency: "COP", rating: 4.8, url: "https://www.airbnb.com/s/Villa-de-Leyva--Colombia/homes" },
    ],
    flightPriceFrom: "Desde $130 USD (a Bogota + bus)",
    flightPriceCOP: "Desde $538.000 COP (a Bogota + bus)",
  },
  // --- Destinos Internacionales ---
  {
    slug: "bali",
    name: "Bali",
    country: "Indonesia",
    continent: "Asia",
    tagline: "La Isla de los Dioses",
    description:
      "Templos misticos, arrozales infinitos, surf epico y una espiritualidad que transforma.",
    longDescription:
      "Bali es mucho mas que una isla tropical. Conocida como la Isla de los Dioses, cada rincon vibra con una espiritualidad unica. Ubud es el corazon cultural con sus arrozales y retiros de yoga, mientras que Seminyak y Canggu son epicentros de surf y vida nocturna. Los templos como Uluwatu, al borde de acantilados sobre el oceano, ofrecen atardeceres que quitan el aliento.",
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1555400038-63f5ba517a47?w=800&q=80",
      "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?w=800&q=80",
      "https://images.unsplash.com/photo-1573790387438-4da905039392?w=800&q=80",
    ],
    activities: [
      { name: "Templo Uluwatu", description: "Contempla el atardecer desde este templo al borde del acantilado con danza Kecak.", icon: "temple" },
      { name: "Arrozales de Tegallalang", description: "Camina entre las terrazas de arroz mas fotografiadas del mundo.", icon: "rice" },
      { name: "Surf en Canggu", description: "Atrapa las mejores olas en las playas mas cool de Bali.", icon: "surf" },
      { name: "Yoga en Ubud", description: "Conecta cuerpo y mente en retiros de yoga rodeados de selva.", icon: "yoga" },
    ],
    tips: [
      { title: "Respeto", description: "Viste modestamente al visitar templos. Lleva un sarong." },
      { title: "Transporte", description: "Renta una moto para moverte libremente o contrata un conductor privado." },
      { title: "Regateo", description: "Es normal negociar precios en mercados y tiendas locales." },
    ],
    bestTime: "Abril - Octubre",
    avgBudget: "$30-80 USD/dia",
    avgBudgetCOP: "$124.000-331.000 COP/dia",
    language: "Bahasa Indonesia",
    currency: "Rupia Indonesia (IDR)",
    featured: false,
    bookingLinks: [
      { name: "Booking.com", url: "https://www.booking.com/region/id/bali.html", type: "hotel" },
      { name: "Airbnb", url: "https://www.airbnb.com/s/Bali--Indonesia/homes", type: "hotel" },
      { name: "GetYourGuide", url: "https://www.getyourguide.com/bali-l347/", type: "activity" },
    ],
    flightSearchUrl: "https://www.skyscanner.com/transport/flights/nyca/dps0/",
    accommodations: [
      { name: "The Mulia Bali", type: "resort", pricePerNight: 250, currency: "USD", rating: 4.9, url: "https://www.booking.com/hotel/id/the-mulia.html" },
      { name: "Puri Garden Hotel", type: "hotel", pricePerNight: 45, currency: "USD", rating: 4.4, url: "https://www.booking.com/hotel/id/puri-garden.html" },
      { name: "Villa en Ubud", type: "airbnb", pricePerNight: 80, currency: "USD", rating: 4.7, url: "https://www.airbnb.com/s/Bali--Indonesia/homes" },
    ],
    flightPriceFrom: "Desde $650 USD",
    flightPriceCOP: "Desde $2.691.000 COP",
  },
  {
    slug: "paris",
    name: "Paris",
    country: "Francia",
    continent: "Europa",
    tagline: "La Ciudad de la Luz",
    description:
      "Arte, romance, gastronomia y una elegancia atemporal que convierte cada paseo en una obra maestra.",
    longDescription:
      "Paris no necesita presentacion. La Ciudad de la Luz ha cautivado a viajeros durante siglos con su combinacion unica de arte, historia, moda y gastronomia. Desde la majestuosidad de la Torre Eiffel hasta los pasillos infinitos del Louvre, desde los cafes de Montmartre hasta los jardines de Versalles, cada esquina de Paris es una postal.",
    image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=800&q=80",
      "https://images.unsplash.com/photo-1550340499-a6c60fc8287c?w=800&q=80",
      "https://images.unsplash.com/photo-1431274172761-fca41d930114?w=800&q=80",
    ],
    activities: [
      { name: "Torre Eiffel", description: "Sube hasta la cima del monumento mas iconico del mundo.", icon: "tower" },
      { name: "Museo del Louvre", description: "Admira la Mona Lisa y miles de obras maestras del arte universal.", icon: "art" },
      { name: "Montmartre", description: "Explora el barrio de los artistas con la basilica del Sacre-Coeur.", icon: "church" },
      { name: "Crucero por el Sena", description: "Navega bajo los puentes historicos con vistas iluminadas de noche.", icon: "boat" },
    ],
    tips: [
      { title: "Metro", description: "El metro es la forma mas eficiente de moverse. Compra un pase semanal." },
      { title: "Reservas", description: "Reserva entradas con anticipacion para el Louvre y la Torre Eiffel." },
      { title: "Gastronomia", description: "Prueba croissants frescos, quesos artesanales y vino frances." },
    ],
    bestTime: "Abril - Junio, Septiembre - Octubre",
    avgBudget: "$100-200 USD/dia",
    avgBudgetCOP: "$414.000-828.000 COP/dia",
    language: "Frances",
    currency: "Euro (EUR)",
    featured: false,
    bookingLinks: [
      { name: "Booking.com", url: "https://www.booking.com/city/fr/paris.html", type: "hotel" },
      { name: "Airbnb", url: "https://www.airbnb.com/s/Paris--France/homes", type: "hotel" },
      { name: "GetYourGuide", url: "https://www.getyourguide.com/paris-l16/", type: "activity" },
    ],
    flightSearchUrl: "https://www.skyscanner.com/transport/flights/nyca/pari/",
    accommodations: [
      { name: "Hotel Plaza Athenee", type: "hotel", pricePerNight: 450, currency: "USD", rating: 4.8, url: "https://www.booking.com/hotel/fr/plaza-athenee.html" },
      { name: "Generator Paris", type: "hostal", pricePerNight: 35, currency: "USD", rating: 4.2, url: "https://www.booking.com/hotel/fr/generator-paris.html" },
      { name: "Apartamento Le Marais", type: "airbnb", pricePerNight: 120, currency: "USD", rating: 4.6, url: "https://www.airbnb.com/s/Paris--France/homes" },
    ],
    flightPriceFrom: "Desde $450 USD",
    flightPriceCOP: "Desde $1.863.000 COP",
  },
  {
    slug: "tokyo",
    name: "Tokio",
    country: "Japon",
    continent: "Asia",
    tagline: "Donde el Futuro se Encuentra con la Tradicion",
    description:
      "Rascacielos futuristas, templos zen, la mejor gastronomia del mundo y una cultura que fascina.",
    longDescription:
      "Tokio es una metropolis donde conviven armoniosamente el futuro y la tradicion. En Akihabara encuentras la tecnologia mas avanzada, mientras que en Asakusa el templo Senso-ji te transporta siglos atras. Shibuya y su famoso cruce son el pulso de la modernidad japonesa, y los barrios de Harajuku muestran la moda mas creativa del mundo. Con mas estrellas Michelin que cualquier ciudad, la gastronomia tokiota es legendaria.",
    image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=800&q=80",
      "https://images.unsplash.com/photo-1536098561742-ca998e48cbcc?w=800&q=80",
      "https://images.unsplash.com/photo-1480796927426-f609979314bd?w=800&q=80",
    ],
    activities: [
      { name: "Templo Senso-ji", description: "El templo budista mas antiguo de Tokio en el historico barrio de Asakusa.", icon: "temple" },
      { name: "Cruce de Shibuya", description: "Cruza la interseccion mas transitada del mundo, icono de la modernidad.", icon: "city" },
      { name: "Akihabara", description: "El paraiso de la tecnologia, anime y cultura otaku.", icon: "tech" },
      { name: "Monte Fuji", description: "Excursion al volcan sagrado mas iconico de Japon.", icon: "mountain" },
    ],
    tips: [
      { title: "JR Pass", description: "Compra el Japan Rail Pass para viajar ilimitado en trenes bala." },
      { title: "Efectivo", description: "Muchos lugares solo aceptan efectivo. Lleva yenes." },
      { title: "Etiqueta", description: "No hables por telefono en el metro y quitate los zapatos en casas y templos." },
    ],
    bestTime: "Marzo - Mayo (Sakura), Octubre - Noviembre",
    avgBudget: "$80-150 USD/dia",
    avgBudgetCOP: "$331.000-621.000 COP/dia",
    language: "Japones",
    currency: "Yen Japones (JPY)",
    featured: false,
    bookingLinks: [
      { name: "Booking.com", url: "https://www.booking.com/city/jp/tokyo.html", type: "hotel" },
      { name: "Airbnb", url: "https://www.airbnb.com/s/Tokyo--Japan/homes", type: "hotel" },
      { name: "GetYourGuide", url: "https://www.getyourguide.com/tokyo-l193/", type: "activity" },
    ],
    flightSearchUrl: "https://www.skyscanner.com/transport/flights/nyca/tyoa/",
    accommodations: [
      { name: "Park Hyatt Tokyo", type: "hotel", pricePerNight: 500, currency: "USD", rating: 4.9, url: "https://www.booking.com/hotel/jp/park-hyatt-tokyo.html" },
      { name: "Khaosan Tokyo Kabuki", type: "hostal", pricePerNight: 30, currency: "USD", rating: 4.3, url: "https://www.booking.com/hotel/jp/khaosan-tokyo-kabuki.html" },
      { name: "Apartamento en Shinjuku", type: "airbnb", pricePerNight: 90, currency: "USD", rating: 4.5, url: "https://www.airbnb.com/s/Tokyo--Japan/homes" },
    ],
    flightPriceFrom: "Desde $700 USD",
    flightPriceCOP: "Desde $2.898.000 COP",
  },
  {
    slug: "santorini",
    name: "Santorini",
    country: "Grecia",
    continent: "Europa",
    tagline: "El Paraiso Blanco y Azul del Egeo",
    description:
      "Atardeceres legendarios, pueblos blancos sobre acantilados volcanicos y aguas azules infinitas.",
    longDescription:
      "Santorini es la isla que parece haber sido disenada para fotos, pero la realidad supera cualquier imagen. Sus pueblos de casas blancas con cupulas azules se aferran a acantilados volcanicos sobre un mar infinitamente azul. Los atardeceres en Oia son legendarios, las playas de arena negra y roja son unicas en el mundo, y los vinedos producen algunos de los vinos mas exclusivos de Grecia.",
    image: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?w=800&q=80",
      "https://images.unsplash.com/photo-1560703650-ef3e0f254ae0?w=800&q=80",
      "https://images.unsplash.com/photo-1533105079780-92b9be482077?w=800&q=80",
    ],
    activities: [
      { name: "Atardecer en Oia", description: "Contempla el atardecer mas famoso del mundo desde los acantilados.", icon: "sunset" },
      { name: "Playa Roja", description: "Visita esta playa unica con acantilados de lava roja impresionantes.", icon: "beach" },
      { name: "Tour de Vinos", description: "Degusta los vinos volcanicos unicos de Santorini en bodegas locales.", icon: "wine" },
      { name: "Caldera en Barco", description: "Navega por la caldera volcanica y banate en aguas termales naturales.", icon: "boat" },
    ],
    tips: [
      { title: "Temporada", description: "Evita julio-agosto si no te gustan las multitudes. Septiembre es ideal." },
      { title: "Alojamiento", description: "Reserva con meses de anticipacion, especialmente en Oia y Fira." },
      { title: "Transporte", description: "Renta un ATV o quad para recorrer la isla libremente." },
    ],
    bestTime: "Mayo - Junio, Septiembre - Octubre",
    avgBudget: "$120-250 USD/dia",
    avgBudgetCOP: "$497.000-1.035.000 COP/dia",
    language: "Griego",
    currency: "Euro (EUR)",
    featured: false,
    bookingLinks: [
      { name: "Booking.com", url: "https://www.booking.com/island/gr/santorini.html", type: "hotel" },
      { name: "Airbnb", url: "https://www.airbnb.com/s/Santorini--Greece/homes", type: "hotel" },
      { name: "GetYourGuide", url: "https://www.getyourguide.com/santorini-l478/", type: "activity" },
    ],
    flightSearchUrl: "https://www.skyscanner.com/transport/flights/nyca/jtra/",
    accommodations: [
      { name: "Canaves Oia Suites", type: "resort", pricePerNight: 400, currency: "USD", rating: 4.9, url: "https://www.booking.com/hotel/gr/canaves-oia.html" },
      { name: "Youth Hostel Anna", type: "hostal", pricePerNight: 40, currency: "USD", rating: 4.1, url: "https://www.booking.com/hotel/gr/youth-hostel-anna.html" },
      { name: "Villa en Oia", type: "airbnb", pricePerNight: 180, currency: "USD", rating: 4.8, url: "https://www.airbnb.com/s/Santorini--Greece/homes" },
    ],
    flightPriceFrom: "Desde $500 USD",
    flightPriceCOP: "Desde $2.070.000 COP",
  },
  {
    slug: "cusco",
    name: "Cusco y Machu Picchu",
    country: "Peru",
    continent: "America del Sur",
    tagline: "El Ombligo del Mundo Inca",
    description:
      "Ruinas ancestrales, montanas sagradas y una herencia inca que sigue viva en cada piedra.",
    longDescription:
      "Cusco fue la capital del Imperio Inca y hoy es la puerta de entrada a una de las Siete Maravillas del Mundo Moderno: Machu Picchu. La ciudad mezcla arquitectura inca con colonial espanola de una manera unica. Sus calles empedradas, sus mercados coloridos, el Valle Sagrado con sus terrazas agricolas y la Montana de Siete Colores crean una experiencia que combina historia, aventura y misticismo.",
    image: "https://images.unsplash.com/photo-1526392060635-9d6019884377?w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1587595431973-160d0d163e19?w=800&q=80",
      "https://images.unsplash.com/photo-1580619305218-8423a7ef79b4?w=800&q=80",
      "https://images.unsplash.com/photo-1548820395-fdf89989af8a?w=800&q=80",
    ],
    activities: [
      { name: "Machu Picchu", description: "Visita la ciudadela inca perdida entre las nubes, una de las 7 maravillas.", icon: "ruins" },
      { name: "Valle Sagrado", description: "Explora Ollantaytambo, Pisac y las salineras de Maras.", icon: "valley" },
      { name: "Montana de 7 Colores", description: "Sube a la famosa Vinicunca con sus capas de colores naturales.", icon: "rainbow" },
      { name: "Plaza de Armas de Cusco", description: "Admira la catedral y los muros incas perfectamente tallados.", icon: "plaza" },
    ],
    tips: [
      { title: "Altura", description: "Cusco esta a 3,400m. Tomate un dia para aclimatarte y bebe mate de coca." },
      { title: "Reservas", description: "Reserva entradas a Machu Picchu con semanas de anticipacion." },
      { title: "Tren", description: "El tren a Machu Picchu es una experiencia en si mismo con vistas increibles." },
    ],
    bestTime: "Mayo - Septiembre",
    avgBudget: "$50-100 USD/dia",
    avgBudgetCOP: "$207.000-414.000 COP/dia",
    language: "Espanol / Quechua",
    currency: "Sol Peruano (PEN)",
    featured: false,
    bookingLinks: [
      { name: "Booking.com", url: "https://www.booking.com/city/pe/cusco.html", type: "hotel" },
      { name: "Airbnb", url: "https://www.airbnb.com/s/Cusco--Peru/homes", type: "hotel" },
      { name: "GetYourGuide", url: "https://www.getyourguide.com/cusco-l569/", type: "activity" },
    ],
    flightSearchUrl: "https://www.skyscanner.com/transport/flights/nyca/cuza/",
    accommodations: [
      { name: "Belmond Hotel Monasterio", type: "hotel", pricePerNight: 350, currency: "USD", rating: 4.8, url: "https://www.booking.com/hotel/pe/monasterio.html" },
      { name: "Pariwana Hostel Cusco", type: "hostal", pricePerNight: 15, currency: "USD", rating: 4.5, url: "https://www.booking.com/hotel/pe/pariwana-hostel-cusco.html" },
      { name: "Casa en San Blas", type: "airbnb", pricePerNight: 55, currency: "USD", rating: 4.6, url: "https://www.airbnb.com/s/Cusco--Peru/homes" },
    ],
    flightPriceFrom: "Desde $350 USD",
    flightPriceCOP: "Desde $1.449.000 COP",
  },
];

export function getDestinationBySlug(slug: string): Destination | undefined {
  return destinations.find((d) => d.slug === slug);
}

export function getFeaturedDestinations(): Destination[] {
  return destinations.filter((d) => d.featured);
}

export function getDestinationsByContinent(continent: string): Destination[] {
  return destinations.filter((d) => d.continent === continent);
}

export function getColombianDestinations(): Destination[] {
  return destinations.filter((d) => d.country === "Colombia");
}

export function getInternationalDestinations(): Destination[] {
  return destinations.filter((d) => d.country !== "Colombia");
}
