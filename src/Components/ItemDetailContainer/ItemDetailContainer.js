
import ItemDetail from "../ItemDetail/ItemDetail";
import { useEffect, useState } from "react";
import { customFecth } from "../../Components/utils/customFetch"


const products = {id: 1,
image: "https://http2.mlstatic.com/D_NQ_NP_2X_764503-MLA47592977306_092021-F.webp",
product: "Parlante JBL Xtreme 3 portátil con bluetooth black",
category: "Parlantes",
description: "JBL Xtreme 3 ofrece un sonido natural, con una gran claridad y precisión, que se dispersa de manera uniforme. Un parlante que asegura potencia y calidad por igual en la reproducción de contenidos multimedia. ",
price: 119.599,
stock: 5};




export const ItemDetailContainer = () => {

const [ listProducts,setListProducts] = useState([])
const [loading, setLoading] = useState(true)

useEffect (()=> {
    setLoading(true)
customFecth(products)
.then(res => { 
    setLoading(false)
    setListProducts(res)
})
}, [])
console.log (listProducts)


    return (
        
            loading ?
            <text> Aguarde mientras se cargan los productos</text>:
        
    
            <ItemDetail data={products}/>
        
        
    );
}
 export default ItemDetailContainer;