import React,{useState} from 'react';

const Inputer2 =()=>{
    const [value,setvalue] = useState("");

    const onChange =(e)=>{
        setvalue(e.target.value); 
    }
    const parsedNumber = parseFloat(value);
    const isValid = !isNaN(parsedNumber);
    return(
        <div>
            <input type="text" value={value} onChange={onChange}/>
            <p>你输入了:{value}</p>
            <br/>
            {isValid ? parsedNumber : '请输入有效数字'}
        </div>
    );
};

export default Inputer2;