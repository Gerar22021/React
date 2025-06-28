import ProductCard from './ProductCard';

type Post = {
  id: number;
  nombre: string;
  descripcion: string;
  src?: string;
  precio: number;
  categoria: string;
}

type ProductListProps = {
  productos: Post[];
  carrito: Post[];
  setCarrito: React.Dispatch<React.SetStateAction<Post[]>>;
  contProduct: number;
  setContProduct: React.Dispatch<React.SetStateAction<number>>;
};

export default function ProductList({
  productos,
  carrito,
  setCarrito,
  contProduct,
  setContProduct
}: ProductListProps) {
  return (
    <>
      {productos.map((post) => (
        <ProductCard
          key={post.id}
          id={post.id}
          nombre={post.nombre}
          descripcion={post.descripcion}
          src={post.src}
          precio={post.precio}
          categoria={post.categoria}
          carrito={carrito}
          setCarrito={setCarrito}
          contProduct={contProduct}
          setContProduct={setContProduct}
        />
      ))}
    </>
  );
}