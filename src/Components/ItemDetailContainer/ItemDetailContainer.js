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


       
    
    
    

    return (
        
      <> 
      <div className="itemdetail">
      <ItemDetail product ={product}/>

      </div>
    
           
            
            </>
    
        
    );
}
 export default ItemDetailContainer;