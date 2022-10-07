import { useState, useContext, createContext} from "react";

export const CartContext = createContext ([]);

export const useCartContext = () => useContext(CartContext);

  const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);


    const addItem = (product, quantity) => {
        if (isInCart(product.id)) {
            const newCart = cart.map (product => {
                if (product.id === product.id){
                    const newQuantity = product.quantity + quantity
                    return {...product, quantity: newQuantity}
                }else {
                    return product
                }
            })
            setCart(newCart)
        } else {
            const newProduct = {...product, quantity:quantity}
            setCart([...cart,newProduct])
    }
};

console.log ('carrito:', cart); 



// const addItem = (product, newQuantity) => {
//     const { quantity = 0 } = cart.find (prod => prod.product.id === product.id) || {};
//     const newCart = cart.filter (prod => prod.product.id !== product.id);
//     setCart ([...newCart, {...product, quantity: quantity + newQuantity }])
// }



    const clearCart = () => setCart ([]);

    const isInCart = (id) => cart.find(product => product.id === id) ? true : false; 


    const removeProduct = (id) => setCart (cart.filter(product => product.id !== id));

const totalPrice = () => {
    return cart.reduce((prev, act) => prev + act.quantity * act.price, 0);


}

const totalProducts = () => cart.reduce ((acumulador, productoActual) => acumulador + productoActual.quantity, 0);  

    

    return (
<CartContext.Provider value= {{
    clearCart,
    isInCart,
    removeProduct,
    addItem,
     totalPrice,
     totalProducts

}}>
    {children}
</CartContext.Provider>
 )
}

export default CartProvider