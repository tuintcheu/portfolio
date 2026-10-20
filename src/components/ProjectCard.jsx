import React from 'react';
import Icon from '@/components/Icons';
import { statusLabels } from '@/data/projects';
import { useLanguage } from '@/lib/i18n';

const categoryIcon = { mobile: 'mobile', web: 'web', desktop: 'server', outil: 'sparkle' };

const statusStyle = {
  production: 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400',
  live: 'bg-sky-500/10 text-sky-600 dark:text-sky-400',
  perso: 'bg-surface2 text-muted',
};

function ProjectLink({ href, icon, children, primary }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-semibold transition ${
        primary
          ? 'bg-accent text-accent-fg hover:brightness-110'
          : 'border border-line/15 text-fg hover:border-accent/60 hover:text-ink'
      }`}
    >
      <Icon name={icon} size={15} />
      {children}
    </a>
  );
}

export default function ProjectCard({ project, detailed = true }) {
  const { t } = useLanguage();
  const { links } = project;

  return (
    <article className="card card-hover group flex h-full flex-col p-6 md:p-7">
      <div className="mb-5 flex items-start justify-between gap-4">
        <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-accent/10 text-ink transition group-hover:bg-accent group-hover:text-accent-fg">
          <Icon name={categoryIcon[project.category]} size={22} />
        </span>
        <span className={`rounded-full px-3 py-1 text-xs font-semibold ${statusStyle[project.status]}`}>
          {project.status === 'production' && '● '}
          {t(statusLabels[project.status])}
        </span>
      </div>

      <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted">
        {t(project.tagline)} · {project.year}
        {project.context && ` · ${project.context}`}
      </p>
      <h3 className="mt-2 text-2xl font-bold">{project.name}</h3>
      <p className="mt-3 text-sm leading-relaxed text-muted">{t(project.description)}</p>

      {detailed && project.highlights.length > 0 && (
        <ul className="mt-5 space-y-2">
          {project.highlights.map((point) => (
            <li key={point} className="flex gap-2.5 text-sm text-fg/85">
              <Icon name="check" size={16} className="mt-0.5 shrink-0 text-ink" />
              <span>{t(point)}</span>
            </li>
          ))}
        </ul>
      )}

      <div className="mt-6 flex flex-wrap gap-2">
        {project.stack.map((tech) => (
          <span key={tech} className="chip">
            {tech}
          </span>
        ))}
      </div>

      {(links.store || links.demo || links.repo) && (
        <div className="mt-auto flex flex-wrap gap-2 pt-6">
          {links.store && (
            <ProjectLink href={links.store} icon="playStore" primary>
              Google Play
            </ProjectLink>
          )}
          {links.demo && (
            <ProjectLink href={links.demo} icon="external" primary={!links.store}>
              {project.status === 'live' ? t('Voir en ligne') : t('Maquette')}
            </ProjectLink>
          )}
          {links.repo && (
            <ProjectLink href={links.repo} icon="github">
              {t('Code source')}
            </ProjectLink>
          )}
        </div>
      )}
    </article>
  );
}
