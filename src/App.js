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

const App = () => {
  return (
    <Router>
      <div className='app'>
      <div className="app-container">
        <header className="app-header">
          <h1 className="app-title">React 学习</h1>
          <nav className="app-nav">
            <Link to="/">主页面</Link>
            <Link to="/tests">章节测试</Link>
            <Link to="/book">读书追踪项目练习</Link>
            <Link to="/task">任务清单项目练习</Link>
          </nav>
        </header>

        <main className="app-main">
          <Routes>
            <Route
              path="/"
              element={
                <div className="section-list">
                  <div className="question-card">
                    <p className="question-title">第一题</p>
                    <AgeApp />
                  </div>
                  <div className="question-card">
                    <p className="question-title">第二题</p>
                    <UserCard />
                  </div>
                  <div className="question-card">
                    <p className="question-title">第三题</p>
                    <ToggleText />
                  </div>
                  <div className="question-card">
                    <p className="question-title">第四题</p>
                    <Hider />
                  </div>
                  <div className="question-card">
                    <p className="question-title">第五题</p>
                    <Inputer />
                  </div>
                  <div className="question-card">
                    <p className="question-title">第六题</p>
                    <InputColor />
                  </div>
                  <div className="question-card">
                    <p className="question-title">第七题</p>
                    <InputColor2 />
                  </div>
                  <div className="question-card">
                    <p className="question-title">第八题</p>
                    <NameList />
                  </div>
                  <div className="question-card">
                    <p className="question-title">☆第九题</p>
                    <ScoreList />
                  </div>
                  <div className="question-card">
                    <p className="question-title">☆第十题</p>
                    <AddNameList />
                  </div>
                  <div className="question-card">
                    <p className="question-title">☆第十一题</p>
                    <DeleteNameList />
                  </div>
                </div>
              }
            />

            <Route path="/tests" element={<TestPage />} />
            <Route path="/book" element={<BookTracker />} />
            <Route path="/task" element={<TaskList />} />
          </Routes>
        </main>
      </div>
      </div>
    </Router>
  );
};

export default App;
