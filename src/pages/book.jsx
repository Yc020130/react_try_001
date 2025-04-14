import React, { useState, useEffect } from "react";
import "./BookTracker.css"; // 你之前的样式文件

const BookTracker = () => {
  const [books, setBooks] = useState([]);
  const [bookTitle, setBookTitle] = useState("");
  const [bookPages, setBookPages] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  // 初次加载时，从 localStorage 中读取数据
  useEffect(() => {
    const storedBooks = localStorage.getItem("books");
    if (storedBooks) {
      setBooks(JSON.parse(storedBooks));
    }
  }, []);

  // books 变化时，写入 localStorage
  useEffect(() => {
    if (books.length > 0) {
      localStorage.setItem("books", JSON.stringify(books));
    }
  }, [books]);
  

  const handleAddBook = () => {
    if (bookTitle.trim() && bookPages.trim()) {
      const newBook = {
        id: Date.now(),
        title: bookTitle,
        pages: bookPages,
        status: "未读",
      };
      setBooks([...books, newBook]);
      setBookTitle("");
      setBookPages("");
    }
  };

  const handleDeleteBook = (id) => {
    setBooks(books.filter((book) => book.id !== id));
  };

  const handleStatusToggle = (id) => {
    setBooks(
      books.map((book) =>
        book.id === id
          ? { ...book, status: book.status === "未读" ? "已读" : "未读" }
          : book
      )
    );
  };

  const handlePageChange = (id) => {
    const newPages = prompt("请输入新的页数");
    if (newPages) {
      setBooks(
        books.map((book) =>
          book.id === id ? { ...book, pages: newPages } : book
        )
      );
    }
  };

  // 过滤书籍
  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="book-container">
      <h2>📚 阅读进度追踪器</h2>

      {/* 统计信息 */}
      <p>
        共 {books.length} 本书，已读{" "}
        {books.filter((b) => b.status === "已读").length} 本，未读{" "}
        {books.filter((b) => b.status === "未读").length} 本
      </p>

      <div className="book-form">
        <input
          type="text"
          placeholder="书名"
          value={bookTitle}
          onChange={(e) => setBookTitle(e.target.value)}
        />
        <input
          type="number"
          placeholder="当前阅读页数"
          value={bookPages}
          onChange={(e) => setBookPages(e.target.value)}
        />
        <button onClick={handleAddBook}>添加</button>
      </div>

      {/* 搜索框 */}
      <input
        type="text"
        placeholder="搜索书名"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <ul className="book-list">
        {filteredBooks.map((book) => (
          <li key={book.id} className="book-item">
            <div>
              <strong>{book.title}</strong> - {book.pages} 页 [{book.status}]
            </div>
            <div className="book-actions">
              <button onClick={() => handleStatusToggle(book.id)}>
                切换状态
              </button>
              <button onClick={() => handlePageChange(book.id)}>修改页数</button>
              <button onClick={() => handleDeleteBook(book.id)}>删除</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookTracker;
