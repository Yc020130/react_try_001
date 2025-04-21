import React, {createContext, useState,useContext } from 'react';

export const CartContext = createContext();

export const CartProvider = ({children}) => {
    const [cartItems,setCartItems] = useState([]);

    const addToCart = (item) => {
        setCartItems((prev) =>{
            const existingItem = prev.find((i) => i.id === item.id);
            if(existingItem){
                return prev.map((i) =>
                    i.id === item.id ? {...i,quantity: i.quantity + 1} : i
                );
            }
            return[...prev,{...item,quantity:1}];
        });
    };
    const updateQuantity = (id,quantity) => {
        if (quantity < 1) return;
        setCartItems((prev) =>
            prev.map((item) => 
                item.id === id ? {...item,quantity} : item
            )
        );
    };


    const removeFromCart = (id) => {
        setCartItems((prev) => prev.filter((item) => item.id !== id));
    };    

    return(
        <CartContext.Provider value={{ cartItems,addToCart,removeFromCart,updateQuantity}}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => useContext(CartContext);