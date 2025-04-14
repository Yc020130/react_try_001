import React, { useState } from "react";

const Editor = () => {
  const [missions, setmissions] = useState([]);
  const [value, setvalue] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [editValue, setEditValue] = useState("");
  const [editIndex, setEditIndex] = useState(null);

  const handleChange = (e) => {
    setvalue(e.target.value);
  };

  const handleAdd = () => {
    if (value.trim() !== "") {
      setmissions([...missions, value]);
      setvalue("");
    }
  };

  const handleDelete = (indexToDelete) => {
    const newMissions = missions.filter((_, index) => index !== indexToDelete);
    setmissions(newMissions);
  };

  const handleEdit = (index) => {
    setIsEditing(true);
    setEditIndex(index);
    setEditValue(missions[index]);
  };

  const handleEditChange = (e) => {
    setEditValue(e.target.value);
  };

  const handleEditSubmit = () => {
    const updatedMissions = missions.map((mission, index) =>
      index === editIndex ? editValue : mission
    );
    setmissions(updatedMissions);
    setIsEditing(false);
    setEditIndex(null);
    setEditValue("");
  };

  const handleEditCancel = () => {
    setIsEditing(false);
    setEditIndex(null);
    setEditValue("");
  };

  return (
    <div>
      <h2>任务列表</h2>
      <input type="text" value={value} onChange={handleChange} />
      <button onClick={handleAdd}>添加</button>
      <ul>
        {missions.map((mission, index) => (
          <li key={index}>
            {mission}
            <button onClick={() => handleDelete(index)}>删除</button>
            <button onClick={() => handleEdit(index)}>修改</button>
          </li>
        ))}
      </ul>

      {isEditing && (
        <div>
          <input type="text" value={editValue} onChange={handleEditChange} />
          <button onClick={handleEditSubmit}>确认修改</button>
          <button onClick={handleEditCancel}>取消修改</button>
        </div>
      )}
    </div>
  );
};

export default Editor;
