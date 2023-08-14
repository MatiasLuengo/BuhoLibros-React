import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './routes/App.jsx'
import './styles.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Contact } from './routes/Contact.jsx'
import { NavBar } from './components/NavBar.jsx'
import { Footer } from './components/Footer.jsx'
import { Product } from './routes/Product.jsx'
import { Category } from './routes/Category.jsx'
import { SubCategory } from './routes/SubCategory.jsx'
import { BestSellers } from './routes/BestSellers.jsx'
import { Cart } from './routes/Cart.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <NavBar></NavBar>
      <Routes>
        <Route path='/' element={<App />}/>
        <Route path='/carrito' element={<Cart />}/>
        <Route path='/contacto' element={<Contact />}/>
        <Route path='/productos/:productId' element={<Product />}/>
        <Route path='/categorias/:title' element={<Category />}/>
        <Route path='/categorias/:category/:subCategory' element={<SubCategory />}/>
        <Route path='/categorias/BestSellers' element={<BestSellers />}/>
      </Routes>
      <Footer></Footer>
    </BrowserRouter>
  </React.StrictMode>,
)
