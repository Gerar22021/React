import './App.css'
import ProductCardContainer from './Componentes/ProductCardContainer'
import ProductCard from './Componentes/ProductCard'

type Post = {
  id: number;
  nombre: string;
  descripcion: string;
  precio: number;
  src?: string;
}

type Response = {
  listaProducto: {
    NombreCategoria: string,
    posts: Post[];
  }
}

const response: Response = {
  listaProducto: {
    NombreCategoria: 'OFERTAS',
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
      }
    ]
  }
  
}

function App() {
  const { listaProducto } = response;

  return (
    <div>
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
    </div>
  )
}

export default App
