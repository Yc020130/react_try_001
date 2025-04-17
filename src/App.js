// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css'; // 新增样式文件

// 页面组件
import AgeApp from './pages/age.jsx';
import UserCard from './pages/usercard.jsx';
import ToggleText from './pages/ToggleText.jsx';
import Hider from './pages/useState.jsx';
import Inputer from './pages/Inputer.jsx';
import InputColor from './pages/inputcolor.jsx';
import InputColor2 from './pages/inputFloat.jsx';
import NameList from './pages/NameList.jsx';
import ScoreList from './pages/ScoreList.jsx';
import AddNameList from './pages/AddNameList.jsx';
import DeleteNameList from './pages/deleteNameList.jsx';
import TestPage from './pages/TestPage.jsx';
import BookTracker from './pages/book.jsx';
import TaskList from './pages/missioncontorl.jsx';
import Improve from './pages/Improve.jsx';
import Ex from './pages/ex.jsx';
import Knowedge from './pages/Knowedge.jsx';

const App = () => {
  return (
    <Router>
      <div className='app'>
      <div className="app-container">
        <header className="app-header">
        <div className="header-overlay">
          <h1 className="app-title">Personal Develop</h1>
          <p className='p1'>Welcome Jared's Study Zone😎</p>
          <nav className="app-nav">
            <Link to="/">🧠练习题</Link>
            <Link to="/improve">🚀进阶学习</Link>
            <Link to="/tests">🧩章节测试</Link>
            <Link to="/book">🏆读书追踪项目</Link>
            <Link to="/task">📥任务清单项目</Link>
          </nav>
          </div>
        </header>

        <main className="app-main">
          <Routes>
            <Route
              path="/"
              element={
                <div className="section-list">
                  <h1>基础点</h1>
                  <div className="question-card">
                    <p className="question-title">第一题</p>
                    <code>{`
                    import React from 'react';
                    const MyAge = (props) => {
                        return <h1>hello,my age is {props.age}!</h1>;
                    }
                    const AgeApp = () => {
                        return <MyAge age={23} />;
                    }                
                    export default AgeApp;
                    `}</code>
                    <code>
                    <p>🔨运行结果:</p>
                    <AgeApp />
                    </code>
                  </div>
                  <div className="question-card">
                    <p className="question-title">第二题</p>
                    <code>{`
                    import React from 'react';
                    const Try = (props) => {
                        return (
                            <div>
                                <h1>hello,my name is {props.name}!</h1>
                                <h2>my age is {props.age}!</h2>
                                <h2>my hobby is {props.hobby}!</h2>
                            </div>
                        )
                    }
                    const UserCard = () => {
                        return<Try name="张三" age="25" hobby="篮球" /> 
                    }   
                    export default UserCard;
                    `}
                    </code>
                    <code>
                    <p>🔨运行结果:</p>
                    <UserCard />
                    </code>
                  </div>
                  <div className="question-card">
                    <p className="question-title">第三题</p>
                    <code>
                      {`
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
                      `}
                    </code>
                    <code>
                    <p>🔨运行结果:</p>
                    <ToggleText />
                    </code>
                  </div>
                  <div className="question-card">
                    <p className="question-title">第四题</p>
                    <code>
                      {`
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
                      `}
                    </code>
                    <code>
                    <p>🔨运行结果:</p>
                    <Hider />
                    </code>
                  </div>
                  <div className="question-card">
                    <p className="question-title">第五题</p>
                    <code>{`
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
                    `}</code>
                    <code><p>🔨运行结果:</p><Inputer /></code>
                  </div>
                  <div className="question-card">
                    <p className="question-title">第六题</p>
                    <code>
                      {`
                      import React, {useState} from "react";
                      const InputColor = () => {
                          const [color,setColor] = useState("black");
                          const [value,setvalue] = useState(" ");
                          const onChange =(e)=>{
                              const input = e.target.value;
                              setvalue(input);
                              const number = parseFloat(input);
                              if (isNaN(number)) {
                                  setColor("black");
                                } else if (number > 0) {
                                  setColor("green");
                                } else if (number < 0) {
                                  setColor("red");
                                } else {
                                  setColor("black");
                                }
                              };
                              return(
                                  <div>
                                      <input type="text" value={value} onChange={onChange}/>
                                      <p style={{color:color}}>你输入了:{value}</p>
                                  </div>
                              );
                          };
                      export default InputColor;
                      `}
                    </code>
                    <code><p>🔨运行结果:</p><InputColor /></code>
                  </div>
                  <div className="question-card">
                    <p className="question-title">第七题</p>
                    <code>{`
                    import React, { useState } from 'react';  
                    const InputColor2 = () => {
                      const [color, setColor] = useState('black');
                      const [value, setValue] = useState('');
                      const onChange = (e) => {
                        const input = e.target.value;
                        setValue(input);
                        const number = parseFloat(input);
                        if (isNaN(number)) {
                          setColor('gray');
                        } else if (number > 0) {
                          setColor('green');
                        } else if (number < 0) {
                          setColor('red');
                        } else {
                          setColor('black');
                        }
                      };
                      const parsedNumber = parseFloat(value);
                      const isValid = !isNaN(parsedNumber);
                      return (
                        <div>
                          <input type="text" value={value} onChange={onChange} />
                          <p style={{ color }}>
                            输入的内容是：{value}
                            <br />
                            解析后的数字是：{isValid ? parsedNumber : '无效'}
                          </p>
                        </div>
                      );
                    };
                    export default InputColor2;
                    `}
                    </code>
                    <code><p>🔨运行结果:</p><InputColor2 /></code>
                  </div>
                  <div className="question-card">
                    <p className="question-title">第八题</p>
                    <code>{`
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
                    `}</code>
                    <code><p>🔨运行结果:</p><NameList /></code>
                  </div>
                  <div className="question-card">
                    <p className="question-title">☆第九题</p>
                    <code>
                      {`
                      import React from 'react';
                      
                      const ScoreList = () => {
                          const scores = [90, 85, 77, 100];
                      
                          return (
                              <div>
                                  <ul>
                                      {scores.map((score, index) => (
                                          <li key={index}>第{index + 1}名：{score}</li>
                                      ))}
                                  </ul>
                              </div>
                          );
                      };
                      
                      export default ScoreList;
                      `}
                    </code>
                    <code><p>🔨运行结果:</p><ScoreList /></code>
                  </div>
                  <div className="question-card">
                    <p className="question-title">☆第十题</p>
                    <code>{`
                    import React,{useState} from 'react';
                    
                    const AddNameList = () =>{
                        const[names,setnames] = useState([]);
                        const[inputvalue,setinputvalue] = useState('');
                    
                        const handleChange = (e) =>{
                            setinputvalue(e.target.value);
                        };
                    
                        const handleAdd =()=>{
                            if(inputvalue.trim() !==''){
                                setnames([...names,inputvalue]);
                                setinputvalue('');
                            }
                        };
                    
                        return(
                            <div>
                                <h2>添加姓名列表</h2>
                                <input
                                    type='text'
                                    value={inputvalue}
                                    onChange={handleChange}
                                    placeholder='请输入姓名'
                                />
                                <button onClick={handleAdd}>添加</button>
                    
                                <ul>
                                    {names.map((name,index)=>(
                                        <li key={index}>第{index + 1}名：{name}</li>
                                    ))}
                                </ul>
                            </div>
                        );
                    };
                    
                    export default AddNameList;
                    `}</code>
                    <code><p>🔨运行结果:</p><AddNameList /></code>
                  </div>
                  <div className="question-card">
                    <p className="question-title">☆第十一题</p>
                    <code>{`
                    import React,{useState} from 'react';
                    
                    const DeleteNameList = () => {
                        const [names,setnames] = useState([]);
                        const [value,setvalue] = useState("");
                    
                        const handleChange =(e)=>{
                            setvalue(e.target.value);
                        };
                        const handleAdd = () =>{
                            if(value.trim() !==''){
                                setnames([...names,value]);
                                setvalue('');
                            }
                        };
                        const handleDelete = (indexToDelete) => {
                            const newNames = names.filter((_, index) => index !== indexToDelete);
                            setnames(newNames);
                        };
                    
                        return (
                            <div>
                              <h2>名字列表（可删除）</h2>
                              <input type="text" value={value} onChange={handleChange} />
                              <button onClick={handleAdd}>添加</button>
                              <ul>
                                {names.map((name, index) => (
                                  <li key={index}>
                                    {name} <button onClick={() => handleDelete(index)}>删除</button>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ); 
                    };
                    
                    export default DeleteNameList;
                    `}</code>
                    <code><p>🔨运行结果:</p><DeleteNameList /></code>
                  </div>
                </div>
              }
            />

            <Route path="/tests" element={<TestPage />} />
            <Route path="/book" element={<BookTracker />} />
            <Route path="/task" element={<TaskList />} />
            <Route path="/improve" element={<Improve />}>
              {/* 默认显示 Knowedge 组件 */}
              <Route index element={<Knowedge />} />
              <Route path="knowledge" element={<Knowedge />} />
              <Route path="exercise" element={<Ex />} />
            </Route>
          </Routes>
        </main>
      </div>
      </div>
    </Router>
  );
};

export default App;
