import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import ItemListContainer from "./Components/Container/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./Components/ItemDetailContainer/ItemDetailContainer";
import Cart from "./Components/Cart/Cart";
import { BrowserRouter, Routes, Route } from "react-router-dom";




// import Productos from "./Components/Productos";


const App = () => {

const mensaje ='Bienvenidos a Cartagena Showroom';


  return (
    <> 
    <BrowserRouter>
    <Navbar/>
<Routes>
  <Route path='/' element={<ItemListContainer greeting ={mensaje}/>}/>
  <Route path='/categoria/:idCategoria' element={<ItemListContainer greeting ={mensaje}/>}/>
  <Route path='/detalle/:idDetalle' element={ <ItemDetailContainer/>}/>
  <Route path='/cart' element={<Cart/>}/>
</Routes>
    
    </BrowserRouter>
   
    
    </>
  )
}

export default App 


