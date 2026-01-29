import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LoginPage from './Pages/LoginPage';
import SignUp from './Pages/SignUp';
import Home from './Pages/Home';
import MainLayout from './Layout/MainLayout';
import AuthLayout from './Layout/AuthLayout';
import AboutUs from './Pages/AboutUs';

export default function Routers() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path='home' element={<Home />} />
            <Route path="/aboutus" element={<AboutUs />} />
          </Route>
        
          <Route element={<AuthLayout />}>
            <Route path='/' element={<LoginPage />} />
            <Route path="/signup" element={<SignUp />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
