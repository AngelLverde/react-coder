import React from "react";
import { useCartContext } from "../../Context/CartContext";


const CartView = ({product}) => {
 const {removeProduct} = useCartContext (); 

    return (
        <div className="itemView">
            <img src={product.image} alt={product.title} />
<div>
    <p> Titulo: {product.title}</p>
    <p> Cantidad: {product.quantity}</p>
    <p> Precio: {product.price}</p>
    <p> Subtotal: ${product.quantity * product.price} </p>
    <button onClick={() => removeProduct(product.id)} > Eliminar</button>
</div>
        </div>
    )
}

export default CartView