import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import Profile from './components/Profile';
import ListOwner from './components/List-owner';
import GroupPage from './components/Group-page';

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
