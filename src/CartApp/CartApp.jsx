// CartApp.js
import React from 'react';
import { CartProvider } from './CartContext';
import Cart from './Cart';
import CartControls from './CartControls';

function CartApp() {
  return (
    <CartProvider>
      <div>
        <p>🛒 购物车子模块</p>
        <Cart />
        <CartControls />
      </div>
    </CartProvider>
  );
}

export default CartApp;
