import React from 'react';
import {Link} from 'react-router-dom';
import {} from '../../assets/productos'
import  "./ItemStyle.css";




const Item = ({ product }) => { 
   

    return(
 
        <> 

        <p> {product.product}</p> 
        <img className='imagenes-productos' src={ product.image} alt="" />
        <Link to= {`/detalle/${product.id}`}><button> Mas detalles </button></Link>
      
        </>
        
    )
   
   
}

export  { Item };