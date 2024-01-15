// 📁 client/src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createContext } from 'react';

export const URLContext = createContext(null);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <URLContext.Provider
    value={window.location.href.includes("localhost") ?
      'http://localhost:5000' : process.env.REACT_APP_BACKEND_URL
    }>
    <App />
  </URLContext.Provider>
);