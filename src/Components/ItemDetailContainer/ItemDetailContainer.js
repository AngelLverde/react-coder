import ItemDetail from "../ItemDetail/ItemDetail";
import { useEffect, useState } from "react";
import { customFecth } from "../../Components/utils/customFetch"
import {useParams} from 'react-router-dom';
import { products } from "../../assets/productos";
import { db } from '../firebase/Firebase';
import { doc, getDocs, collection, query, where} from 'firebase/firestore'; 






const ItemDetailContainer = () => {

    const [ product, setProduct] = useState({})
    const { detalleId } = useParams();
    
    
    useEffect (() =>{ 

         const productsCollection = collection (db, 'lista de productos'); 
         const refDoc = doc(productsCollection, detalleId);
        getDocs(refDoc)
        .then((resultado) =>{
           setProduct({
            id: resultado.id,
            ...resultado.data()
           })
        })

        }, [detalleId]);



    return (
        
      <> 
            <ItemDetail product ={product}/>
      
            </>
    
            
        
        
    )
}


 export default ItemDetailContainer