import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import ItemListContainer from "./Components/Container/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./Components/ItemDetailContainer/ItemDetailContainer";

// import Productos from "./Components/Productos";


const App = () => {

const mensaje ='Bienvenidos a Cartagena Showroom';


  return (
    <> 
    <Navbar/>
    <ItemListContainer greeting ={mensaje}/>
    < ItemDetailContainer/>
    
    </>
  )
}

export default App 