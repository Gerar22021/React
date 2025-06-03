import style from './NavBar.module.css'

function NavBar(){
    return(
        <nav className={style.nav}>
            <div>
                <h1>Venta Libre</h1>
            </div>
        </nav>
    );
}

export default NavBar;