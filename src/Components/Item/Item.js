import React from 'react'

import { } from '../../assets/productos';


const Item = ({ product }) => { 

    return(

        <> 
       <p> {product.product}</p> 
       <img src={ product.image} alt="" /> 
         <h2>${product.price}</h2>
       
        </>
        
    )
   
   
}

export  { Item };