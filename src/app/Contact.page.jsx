import React, { useState } from 'react';
import Icon from '@/components/Icons';
import Reveal from '@/components/Reveal';
import { PageHeader } from '@/components/Section';
import { site } from '@/data/site';
import { useLanguage } from '@/lib/i18n';

const projectTypes = ['Application mobile', 'Site / app web', 'Backend / API', 'Autre'];

const channels = [
  { icon: 'whatsapp', label: 'WhatsApp', value: site.phone, href: site.whatsapp, hint: 'Le plus rapide' },
  { icon: 'linkedin', label: 'LinkedIn', value: 'pharel-tuintcheu', href: site.linkedin },
  { icon: 'github', label: 'GitHub', value: 'tuintcheu', href: site.github },
];

function CopyEmail() {
  const [copied, setCopied] = useState(false);
  const { t } = useLanguage();

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(site.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${site.email}`;
    }
  };

  return (
    <div className="card flex items-center gap-4 p-5">
      <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-ink">
        <Icon name="mail" size={20} />
      </span>
      <div className="min-w-0 flex-1">
        <p className="text-xs text-muted">Email</p>
        <a href={`mailto:${site.email}`} className="block truncate font-semibold hover:text-ink">
          {site.email}
        </a>
      </div>
      <button
        type="button"
        onClick={copy}
        className="inline-flex items-center gap-1.5 rounded-full border border-line/15 px-3 py-1.5 text-xs font-semibold transition hover:border-accent/60 hover:text-ink"
        aria-live="polite"
      >
        <Icon name={copied ? 'check' : 'copy'} size={14} />
        {copied ? t('Copié') : t('Copier')}
      </button>
    </div>
  );
}

const Contact = () => {
  const { t } = useLanguage();
  const [form, setForm] = useState({ name: '', email: '', type: projectTypes[0], message: '' });
  const [opened, setOpened] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  // Pas de backend : on ouvre la messagerie du visiteur avec le message pré-rempli
  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`[Portfolio] ${t(form.type)} — ${form.name}`);
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name}\n${form.email}`);
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
    setOpened(true);
  };

  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title={
          <>
            {t('Travaillons')} <span className="text-gradient">{t('ensemble.')}</span>
          </>
        }
        subtitle="Un projet, une mission, une opportunité ? Décrivez-moi votre besoin en quelques lignes : je reviens vers vous avec une première approche."
      >
        <div className="mt-8 flex flex-wrap gap-3 text-sm">
          {site.available && (
            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-4 py-1.5 font-semibold text-emerald-600 dark:text-emerald-400">
              <span className="h-2 w-2 animate-pulse-ring rounded-full bg-emerald-400" />
              {t(site.availability)}
            </span>
          )}
          <span className="chip px-4 py-1.5 text-sm">{t(site.responseTime)}</span>
        </div>
      </PageHeader>

      <section className="container-page grid gap-8 pb-20 md:pb-28 lg:grid-cols-5">
        <Reveal className="card p-6 md:p-10 lg:col-span-3">
          {opened ? (
            <div className="py-10 text-center" role="status">
              <span className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-500">
                <Icon name="check" size={28} />
              </span>
              <h2 className="mt-5 text-2xl font-bold">{t("Votre messagerie s'est ouverte")}</h2>
              <p className="mx-auto mt-3 max-w-md text-muted">
                {t("Votre message est pré-rempli : il ne reste plus qu'à l'envoyer. Rien ne s'est ouvert ? Écrivez-moi directement à")} <a href={`mailto:${site.email}`} className="font-semibold text-ink">{site.email}</a> {t('ou sur WhatsApp.')}
              </p>
              <button type="button" onClick={() => setOpened(false)} className="btn-ghost mt-6">
                {t('Modifier mon message')}
              </button>
            </div>
          ) : (
            <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="flex flex-col gap-2">
                  <span className="text-sm font-semibold">{t('Votre nom')}</span>
                  <input
                    type="text"
                    name="name"
                    autoComplete="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Jean Dupont"
                    required
                    className="field"
                  />
                </label>
                <label className="flex flex-col gap-2">
                  <span className="text-sm font-semibold">{t('Votre email')}</span>
                  <input
                    type="email"
                    name="email"
                    autoComplete="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="jean@entreprise.com"
                    required
                    className="field"
                  />
                </label>
              </div>

              <fieldset>
                <legend className="mb-2 text-sm font-semibold">{t('Type de projet')}</legend>
                <div className="flex flex-wrap gap-2">
                  {projectTypes.map((type) => (
                    <label
                      key={type}
                      className={`cursor-pointer rounded-full border px-4 py-2 text-sm font-medium transition has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-accent ${
                        form.type === type
                          ? 'border-accent bg-accent/10 text-ink'
                          : 'border-line/15 text-muted hover:border-accent/50'
                      }`}
                    >
                      <input
                        type="radio"
                        name="type"
                        value={type}
                        checked={form.type === type}
                        onChange={handleChange}
                        className="sr-only"
                      />
                      {t(type)}
                    </label>
                  ))}
                </div>
              </fieldset>

              <label className="flex flex-col gap-2">
                <span className="text-sm font-semibold">{t('Votre message')}</span>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder={t('Parlez-moi de votre projet : objectif, délai, ce qui existe déjà…')}
                  required
                  rows={6}
                  className="field resize-y"
                />
              </label>

              <button type="submit" className="btn-primary mt-1 w-full sm:w-auto sm:self-start">
                {t('Envoyer le message')}
                <Icon name="arrowRight" size={18} />
              </button>
              <p className="text-xs text-muted">
                {t('Le bouton ouvre votre application e-mail avec le message pré-rempli.')}
              </p>
            </form>
          )}
        </Reveal>

        <Reveal delay={120} className="flex flex-col gap-4 lg:col-span-2">
          <CopyEmail />
          {channels.map((c) => (
            <a
              key={c.label}
              href={c.href}
              target="_blank"
              rel="noopener noreferrer"
              className="card card-hover group flex items-center gap-4 p-5"
            >
              <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-ink transition group-hover:bg-accent group-hover:text-accent-fg">
                <Icon name={c.icon} size={20} />
              </span>
              <div className="flex-1">
                <p className="text-xs text-muted">
                  {t(c.label)}
                  {c.hint && <span className="ml-2 text-ink">· {t(c.hint)}</span>}
                </p>
                <p className="font-semibold">{c.value}</p>
              </div>
              <Icon name="arrowUpRight" size={18} className="text-muted transition group-hover:text-ink" />
            </a>
          ))}
          <div className="card flex items-center gap-4 p-5">
            <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-ink">
              <Icon name="mapPin" size={20} />
            </span>
            <div>
              <p className="text-xs text-muted">{t('Localisation')}</p>
              <p className="font-semibold">{t(site.location)}</p>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
};

Contact.path = '/contact';
Contact.metadata = {
  title: `Contact — ${site.fullName}`,
  description:
    'Contactez Tuintcheu Pharel pour votre application mobile, site web ou backend : email, WhatsApp ou LinkedIn.',
  openGraph: {
    title: `Contact — ${site.fullName}`,
    description: 'Un projet mobile ou web ? Parlons-en.',
    url: `${site.url}/contact`,
  },
};

export default Contact;
