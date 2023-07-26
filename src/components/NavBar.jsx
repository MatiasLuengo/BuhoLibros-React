import { Brand } from "./Brand";
import { CartWidget } from "./CartWidget";

export const NavBar = () => {
    return (<div className="navBarGrl">
        <Brand titulo="BuhoLibros"/>
        <nav className="primaryNav">
            <a href="#">Novelas</a>
            <a href="#">Ciencia, Historia y Sociedad</a>
            <a href="#">Salud y Bienestar</a>
            <a href="#">Infantiles</a>
            <a href="#">BestSellers</a>
            <a href="#">Autores</a>
        </nav>
        <CartWidget/>
    </div>);
};