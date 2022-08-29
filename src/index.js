import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import Profile from './pages/Profile';
import ListOwner from './pages/List-owner';
import GroupPage from './pages/Group-page';
import ListOther from './pages/List-other';

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
          <Route path='group'>
            <Route index element={<GroupPage name={'friends'} />} />
            <Route path='list' element={<ListOther namePerson={'maria'} nameList={'birthday'}  />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
