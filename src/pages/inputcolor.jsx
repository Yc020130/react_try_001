import React, {useState} from "react";

const InputColor = () => {
    const [color,setColor] = useState("black");
    const [value,setvalue] = useState(" ");
    const onChange =(e)=>{
        const input = e.target.value;
        setvalue(input);

        const number = parseFloat(input);

        if (isNaN(number)) {
            setColor("black");
          } else if (number > 0) {
            setColor("green");
          } else if (number < 0) {
            setColor("red");
          } else {
            setColor("black");
          }
        };
        return(
            <div>
                <input type="text" value={value} onChange={onChange}/>
                <p style={{color:color}}>你输入了:{value}</p>
            </div>
        );
    };

export default InputColor;
