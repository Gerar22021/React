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
        src:'https://www.shutterstock.com/image-vector/default-ui-image-placeholder-wireframes-600nw-1037719192.jpg',
        precio: 289.107,
      },
      {
        id: 2,
        nombre: 'Olla eléctrica a presión Electrolux PCC20 - Negro 1kW 50Hzx60Hz',
        descripcion: 'Material de la tapa. La tapa está fabricada en acero inoxidable de la más alta resistencia, lo cual le permite soportar impactos. Además, tiene mayor resistencia a la corrosión, lo que hace que tenga más vida útil.',
        precio: 174.390,
      },
      {
        id: 3,
        nombre: 'Pava Eléctrica Atma Pe1821ap2 1.7lts Selector De Temperatura',
        descripcion: 'La Pava Eléctrica Atma Pe1821ap2 es una herramienta esencial para la preparación de bebidas calientes. Con una capacidad de 1.7 litros y características avanzadas, esta pava eléctrica permite controlar la temperatura del agua según tus preferencias.',
        precio: 37.927,
      },
      {
        id: 4,
        nombre: 'Bicicleta mountain bike Topmega Regal R29 tamaño del cuadro M color blanco/rojo/naranja',
        descripcion: 'Lo que tenés que saber de este producto: Género: Sin género. Rodado: 29. Material del cuadro: aluminio. Con frenos: Disco mecánico. Con cambios delanteros Shimano Tourney TY200 y traseros Shimano Tourney TZ510. Peso: 13kg.',
        precio: 479.040,
      },
      {
        id: 5,
        nombre: 'Articulo2',
        descripcion: 'Descripcion del articulo',
        precio: 3000,
      },
      {
        id: 6,
        nombre: 'Articulo2',
        descripcion: 'Descripcion del articulo',
        precio: 3000,
      },
      {
        id: 7,
        nombre: 'Articulo2',
        descripcion: 'Descripcion del articulo',
        precio: 3000,
      }
    ]
    
  },
  listaProducto2: {
    NombreCategoria: 'OFERTAS DEL DIA',
    posts: [
      {
        id: 1,
        nombre: 'Articulo1',
        descripcion: 'Descripcion del articulo',
        precio: 3000,
      },
      {
        id: 2,
        nombre: 'Articulo2',
        descripcion: 'Descripcion del articulo',
        precio: 3000,
      },
      {
        id: 3,
        nombre: 'Articulo2',
        descripcion: 'Descripcion del articulo',
        precio: 3000,
      },
      {
        id: 4,
        nombre: 'Articulo2',
        descripcion: 'Descripcion del articulo',
        precio: 3000,
      },
      {
        id: 5,
        nombre: 'Articulo2',
        descripcion: 'Descripcion del articulo',
        precio: 3000,
      },
      {
        id: 6,
        nombre: 'Articulo2',
        descripcion: 'Descripcion del articulo',
        precio: 3000,
      },
      {
        id: 7,
        nombre: 'Articulo2',
        descripcion: 'Descripcion del articulo',
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
        precio: 3000,
      },
      {
        id: 2,
        nombre: 'Articulo2',
        descripcion: 'Descripcion del articulo',
        precio: 3000,
      },
      {
        id: 3,
        nombre: 'Articulo2',
        descripcion: 'Descripcion del articulo',
        precio: 3000,
      },
      {
        id: 4,
        nombre: 'Articulo2',
        descripcion: 'Descripcion del articulo',
        precio: 3000,
      },
      {
        id: 5,
        nombre: 'Articulo2',
        descripcion: 'Descripcion del articulo',
        precio: 3000,
      },
      {
        id: 6,
        nombre: 'Articulo2',
        descripcion: 'Descripcion del articulo',
        precio: 3000,
      },
      {
        id: 7,
        nombre: 'Articulo2',
        descripcion: 'Descripcion del articulo',
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
        precio: 3000,
      },
      {
        id: 2,
        nombre: 'Articulo2',
        descripcion: 'Descripcion del articulo',
        precio: 3000,
      },
      {
        id: 3,
        nombre: 'Articulo2',
        descripcion: 'Descripcion del articulo',
        precio: 3000,
      },
      {
        id: 4,
        nombre: 'Articulo2',
        descripcion: 'Descripcion del articulo',
        precio: 3000,
      },
      {
        id: 5,
        nombre: 'Articulo2',
        descripcion: 'Descripcion del articulo',
        precio: 3000,
      },
      {
        id: 6,
        nombre: 'Articulo2',
        descripcion: 'Descripcion del articulo',
        precio: 3000,
      },
      {
        id: 7,
        nombre: 'Articulo2',
        descripcion: 'Descripcion del articulo',
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
                    <ProductCard nombre={post.nombre} descripcion={post.descripcion} precio={post.precio}/>
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
                    <ProductCard nombre={post.nombre} descripcion={post.descripcion} precio={post.precio}/>
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
                    <ProductCard nombre={post.nombre} descripcion={post.descripcion} precio={post.precio}/>
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
                    <ProductCard nombre={post.nombre} descripcion={post.descripcion} precio={post.precio}/>
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
