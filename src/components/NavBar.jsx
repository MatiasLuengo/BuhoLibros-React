import { Brand } from "./Brand";
import { CartWidget } from "./CartWidget";
import { Link } from "react-router-dom";

export const NavBar = () => {
    return (<div className="navBarGrl">
        <Brand titulo="BuhoLibros"/>
        <nav className="primaryNav">
            <div className="dropdown">
            <Link className="underlined" to={`/categorias/Novelas`}>Novelas</Link>
                <div className="dropdown_content">
                    <Link to={`/categorias/Novelas/Romanticas`}>Romanticas<p className="arrow"></p></Link>
                    <Link to={`/categorias/Novelas/Aventura`}>Aventura<p className="arrow"></p></Link>
                    <Link to={`/categorias/Novelas/Ciencia Ficcion`}>Ciencia Ficcion<p className="arrow"></p></Link>
                    <Link to={`/categorias/Novelas/Policiales`}>Policiales<p className="arrow"></p></Link>
                    <Link to={`/categorias/Novelas/Terror`}>Terror<p className="arrow"></p></Link>
                    <Link to={`/categorias/Novelas/Grandes Clasicos`}>Grandes Clasicos<p className="arrow"></p></Link>
                </div>
            </div>   
            <Link className="underlined" to={`/categorias/Ciencia, Historia y Sociedad`}>Ciencia, Historia y Sociedad</Link>
            <div className="dropdown">
            <Link className="underlined" to={`/categorias/Salud y Bienestar`}>Salud y Bienestar</Link>
                <div className="dropdown_content">
                    <Link to={`/categorias/Salud y Bienestar/Psicologia`}>Psicologia<p className="arrow"></p></Link>
                    <Link to={`/categorias/Salud y Bienestar/Espiritualidad`}>Espiritualidad<p className="arrow"></p></Link>
                    <Link to={`/categorias/Salud y Bienestar/Familia y Crianza`}>Familia y Crianza<p className="arrow"></p></Link>
                </div>
            </div> 
            <Link className="underlined" to={`/categorias/Infantiles`}>Infantiles</Link>
            <Link className="underlined" to={`/categorias/BestSellers`}>BestSellers</Link>
            {/* <a className="underlined" href="/Contacto">Autores</a> */}
        </nav>
        <CartWidget/>
    </div>);
};