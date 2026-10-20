import React, { useState } from 'react';
import ProjectCard from '@/components/ProjectCard';
import Reveal from '@/components/Reveal';
import { CallToAction, PageHeader } from '@/components/Section';
import { categories, projects } from '@/data/projects';
import { site } from '@/data/site';
import { useLanguage } from '@/lib/i18n';

const Projets = () => {
  const { t } = useLanguage();
  const [filter, setFilter] = useState('all');
  const visible = filter === 'all' ? projects : projects.filter((p) => p.category === filter);
  const inProduction = projects.filter((p) => p.status === 'production').length;

  return (
    <>
      <PageHeader
        eyebrow="Réalisations"
        title={
          <>
            {t('Des projets concrets,')} <span className="text-gradient">{t('du store au serveur.')}</span>
          </>
        }
        subtitle={`${inProduction} ${t('applications en production sur Google Play, des plateformes web, des outils et des logiciels métier — mobile, web et backend.')}`}
      />

      <section className="container-page pb-20 md:pb-28">
        <div className="mb-10 flex flex-wrap gap-2" role="group" aria-label="Filtrer les projets">
          {categories.map((cat) => {
            const count = cat.id === 'all' ? projects.length : projects.filter((p) => p.category === cat.id).length;
            if (count === 0) return null;
            const active = filter === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setFilter(cat.id)}
                aria-pressed={active}
                className={`rounded-full px-5 py-2 text-sm font-semibold transition ${
                  active ? 'bg-accent text-accent-fg' : 'border border-line/15 text-muted hover:border-accent/50 hover:text-fg'
                }`}
              >
                {t(cat.label)}
                <span className={`ml-2 text-xs ${active ? 'opacity-70' : 'text-muted'}`}>{count}</span>
              </button>
            );
          })}
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {visible.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>

        <Reveal className="mx-auto mt-14 max-w-2xl text-center text-sm leading-relaxed text-muted">
          {t("Une partie de mes projets réalisés en entreprise est couverte par un accord de confidentialité.")} {t("Je serai ravi d'en détailler le contexte et ma contribution lors d'un échange.")}{' '}
          <a href={site.github} target="_blank" rel="noopener noreferrer" className="font-semibold text-ink hover:underline">
            {t('Voir mon GitHub')}
          </a>
        </Reveal>
      </section>

      <CallToAction title="Votre application pourrait être la prochaine." />
    </>
  );
};

Projets.path = '/projets';
Projets.metadata = {
  title: `Projets — ${site.fullName}`,
  description:
    'Applications mobiles Flutter publiées sur Google Play, plateformes web, outils et logiciels métier réalisés par Tuintcheu Pharel.',
  openGraph: {
    title: `Projets — ${site.fullName}`,
    description: 'Applications mobiles, plateformes web et outils réalisés par Tuintcheu Pharel.',
    url: `${site.url}/projets`,
  },
};

export default Projets;
