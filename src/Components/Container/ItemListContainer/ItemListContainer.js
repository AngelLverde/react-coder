import React from "react";
import { ItemCount } from "../../ItemCount/ItemCount";

const onAddd = (quantity) => {
    console.log(` Compraste ${quantity} unidades `);
}

 const ItemListContainer = ({greeting}) => {
    return (
        <>

    <h1> {greeting}</h1>
    <ItemCount initial={1} stock ={10} onAdd={onAddd} />



    </>
    )
}


export default ItemListContainer