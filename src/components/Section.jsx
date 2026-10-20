import React from 'react';
import { Link } from 'rasengan';
import Icon from '@/components/Icons';
import Reveal from '@/components/Reveal';
import { site } from '@/data/site';
import { useLanguage } from '@/lib/i18n';

/** Bandeau d'appel à l'action placé en bas de chaque page. */
export function CallToAction({
  title = 'Un projet en tête ? Parlons-en.',
  text = "Application mobile, site web ou back-office : décrivez-moi votre besoin, je vous réponds avec une première approche et une estimation.",
}) {
  const { t } = useLanguage();
  return (
    <section className="container-page pb-20 md:pb-28">
      <Reveal className="ambient relative overflow-hidden rounded-3xl border border-accent/20 bg-surface px-6 py-14 text-center md:px-16 md:py-20">
        <div className="grid-bg pointer-events-none absolute inset-0" />
        <div className="relative mx-auto max-w-2xl">
          {site.available && (
            <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-4 py-1.5 text-xs font-semibold text-emerald-600 dark:text-emerald-400">
              <span className="h-2 w-2 animate-pulse-ring rounded-full bg-emerald-400" />
              {t(site.availability)}
            </p>
          )}
          <h2 className="text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">{t(title)}</h2>
          <p className="mt-4 text-muted md:text-lg">{t(text)}</p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link to="/contact" className="btn-primary">
              {t('Démarrer un projet')}
              <Icon name="arrowRight" size={18} />
            </Link>
            <a href={site.whatsapp} target="_blank" rel="noopener noreferrer" className="btn-ghost">
              <Icon name="whatsapp" size={18} />
              {t('Discuter sur WhatsApp')}
            </a>
          </div>
          <p className="mt-5 text-xs text-muted">{t(site.responseTime)}</p>
        </div>
      </Reveal>
    </section>
  );
}

/** En-tête de section : sur-titre, titre, sous-titre. */
export function SectionHeading({ eyebrow, title, subtitle, align = 'left', className = '' }) {
  const { t } = useLanguage();
  const centered = align === 'center';
  return (
    <Reveal className={`mb-12 max-w-2xl ${centered ? 'mx-auto text-center' : ''} ${className}`}>
      {eyebrow && <p className="eyebrow mb-4">{t(eyebrow)}</p>}
      <h2 className="text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">{t(title)}</h2>
      {subtitle && <p className="mt-4 text-base leading-relaxed text-muted md:text-lg">{t(subtitle)}</p>}
    </Reveal>
  );
}

/** En-tête des pages secondaires (Projets, À propos, Contact). */
export function PageHeader({ eyebrow, title, subtitle, children }) {
  const { t } = useLanguage();
  return (
    <section className="ambient relative overflow-hidden">
      <div className="grid-bg pointer-events-none absolute inset-0" />
      <div className="container-page relative pb-16 pt-16 md:pb-20 md:pt-24">
        <Reveal className="max-w-3xl">
          {eyebrow && <p className="eyebrow mb-5">{t(eyebrow)}</p>}
          <h1 className="text-4xl font-bold leading-[1.05] sm:text-5xl md:text-6xl">{t(title)}</h1>
          {subtitle && <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">{t(subtitle)}</p>}
          {children}
        </Reveal>
      </div>
    </section>
  );
}
