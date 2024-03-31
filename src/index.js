import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import NavbarContextProvider from './store/NavbarContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <NavbarContextProvider>
    <App />
  </NavbarContextProvider>
  </React.StrictMode>
);

