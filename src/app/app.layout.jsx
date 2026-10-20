import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'rasengan';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { LanguageProvider } from '@/lib/i18n';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [pathname]);
  return null;
}

const AppLayout = () => {
  return (
    <LanguageProvider>
    <div className="flex min-h-screen flex-col bg-bg text-fg transition-colors duration-300">
      <a
        href="#contenu"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-accent focus:px-4 focus:py-2 focus:text-accent-fg"
      >
        Aller au contenu
      </a>
      <ScrollToTop />
      <Navbar />
      <main id="contenu" className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
    </LanguageProvider>
  );
};

AppLayout.path = '/';

export default AppLayout;
