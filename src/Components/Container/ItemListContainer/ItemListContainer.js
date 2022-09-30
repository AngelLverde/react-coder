import { useEffect } from "react";
import { ItemList } from "../../ItemList/ItemList";
import { products } from "../../../assets/productos";
import { customFecth } from "../../utils/customFetch";
import { useState, } from "react";
import { useParams } from "react-router-dom";


const onAddd = (quantity) => {
    console.log(` Compraste ${quantity} unidades `);
}



const ItemListContainer = ({greeting}) => {

const [ listProducts,setListProducts] = useState([])
const {idCategoria} = useParams ();
const [loading, setLoading] = useState(true)

useEffect (()=> {
    setLoading(true)
customFecth(products)
.then(res => { 
    setLoading(false)
    setListProducts(res)
    if (idCategoria) {
        const productosFiltrados = products.filter (products => products.categoria === idCategoria)
        setListProducts(productosFiltrados)
    } else {
        setListProducts(products)
    }
});


}, [idCategoria])

 
    return (
        <>

    <h1> {greeting}</h1> 
    {
        loading ?
        <text> Aguarde mientras se cargan los productos</text>:
    

    <ItemList listProducts={listProducts}/>}
    
    </>

    ) 
}


export default ItemListContainer