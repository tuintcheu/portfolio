import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'rasengan';
import avatar from '@/assets/avatar.jpg';
import Icon from '@/components/Icons';
import ThemeControls from '@/components/ThemeControls';
import { navLinks, site } from '@/data/site';
import { useLanguage } from '@/lib/i18n';

export default function Navbar() {
  const { pathname } = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => setMenuOpen(false), [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 transition duration-300 ${
        scrolled || menuOpen ? 'border-b border-line/10 bg-bg/80 backdrop-blur-xl' : 'border-b border-transparent'
      }`}
    >
      <nav className="container-page flex h-16 items-center justify-between gap-4 md:h-20" aria-label={t('Navigation principale')}>
        <Link to="/" className="flex items-center gap-2.5 font-display text-lg font-bold">
          <img
            src={avatar}
            alt=""
            width="40"
            height="40"
            className="h-10 w-10 rounded-full object-cover ring-2 ring-accent shadow-lg shadow-accent/30"
          />
          <span className="hidden sm:inline">
            {site.lastName}
            <span className="text-ink">.</span>
          </span>
        </Link>

        <ul className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => {
            const active = pathname === link.to;
            return (
              <li key={link.to}>
                <Link
                  to={link.to}
                  aria-current={active ? 'page' : undefined}
                  className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                    active ? 'bg-accent/10 text-ink' : 'text-muted hover:text-fg'
                  }`}
                >
                  {t(link.label)}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-2">
          <div className="flex rounded-full border border-line/15 p-0.5" role="group" aria-label="Language / Langue">
            {['fr', 'en'].map((lang) => (
              <button key={lang} type="button" onClick={() => setLanguage(lang)} aria-pressed={language === lang}
                className={`rounded-full px-2.5 py-1.5 text-xs font-bold uppercase transition ${language === lang ? 'bg-accent text-accent-fg' : 'text-muted hover:text-fg'}`}>
                {lang}
              </button>
            ))}
          </div>
          <ThemeControls />
          <Link to="/contact" className="btn-primary hidden px-5 py-2.5 lg:inline-flex">
            {t('Me contacter')}
            <Icon name="arrowUpRight" size={16} />
          </Link>
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-line/10 bg-surface/70 md:hidden"
            onClick={() => setMenuOpen((v) => !v)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? t('Fermer le menu') : t('Ouvrir le menu')}
          >
            <Icon name={menuOpen ? 'close' : 'menu'} size={20} />
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div id="mobile-menu" className="container-page pb-6 md:hidden">
          <ul className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  aria-current={pathname === link.to ? 'page' : undefined}
                  className={`block rounded-xl px-4 py-3 font-medium ${
                    pathname === link.to ? 'bg-accent/10 text-ink' : 'text-fg'
                  }`}
                >
                  {t(link.label)}
                </Link>
              </li>
            ))}
          </ul>
          <Link to="/contact" className="btn-primary mt-4 w-full">
            {t('Me contacter')}
            <Icon name="arrowUpRight" size={16} />
          </Link>
        </div>
      )}
    </header>
  );
}
