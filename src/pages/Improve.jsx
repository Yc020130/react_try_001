// Improve.jsx
import React from "react";
import { Link, Outlet } from "react-router-dom";
import "./improve.css";

const Improve = () => {
  return (
    <div>
      <h1>组件通信</h1>
      <nav className="app-nav">
        <Link to="/improve/knowledge">📘 知识点</Link>
        <Link to="/improve/exercise">📝 练习</Link>
      </nav>

      <div className="content">
        <Outlet /> {/* 这里是子路由显示区域 */}
      </div>
    </div>
  );
};

export default Improve;
