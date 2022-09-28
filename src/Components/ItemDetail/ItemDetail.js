import React from "react";
import { Link } from "react-router-dom";




export const ItemDetail = ({data}) => {
    return (
        <link to={`/detalle/${data.id}`} className='itemcontainer'>
       
       <p>{data.products} </p>
              <p> {data.description}</p>
              <img src={data.image} />
       
        </link>
       
        
    );
}
 export default ItemDetail;