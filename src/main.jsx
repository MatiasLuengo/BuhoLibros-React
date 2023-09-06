import React, {useEffect} from 'react'
import ReactDOM from 'react-dom/client'
import App from './routes/App.jsx'
import './styles.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { NavBar } from './components/NavBar.jsx'
import { Footer } from './components/Footer.jsx'
import { Product } from './routes/Product.jsx'
import { Category } from './routes/Category.jsx'
import { SubCategory } from './routes/SubCategory.jsx'
import { BestSellers } from './routes/BestSellers.jsx'
import { Cart } from './routes/Cart.jsx'
import { CartProvider } from './context/cartContext.jsx'
import { NotRouteMatch } from './routes/NotRouteMatch.jsx'
import { topFunction, scrollFunction } from './scripts/back-to-top.js'
import { Toaster } from 'react-hot-toast';

function Main(){
  useEffect(() => {
    let mybutton = document.getElementById("BackToTop");
    window.onscroll = function() {
      scrollFunction(mybutton);
    };
  }, []);

return(
  <React.StrictMode>
    <CartProvider>
      <BrowserRouter>
        <NavBar></NavBar>
        <Routes>
          <Route path='/' element={<App />}/>
          <Route path='/carrito' element={<Cart />}/>
          <Route path='/productos/:productId' element={<Product />}/>
          <Route path='/categorias/:title' element={<Category />}/>
          <Route path='/categorias/:category/:subCategory' element={<SubCategory />}/>
          <Route path='/categorias/BestSellers' element={<BestSellers />}/>
          <Route path='/*' element={<NotRouteMatch />} />
        </Routes>
        <Footer></Footer>
        <button onClick={topFunction} id="BackToTop"><i className='bx bx-chevrons-up'></i></button>
        <a className="btn-wpp" href="#" target="_blank" rel="noreferrer noopener">
          <i className="fa-brands fa-whatsapp"></i>
        </a>
        <Toaster   
        toastOptions={{
          success: {
            style: {
              background: 'rgb(214, 251, 214)',
              border: '1px solid green',
            },
          },
          error: {
            style: {
              background: 'rgb(253, 221, 221)',
              border: '1px solid red',
            },
          },
          style: {
            border: '1px solid black',
          },
          
        }}/>
      </BrowserRouter>
    </CartProvider>
  </React.StrictMode>
)}

ReactDOM.createRoot(document.getElementById('root')).render(<Main />)