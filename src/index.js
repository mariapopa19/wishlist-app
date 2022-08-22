import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import Profile from './components/Profile';
import ListOwner from './components/List-owner';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<SignUp />} />
        <Route path='login' element={<SignIn />} />
        <Route path='profile' element={<Profile />}>
          <Route index path='my-list' element={<ListOwner />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
