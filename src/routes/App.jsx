import { ItemListContainer } from '../components/ItemListContainer';
import { Link } from "react-router-dom";
import imgInfantile from "../assets/slide1.png";
import imgMalasangre from "../assets/slide2.png";
import imgFantasticland from "../assets/slide3.png";

function App() {

  return (
    <>
      <swiper-container
      slides-per-view="1" 
      speed="300" 
      loop="true"
      css-mode="true"
      navigation="true" 
      pagination="true"
      autoplay="true">
        <swiper-slide><Link to={`/categorias/Infantiles`}><img className="slideImg" src={imgInfantile} alt="Infantiles" /></Link></swiper-slide>
        <swiper-slide><Link to={`/productos/U0r7x5JmicheVycuw92I`}><img className="slideImg" src={imgMalasangre} alt="Malasangre" /></Link></swiper-slide>
        <swiper-slide><Link to={`/productos/5Vam5bUmKok0SPW1nX5d`}><img className="slideImg" src={imgFantasticland} alt="Fantasticland" /></Link></swiper-slide>
      </swiper-container>
      <h2 className='greeting'>Nuestra Coleccion!</h2>
      <ItemListContainer getMethod={"getBooks"}/>
    </>
  )
}

export default App
