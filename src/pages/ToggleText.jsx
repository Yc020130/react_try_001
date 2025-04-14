import React,{ useState } from 'react';

const ToggleText = () => {
    const [visible,setVisible] = useState(false);

    const handleClick = () =>{
        setVisible(!visible);
    };

    return(
        <div>
            <button onClick={handleClick}>
                {visible ? '隐藏' : '显示'}
            </button>

            {visible && <p>这是要显示/隐藏的内容</p>}
        </div>
    );
};

export default ToggleText;