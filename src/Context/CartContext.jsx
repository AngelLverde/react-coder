import { useState, useContext, createContext} from "react";

export const CartContext = createContext ([]);

export const useCartContext = () => useContext(CartContext);

  const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const isInCart = (id) => cart.find(prod => prod.id === id)
    
    const addItem = (product, cantidad) => {
		const newCart = [...cart]

		const productIsInCart = isInCart(product.id)

		if (productIsInCart) {
			newCart[
				newCart.findIndex((prod) => prod.id === productIsInCart.id)
			].quantity += cantidad

			setCart(newCart)
			return
		}

		product.quantity = cantidad

		setCart([...newCart, product])
	}

    // const addItem = (product, quantity) => {

//         if (isInCart(product.id)) {
//             const newCart = cart.map (prod=> {
//                 if (prod.id === product.id){
//                     const newQuantity = product.quantity + quantity
//                     return {...product, quantity: newQuantity}
//                 }else {
//                     return product
//                 }
//             })
//             setCart(newCart)
//         } else {
//             const newProduct = {...product, quantity:quantity}
//             setCart([...cart,newProduct])
//     }
// };

console.log ('carrito:', cart); 

    const clearCart = () => setCart ([]);

    
    const removeProduct = (id) => setCart (cart.filter(prod=> prod.id !== id));

const totalPrice = () => {
    return cart.reduce((prev, act) => prev + act.quantity * act.price, 0);


} 

const totalProducts = () => cart.reduce ((acumulador, productoActual) => acumulador + productoActual.quantity, 0);  

    
// const addItem = (product, newQuantity) => {
//     const { quantity = 0 } = cart.find (prod => prod.product.id === product.id) || {};
//     const newCart = cart.filter (prod => prod.product.id !== product.id);
//     setCart ([...newCart, {...product, quantity: quantity + newQuantity }])
// }
    return (
<CartContext.Provider value= {{
    cart,
    clearCart,
    isInCart,
    removeProduct,
    addItem,
     totalPrice,
     totalProducts, 
     

}}>
    {children}
</CartContext.Provider>
 )
}

export default CartProvider