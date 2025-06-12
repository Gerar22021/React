import './App.css'
import ProductCardContainer from './Componentes/ProductCardContainer'
import ProductCard from './Componentes/ProductCard'
import NavBar from './Componentes/NavBar'
import logo from'./Componentes/mi_logo.jpg'

type Post = {
  id: number;
  nombre: string;
  descripcion: string;
  src?: string;
  precio: number;
  
}

type Response = {
  listaProducto: {
    NombreCategoria: string,
    posts: Post[];
  },
  listaProducto2: {
    NombreCategoria: string,
    posts: Post[];
  },
  listaProducto3: {
    NombreCategoria: string,
    posts: Post[];
  },
  listaProducto4: {
    NombreCategoria: string,
    posts: Post[];
  },
}

const response: Response = {
  listaProducto: {
    NombreCategoria: 'OFERTAS',
    posts: [
      {
        id: 1,
        nombre: 'Calefactor Volcan 5700 Tiro Balanceado 46316v GAS NATURAL',
        descripcion: 'Este calefactor a gas de alta calidad y eficiencia, fabricado por la reconocida marca Volcan, es perfecto para climas fríos en Argentina. Con una potencia de calefacción de 5700 kcal/h, este calefactor es capaz de calentar un área de hasta 52 m².',
        src:'https://http2.mlstatic.com/D_NQ_NP_2X_759049-MLU74696091248_022024-F.webp',
        precio: 289.107,
      },
      {
        id: 2,
        nombre: 'Olla eléctrica a presión Electrolux PCC20 - Negro 1kW 50Hzx60Hz',
        descripcion: 'Material de la tapa. La tapa está fabricada en acero inoxidable de la más alta resistencia, lo cual le permite soportar impactos. Además, tiene mayor resistencia a la corrosión, lo que hace que tenga más vida útil.',
        src: 'https://http2.mlstatic.com/D_NQ_NP_2X_949876-MLU79281443889_092024-F.webp',
        precio: 174.390,
      },
      {
        id: 3,
        nombre: 'Pava Eléctrica Atma Pe1821ap2 1.7lts Selector De Temperatura',
        descripcion: 'La Pava Eléctrica Atma Pe1821ap2 es una herramienta esencial para la preparación de bebidas calientes. Con una capacidad de 1.7 litros y características avanzadas, esta pava eléctrica permite controlar la temperatura del agua según tus preferencias.',
        src: 'https://http2.mlstatic.com/D_NQ_NP_2X_930654-MLU72830893471_112023-F.webp',
        precio: 37.927,
      },
      {
        id: 4,
        nombre: 'Bicicleta mountain bike Topmega Regal R29 tamaño del cuadro M color blanco/rojo/naranja',
        descripcion: 'Lo que tenés que saber de este producto: Género: Sin género. Rodado: 29. Material del cuadro: aluminio. Con frenos: Disco mecánico. Con cambios delanteros Shimano Tourney TY200 y traseros Shimano Tourney TZ510. Peso: 13kg.',
        src: 'https://http2.mlstatic.com/D_NQ_NP_2X_903025-MLU75150140185_032024-F.webp',
        precio: 479.040,
      },
      {
        id: 5,
        nombre: 'Sillon Mesh Ejecutivo Respaldo Alto Silla Escritorio Baires4 Color Negro',
        descripcion: 'SILLÓN MESH - Características del producto: Medidas del respaldo: 69 cm de alto x 44 cm de ancho. Altura al asiento ajustable: de 42 a 52 cm. Altura hasta los apoyabrazos ajustable: de 64 a 74 cm. Altura total ajustable: de 100 a 110 cm. Diámetro de la base: 60 cm',
        src: 'https://http2.mlstatic.com/D_NQ_NP_2X_915487-MLA84803577583_052025-F.webp',
        precio: 3000,
      },
      {
        id: 6,
        nombre: 'Espejo rectangular de pared Topdeco 12050 de 120cm x 50cm marco negro',
        descripcion: 'Lo que tenés que saber de este producto. Con 0 luces. Para instalar en: baño. Uso del espejo: decorativo. Marco construido en pvc.. Con gancho para colgar.',
        src: 'https://http2.mlstatic.com/D_NQ_NP_2X_912486-MLA72779390118_112023-F.webp',
        precio: 48.076,
      },
      {
        id: 7,
        nombre: 'Torre de Sonido Noblex MNT290 Bluetooth Efectos de Voz y Luces LED Negro',
        descripcion: '¡Dale el ritmo que tu vida merece con la Torre de Sonido Noblex MNT290P! Con una potencia increíble de 3200W, esta torre te hará vibrar al compás de tus canciones favoritas. Prepárate para una experiencia auditiva inigualable y una fiesta que no olvidarás. Las luces integradas crean el ambiente perfecto mientras conectás todo por Bluetooth o cable auxiliar.',
        src: 'https://http2.mlstatic.com/D_NQ_NP_2X_794516-MLU75193393387_032024-F.webp',
        precio: 118.999,
      }
    ]
    
  },
  listaProducto2: {
    NombreCategoria: 'OFERTAS DEL DIA',
    posts: [
      {
        id: 8,
        nombre: 'Parlante JBL Go JBL GO 4 GO4 portátil con bluetooth waterproof negro 220V',
        descripcion: 'JBL GO 4 ofrece un sonido natural, con una gran claridad y precisión, que se dispersa de manera uniforme. Un parlante que asegura potencia y calidad por igual en la reproducción de contenidos multimedia.',
        src: 'https://http2.mlstatic.com/D_NQ_NP_2X_954134-MLA80823484966_122024-F.webp',
        precio: 77.758,
      },
      {
        id: 9,
        nombre: 'Samsung Galaxy A15 128 GB Negro azulado 4 GB RAM',
        descripcion: 'Descripción: Fotografía profesional en tu bolsillo. Descubrí infinitas posibilidades para tus fotos con las 3 cámaras principales de tu equipo. Poné a prueba tu creatividad y jugá con la iluminación, diferentes planos y efectos para obtener grandes resultados. Además, el dispositivo cuenta con cámara frontal de 13 Mpx para que puedas sacarte divertidas selfies o hacer videollamadas.',
        src: 'https://http2.mlstatic.com/D_NQ_NP_2X_633374-MLA82692302836_032025-F.webp',
        precio: 299.999,
      },
      {
        id: 10,
        nombre: 'Zapatillas De Running Galaxy 7 Id8756 adidas',
        descripcion: 'Cada carrera es un viaje de descubrimiento. Ponete estas zapatillas de running adidas y liberá tu potencial. La mediasuela con amortiguación Cloudfoam te ofrece una pisada más cómoda mientras aumentás tu resistencia. La parte superior textil es resistente al desgaste y te ofrece soporte desde tu primera vuelta hasta tu primera carrera de 5K.',
        src: 'https://http2.mlstatic.com/D_NQ_NP_2X_866594-MLA83708878737_042025-F.webp',
        precio: 79.999,
      },
      {
        id: 11,
        nombre: 'Stanley Classic Mate System de 1,2 litros color verde Hammertone',
        descripcion: 'La botella termo Mate System es la compañera ideal para el apareamiento. Con tecnología exclusiva, creamos el tapón de altísima precisión para un servicio perfecto, con un flujo continuo de agua y en el lugar correcto. El tapón respeta una inclinación ideal para verter el agua directamente en el punto que desees.',
        src: 'https://http2.mlstatic.com/D_NQ_NP_2X_826176-MLA80432713740_112024-F.webp',
        precio: 146.000,
      },
      {
        id: 12,
        nombre: 'Campera Importada Inflable Pluma + Corderito Hombre Y dama',
        descripcion: 'IMPORTANTISIMO: LA CALIDAD ES SUPER PREMIUM Y LOS TALLES SON COMPLETAMENTE REALES, SON TALLES AMPLIOS. A TENER EN CUENTA, LOS TALLES SON COMPARABLES A LAS PRIMERAS MARCAS MUNDIALES DE ROPA DEPORTIVA (talles bien cumplidos)',
        src: 'https://http2.mlstatic.com/D_NQ_NP_2X_880994-MLA85365395203_052025-F.webp',
        precio: 47.820,
      },
      {
        id: 13,
        nombre: 'Notebook Lenovo Ideapad 1 15ijl7 Intel Celeron N4500 12 Gb Ddr4-sdram 128 Gb Emmc 39.6 Cm (15.6 ) 1366x768px Wi-fi 5 (802.11ac) Teclado Español Windows 11 Home Color Abyss Blue',
        descripcion: 'IDEAPAD 1 15ILJ7: El IdeaPad 1 Gen 7 (15" Intel) es exactamente lo que necesitas en una computadora portátil de uso diario. Mira programas en una amplia pantalla de hasta 15,6" con un marco extremadamente delgado. Escucha audio rico y claro desde dos altavoces Dolby Audio y con una batería de larga duración que se carga súper rápido, puedes trabajar desde cualquier lugar mientras disfrutas de videollamadas nítidas con cancelación inteligente de ruido.',
        src: 'https://http2.mlstatic.com/D_NQ_NP_2X_962297-MLA80360516642_112024-F.webp',
        precio: 544.999,
      },
      {
        id: 14,
        nombre: 'Samsung Galaxy Tab A9 64gb 4gb Ram Color Gris 8.7"',
        descripcion: 'Descripción: Disfruta de una experiencia visual inmersiva con la pantalla de alta frecuencia de actualización de la Galaxy Tab A9, que ofrece imágenes claras y movimientos fluidos. Aprovecha la visibilidad incluso bajo la luz del sol y sumérgete en tus contenidos favoritos.',
        src: 'https://http2.mlstatic.com/D_NQ_NP_2X_892038-MLU74328290469_012024-F.webp',
        precio: 199.999,
      }
    ]
    
  },
  listaProducto3: {
    NombreCategoria: 'LO MAS VENDIDO',
    posts: [
      {
        id: 15,
        nombre: 'Disco Solido Ssd 480gb Hiksemi Wave Sata 3.0',
        descripcion: 'Descripción: Resistencia extrema - Imaginate un disco de almacenamiento de gran calidad resistente al agua y al polvo... irrompible. Este producto cumple todas estas funciones esenciales, ya que es ideal para transportarlo en cualquier ambiente.',
        src: 'https://http2.mlstatic.com/D_NQ_NP_950438-MLU76691814806_062024-O.webp',
        precio: 43.792,
      },
      {
        id: 16,
        nombre: 'Pendrive SanDisk Cruzer Blade 64GB 2.0 negro y rojo2',
        descripcion: 'Descripción: Pendrive Sandisk 64GB CruzerBlade Z50-ultracompacta y portátil unidad flash USB Cruzer® Blade™ de SanDisk®. Es la forma más cómoda y rápida de guardar y transferir archivos digitales de equipo a equipo, o llevarlos consigo cuando se desplace. Basta con copiar imágenes, canciones y otros archivos en la elegante unidad flash USB Cruzer Blade de SanDisk para empezar a compartirlos.',
        src: 'https://http2.mlstatic.com/D_NQ_NP_2X_699376-MLA45993737472_052021-F.webp',
        precio: 8.753,
      },
      {
        id: 17,
        nombre: 'Guitarra Eléctrica Femmto con Amplificador y Accesorios',
        descripcion: 'Descripción: Guitarra Eléctrica Femmto con Amplificador 5w. Emprende tu viaje musical con Femmto, la guitarra perfecta para principiantes que desean dar sus primeros pasos en el mundo de la música. Con un diseño ergonómico y un sonido versátil, esta guitarra te acompañará en tu aprendizaje y te inspirará a explorar nuevos sonidos.',
        src: 'https://http2.mlstatic.com/D_NQ_NP_2X_711044-MLA81264467808_122024-F.webp',
        precio: 260.900,
      },
      {
        id: 18,
        nombre: 'Campera Mujer Corderito Bifas Tapado Buzo Moda Dama',
        descripcion: 'Descripción: CAMPERA CORDERITO BIFAZ SUPER CALENTITO PARA INVIERNO. CON CAPUCHA, CIERRE Y BOLSILLOS-TALLES M/L/XL/XXL. VERIFICAR MEDIDAS EN LA ULTIMA FOTO O GUIA DE TALLES',
        src: 'https://http2.mlstatic.com/D_NQ_NP_2X_810853-MLA83992898866_052025-F.webp',
        precio: 20.900,
      },
      {
        id: 19,
        nombre: 'Lavarropas Samsung Automático Carga Frontal 6.5 Kg Inverter Blanco (WW65A4000EEU)',
        descripcion: 'Descripción: LAVARROPAS AUTOMATICO WW65A4000EEU 6.5KBLANCO INVERTER SAMSUNG- Capacidad Lavado 6.5 kg- Color Blanco- Puerta Crystal Gloss- Display del panel LED- Tipo de motor: Digital Inverter- Velocidad de centrifugado 1000 RPM- Lavado Rápido',
        src: 'https://http2.mlstatic.com/D_NQ_NP_2X_642730-MLA82945957010_032025-F.webp',
        precio: 699.999,
      },
      {
        id: 20,
        nombre: 'Multigimnasio Multigym Randers Arg-63120 Reforzado 45 Kg Color de la estructura Negro',
        descripcion: 'Descripción: Multigimnasio ARG-63120. Características principales. Tipo: Multigimnasio. Incluye estación Scott. Incluye 45Kg de carga (7 ladrillos + Pesa Tope). Incluye barra dorsalera y barra corta',
        src: 'https://http2.mlstatic.com/D_NQ_NP_2X_864895-MLU72538610490_112023-F.webp',
        precio: 564.839,
      },
      {
        id: 21,
        nombre: 'Combo De Soldadora Inverter Lq 105 Amp + Amoladora Angular',
        descripcion: 'Descripción: CONTENIDO DE LA PUBLICACIÓN • 1 Soldadora Inverter Lusqtoff MEGAIRON100-8 • 1 Cable con Pinza portaelectrodo • 1 Cable con Pinza masa • 1 Correa de transporte • 1 Manual de uso • 1 Mascara fotosensible para soldar Lusqtoff ST-1X • 2 Escuadras Soporte Magnético de 3 Pulgadas • 1 Amoladora Angular 115mm 720W PIDEWEB',
        src: 'https://http2.mlstatic.com/D_NQ_NP_2X_746916-MLA81456390809_122024-F.webp',
        precio: 176.509,
      }
    ]
    
  },
  listaProducto4: {
    NombreCategoria: 'LO MAS BUSCADO',
    posts: [
      {
        id: 22,
        nombre: 'Zapatilla Bochin Trekking Y Trabajo 900 Puntera Plástica',
        descripcion: 'Descripción: ¡Somos Náutica el Anzuelo! Tu aliado náutico y outdoor con 40 años de experiencia en el rubro. Somos distribuidores oficiales de motores fuera de borda Yamaha, Mercury, Tohatsu y Hidea, garantizando calidad y servicio de excelencia para tu embarcación.',
        src: 'https://http2.mlstatic.com/D_NQ_NP_2X_757983-MLA84504218831_052025-F.webp',
        precio: 37.107,
      },
      {
        id: 23,
        nombre: 'Mini drone DJI Mini 4 Pro RC 2 Fly More Combo con cámara 4K gris 5.8GHz 3 baterías',
        descripcion: 'Descripción: Drone DJI Mini 4 Pro Fly More Combo + Control Remoto RC 2. Imagina un mundo donde la exploración aérea es sinónimo de libertad, simplicidad y calidad visual excepcional. Bienvenido al emocionante universo del Drone DJI Mini 4 Pro, un dron que redefine la experiencia de vuelo de una manera extraordinaria. Con un peso de menos de 249gr, este dron elimina la necesidad de registros tediosos, permitiéndote viajar ligero y sin complicaciones en todas tus aventuras.',
        src: 'https://http2.mlstatic.com/D_NQ_NP_2X_830550-MLU75650617772_042024-F.webp',
        precio: 506.749,
      },
      {
        id: 24,
        nombre: 'Juego De Jardin Gardenlife Mesa Niza + 6 Sillones Milano Estructura Negro',
        descripcion: 'Descripción: JUEGO DE LIVING JARDIN MESA NIZA + 6 SILLONES MILANO ¡Convierte tu jardín, terraza o patio en un espacio único y confortable con este exclusivo juego de living! Este combo combina lo mejor en diseño, durabilidad y comodidad, ideal para disfrutar al aire libre.',
        src: 'https://http2.mlstatic.com/D_NQ_NP_2X_670474-MLA84547531488_052025-F.webp',
        precio: 382.607,
      },
      {
        id: 25,
        nombre: 'Motosierra A Explosion 52cc Espada 51cm 2 Tiempos 2,8 Hp',
        descripcion: 'Descripción: CONTENIDO DE LA PUBLICACIÓN • 1 Motosierra Daewoo 52CC 2 Tiempo DCS5520 • 1 Espada 50cm • 1 Cadena • 1 Botella para mezcla de combustible • 1 Protector de espada • 1 Kit de herramientas • 1 Manual de uso',
        src: 'https://http2.mlstatic.com/D_NQ_NP_919059-MLA50681022478_072022-O.webp',
        precio: 139.922,
      },
      {
        id: 25,
        nombre: 'Kit 10 Cuadernos Universitarios América Raya X80 Hojas X10un. Color Multicolor',
        descripcion: 'Descripción: LAS IMAGENES SON REFERENCIALES. LOS MODELOS SON DE LOCALIDADES DE AMERICA',
        src: 'https://http2.mlstatic.com/D_NQ_NP_2X_678854-MLA74439146853_022024-F.webp',
        precio: 24.450,
      },
      {
        id: 26,
        nombre: 'Bidón 5 Lts. Nafta Chato Con Pico Y Venteo',
        descripcion: 'Descripción: Si querés retirar en domicilio, te dejamos Link. NO INCLUYE SOPORTE NI TORNILLERÍA. Bidón 5 Ltrs. Nafta con pico y venteo. Bidón apto Hidrocarburos para Aventura Mototurismo Viajes',
        src: 'https://http2.mlstatic.com/D_NQ_NP_2X_872476-MLA72480636918_102023-F.webp',
        precio: 33.033,
      },
      {
        id: 27,
        nombre: 'Futón 3 Cuerpos Nuevo + Colchón Chenille Rustico Linea Eco Roble Claro Chenille Gris',
        descripcion: 'Descripción: OESTE AMOBLAMIENTOS. IMPORTANTE LEER ANTES DE COMPRAR!!! OFRECEMOS PRODUCTOS DIRECTOS DE FÁBRICA CONSULTAR STOCK Y DEMORA ANTES DE COMPRAR. Detalle: Estructura de madera Pino 3X3 Con parrillas reforzadas de 4 x 1.5 Pulgadas.',
        src: 'https://http2.mlstatic.com/D_NQ_NP_2X_838042-MLA85304805089_052025-F.webp',
        precio: 269.000,
      }
    ]
    
  },
  
}

