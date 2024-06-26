import React from 'react';
import Header from './Components/Header';
import Home from './Components/Home';
import { Outlet } from 'react-router-dom';
import Footer from './Components/Footer';
import Navbar from './Components/Header';
import Contact from './Components/Contact';
import Product from './Components/Product';
import Cart from './Components/Cart';


function App() {

  return (
    <>
    <Header/>
    <Outlet/>
    <Footer/>
    
    
    </>
  )
}

export default App
