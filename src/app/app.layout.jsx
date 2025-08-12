import React from 'react';
import { Outlet } from 'rasengan';
import Navbar from './Navbar';
import ThemeToggle from '@/components/ThemeToggle';

const AppLayout = () => {
  return (
    <React.Fragment>
      <ThemeToggle />
      <Navbar />
      <Outlet />
      <footer>
        <p>Copyright © 2025 Tuintcheu Pharel. Tous droits réservés.</p>
      </footer>
    </React.Fragment>
  );
};

AppLayout.path = '/';

export default AppLayout;