function App() {
  const { listaProducto, listaProducto2, listaProducto3, listaProducto4 } = response;

  return (
    <>
    <body>
      <NavBar src={logo}/>
      <div className='cuerpo'>
        <ProductCardContainer
          NombreCategoria={listaProducto.NombreCategoria}
        >
            {listaProducto.posts.map((post) => {
                return (
                  <>
                    <ProductCard
                      key={post.id} 
                      nombre={post.nombre} 
                      descripcion={post.descripcion} 
                      src={post.src} 
                      precio={post.precio}/>
                  </>
                )
              })
            }
        </ProductCardContainer>
        <ProductCardContainer
          NombreCategoria={listaProducto2.NombreCategoria}
        >
            {listaProducto2.posts.map((post) => {
                return (
                  <>
                    <ProductCard
                      key={post.id} 
                      nombre={post.nombre} 
                      descripcion={post.descripcion} 
                      src={post.src} 
                      precio={post.precio}/>
                  </>
                )
              })
            }
        </ProductCardContainer>
        <ProductCardContainer
          NombreCategoria={listaProducto3.NombreCategoria}
        >
            {listaProducto3.posts.map((post) => {
                return (
                  <>
                    <ProductCard
                      key={post.id} 
                      nombre={post.nombre} 
                      descripcion={post.descripcion} 
                      src={post.src} 
                      precio={post.precio}/>
                  </>
                )
              })
            }
        </ProductCardContainer>
        <ProductCardContainer
          NombreCategoria={listaProducto4.NombreCategoria}
        >
            {listaProducto4.posts.map((post) => {
                return (
                  <>
                    <ProductCard
                      key={post.id} 
                      nombre={post.nombre} 
                      descripcion={post.descripcion} 
                      src={post.src} 
                      precio={post.precio}/>
                  </>
                )
              })
            }
        </ProductCardContainer>
      </div>  
    </body>
    </>
  )
}

export default App;
