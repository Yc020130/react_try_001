// CartApp.jsx
import React from 'react';
import { CartProvider } from './CartContext2';
import ProductList from './ProductList';
import Cart2 from './Cart2';

function CartApp2() {
    console.log("CartApp2 被渲染了");

    return (
      <CartProvider>
        <div>
          <h1 style={{ fontSize: '24px', color: '#222' }}>🛒 我的购物商城</h1>
          <ProductList />
          <Cart2 />
        </div>
      </CartProvider>
      
    );
  }
  

export default CartApp2;
