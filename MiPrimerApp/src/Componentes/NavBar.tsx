import style from './NavBar.module.css'

type NavBarProps = {
    src: string;
}

function NavBar(props: NavBarProps){
    const { src = 'https://www.shutterstock.com/image-vector/default-ui-image-placeholder-wireframes-600nw-1037719192.jpg' } = props;
    return(
        <>
            <header className={style.header}>
                <div>
                    <img className={style.logo} src={src} alt="logo de la marca" />
                </div>
                <nav>
                    <ul className={style.navlinks}>
                        <li><a href="#">Categorías</a></li>
                        <li><a href="#">Ofertas</a></li>
                        <li><a href="#">Cupones</a></li>
                        <li><a href="#">Supermercado</a></li>
                        <li><a href="#">Moda</a></li>
                        <li><a href="#">Vender</a></li>
                        <li><a href="#">Ayuda</a></li>
                    </ul>
                </nav>
                <a href="#" className='btn'><button>Carrito</button></a>
            </header>
        </>
    );
}

export default NavBar;