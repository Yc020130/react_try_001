// TestPage.jsx
import React from 'react';
import Inputer2 from '../ALLinALL/ex1.jsx';
import SortNameList from '../ALLinALL/ex2.jsx';
import Counter from '../ALLinALL/ex3.jsx';
import MissionList from '../ALLinALL/ex4.jsx';
import MissionEditor from '../ALLinALL/ex5.jsx';
import Editor from '../ALLinALL/fianlex.jsx';
import '../App.css'; // 导入统一样式

const TestPage = () => {
  return (
    <div className="section-list">
      <h1 className="app-title">章节测试</h1>

      <div className="question-card">
        <p className="question-title">测试题1</p>
        <Inputer2 />
      </div>

      <div className="question-card">
        <p className="question-title">测试题2</p>
        <SortNameList />
      </div>

      <div className="question-card">
        <p className="question-title">测试题3</p>
        <Counter />
      </div>

      <div className="question-card">
        <p className="question-title">测试题4</p>
        <MissionList />
      </div>

      <div className="question-card">
        <p className="question-title">☆测试题5</p>
        <MissionEditor />
      </div>

      <div className="question-card">
        <p className="question-title">☆综合题</p>
        <Editor />
      </div>
    </div>
  );
};

export default TestPage;
