
import React from "react";
import { useState } from "react";
import {Link} from "react-router-dom";
import { ItemCount } from '../ItemCount/ItemCount'; 
import { CartContext, useCartContext } from "../../Context/CartContext";
import { Item } from "../Item/Item";






 const ItemDetail = ({ product }) => {
    const [goToCart, setGoToCart] = useState(false);
    const { cart, addItem } = useCartContext(CartContext);

    const onAdd = (quantity) => {
        setGoToCart(true);
       addItem (product, quantity); 
    };
    
    return (
        <> 
       <p>{product.product} </p>
       <p> {product.description}</p>
       <img src={product.image} />
       { 
             goToCart 
              ? <Link to='/cart' > <button> Finalizar la compra</button></Link>
           :<ItemCount initial={0} stock = {product.stock} on add={onAdd} />
}
       </>

    
    )
};

 export default ItemDetail;