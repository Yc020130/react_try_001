import React from 'react';
import './improve.css'
import Parent from "./Context";
import Parent2 from "./Stateup";
import Parent3 from "./SontoParent";
import Parent4 from "./ParenttoChild";

const Knowedge =()=>{
    return(
        <div>
            <h2>🌟 一、Props父传子</h2>
            <p>👉 适用场景：父组件向子组件传递数据</p>
            <p>✅ 原理：React 单向数据流，父组件通过 props 向子组件传值。</p>
            <div>
                <p>💡 示例：</p>
                <pre>
                    <code className="code">{`
                    function Child({ name }) {
                        return <p>Hi,{name}</p>;
                    }

                    function Parent() {
                        return <Child name="小明" />;
                    }
                    `}</code>
                </pre>
                <div>
                    <code>
                        <p>🔨运行结果:</p>
                        <Parent4 />
                    </code>
                </div>
            </div>
            <h2>🌟 二、回调函数子传父</h2>
            <p>👉 适用场景：子组件触发事件，通知父组件处理逻辑</p>
            <p>✅ 原理：父组件把函数通过 props 传给子组件，子组件调用该函数并传值。</p>
            <div>
                <p>💡 示例：</p>
                <pre>
                    <code>{`
                    function Child({ onAdd }) {
                        return <button onClick={() => onAdd("新任务")}>添加任务</button>;
                    }

                    function Parent() {
                        const handleAdd = (taskName) => console.log("接收到任务：", taskName);
                        return <Child onAdd={handleAdd} />;
                    }
                `}
                        
                    </code>
                </pre>
                <div>
                    <code>
                    <p>🔨运行结果:</p>
                    <Parent3 />
                    接收到任务: 新任务
                    </code>
                </div>
            </div>
            <h2>🌟 三、状态提升（lifting state up）</h2>
            <p>👉 适用场景：多个子组件共享同一状态，由它们的父组件管理状态。</p>
            <p>✅ 原理：把 state 提升到最近的公共父组件，子组件通过 props 使用。</p>
            <div>
                <p>💡 示例：</p>
                <pre>
                    <code>{`
                    function Input({ value, onChange }) {
                        return <input value={value} onChange={(e) => onChange(e.target.value)} />;
                    }

                    function Display({ text }) {
                        return <p>{text}</p>;
                    }

                    function Parent() {
                        const [text, setText] = useState('');
                        return (
                            <>
                            <Input value={text} onChange={setText} />
                            <Display text={text} />
                            </>
                        );
                    }

                    `}</code>
                </pre>
                <div>
                    <code>
                    <p>🔨运行结果:</p>在此输入：<Parent2 /></code>
                </div>

            </div>
            <h2>🌟四、Context（跨层通信）</h2>
            <p>👉 适用场景：跨多个层级传值（祖先到后代），避免层层 props 传递。</p>
            <p>✅ 原理：React 的 Context API 提供了全局共享数据的机制。</p>
            <div>
                <pre>
                    <code>
                        {`
                        // 创建上下文
                        const ThemeContext = React.createContext();

                        function Parent() {
                            return (
                                <ThemeContext.Provider value="dark">
                                <Child />
                                </ThemeContext.Provider>
                            );
                        }

                        function Child() {
                            const theme = useContext(ThemeContext);
                            return <div>当前主题：{theme}</div>;
                        }

                        `}
                    </code>
                </pre>
                <div>
                    <code>
                        <p>🔨运行结果:</p>
                    <Parent /></code>
                </div>
            </div>
            <h2>🌟五、全局状态管理工具（Redux、Zustand 等）</h2>
            <p>👉 适用场景：应用越来越复杂，组件间通信混乱时。</p>
            <p>✅ 原理：通过全局 store 来管理数据，任意组件可读写，不用手动传 props。</p>
            <p>💡 Redux 适合大型项目，Zustand 是更轻量的替代方案。</p>
            <pre>
                <code>js
                    {`
                    // store.js
                    const initialState = { count: 0 };
                        function reducer(state = initialState, action) {
                        if (action.type === 'increment') return { count: state.count + 1 };
                        return state;
                    }
                    `}
                </code>
            </pre>
            <pre>
                <code>jsx
                    {`
                    // 使用 Redux
                    import { useSelector, useDispatch } from 'react-redux';

                    function Counter() {
                        const count = useSelector(state => state.count);
                        const dispatch = useDispatch();
                        return (
                            <button onClick={() => dispatch({ type: 'increment' })}>
                                Count: {count}
                            </button>
                        );
                    }
                    `}
                </code>
            </pre>
        </div>
    );
}

export default Knowedge;