type ProductCardProps = {
    nombre: string;
    descripcion: string;
    src?: string;
    precio: number;
}

function ProductCard(props: ProductCardProps){
    const { nombre, descripcion, src = 'https://www.shutterstock.com/image-vector/default-ui-image-placeholder-wireframes-600nw-1037719192.jpg', precio } = props;

    return(
        <>
            <article>
                <img src={src}/>
                <h2>{nombre}</h2>
                <h4>{descripcion}</h4>
                <h3>{precio}</h3>
            </article>
        </>
    )
}

export default ProductCard;