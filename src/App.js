import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

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
import BookTracker from './pages/book.jsx' // 新增的测试题页面

const App = () => {
  return (
    <Router>
      <div>
        <h1>React学习</h1>
        <nav>
          <Link to="/">主页面</Link> | <Link to="/tests">章节测试</Link> | <Link to="/book">读书追踪项目练习</Link>
        </nav>

        <Routes>
          <Route path="/" element={
            <div>
              <p style={{color:'red'}}>第一题</p>
              <AgeApp />
              <p style={{color:'red'}}>第二题</p>
              <UserCard />
              <p style={{color:'red'}}>第三题</p>
              <ToggleText />
              <p style={{color:'red'}}>第四题</p>
              <Hider />
              <p style={{color:'red'}}>第五题</p>
              <Inputer />
              <p style={{color:'red'}}>第六题</p>
              <InputColor />
              <p style={{color:'red'}}>第七题</p>
              <InputColor2 />
              <p style={{color:'red'}}>第八题</p>
              <NameList />
              <p style={{color:'red'}}>☆第九题</p>
              <ScoreList />
              <p style={{color:'red'}}>☆第十题</p>
              <AddNameList />
              <p style={{color:'red'}}>☆第十一题</p>
              <DeleteNameList />
            </div>
          } />
          
          <Route path="/tests" element={<TestPage />} />
          <Route path="/book" element={<BookTracker />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
