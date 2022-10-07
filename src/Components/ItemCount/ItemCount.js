import {useState} from 'react'
import { Context } from '../../Context/CartContext'

const ItemCount = ({initial, stock,onAdd}) => {

    const [count, setCount] = useState(initial)

    


    const increase = () => count < stock && setCount(count +1)
    const decrease = () => count > initial && setCount ( count -1)

    const onAddd = () => {
        setCount (initial)
        onAdd(count)
        
    };




    return(
       <div> 
     <button disabled={count === initial} onClick={decrease} > - </button>
     <text>{count}</text>
     <button disabled={count === stock} onClick={increase}> + </button>
     <button onClick={() => onAddd(count)}> Agregar al carrito </button>
       </div>
    


    
    )
}



// import React, {useState} from "react";

// const ItemCount = ({stock,initial}) => {
// const [estado,setEstado] =useState();
// const [contador,setContador] = useState(1);
// const [users, setUsers] = useState();


// const sumar = () => {
//     setContador (contador + 1);
// }
// const restar = () => {
//     setContador (contador - 1);
// }
// const reset = () => {
//     setContador (0);
// }

//     return (
//         <>
//         <h3> Remeras</h3>
//         <h1>{contador}</h1>
//         <button onClick ={sumar}> +1 </button>
       
//         <button onClick ={restar}> -1 </button>
        
//         <button onClick ={reset}> Agregar al carrito </button>
//         </>
 

//     )
// }






export  { ItemCount }