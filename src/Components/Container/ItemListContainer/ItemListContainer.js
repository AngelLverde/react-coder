import { useEffect } from "react";
import { ItemList } from "../../ItemList/ItemList";
import { products } from "../../../assets/productos";
import { customFecth } from "../../utils/customFetch";
import { useState, } from "react";
// const onAddd = (quantity) => {
//     console.log(` Compraste ${quantity} unidades `);
// }



 const ItemListContainer = ({greeting}) => {

// const [ listProducts,setListProducts] = useState([])
// const [loading, setLoading] = useState(true)

// useEffect (()=> {
//     setLoading(true)
// customFecth(products)
// .then(res => { 
//     setLoading(false)
//     setListProducts(res)
// })
// }, [])
// console.log (listProducts)
 
    return (
        <>

    <h1> {greeting}</h1>
    {/* {
        loading ?
        <text> Aguarde mientras se cargan los productos</text>:
    

    // <ItemList listProducts={listProducts}/> */}
    
    </>

    )
}


export default ItemListContainer