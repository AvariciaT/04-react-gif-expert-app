import React from 'react';
import ReactDOM from 'react-dom/client';
import { GifExpertApp } from './GifExpertApp';
// import App from './App'
import './styles.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  // se aconseja el modo estricto, para destacar problemas potenciales en una app(Fragment )
  <React.StrictMode>
    <GifExpertApp />
  </React.StrictMode>
)
