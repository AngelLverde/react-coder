import React from "react";
import { useCartContext } from "../../Context/CartContext";
import { Link } from "react-router-dom";
import CartView from "../CartView/CartView";
import { db } from '../firebase/Firebase'
import { collection, addDoc, serverTimestamp, doc, updateDoc } from "firebase/firestore";

const Cart = () => {
    const { cart, totalPrice, clearCart} = useCartContext(); 

const comprador = {
    nombre: 'Juan',
    apellido: 'Perez',
    email: ' juanperez@gmail.com'
};


const finalizarCompra = () =>{
    const ventasCollection = collection(db, "ventas");
    addDoc(ventasCollection, {
        comprador,
        items: cart,
        date: serverTimestamp(),
        totalPrice,

    })
    
    .then(result=>{
       console.log(result.id); 
       clearCart();
    }) 

}

const actualizarStock = () => {
    const updateStock = doc(db, "lista de productos", "e3gH925hTbAv4kOfpZjb"); 
    updateDoc(updateStock, {stock: 20});
}



if (cart.length === 0 ) {
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
         cart.map(product => <CartView key={product.id} product={product} /> )
         }
         <p> 
         total: {totalPrice()}
            </p>
            <button onClick={actualizarStock}> Finalizar Compra </button>
        </>
       
    )
}

export default Cart 