import { useState } from 'react';
import Style from './ProductCard.module.css'

type Post = {
  id: number;
  nombre: string;
  descripcion: string;
  src?: string;
  precio: number;
  categoria: string;
}

type ProductCardProps = {
    id: number;
    nombre: string;
    descripcion: string;
    src?: string;
    precio: number;
    categoria: string;
    carrito: Post[];
    setCarrito: React.Dispatch<React.SetStateAction<Post[]>>;
    contProduct: number;
    setContProduct: React.Dispatch<React.SetStateAction<number>>;
}

function ProductCard(props: ProductCardProps){
    const {id, nombre, descripcion, src = 'https://www.shutterstock.com/image-vector/default-ui-image-placeholder-wireframes-600nw-1037719192.jpg' , precio, categoria, setContProduct, contProduct, carrito, setCarrito } = props;
    const [enCarrito, setEnCarrito] = useState(false)

    function handeClick (event: { preventDefault: () => void; }) {
      event.preventDefault();
      if(carrito.find((post) => post.id===id)){
        setCarrito(() => carrito.filter((post) => post.id !== id));
        setContProduct(contProduct-1);
      } else {
        setCarrito(() => [...carrito, {id: id, nombre: nombre, descripcion: descripcion, precio: precio, categoria: categoria }])
        setContProduct(contProduct+1);
      }
      setEnCarrito(!enCarrito)
      
  }

    return(
        <>
            <article className={Style.article}>
                <img className={Style.img} src={src}/>
                <div className={Style.content}>
                    <h2 className={Style.title}>{nombre}</h2>
                    <h3 className={Style.precio}>$ {precio}</h3>
                    <h4 className={Style.descripcion}>{descripcion}</h4>
                    <a className={Style.boton}  href="#"></a><button>Comprar</button>
                    {carrito.find((post) => post.id===id)? (<a className={Style.boton} onClick={handeClick} href="#"><button>quitar del carrito</button></a>)
                    : (<a className={Style.boton} onClick={handeClick} href="#"><button>Agregar al carrito</button></a>)}
                </div>
            </article>
        </>
    )
}

export default ProductCard;