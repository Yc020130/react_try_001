import React from "react";

function Child({ onAdd}){
    return <button onClick={() => onAdd("新任务")}>添加任务</button>;
}


function Parent3() {
    const handleAdd = (taskName) => console.log("接收到任务:",taskName);
    return<Child onAdd={handleAdd} />;
}

export default Parent3;

