import React,{useState} from "react";

const SortNameList = () => {
    const [names,setnames] = useState(['Alice','Charlie','Bob']);

    const Sorthandle = () =>{
        setnames(prev => [...prev].sort((a, b) => a.localeCompare(b)));
    }
    return (
        <div>
            <h2>花名册：</h2>
            <button onClick={Sorthandle}>排序</button>
            <ul>
                {names.map((name,index)=>(
                    <li key={index}>{name}</li>
                ))}
            </ul>
        </div>
    );
};

export default SortNameList;