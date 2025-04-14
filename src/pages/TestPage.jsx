import React from 'react';
import Inputer2 from '../ALLinALL/ex1.jsx';
import SortNameList from '../ALLinALL/ex2.jsx';
import Counter from '../ALLinALL/ex3.jsx';
import MissionList from '../ALLinALL/ex4.jsx';
import MissionEditor from '../ALLinALL/ex5.jsx';
import Editor from '../ALLinALL/fianlex.jsx';

const TestPage = () => {
  return (
    <div>
      <h1 style={{ color: 'red' }}>章节测试</h1>
      <p style={{ color: 'green' }}>测试题1</p>
      <Inputer2 />
      <p style={{ color: 'green' }}>测试题2</p>
      <SortNameList />
      <p style={{ color: 'green' }}>测试题3</p>
      <Counter />
      <p style={{ color: 'green' }}>测试题4</p>
      <MissionList />
      <p style={{ color: 'green' }}>☆测试题5</p>
      <MissionEditor />
      <p style={{ color: 'green' }}>☆综合题</p>
      <Editor />
    </div>
  );
};

export default TestPage;
