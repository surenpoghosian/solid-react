import React from 'react';
import logo from './logo.svg';
import { Routes, Route, Link } from 'react-router-dom';
import './App.css';

// ######### BAD EXAMPLE #########
// import BookList from './principles/Single Responsibility/BadBookList.component';

// ######### GOOD EXAMPLE #########
import BookList from './principles/Single Responsibility/BookList.component';


function App() {
  return (
    <>
    <h1>Software Design Principles</h1>
      <nav>
        <ul>
          <li>
            <Link to={'/'}>Home</Link>
          </li>
          <li>
            <Link to={'/books'}>Books (SRP)</Link>
          </li>
          <li>
            <Link to={'/products'}>Products (OCP)</Link>
          </li>
          <li>
            <Link to={'/widjets'}>Widjets (LSP)</Link>
          </li>
          <li>
            <Link to={'/devices'}>Devices (ISP)</Link>
          </li>
          <li>
            <Link to={'/skills'}>Skills (DIP)</Link>
          </li>

        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<h1>Home</h1>} />
        <Route path="/books" element={<BookList/>} />
      </Routes>
    </>
  );
}

export default App;
