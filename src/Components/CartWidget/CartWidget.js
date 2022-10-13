import React from "react";
import '../CartWidget/CartWidget.css';
import { useCartContext } from "../../Context/CartContext";
import { NavLink } from "react-router-dom";



  export const CartWidget = () => {
  const {totalProducts} = useCartContext(); 
   
    return (  
      <>
      <NavLink to="/cart">
      <i className="bi-cart"></i>
        <span> {totalProducts() || ''} </span>

      </NavLink>
      
       

        </>
   );
}




export default CartWidget;