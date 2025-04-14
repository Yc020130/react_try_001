import React, { useState } from "react";

const MissionEditor = () => {
  const [missions, setMissions] = useState([]);
  const [value, setValue] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [editIndex, setEditIndex] = useState(null);
  const [editValue, setEditValue] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleAdd = () => {
    if (value.trim() !== "") {
      setMissions([...missions, value]);
      setValue("");
    }
  };

  const handleDelete = (indexToDelete) => {
    const newMissions = missions.filter((_, index) => index !== indexToDelete);
    setMissions(newMissions);
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
    setMissions(updatedMissions);
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
        </div>
      )}
    </div>
  );
};

export default MissionEditor;