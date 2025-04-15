import React, { useState, useEffect } from "react";
import TaskCalendar from "./taskcalendar";
import './todolist.css';

const TaskList = () => {
  const [tasks, setTasks] = useState(()=>{
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks) : []
  });
  const [taskText, setTaskText] = useState("");
  const [editId,seteditid] = useState(null);
  const [editText,setEditText] = useState("");
  const [dueDate,setDueDate] = useState("");
  const [category,setCategory] = useState("学习");
  const [expandedTaskId,setExpandedTaskId] = useState(null);
  const [completedStats, setCompletedStats] = useState(() => {
    const savedStats = localStorage.getItem("completedStats");
    return savedStats ? JSON.parse(savedStats) : {};
  });
  
    useEffect(() => {
        const today = new Date().toISOString().split("T")[0];
        const count = tasks.filter((task) => task.completed && task.logs.some(log => log.date === today)).length;
  
    setCompletedStats((prevStats) => {
      const updated = { ...prevStats, [today]: count };
      localStorage.setItem("completedStats", JSON.stringify(updated));
      return updated;
        });
    }, [tasks]);

  const categories = ["学习","工作","生活","其他"];

    // books 更新时写入 localStorage
    useEffect(() => {
      localStorage.setItem("tasks", JSON.stringify(tasks));
    }, [tasks]);


    const getCategoryStats = () => {
        const stats = {};
        categories.forEach((cat) => {
          const total = tasks.filter((task) => task.category === cat).length;
          const completed = tasks.filter((task) => task.category === cat && task.completed).length;
          stats[cat] = { total, completed };
        });
        return stats;
      };
      
    const handleAddTask = () => {
        if (taskText.trim()) {
        const newTask = {
            id: Date.now(),
            text: taskText,
            completed: false,
            dueDate: dueDate,
            category: category,
            logs:[]
        };
        setTasks([...tasks, newTask]);
        setTaskText("");
        setDueDate("");
        }
    };

    const handleToggleComplete = (id) => {
        setTasks(
        tasks.map((task) =>
            task.id === id ? { ...task, completed: !task.completed } : task
        )
        );
    };

    const handleDeleteTask = (id) => {
        setTasks(tasks.filter((task) => task.id !== id));
    };

    const handleEditTask = (id,text) =>{
        seteditid(id);
        setEditText(text);
    };

    const handleSaveEdit =(id)=>{
        setTasks(
            tasks.map(task=>
                task.id === id ? {...tasks,text:editText} : task
            )
        );
        seteditid(null);
        setEditText("");
    };

    return (
        <div className="task-container">
        <h2 className="todo-title">📆 每日学习任务清单</h2>

        <div className="todo-form">
            <input
            type="text"
            className="todo-input"
            placeholder="输入你的学习任务"
            value={taskText}
            onChange={(e) => setTaskText(e.target.value)}
            />
            <input
            type="date"
            className="todo-date-picker"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
            />
            <select
            className="todo-category-select"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            >
            {categories.map((cat) => (
                <option key={cat} value={cat}>{cat}</option>
            ))}
            </select>
            <button className="todo-add-btn" onClick={handleAddTask}>
            添加任务
            </button>
        </div>
        <div className="category-stats">
            <h3>📊 分类统计</h3>
            <div className="stats-content">
                <ul>
                    {Object.entries(getCategoryStats()).map(([cat, { total, completed }]) => (
                        <li key={cat}>
                        <strong>{cat}</strong>：共 {total} 个任务，已完成 {completed} 个
                        </li>
                    ))}
                </ul>

                <div className="calendar-mini">
                    <TaskCalendar stats={completedStats} />
                </div>
            </div>
        </div>

        <ul className="todo-list">
            {tasks.map((task) => (
                <li key={task.id} className="todo-item" style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
                <div className="task-row">
                  {editId === task.id ? (
                    <>
                      <div className="todo-content">
                        <input
                          type="text"
                          value={editText}
                          onChange={(e) => setEditText(e.target.value)}
                        />
                      </div>
                      <div className="todo-buttons">
                        <button className="todo-save-btn" onClick={() => handleSaveEdit(task.id)}>💾</button>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="todo-content">
                        <span className={`todo-text ${task.completed ? 'done' : ''}`}>{task.text}</span>
                        <span className={`todo-category-label ${task.category}`}>{task.category}</span>
                        <span className="todo-due-date">截止：{task.dueDate || "未设置"}</span>
                      </div>
                      <div className="todo-buttons">
                        <button className="todo-complete-btn" onClick={() => handleToggleComplete(task.id)}>
                          ✔
                        </button>
                        <button className="todo-edit-btn" onClick={() => handleEditTask(task.id, task.text)}>
                          ✏️
                        </button>
                        <button className="todo-delete-btn" onClick={() => handleDeleteTask(task.id)}>
                          🗑
                        </button>
                        <button
                          className="todo-expand-btn"
                          onClick={() => setExpandedTaskId(expandedTaskId === task.id ? null : task.id)}
                        >
                          📖
                        </button>
                      </div>
                    </>
                  )}
                </div>
              
                {expandedTaskId === task.id && (
                  <div className="log-section">
                    <input
                      type="text"
                      placeholder="记录今天做了什么..."
                      value={task.newLogText || ""}
                      onChange={(e) => {
                        const newTasks = tasks.map((t) =>
                          t.id === task.id ? { ...t, newLogText: e.target.value } : t
                        );
                        setTasks(newTasks);
                      }}
                    />
                    <button
                      className="todo-log-add-btn"
                      onClick={() => {
                        const date = new Date().toISOString().split("T")[0];
                        const newTasks = tasks.map((t) =>
                          t.id === task.id
                            ? {
                                ...t,
                                logs: [...t.logs, { date, content: t.newLogText }],
                                newLogText: "",
                              }
                            : t
                        );
                        setTasks(newTasks);
                      }}
                    >
                      添加日志
                    </button>
                    <ul className="log-list">
                      {task.logs.map((log, index) => (
                        <li key={index}>
                          <strong>{log.date}</strong>：{log.content}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </li>                           
            ))}
        </ul>
    </div>
);
};

    export default TaskList;
