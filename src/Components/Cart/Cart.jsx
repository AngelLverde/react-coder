import React from "react";
import { useCartContext } from "../../Context/CartContext";
import { Link } from "react-router-dom";
import { products } from "../../assets/productos";
import cartView from "../CartView/CartView";

const Cart = () => {
    const { cart, totalPrice } = useCartContext(); 

if (cart.length === 0) {
    return (
        <>
        <p> No hay elementos en el carrito</p>
        <Link to='/'> Seguir comprando </Link>
        </>
    );
}


    return (
        <> 
         { 
         cart.map(product => <cartView key={ product.id} product={product} /> )
         }
         <p> 
         total: {totalPrice()}
            </p>
        </>
       
    )
}

export default Cart 