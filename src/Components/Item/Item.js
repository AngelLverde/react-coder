import React from 'react';
import {Link} from 'react-router-dom';
import  "./ItemStyle.css";




const Item = ({ product }) => { 
   

    return(
 
        <> 
      
         <div className='column'>
         <p className='product'> {product.product}</p> 
        <img className='imagenes-productos' src={product.image} alt="imagen del producto" />
        <p className='precio-producto'> $ {product.price}</p>
        <Link to= {`/detalle/${product.id}`}><button className='boton-detalles'> Mas detalles </button></Link>
            </div>
        
      
    

       
        </>
        
    )
   
   
}

export  { Item };