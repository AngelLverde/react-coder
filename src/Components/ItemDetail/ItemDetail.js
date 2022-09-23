import React from "react";

export const customFecth = (products) => {
    return new Promise((resolve, reject) => {
        setTimeout(()=> {
            resolve(products)
        }, 2000)
        
    })
}

export const ItemDetail = ({data}) => {
    return (
        
        <div className='itemcontainer'>
       
<h1> {data.products}</h1>
       <p> {data.description}</p>
       <img src={data.image} />

        </div>
        
    );
}
 export default ItemDetail;