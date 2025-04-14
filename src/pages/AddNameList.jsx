import React,{useState} from 'react';

const AddNameList = () =>{
    const[names,setnames] = useState([]);
    const[inputvalue,setinputvalue] = useState('');

    const handleChange = (e) =>{
        setinputvalue(e.target.value);
    };

    const handleAdd =()=>{
        if(inputvalue.trim() !==''){
            setnames([...names,inputvalue]);
            setinputvalue('');
        }
    };

    return(
        <div>
            <h2>添加姓名列表</h2>
            <input
                type='text'
                value={inputvalue}
                onChange={handleChange}
                placeholder='请输入姓名'
            />
            <button onClick={handleAdd}>添加</button>

            <ul>
                {names.map((name,index)=>(
                    <li key={index}>第{index + 1}名：{name}</li>
                ))}
            </ul>
        </div>
    );
};

export default AddNameList;