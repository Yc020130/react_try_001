import React,{useState} from 'react';

const  Inputer = () =>{
    const[value,setValue] = useState('');
    const[visible,setVisible] = useState(false);

    const toggle =()=>{
        setVisible(!visible);
    };

    const onChange = (e) => {
        setValue(e.target.value);
    };

    return(
        <div>
            <button onClick={toggle}>
                {visible?'隐藏':'显示'}
            </button>
            <input type="text" value={value} onChange={onChange}/>
            {visible &&<p>你输入了:{value}</p>}
        </div>
    );
};

export default Inputer;