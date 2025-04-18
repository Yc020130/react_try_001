import React from 'react';
import { useCart } from './CartContext';

function Cart() {
    const { cartCount } = useCart();

    return(
        <div>
            <h2>购物车数量为:{cartCount}</h2>
        </div>
    )
}

export default Cart;