import type { ReactNode } from "react";
import style from './ProductCardContainer.module.css'

type ProductCardContainerProps = {
    NombreCategoria: string;
    children: ReactNode;
}

function ProductCardContainer(props: ProductCardContainerProps)  {
    const { NombreCategoria, children } = props;

    return(
        <section className={style.container}>
            <h2>{NombreCategoria}</h2>
            <div className={style.postContainer}>{children}</div>
        </section>
    )
}

export default ProductCardContainer;