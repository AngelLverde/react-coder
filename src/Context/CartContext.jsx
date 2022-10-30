import { useState, useContext, createContext} from "react";

export const CartContext = createContext ([]);

export const useCartContext = () => useContext(CartContext);

  const CartProvider = ({ children }) => 
  {
    const [cart, setCart,] = useState([]);

    const isInCart = (id) => cart.find(prod => prod.id === id) ? true : false;
    
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


  const clearCart = () => setCart ([]);

    
const removeItem = (id) => setCart(cart.filter(prod => prod.id !== id))


const totalPrice = () => {
    return cart.reduce ((acumulador, prod) => acumulador += (prod.price * prod.quantity),0)
}


const totalProducts = () =>{
    return cart.reduce((acumulador, prod) => acumulador += prod.quantity,0)
}
    

    return (
<CartContext.Provider value= {{
    addItem,
    removeItem,
    isInCart,
    clearCart,
    totalPrice,
    totalProducts, 
    cart
     

}}>
    {children}
</CartContext.Provider>
 )
}

export default CartProvider