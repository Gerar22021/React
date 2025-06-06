import style from './NavBar.module.css'
import logo from'./mi_logo.png'

function NavBar(){
    return(
        <>
            <header className={style.header}>
                <div>
                    <img className={style.logo} src={logo} alt="logo de la marca" />
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