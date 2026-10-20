import React from 'react';
import { Link } from 'rasengan';
import avatar from '@/assets/avatar.jpg';
import Icon from '@/components/Icons';
import { navLinks, site } from '@/data/site';
import { useLanguage } from '@/lib/i18n';

export const socials = [
  { name: 'GitHub', icon: 'github', href: site.github },
  { name: 'LinkedIn', icon: 'linkedin', href: site.linkedin },
  { name: 'WhatsApp', icon: 'whatsapp', href: site.whatsapp },
  { name: 'Email', icon: 'mail', href: `mailto:${site.email}` },
];

export default function Footer() {
  const { t } = useLanguage();
  return (
    <footer className="border-t border-line/10">
      <div className="container-page grid gap-10 py-12 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <Link to="/" className="flex items-center gap-2.5 font-display text-lg font-bold">
            <img
              src={avatar}
              alt=""
              width="40"
              height="40"
              className="h-10 w-10 rounded-full object-cover ring-2 ring-accent"
            />
            {site.fullName}
          </Link>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted">
            {t(site.role)} {t('basé à')} {t(site.location)}. {t("J'aide les entreprises à lancer des produits web et mobiles fiables.")}
          </p>
        </div>

        <div>
          <p className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-muted">{t('Navigation')}</p>
          <ul className="space-y-2 text-sm">
            {navLinks.map((link) => (
              <li key={link.to}>
                <Link to={link.to} className="text-fg/80 transition hover:text-ink">
                  {t(link.label)}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-muted">{t('Me retrouver')}</p>
          <div className="flex gap-2">
            {socials.map((s) => (
              <a
                key={s.name}
                href={s.href}
                target={s.href.startsWith('http') ? '_blank' : undefined}
                rel="noopener noreferrer"
                aria-label={s.name}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-line/10 text-muted transition hover:border-accent/60 hover:text-ink"
              >
                <Icon name={s.icon} size={18} />
              </a>
            ))}
          </div>
          <a href={`mailto:${site.email}`} className="mt-4 block text-sm text-fg/80 hover:text-ink">
            {site.email}
          </a>
        </div>
      </div>

      <div className="border-t border-line/10">
        <div className="container-page flex flex-col items-center justify-between gap-2 py-6 text-xs text-muted sm:flex-row">
          <p>© {new Date().getFullYear()} {site.fullName}. {t('Tous droits réservés.')}</p>
          <p>{t('Conçu et développé avec React, Three.js & Tailwind CSS.')}</p>
        </div>
      </div>
    </footer>
  );
}
