import type { ReactNode } from "react";

type ProductCardContainerProps = {
    NombreCategoria: string;
    children: ReactNode;
}

function ProductCardContainer(props: ProductCardContainerProps)  {
    const { NombreCategoria, children } = props;

    return(
        <section>
            <h2>{NombreCategoria}</h2>
            <div>{children}</div>
        </section>
    )
}

export default ProductCardContainer;