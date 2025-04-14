import React,{useState} from "react";

const MissionList =()=>{
    const[missions,setmissions] = useState([]);
    const [value,setvalue] = useState("");

    const handleChange =(e)=>{
        setvalue(e.target.value);
    };

    const handleAdd = () =>{
        if(value.trim() !==''){
            setmissions([...missions,value]);
            setvalue('');
        }
    };

    const handleDelete = (indexToDelete) => {
        const newmissions = missions.filter((_, index) => index !== indexToDelete);
        setmissions(newmissions);
    };

    return (
        <div>
          <h2>任务列表</h2>
          <input type="text" value={value} onChange={handleChange} />
          <button onClick={handleAdd}>添加</button>
          <ul>
            {missions.map((mission, index) => (
              <li key={index}>
                {mission} <button onClick={() => handleDelete(index)}>删除</button>
              </li>
            ))}
          </ul>
        </div>
      ); 
};

export default MissionList;