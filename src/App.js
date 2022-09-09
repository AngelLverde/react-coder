import React from "react";
import Navbar from "./Header/Navbar"
import {ItemListContainer} from './Header/ItemListContainer/ItemListContainer';
import { CartWidget } from "./Header/CartWidget/CartWidget";


const App = () => {
  
  return (

    
<>
    <Navbar/>
    <ItemListContainer propgreeting = "Bienvenidos a Cartagena" />
     <CartWidget/>
    </>
  )
}

export default App 
