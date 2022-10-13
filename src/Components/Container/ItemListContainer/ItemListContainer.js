import { useEffect } from "react";
import { ItemList } from "../../ItemList/ItemList";
import { products } from "../../../assets/productos";
import { customFecth } from "../../utils/customFetch";
import { useState, } from "react";
import { useParams } from "react-router-dom";
import { ItemCount } from "../../ItemCount/ItemCount";
import { db } from '../../firebase/Firebase'
import { doc, getDocs, collection, query, where} from 'firebase/firestore';



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

// setLoading(true)
// customFecth(products)
// .then(res => { 
//     setLoading(false)
//     setListProducts(res)
//     if (idCategoria) {
//         const productosFiltrados = products.filter (products => products.categoria === idCategoria)
//         setListProducts(productosFiltrados)
//     } else {
//         setListProducts(products)
//     }
// });



const onAdd = (quantity) => {
    console.log(`compraste ${quantity} unidades`);
}
 
    return (
        <>

    <h1> {greeting}</h1> 
    {
        loading ? 
        <text> Aguarde mientras se cargan los productos</text>:
      
       <ItemList listProducts={listProducts}/> }

       <ItemCount initial={0} stock={5} onAdd={onAdd} />

    </>

    ) 
}


export default ItemListContainer