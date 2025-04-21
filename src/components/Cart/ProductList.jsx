import React,{ useContext } from 'react';
import { CartContext } from './CartContext2';

const sampleProducts = [
    { id: 1, name: '珍珠奶茶', price: 12 },
    { id: 2, name: '芝士奶盖', price: 15 },
    { id: 3, name: '红茶拿铁', price: 10 },
];

const ProductList = () => {
    const { addToCart } = useContext(CartContext);

    return(
        <div>
            <h2>菜单</h2>
            <ul>
                {sampleProducts.map((product) => (
                    <li key={product.id}>
                        {product.name} - ￥{product.price}
                        <button onClick={() => addToCart(product)}>添加到购物车</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ProductList;