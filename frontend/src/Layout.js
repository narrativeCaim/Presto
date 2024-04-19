import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import { Content } from './components/ui';

function Layout () {
  return (
    <div>
      <Navbar />
      <Content>
        <Outlet />
      </Content>
    </div>
  );
}

export default Layout;
