import React from 'react';
import { ContextMenuTrigger, ContextMenu } from '@/pages/component/ContextMenu';

function App() {
  return (
    <div className="App">
      <ContextMenuTrigger id="sampleID">
        <header
          className="App-header"
          style={{ width: '100%', height: '200px', background: 'aliceblue' }}
        >
          <p>
            Edit <code>src/App.js</code> and save to reload.
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
      </ContextMenuTrigger>
      <ContextMenu id="sampleID">
        <ul className="menu-list">
          <li>
            <span className="text">下载</span>
          </li>
          <li>
            <span className="text">移动</span>
          </li>
          <li>
            <span className="text">删除</span>
          </li>
          <li>
            <span className="text">重命名</span>
          </li>
          <li>
            <span className="text">属性</span>
          </li>
        </ul>
      </ContextMenu>
    </div>
  );
}

export default App;
