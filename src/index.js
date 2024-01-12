import React from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './App';
import './styles/index.css';  // Optional: Importing global styles

const root = createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
