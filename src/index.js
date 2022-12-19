import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import MyAuth0Provider from './context/MyAuth0Provider';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MyAuth0Provider>
      <App />
    </MyAuth0Provider>
  </React.StrictMode>
);
