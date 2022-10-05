import ItemDetail from "../ItemDetail/ItemDetail";
import { useEffect, useState } from "react";
import { customFecth } from "../../Components/utils/customFetch"
import {useParams} from 'react-router-dom';
import { products } from "../../assets/productos";






const ItemDetailContainer = () => {

    const [ product, setProduct] = useState({})
    const { detalleId } = useParams() 
    console.log(detalleId);
    
    useEffect (() => { 
        customFecth (products).then((response) => {
            console.log(response)
            const product = response.find(
                (product) => product.id === Number(detalleId)
            )
            setProduct(product)
        })
    
    }, [detalleId])

    

    return (
        
      <> 
            <ItemDetail product ={product}/>
      
            </>
    
            
        
        
    );
}
 export default ItemDetailContainer;