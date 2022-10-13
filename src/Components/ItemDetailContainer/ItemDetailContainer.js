import ItemDetail from "../ItemDetail/ItemDetail";
import { useEffect, useState } from "react";

import {useParams} from 'react-router-dom';

import { db } from '../firebase/Firebase';
import { doc, getDoc, collection,} from 'firebase/firestore'






const ItemDetailContainer = () => {

    const [ product, setProduct] = useState({})
    const { detalleId } = useParams() 
    console.log(detalleId);
    
    useEffect (() => { 
const productsCollection = collection (db, 'lista de productos')
const refDoc = doc (productsCollection, detalleId)
getDoc(refDoc)
.then((result ) => {
    setProduct ( 
        { 
       id: result.id,
       ...result.data(),
        })
})

}, [detalleId]); 


        // customFecth (products).then((response) => {
        //     console.log(response)
        //     const product = response.find(
        //         (product) => product.id === Number(detalleId)
        //     )
        //     setProduct(product)
        // })
    
    
    

    return (
        
      <> 
            <ItemDetail product ={product}/>
      
            </>
    
        
    );
}
 export default ItemDetailContainer;