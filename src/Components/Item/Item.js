import React from 'react'
import  "./ItemStyle.css";
import { } from '../../assets/productos';


const Item = ({ product }) => { 

    return(

        <> 
        <div className='itemcontainer'>
        <p> {product.product}</p> 
       <img src={ product.image} alt="" /> 
         <h2 className='precio-producto'>${product.price}</h2>
        </div>
      
       
        </>
        
    )
   
   
}

export  { Item };