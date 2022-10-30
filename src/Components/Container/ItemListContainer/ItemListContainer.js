import { useEffect } from "react";
import { ItemList } from "../../ItemList/ItemList";
import { useState, } from "react";
import { useParams } from "react-router-dom";
import { db } from '../../firebase/Firebase'
import {getDocs, collection, query, where} from 'firebase/firestore';
import "./ItemListContainer.css";



const ItemListContainer = ({greeting}) => {

const [ listProducts,setListProducts] = useState([])
const {idCategoria} = useParams ();
const [loading, setLoading] = useState([true])


useEffect (()=> {


const productsCollection = collection(db, 'lista de productos'); 

const productsCategory = query(productsCollection, where('categoria', '==', `${idCategoria}` ))
let productosFiltrados = (idCategoria === undefined ? productsCollection : productsCategory)


getDocs(productosFiltrados)
.then((data) => {
    const lista = data.docs.map ((product) =>{
        return {
            
        ...product.data(),
        id: product.id
        }
        })
   setListProducts(lista)
    })
    .finally (()=> {
        setLoading(false);
    })
}, [idCategoria])

 
    return (
        <>
        <h1 className="texto">{greeting}</h1> 
<div className="flex-container">



    {
        loading ? 
        <text > Aguarde mientras se cargan los productos</text>:
        
       
      
       <ItemList  listProducts={listProducts}/> }

       
</div>
    

    </>

    ) 
}


export default ItemListContainer