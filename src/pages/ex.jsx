import React from "react";
import './improve.css';
import ColorApp from "./colorcontrol";
import App2 from "./Rating";
import CartApp from "../CartApp/CartApp";
import CartApp2 from "../components/Cart/CartApp2";

const Ex =()=>{
    return(
        <div>
            <h2>🌟 一、颜色控制器</h2>
            <p>父组件保存当前颜色状态（比如：red / blue / green）。</p>
            <p>一个子组件是选择颜色（下拉框或按钮组）。</p>
            <p>另一个子组件是显示当前颜色的盒子。</p>
            <p>两个子组件通过 props 与父组件通信。</p>
            <pre>
                <code>{`
                import React, { useState } from 'react';

                function ColorPicker({ onChangeColor }) {
                return (
                    <div>
                    <label>选择颜色：</label>
                    <select onChange={(e) => onChangeColor(e.target.value)}>
                        <option value="red">红色</option>
                        <option value="blue">蓝色</option>
                        <option value="green">绿色</option>
                    </select>
                    </div>
                );
                }

                // 子组件2：显示颜色
                function ColorBox({ color }) {
                return (
                    <div
                    style={{
                        width: '200px',
                        height: '100px',
                        marginTop: '10px',
                        backgroundColor: color,
                        border: '1px solid #ccc',
                    }}
                    >
                    当前颜色：{color}
                    </div>
                );
                }

                // 父组件：控制颜色状态
                function ColorApp() {
                const [color, setColor] = useState('red');

                const handleColorChange = (newColor) => {
                    setColor(newColor);
                };

                return (
                    <div>
                    <h2>🎨 颜色控制器</h2>
                    <ColorPicker onChangeColor={handleColorChange} />
                    <ColorBox color={color} />
                    </div>
                );
                }

                export default ColorApp;
                `}
                </code>
            </pre>
            <code><p>🔨运行结果:</p>
                <ColorApp />
            </code>
            <div>
                <h2>🌟二、评分系统</h2>
                <code>
                    <App2 />
                </code>
            </div>
            <div>
                <h2>🌟三、Context购物车示例</h2>
                <CartApp />
            </div>
            <div>
                <h2>🌟四、Context购物车示例2</h2>
                <code><CartApp2 /></code>
            </div>
        </div>
    )
}

export default Ex;