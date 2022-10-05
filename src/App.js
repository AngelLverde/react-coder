import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import ItemListContainer from "./Components/Container/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./Components/ItemDetailContainer/ItemDetailContainer";
import Cart from "./Components/Cart/Cart";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CartProvider from './Context/CartContext';





const App = () => {

const mensaje ='Bienvenidos a Cartagena Showroom';


  return (
    <> 
    <BrowserRouter>
    <CartProvider>
    <Navbar/>
    <Routes>
  <Route path='/' element={<ItemListContainer greeting ={mensaje}/>}/>
  <Route path='/categoria/:idCategoria' element={<ItemListContainer greeting ={mensaje}/>}/>
  <Route path='/detalle/:detalleId' element={ <ItemDetailContainer/>}/>
  <Route path='/cart' element={<Cart/>}/>
</Routes>
       </CartProvider>

    
    </BrowserRouter>
   
    
    </>
  )
}

export default App 


