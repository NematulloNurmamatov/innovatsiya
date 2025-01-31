import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App';
import Home from './pages/Home';
import Portal from './pages/Portal';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path='/' element={<Home />} />
          <Route path="/about" element={<Portal />} />
          
          <Route path='*' element={<h1>Error page 404</h1>} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
