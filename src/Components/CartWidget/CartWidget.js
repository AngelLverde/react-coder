import React from "react";
import '../CartWidget/CartWidget.css';
import { useCartContext } from "../../Context/CartContext";



  export const CartWidget = () => {
  const {totalProducts} = useCartContext(); 
   
    return (  
      <>
      
      
        <i className="bi-cart"> </i>
        <sapan> {totalProducts() || ''} </sapan>

        </>
   );
}




export default CartWidget;