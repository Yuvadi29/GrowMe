import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Component2 from './Pages/Component2';
import Component1 from './Pages/Component1';
import Home from './Pages/Home';

const App = () => {
  const name = localStorage.getItem('name');
  const phone = localStorage.getItem('phone');
  const email = localStorage.getItem('email');

  if (!name || !phone || !email) {
    return (
      <BrowserRouter>
        <Navigate to="/" replace state={{ message: 'Please enter your details before accessing this page.' }} />
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </BrowserRouter>
    );
  }
  


  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' Component={Home} />
      <Route path='/apiPage' Component={Component1} />
      <Route path='/jsonPage' Component={Component2} />
    </Routes>
    </BrowserRouter>

  )
}

export default App;