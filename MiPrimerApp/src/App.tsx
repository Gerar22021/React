import './App.css'
import ProductCardContainer from './Componentes/ProductCardContainer'
import ProductCard from './Componentes/ProductCard'
import NavBar from './Componentes/NavBar'

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
        id: 1,
        nombre: 'Parlante JBL Go JBL GO 4 GO4 portátil con bluetooth waterproof negro 220V',
        descripcion: 'JBL GO 4 ofrece un sonido natural, con una gran claridad y precisión, que se dispersa de manera uniforme. Un parlante que asegura potencia y calidad por igual en la reproducción de contenidos multimedia.',
        src: 'https://http2.mlstatic.com/D_NQ_NP_2X_954134-MLA80823484966_122024-F.webp',
        precio: 77.758,
      },
      {
        id: 2,
        nombre: 'Samsung Galaxy A15 128 GB Negro azulado 4 GB RAM',
        descripcion: 'Descripción: Fotografía profesional en tu bolsillo. Descubrí infinitas posibilidades para tus fotos con las 3 cámaras principales de tu equipo. Poné a prueba tu creatividad y jugá con la iluminación, diferentes planos y efectos para obtener grandes resultados. Además, el dispositivo cuenta con cámara frontal de 13 Mpx para que puedas sacarte divertidas selfies o hacer videollamadas.',
        src: 'https://http2.mlstatic.com/D_NQ_NP_2X_633374-MLA82692302836_032025-F.webp',
        precio: 299.999,
      },
      {
        id: 3,
        nombre: 'Zapatillas De Running Galaxy 7 Id8756 adidas',
        descripcion: 'Cada carrera es un viaje de descubrimiento. Ponete estas zapatillas de running adidas y liberá tu potencial. La mediasuela con amortiguación Cloudfoam te ofrece una pisada más cómoda mientras aumentás tu resistencia. La parte superior textil es resistente al desgaste y te ofrece soporte desde tu primera vuelta hasta tu primera carrera de 5K.',
        src: 'https://http2.mlstatic.com/D_NQ_NP_2X_866594-MLA83708878737_042025-F.webp',
        precio: 79.999,
      },
      {
        id: 4,
        nombre: 'Stanley Classic Mate System de 1,2 litros color verde Hammertone',
        descripcion: 'La botella termo Mate System es la compañera ideal para el apareamiento. Con tecnología exclusiva, creamos el tapón de altísima precisión para un servicio perfecto, con un flujo continuo de agua y en el lugar correcto. El tapón respeta una inclinación ideal para verter el agua directamente en el punto que desees.',
        src: 'https://http2.mlstatic.com/D_NQ_NP_2X_826176-MLA80432713740_112024-F.webp',
        precio: 146.000,
      },
      {
        id: 5,
        nombre: 'Articulo2',
        descripcion: 'Descripcion del articulo',
        src: 'https://http2.mlstatic.com/D_NQ_NP_2X_930654-MLU72830893471_112023-F.webp',
        precio: 3000,
      },
      {
        id: 6,
        nombre: 'Articulo2',
        descripcion: 'Descripcion del articulo',
        src: 'https://http2.mlstatic.com/D_NQ_NP_2X_930654-MLU72830893471_112023-F.webp',
        precio: 3000,
      },
      {
        id: 7,
        nombre: 'Articulo2',
        descripcion: 'Descripcion del articulo',
        src: 'https://http2.mlstatic.com/D_NQ_NP_2X_930654-MLU72830893471_112023-F.webp',
        precio: 3000,
      }
    ]
    
  },
  listaProducto3: {
    NombreCategoria: 'LO MAS VENDIDO',
    posts: [
      {
        id: 1,
        nombre: 'Articulo1',
        descripcion: 'Descripcion del articulo',
        src: 'https://http2.mlstatic.com/D_NQ_NP_2X_930654-MLU72830893471_112023-F.webp',
        precio: 3000,
      },
      {
        id: 2,
        nombre: 'Articulo2',
        descripcion: 'Descripcion del articulo',
        src: 'https://http2.mlstatic.com/D_NQ_NP_2X_930654-MLU72830893471_112023-F.webp',
        precio: 3000,
      },
      {
        id: 3,
        nombre: 'Articulo2',
        descripcion: 'Descripcion del articulo',
        src: 'https://http2.mlstatic.com/D_NQ_NP_2X_930654-MLU72830893471_112023-F.webp',
        precio: 3000,
      },
      {
        id: 4,
        nombre: 'Articulo2',
        descripcion: 'Descripcion del articulo',
        src: 'https://http2.mlstatic.com/D_NQ_NP_2X_930654-MLU72830893471_112023-F.webp',
        precio: 3000,
      },
      {
        id: 5,
        nombre: 'Articulo2',
        descripcion: 'Descripcion del articulo',
        src: 'https://http2.mlstatic.com/D_NQ_NP_2X_930654-MLU72830893471_112023-F.webp',
        precio: 3000,
      },
      {
        id: 6,
        nombre: 'Articulo2',
        descripcion: 'Descripcion del articulo',
        src: 'https://http2.mlstatic.com/D_NQ_NP_2X_930654-MLU72830893471_112023-F.webp',
        precio: 3000,
      },
      {
        id: 7,
        nombre: 'Articulo2',
        descripcion: 'Descripcion del articulo',
        src: 'https://http2.mlstatic.com/D_NQ_NP_2X_930654-MLU72830893471_112023-F.webp',
        precio: 3000,
      }
    ]
    
  },
  listaProducto4: {
    NombreCategoria: 'LO MAS BUSCADO',
    posts: [
      {
        id: 1,
        nombre: 'Articulo1',
        descripcion: 'Descripcion del articulo',
        src: 'https://http2.mlstatic.com/D_NQ_NP_2X_930654-MLU72830893471_112023-F.webp',
        precio: 3000,
      },
      {
        id: 2,
        nombre: 'Articulo2',
        descripcion: 'Descripcion del articulo',
        src: 'https://http2.mlstatic.com/D_NQ_NP_2X_930654-MLU72830893471_112023-F.webp',
        precio: 3000,
      },
      {
        id: 3,
        nombre: 'Articulo2',
        descripcion: 'Descripcion del articulo',
        src: 'https://http2.mlstatic.com/D_NQ_NP_2X_930654-MLU72830893471_112023-F.webp',
        precio: 3000,
      },
      {
        id: 4,
        nombre: 'Articulo2',
        descripcion: 'Descripcion del articulo',
        src: 'https://http2.mlstatic.com/D_NQ_NP_2X_930654-MLU72830893471_112023-F.webp',
        precio: 3000,
      },
      {
        id: 5,
        nombre: 'Articulo2',
        descripcion: 'Descripcion del articulo',
        src: 'https://http2.mlstatic.com/D_NQ_NP_2X_930654-MLU72830893471_112023-F.webp',
        precio: 3000,
      },
      {
        id: 6,
        nombre: 'Articulo2',
        descripcion: 'Descripcion del articulo',
        src: 'https://http2.mlstatic.com/D_NQ_NP_2X_930654-MLU72830893471_112023-F.webp',
        precio: 3000,
      },
      {
        id: 7,
        nombre: 'Articulo2',
        descripcion: 'Descripcion del articulo',
        src: 'https://http2.mlstatic.com/D_NQ_NP_2X_930654-MLU72830893471_112023-F.webp',
        precio: 3000,
      }
    ]
    
  },
  
}

function App() {
  const { listaProducto, listaProducto2, listaProducto3, listaProducto4 } = response;

  return (
    <>
    <body>
      <NavBar/>
      <div className='cuerpo'>
        <ProductCardContainer
          NombreCategoria={listaProducto.NombreCategoria}
        >
            {listaProducto.posts.map((post) => {
                return (
                  <>
                    <ProductCard nombre={post.nombre} descripcion={post.descripcion} src={post.src} precio={post.precio}/>
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
                    <ProductCard nombre={post.nombre} descripcion={post.descripcion} src={post.src} precio={post.precio}/>
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
                    <ProductCard nombre={post.nombre} descripcion={post.descripcion} src={post.src} precio={post.precio}/>
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
                    <ProductCard nombre={post.nombre} descripcion={post.descripcion} src={post.src} precio={post.precio}/>
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
