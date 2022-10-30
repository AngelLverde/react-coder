import React from "react";
import { useCartContext } from "../../Context/CartContext";
import './CartView.css';


const CartView = ({product}) => {
 const {removeItem} = useCartContext (); 

    return (
        <>
    <div className="itemView">
    <div >
        <img className="imagen-cart" src={product.image} alt={product.title} />
<div>
    <div>
    <p> Titulo: {product.title}</p>
    </div>
   <div><p> Cantidad: {product.quantity}</p> </div>
   <div> <p> Precio: ${product.price}</p> </div>
   <div> <p> Subtotal: ${product.quantity * product.price} </p></div>
   <div> 
   <button className="finalizar-compra" onClick={() => {removeItem(product.id)}}> Eliminar producto</button>
   </div>
    
</div>
        </div>
    </div>
       
        </>
    )
}

export default CartView