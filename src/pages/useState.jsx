import React,{useState} from 'react';

const Hider = () => {
    const[visible,setVisible] = useState(true);

    const toggle = () => {
        setVisible(!visible);
    }

    return(
        <div>
            <button onClick={toggle}>
                {visible?'隐藏':'显示'}
            </button>
            {visible && <p>Hello</p>}
        </div>
    );
};

export default Hider;