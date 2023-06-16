/*
 * @Author: zhaojing834
 * @Date: 2023-06-16 17:31:29
 * @LastEditors: zhaojing834
 * @LastEditTime: 2023-06-16 17:40:24
 * @FilePath: /react-low-code/src/App.tsx
 * @Descripttion: 业务描述
 */
import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  var a = 10
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
