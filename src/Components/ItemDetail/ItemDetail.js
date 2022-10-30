
import React from "react";
import { useState } from "react";
import {Link} from "react-router-dom";
import { ItemCount } from '../ItemCount/ItemCount'; 
import {  useCartContext } from "../../Context/CartContext";
import './ItemDetail.css'



 const ItemDetail = ({ product }) => {
    const [goToCart, setGoToCart] = useState(false);
    const {addItem } = useCartContext();

    const onAdd = (quantity) => {
       addItem (product, quantity); 
       setGoToCart(true)
    };
    
    return (
        <> 
        <div className="itemcss"> 
        <p>{product.product} </p>
       <p> {product.description}</p>
       <img className="imagen-producto"  src={product.image} alt={product.product} />
       <h5>{"$"+ product.price}</h5>
       { 
             goToCart 
              ? 
              <>
              <Link to='/cart' > <button> Ir al carrito </button></Link>

              <Link to="/"><button>Seguir Comprando</button></Link>  
              </>
           :
           <ItemCount initial={1} stock = {product.stock} onAdd={onAdd} />
}
        </div>
       
      </>

    
    )
};

 export default ItemDetail;