import { SecurityRounded } from "@mui/icons-material";
import React from "react";
import { useState } from "react";
import {Link} from "react-router-dom";
import { ItemCount } from '../ItemCount/ItemCount'; 





 const ItemDetail = ({data}) => {
    const [goToCart, setGoToCart] = useState(false)

    const onAdd = (quantity) => {
        setGoToCart(true);
    }
    return (
        <div> 
 <link to={`/detalle/${data.id}`} className='itemcontainer'>
       
       <p>{data.products} </p>
       <p> {data.description}</p>
       <img src={data.image} />
{
    goToCart
    ? <Link to='/cart'> Finalizar compra</Link>
    :<ItemCount initial={0} stock = {5} onAdd={onAdd} />
}
 </link>
        </div>
       
       
        
    );
}
 export default ItemDetail;