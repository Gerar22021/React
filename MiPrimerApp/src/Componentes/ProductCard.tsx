import Style from './ProductCard.module.css'

type ProductCardProps = {
    nombre: string;
    descripcion: string;
    src?: string;
    precio: number;
}

function ProductCard(props: ProductCardProps){
    const { nombre, descripcion, src = 'https://www.shutterstock.com/image-vector/default-ui-image-placeholder-wireframes-600nw-1037719192.jpg' , precio } = props;

    return(
        <>
            <article className={Style.article}>
                <img className={Style.img} src={src}/>
                <div className={Style.content}>
                    <h2 className={Style.title}>{nombre}</h2>
                    <h3 className={Style.precio}>$ {precio}</h3>
                    <h4 className={Style.descripcion}>{descripcion}</h4>
                    <a className={Style.boton} href="#"></a><button>Comprar</button>
                </div>
            </article>
        </>
    )
}

export default ProductCard;