import React from 'react';
import Nav from './components/Nav';
import { Outlet } from 'react-router-dom';
import Footer from './components/footer';

function App() {
  return (
    <>
      <Nav />
      <Footer />
      <Outlet />
    </>
  );
}

export default App;
