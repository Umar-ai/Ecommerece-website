import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Outlet, Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Home from './Components/Home.jsx'
import Contact from './Components/Contact.jsx'
import { CartProvider } from './Context/Context.jsx'
import Products from './Components/Product.jsx'
import Cart from './Components/Cart.jsx'
import Productdetail from './Components/Productdetail.jsx'



const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>
      <Route path='' element={<Home/>}/>
      <Route path='Products' element={<Products/>}/>
      <Route path='contact' element={<Contact/>}/>
      <Route path='Cart' element={<Cart/>}/>
      <Route path='/product/:id' element={<Productdetail/>}/>
      
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CartProvider>

      <RouterProvider router={router}/>
      {/* <App/> */}
    </CartProvider>
  </React.StrictMode>,
)
