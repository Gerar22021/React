import Style from './ProductCard.module.css'

type ProductCardProps = {
    nombre: string;
    descripcion: string;
    src?: string;
    precio: number;
}

function ProductCard(props: ProductCardProps){
    const { nombre, descripcion, src , precio } = props;

    return(
        <>
            <article className={Style.article}>
                <img className={Style.img} src={src}/>
                <h2 className={Style.title}>{nombre}</h2>
                <h3 className={Style.precio}>$ {precio}</h3>
                <h4 className={Style.descripcion}>{descripcion}</h4>
                <a className={Style.boton} href="#"></a><button>Comprar</button>
            </article>
        </>
    )
}

export default ProductCard;