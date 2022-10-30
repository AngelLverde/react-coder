import React from "react";
import { useState} from "react"
import { useCartContext } from "../../Context/CartContext";
import { Link } from "react-router-dom";
import CartView from "../CartView/CartView";
import './Cart.css';
import { db } from '../firebase/Firebase'
import { collection, addDoc, serverTimestamp, doc, updateDoc } from "firebase/firestore";
import Swal from 'sweetalert2';

const Cart = () => {
    const { cart, totalPrice, clearCart,} = useCartContext();
    const [ userData, SetUserData] = useState({});
    const [ventasCollection, setVentasCollection] = useState();
    
    const inputChange = (event) => {
        SetUserData ({
            ...userData, [event.target.name] : event.target.value
        })
    }


    const finalizarCompra = () =>{
    if ( userData.Nombre !== "" && userData.Apellido !== "" && userData.Email === userData.VerifyEmail) {
        const ventasCollection = collection(db, "ventas");
        addDoc(ventasCollection, {
            comprador: userData,
            items: cart,
            date: serverTimestamp(),
            total: totalPrice()
    
        })

        .then((result)=>{
            setVentasCollection(result.id);
            cart.forEach(products => {
                actualizarStock(products);
            });

           

           Swal.fire('Felicitaciones, la compra se realizó con éxito!', {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                });
            })
            
            setTimeout(()=>{
            clearCart();    
            },3000)


            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'No completo bien sus datos',
                    footer: '<a href="">Why do I have this issue?</a>'
                  })
                  setTimeout(()=>{
                    clearCart();    
                    },3000)
            
           
        } 
    
    
        const actualizarStock = (products) => {
            const updateStock = doc(db, "lista de productos", "e3gH925hTbAv4kOfpZjb"); 
            updateDoc(updateStock, {stock: (products.stock - products.quantity)});
        }



   

}


if (cart.length === 0 ) {
    return (
        <>
        
        <p> No hay elementos en el carrito</p>
        <Link to='/'> Agregar productos </Link>
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
            <button className="finalizar-compra" onClick={clearCart}> Vaciar Carrito</button>

            <div>

    <h2> Antes de Terminar, por favor complete el siguiente formulario</h2>

    <form className="formulario">
<div>
    <input type="text" placeholder="Nombre Completo"  name="Nombre" onChange={inputChange} required></input>
</div>
<div>
<input type="text" placeholder="Apellido"  name="Apellido" onChange={inputChange} required></input>
</div>
<div>
<input type="text" placeholder="Email"  name="Email" onChange={inputChange} required></input>
</div>
<div>
<input type="text" placeholder="Verificar email" accept=""  name="VerifyEmail" onChange={inputChange} required></input>
</div>
<div>
<button className="finalizar-compra" type="Submit" onClick={finalizarCompra}>Enviar y finalizar compra</button>
  <Link className to="/"><button className="finalizar-compra">Cancelar</button></Link>
</div>    
    </form>
   
</div>
        </>
        
       
    )
}

export default Cart 