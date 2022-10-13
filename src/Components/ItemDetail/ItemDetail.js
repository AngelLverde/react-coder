
import React from "react";
import { useState } from "react";
import {Link} from "react-router-dom";
import { ItemCount } from '../ItemCount/ItemCount'; 
import {  useCartContext } from "../../Context/CartContext";







 const ItemDetail = ({ product }) => {
    const [goToCart, setGoToCart] = useState(false);
    const { cart, addItem } = useCartContext();

    const onAdd = (quantity) => {
        setGoToCart(true);
       addItem (product, quantity); 
       setGoToCart(true)
    };
    
    return (
        <> 
       <p>{product.product} </p>
       <p> {product.description}</p>
       <img src={product.image} />
       { 
             goToCart 
              ? <Link to='/cart' > <button> Finalizar la compra</button></Link>
           :<ItemCount initial={1} stock = {product.stock} onAdd={onAdd} />
}
       </>

    
    )
};

 export default ItemDetail;