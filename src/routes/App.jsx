import { ItemListContainer } from '../components/ItemListContainer'

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
        <swiper-slide><img className="slideImg" src="./src/assets/slide1.png" alt="slide1" /></swiper-slide>
        <swiper-slide><img className="slideImg" src="./src/assets/slide2.png" alt="slide2" /></swiper-slide>
        <swiper-slide><img className="slideImg" src="./src/assets/slide3.png" alt="slide3" /></swiper-slide>
      </swiper-container>
      <h2>Nuestra Coleccion!</h2>
      <ItemListContainer getMethod={"getBooks"}/>
    </>
  )
}

export default App
