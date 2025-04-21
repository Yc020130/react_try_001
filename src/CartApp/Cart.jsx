import React from 'react';
import { useCart } from './CartContext';

function Cart() {
    const { cartCount } = useCart();

    return(
        <div>
            <p>购物车数量为:{cartCount}</p>
        </div>
    )
}

export default Cart;