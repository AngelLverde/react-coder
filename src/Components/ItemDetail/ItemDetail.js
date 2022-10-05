
import React from "react";
import { useState } from "react";
import {Link} from "react-router-dom";
import { ItemCount } from '../ItemCount/ItemCount'; 
import { useCartContext } from "../../Context/CartContext";





 const ItemDetail = ({ product }) => {
    const [goToCart, setGoToCart] = useState(false);
    const {addProduct} = useCartContext ()

    const onAdd = (quantity) => {
        setGoToCart(true);
        addProduct (product, quantity); 
    }
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