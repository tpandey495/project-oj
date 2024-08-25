import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from 'component/Navbar';
import Footer from 'component/BottomNavbar';

const Layout = () => {
  return (
    <div>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
