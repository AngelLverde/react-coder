import {useState} from 'react'


const ItemCount = ({initial, stock, onAdd}) => {

    const [count, setCount] = useState(initial);

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
     <button onClick={() => onAddd (count)}> Agregar al carrito </button>
       </div>
    


    
    )
}

export  { ItemCount }