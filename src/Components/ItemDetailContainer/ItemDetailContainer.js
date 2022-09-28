
import ItemDetail from "../ItemDetail/ItemDetail";
import { useEffect, useState } from "react";
import { customFecth } from "../../Components/utils/customFetch"
import {useParams} from 'react-router-dom';



const products = {id: 1,
image: "https://http2.mlstatic.com/D_NQ_NP_2X_764503-MLA47592977306_092021-F.webp",
product: "Parlante JBL Xtreme 3 portátil con bluetooth black",
category: "Parlantes",
description: "JBL Xtreme 3 ofrece un sonido natural, con una gran claridad y precisión, que se dispersa de manera uniforme. Un parlante que asegura potencia y calidad por igual en la reproducción de contenidos multimedia. ",
price: 119.599,
stock: 5};




const ItemDetailContainer = () => {

    const [ productos,setListProducts] = useState([])
    const {idDetalle} = useParams ();
    
    useEffect (()=> {
    const productos = new Promise(resolve => {
        setTimeout(() => {
            resolve (products);
        
        }, 3000);
        
     });

     productos.then( res => setListProducts(res.find(products => products.id === parseInt(idDetalle))));
    }, []) 
    


    return (
        
           <div>
            <ItemDetail listProducts={products}/>
           </div>
        
    
            
        
        
    );
}
 export default ItemDetailContainer;