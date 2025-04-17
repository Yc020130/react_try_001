import React, { useState } from 'react';

function Input({value,onChange}){
    return <input value={value} onChange={(e) => onChange(e.target.value)} />;
}

function Display({text}){
    return <p>{text}</p>
}

function Parent2(){
    const[text,setText] = useState('');
    return(
        <>
        <Input value={text} onChange={setText} />
        <Display text={text} />
        </>
    );
}

export default Parent2;

