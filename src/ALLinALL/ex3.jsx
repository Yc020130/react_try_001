import React,{useState} from 'react'

const Counter =()=>{
    const [value,setvalue] = useState(0);

    const Adder =()=>{
        setvalue(value+1);
    }
    const Deler =()=>{
        setvalue(prev => (prev > 0 ? prev - 1 : 0));
    };


    return(
        <div>
            <button onClick={Adder}>+1</button>
            <button onClick={Deler}>-1</button>
            <p>当前值为：{value}</p>
        </div>
    );
};

export default Counter;