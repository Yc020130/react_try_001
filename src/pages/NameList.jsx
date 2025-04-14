import React from 'react';

const NameList = () => {
    const names = ['Alice','Bob','Charlie'];

    return (
        <div>
            <h2>花名册：</h2>
            <ul>
                {names.map((name,index)=>(
                    <li key={index}>{name}</li>
                ))}
            </ul>
        </div>
    );
};

export default NameList;