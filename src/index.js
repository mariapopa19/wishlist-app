import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignUp from './components/SingUp';
import SignIn from './components/SignIn';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<SignUp />} />
        <Route path='/login' element={<SignIn />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
