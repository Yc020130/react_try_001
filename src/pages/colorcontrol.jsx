import React,{useState} from 'react';

function ColorPicker({onChangeColor}){
    return(
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


function ColorBox({color}){
    return(
        <div
        style={{
            width:'200px',
            height:'100px',
            marginTop: '10px',
            backgroundColor: color,
            border: '1px solid #ccc',
        }}
        >
        当前颜色: {color}
        </div>
    );
}

function ColorApp(){
    const [color,setColor] = useState('red');
    const handleColorChange = (newColor) => {
        setColor(newColor);
    };
    return(
        <div>
            <h2>🎨 颜色控制器</h2>
            <ColorPicker onChangeColor={handleColorChange} />
            <ColorBox color={color}  />
        </div>
    );
}

export default ColorApp;