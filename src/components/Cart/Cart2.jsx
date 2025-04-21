import React,{ useContext } from 'react';
import { CartContext } from './CartContext2';

function Cart2() {
    const { cartItems, removeFromCart,updateQuantity } = useContext(CartContext);
    console.log("Cart 渲染了");
    const getTotalPrice = () => {
      return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    };

    return (
        <div style={{ border: '1px solid #ccc', padding: '1rem', marginTop: '1rem' }}>
          <h2>🛒 我的购物车</h2>
          {cartItems.length === 0 ? (
            <p>购物车是空的！</p>
          ) : (
            <div>
              <ul>
                {cartItems.map((item, index) => (
                  <li key={index}>
                    {item.name} - ￥{item.price} * {item.quantity}
                    <button onClick={() => updateQuantity(item.id, item.quantity + 1)} style={{ marginLeft: '1rem' }}>
                      增加
                    </button>
                    <button onClick={() => updateQuantity(item.id, item.quantity - 1)} style={{ marginLeft: '1rem' }}>
                      减少
                    </button>
                    <button onClick={() => removeFromCart(item.id)} style={{ marginLeft: '1rem' }}>
                    删除
                    </button>
              </li>
            ))}
          </ul>
          <div>
              <strong>总价:￥{getTotalPrice()}</strong>
            </div>
          </div>
        )}
      </div>
  );
}

export default Cart2;