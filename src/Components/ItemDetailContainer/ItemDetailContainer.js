
import ItemDetail from "../ItemDetail/ItemDetail";
import { useEffect, useState } from "react";
import { customFecth } from "../../Components/utils/customFetch"
import {useParams} from 'react-router-dom';
import { products } from "../../assets/productos";






const ItemDetailContainer = () => {

    const [ listProducts,setListProducts] = useState([]);
    const {idDetalle} = useParams ();
    console.log(idDetalle);
    
    useEffect (() =>{ 
        customFecth (products)
        .then (response => {
            setListProducts(response[parseInt(idDetalle)])
        }
        )
    
    }, [idDetalle])

    

    return (
        
           <div>
            <ItemDetail listProducts={products}/>
           </div>
        
    
            
        
        
    );
}
 export default ItemDetailContainer;