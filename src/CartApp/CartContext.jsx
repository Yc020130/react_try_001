import React,{ createContext, useState, useContext } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) =>{
    const [cartCount,setCartCount ] = useState(0);

    const increase = () => setCartCount(cartCount + 1);
    const decrease = () => setCartCount(cartCount - 1);

    return(
        <CartContext.Provider value={{ cartCount, increase, decrease }}>
            {children}
        </CartContext.Provider>
    )
}

export const useCart = () => useContext(CartContext);