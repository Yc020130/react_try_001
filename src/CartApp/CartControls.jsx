import React from "react";
import { useCart } from "./CartContext";

function CartControls(){
    const { increase, decrease } = useCart();

    return(
        <div>
            <button onClick={increase}>增加商品</button>
            <button onClick={decrease}>减少商品</button>
        </div>
    );
}

export default CartControls;

