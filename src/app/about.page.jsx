import React from 'react';
import photo from '@/assets/avatar.jpg';
import Icon from '@/components/Icons';
import Reveal from '@/components/Reveal';
import { CallToAction, SectionHeading } from '@/components/Section';
import { education, experiences, languages, skillGroups } from '@/data/profile';
import { site } from '@/data/site';
import { useLanguage } from '@/lib/i18n';

function Intro() {
  const { t } = useLanguage();
  return (
    <section className="ambient relative overflow-hidden">
      <div className="grid-bg pointer-events-none absolute inset-0" />
      <div className="container-page relative grid items-center gap-12 py-16 md:grid-cols-[1.3fr_1fr] md:py-24">
        <Reveal>
          <p className="eyebrow mb-5">{t('À propos')}</p>
          <h1 className="text-4xl font-bold leading-[1.05] sm:text-5xl md:text-6xl">
          {t('Je transforme des idées en')} <span className="text-gradient">{t('produits qui tournent.')}</span>
          </h1>
          <div className="mt-8 space-y-4 text-lg leading-relaxed text-muted">
            <p>
              {t('Diplômé en Génie Logiciel, je suis')} {t(site.role.toLowerCase())} {t('à Yaoundé. Je conçois des applications mobiles avec')} <strong className="text-fg">Flutter</strong> {t('et des interfaces web modernes avec')} <strong className="text-fg">React</strong>{t(", et je m'occupe aussi du backend qui les fait tourner.")}
            </p>
            <p>
              {t("Chez OSSECA, j'ai contribué à")} <strong className="text-fg">{t('deux applications publiées sur Google Play')}</strong>{' '}
              {t(" — TOLITOLI et 54UP — de l'interface mobile jusqu'à l'intégration des paiements et de la géolocalisation.")}
            </p>
            <p>
              {t('Ce qui me motive : des interfaces simples, élégantes et accessibles, et un code qui reste fiable une fois en production.')}
            </p>
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            {site.cvUrl && (
              <a href={site.cvUrl} download className="btn-primary">
                <Icon name="download" size={18} />
                {t('Télécharger mon CV')}
              </a>
            )}
            <a href={site.linkedin} target="_blank" rel="noopener noreferrer" className="btn-ghost">
              <Icon name="linkedin" size={18} />
              LinkedIn
            </a>
          </div>
        </Reveal>

        <Reveal delay={120} className="mx-auto w-full max-w-sm">
          <div className="relative">
            <div className="absolute -inset-4 rounded-full bg-gradient-to-br from-accent2/40 to-accent/10 blur-2xl" />
            <div className="relative aspect-square overflow-hidden rounded-full border-4 border-surface bg-surface2 shadow-2xl ring-1 ring-accent/30">
              <img
                src={photo}
                alt={`Portrait de ${site.fullName}`}
                width="500"
                height="500"
                className="h-full w-full scale-[1.1] object-cover"
              />
            </div>
          </div>
          <dl className="card mt-8 grid grid-cols-2 gap-4 p-5 text-sm">
            <div>
              <dt className="text-muted">Basé à</dt>
              <dd className="mt-1 flex items-center gap-1.5 font-semibold">
                <Icon name="mapPin" size={15} className="text-ink" />
                {t(site.location)}
              </dd>
            </div>
            <div>
              <dt className="text-muted">Langues</dt>
              <dd className="mt-1 font-semibold">{languages.map((l) => `${t(l.name)} (${t(l.level)})`).join(', ')}</dd>
            </div>
          </dl>
        </Reveal>
      </div>
    </section>
  );
}

function Timeline({ items }) {
  const { t } = useLanguage();
  return (
    <ol className="relative space-y-6 border-l border-line/15 pl-8">
      {items.map((item, i) => (
        <Reveal as="li" key={item.title} delay={i * 80} className="relative">
          <span className="absolute -left-[37px] top-1.5 h-3 w-3 rounded-full bg-accent ring-4 ring-bg" />
          <div className="card p-6">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-ink">{t(item.period)}</p>
            <h3 className="mt-2 text-xl font-bold">{t(item.title)}</h3>
            <p className="text-sm font-medium text-muted">{item.org}</p>
            {item.points && (
              <ul className="mt-4 space-y-2">
                {item.points.map((point) => (
                  <li key={point} className="flex gap-2.5 text-sm text-fg/85">
                    <Icon name="check" size={15} className="mt-0.5 shrink-0 text-ink" />
                  {t(point)}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </Reveal>
      ))}
    </ol>
  );
}

const About = () => {
  const { t } = useLanguage();
  return (
  <>
    <Intro />

    <section className="section container-page grid gap-16 lg:grid-cols-2">
      <div>
        <SectionHeading eyebrow="Expérience" title="Parcours professionnel" className="mb-10" />
        <Timeline items={experiences} />
      </div>
      <div>
        <SectionHeading eyebrow="Formation" title="Ce qui m'a formé" className="mb-10" />
        <Timeline items={education} />
      </div>
    </section>

    <section className="section border-t border-line/10 bg-surface/30">
      <div className="container-page">
        <SectionHeading
          eyebrow="Compétences"
          title="Une stack complète, du mobile au serveur."
          subtitle="Les technologies que j'utilise au quotidien sur des projets réels."
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {skillGroups.map((group, i) => (
            <Reveal key={group.title} delay={i * 80} className="card p-6">
              <h3 className="text-lg font-bold">{t(group.title)}</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span key={item} className="chip-accent">
                    {item}
                  </span>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>

    <section className="section container-page">
      <Reveal className="mx-auto max-w-3xl text-center">
        <p className="eyebrow mb-5">{t('Ma vision')}</p>
        <p className="font-display text-2xl font-semibold leading-snug sm:text-3xl md:text-4xl">
          {t('« Créer des solutions')} <span className="text-ink">{t('simples')}</span>, <span className="text-ink">{t('élégantes')}</span>{' '}
          {t('et')} <span className="text-ink">{t('accessibles')}</span> {t('à tous. »')}
        </p>
      </Reveal>
    </section>

    <CallToAction />
  </>
  );
};

About.path = '/about';
About.metadata = {
  title: `À propos — ${site.fullName}`,
  description:
    'Parcours, expériences (OSSECA, Makiti), formation en Génie Logiciel et compétences de Tuintcheu Pharel, développeur Fullstack Web & Mobile.',
  openGraph: {
    title: `À propos — ${site.fullName}`,
    description: 'Parcours, expériences et compétences de Tuintcheu Pharel.',
    url: `${site.url}/about`,
  },
};

export default About;
