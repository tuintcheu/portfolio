import React, { Suspense, lazy, useEffect, useRef, useState } from 'react';
import { Link } from 'rasengan';
import ErrorBoundary from '@/components/ErrorBoundary';
import Icon from '@/components/Icons';
import ProjectCard from '@/components/ProjectCard';
import Reveal from '@/components/Reveal';
import { CallToAction, SectionHeading } from '@/components/Section';
import Typewriter from '@/components/Typewriter';
import { method, services, techMarquee } from '@/data/profile';
import { projects } from '@/data/projects';
import { site, stats } from '@/data/site';
import { usePrefersReducedMotion, useThemePrefs } from '@/lib/theme';
import { useLanguage } from '@/lib/i18n';

const HeroScene = lazy(() => import('@/components/HeroScene'));

function Hero() {
  const { t } = useLanguage();
  const [prefs] = useThemePrefs();
  const reduced = usePrefersReducedMotion();
  const sectionRef = useRef(null);
  const [onScreen, setOnScreen] = useState(true);

  // Met la scène 3D en pause quand le hero n'est plus visible
  useEffect(() => {
    const node = sectionRef.current;
    if (!node || !('IntersectionObserver' in window)) return;
    const observer = new IntersectionObserver(([entry]) => setOnScreen(entry.isIntersecting));
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="ambient relative isolate overflow-hidden">
      <div className="grid-bg pointer-events-none absolute inset-0 -z-10" />
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-40 md:opacity-100">
        {prefs && (
          <ErrorBoundary>
            <Suspense fallback={null}>
              <HeroScene accent={prefs.accent} theme={prefs.theme} active={onScreen} reduced={reduced} />
            </Suspense>
          </ErrorBoundary>
        )}
      </div>

      <div className="container-page flex min-h-[calc(100svh-4rem)] flex-col justify-center py-16 md:min-h-[calc(100svh-5rem)]">
        <div className="max-w-2xl">
          {site.available && (
            <Reveal>
              <p className="inline-flex items-center gap-2.5 rounded-full border border-line/10 bg-surface/60 px-4 py-2 font-mono text-[11px] font-medium uppercase tracking-[0.12em] text-muted backdrop-blur sm:text-xs sm:tracking-[0.2em]">
                <span className="h-2 w-2 animate-pulse-ring rounded-full bg-emerald-400" />
                {t(site.availability)}
              </p>
            </Reveal>
          )}

          <Reveal delay={80}>
            <p className="mt-8 flex items-center gap-2 text-muted">
              <Icon name="sparkle" size={18} className="text-ink" />
              {t('Bonjour, je suis')}
            </p>
            <h1 className="mt-3 text-[3.25rem] font-bold leading-[0.95] sm:text-7xl lg:text-8xl">
              <span className="text-gradient">{site.firstName}</span>
              <br />
              {site.lastName}
            </h1>
          </Reveal>

          <Reveal delay={160}>
            <p className="mt-6 font-mono text-lg sm:text-2xl">
              <span className="text-muted">&lt; </span>
              <Typewriter words={site.roles.map(t)} />
              <span className="text-muted"> /&gt;</span>
            </p>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg">{t(site.pitch)}</p>
          </Reveal>

          <Reveal delay={240} className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
            <Link to="/projets" className="btn-primary">
              {t('Voir mes projets')}
              <Icon name="arrowUpRight" size={18} />
            </Link>
            <Link to="/contact" className="btn-ghost">
              {t('Me contacter')}
            </Link>
            {site.cvUrl && (
              <a href={site.cvUrl} download={site.cvFileName} className="btn-link">
                <Icon name="download" size={18} />
                {t('Télécharger mon CV')}
              </a>
            )}
          </Reveal>

          <Reveal delay={320}>
            <dl className="mt-12 grid max-w-xl grid-cols-3 gap-4 border-t border-line/10 pt-8">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <dt className="sr-only">{t(stat.label)}</dt>
                  <dd className="font-display text-2xl font-bold text-ink sm:text-3xl">{stat.value}</dd>
                  <dd className="mt-1 text-xs leading-snug text-muted sm:text-sm">{t(stat.label)}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function TechMarquee() {
  const items = [...techMarquee, ...techMarquee];
  return (
    <div className="overflow-hidden border-y border-line/10 bg-surface/40 py-5" aria-label="Technologies utilisées">
      <div className="flex w-max animate-marquee gap-10 pr-10">
        {items.map((tech, i) => (
          <span
            key={`${tech}-${i}`}
            className="flex items-center gap-10 font-display text-lg font-semibold text-muted/80"
            aria-hidden={i >= techMarquee.length}
          >
            {tech}
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
          </span>
        ))}
      </div>
    </div>
  );
}

function Services() {
  const { t } = useLanguage();
  return (
    <section className="section container-page">
      <SectionHeading
        eyebrow="Ce que je fais"
        title="Du besoin à l'application en production."
        subtitle="Je prends en charge un produit de bout en bout : interface, logique métier, données et mise en ligne. Un seul interlocuteur, moins de friction."
      />
      <div className="grid gap-5 md:grid-cols-3">
        {services.map((service, i) => (
          <Reveal key={service.title} delay={i * 90} className="card card-hover p-7">
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-accent/10 text-ink">
              <Icon name={service.icon} size={22} />
            </span>
            <h3 className="mt-6 text-xl font-bold">{t(service.title)}</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted">{t(service.text)}</p>
            <ul className="mt-5 space-y-2">
              {service.points.map((point) => (
                <li key={point} className="flex items-center gap-2 text-sm text-fg/85">
                  <Icon name="check" size={15} className="text-ink" />
                  {t(point)}
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function FeaturedProjects() {
  const { t } = useLanguage();
  const featured = projects.filter((p) => p.featured);
  return (
    <section className="section border-t border-line/10 bg-surface/30">
      <div className="container-page">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading
            className="mb-0"
            eyebrow="Projets phares"
            title="Des applications utilisées par de vrais utilisateurs."
            subtitle="Deux apps publiées sur Google Play et une plateforme d'administration en ligne."
          />
          <Reveal>
            <Link to="/projets" className="btn-ghost">
              {t('Tous les projets')} ({projects.length})
              <Icon name="arrowRight" size={18} />
            </Link>
          </Reveal>
        </div>
        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {featured.map((project, i) => (
            <Reveal key={project.slug} delay={i * 90}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Method() {
  const { t } = useLanguage();
  return (
    <section className="section container-page">
      <SectionHeading
        eyebrow="Méthode"
        title="Une façon de travailler claire et sans surprise."
        subtitle="Vous savez à chaque étape où en est votre projet, ce qui a été livré et ce qui arrive ensuite."
      />
      <ol className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {method.map((step, i) => (
          <Reveal as="li" key={step.title} delay={i * 90} className="card relative p-7">
            <span className="font-mono text-sm font-medium text-ink">0{i + 1}</span>
            <h3 className="mt-4 text-xl font-bold">{t(step.title)}</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted">{t(step.text)}</p>
          </Reveal>
        ))}
      </ol>
    </section>
  );
}

const Home = () => (
  <>
    <Hero />
    <TechMarquee />
    <Services />
    <FeaturedProjects />
    <Method />
    <CallToAction />
  </>
);

Home.path = '/';
Home.metadata = {
  title: `${site.fullName} — ${site.role}`,
  description:
    'Développeur Fullstack Web & Mobile à Yaoundé : applications Flutter publiées sur Google Play, sites React et backends Node.js / Firebase.',
  openGraph: {
    title: `${site.fullName} — ${site.role}`,
    description: 'Applications mobiles Flutter, sites React et backends Node.js / Firebase.',
    url: site.url,
    type: 'website',
  },
};

export default Home;
