import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import Profile from './pages/Profile';
import ListOwner from './pages/List-owner';
import GroupPage from './pages/Group-page';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<SignIn />} />
        <Route path='signup' element={<SignUp />} />
        <Route path='dashboard'>
          <Route index element={<Profile />} />
          <Route path='my-list' element={<ListOwner />} />
          <Route path='group' element={<GroupPage name={'friends'} />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
