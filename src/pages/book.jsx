import React, { useState, useEffect } from "react";
import "./BookTracker.css"; // 样式文件（你已有）

const BookTracker = () => {
    const [books, setBooks] = useState(() => {
        const storedBooks = localStorage.getItem("books");
        return storedBooks ? JSON.parse(storedBooks) : [];
    });
    const [bookTitle, setBookTitle] = useState("");
    const [bookPages, setBookPages] = useState("");
    const [bookLink, setBookLink] = useState("");
    const [searchTerm, setSearchTerm] = useState("");

  // 初始化读取 localStorage
  useEffect(() => {
    const storedBooks = localStorage.getItem("books");
    if (storedBooks) {
      setBooks(JSON.parse(storedBooks));
    }
  }, []);

  // books 更新时写入 localStorage
  useEffect(() => {
    localStorage.setItem("books", JSON.stringify(books));
  }, [books]);
  

  // 添加书籍
  const handleAddBook = () => {
    if (bookTitle.trim() && bookPages.trim()) {
      const newBook = {
        id: Date.now(),
        title: bookTitle,
        pages: bookPages,
        status: "未读",
        link: bookLink, // ✅ 加上 link 字段
      };
      setBooks([...books, newBook]);
      setBookTitle("");
      setBookPages("");
      setBookLink("");
    }
  };
  

  // 删除书籍
  const handleDeleteBook = (id) => {
    setBooks(books.filter((book) => book.id !== id));
  };

  // 切换状态
  const handleStatusToggle = (id) => {
    setBooks(
      books.map((book) =>
        book.id === id
          ? { ...book, status: book.status === "未读" ? "已读" : "未读" }
          : book
      )
    );
  };

  // 修改页数
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

  // 搜索过滤
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

      {/* 添加表单 */}
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
        <input
          type="text"
          placeholder="书籍链接（可选）"
          value={bookLink}
          onChange={(e) => setBookLink(e.target.value)}
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

      {/* 书籍列表 */}
      <ul className="book-list">
        {filteredBooks.map((book) => (
          <li key={book.id} className="book-item">
            <div>
              <a
                href={book.link || "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="book-link"
              >
                {book.title}
              </a>{" "}
              - {book.pages} 页 [{book.status}]
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
