import React,{useState} from 'react';

const DeleteNameList = () => {
    const [names,setnames] = useState([]);
    const [value,setvalue] = useState("");

    const handleChange =(e)=>{
        setvalue(e.target.value);
    };
    const handleAdd = () =>{
        if(value.trim() !==''){
            setnames([...names,value]);
            setvalue('');
        }
    };
    const handleDelete = (indexToDelete) => {
        const newNames = names.filter((_, index) => index !== indexToDelete);
        setnames(newNames);
    };

    return (
        <div>
          <h2>名字列表（可删除）</h2>
          <input type="text" value={value} onChange={handleChange} />
          <button onClick={handleAdd}>添加</button>
          <ul>
            {names.map((name, index) => (
              <li key={index}>
                {name} <button onClick={() => handleDelete(index)}>删除</button>
              </li>
            ))}
          </ul>
        </div>
      ); 
};

export default DeleteNameList;