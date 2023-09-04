import { ItemListContainer } from '../components/ItemListContainer';
import { Link } from "react-router-dom";

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
        <swiper-slide><Link to={`/categorias/Infantiles`}><img className="slideImg" src="../public/assets/slide1.png" alt="Infantiles" /></Link></swiper-slide>
        <swiper-slide><Link to={`/productos/U0r7x5JmicheVycuw92I`}><img className="slideImg" src="../public/assets/slide2.png" alt="Malasangre" /></Link></swiper-slide>
        <swiper-slide><Link to={`/productos/5Vam5bUmKok0SPW1nX5d`}><img className="slideImg" src="../public/assets/slide3.png" alt="Fantasticland" /></Link></swiper-slide>
      </swiper-container>
      <h2 className='greeting'>Nuestra Coleccion!</h2>
      <ItemListContainer getMethod={"getBooks"}/>
    </>
  )
}

export default App
