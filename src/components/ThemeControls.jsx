import React, { useEffect, useRef, useState } from 'react';
import Icon from '@/components/Icons';
import { ACCENT_PRESETS, DEFAULT_ACCENT, useThemePrefs } from '@/lib/theme';
import { useLanguage } from '@/lib/i18n';

const iconButton =
  'inline-flex h-10 w-10 items-center justify-center rounded-full border border-line/10 bg-surface/70 text-fg transition hover:border-accent/60 hover:text-ink';

/** Bouton clair/sombre + panneau de choix de la couleur d'accent. */
export default function ThemeControls() {
  const { t } = useLanguage();
  const [prefs, update] = useThemePrefs();
  const [open, setOpen] = useState(false);
  const panelRef = useRef(null);

  useEffect(() => {
    if (!open) return;
    const onPointer = (e) => {
      if (panelRef.current && !panelRef.current.contains(e.target)) setOpen(false);
    };
    const onKey = (e) => e.key === 'Escape' && setOpen(false);
    document.addEventListener('pointerdown', onPointer);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('pointerdown', onPointer);
      document.removeEventListener('keydown', onKey);
    };
  }, [open]);

  const isDark = prefs ? prefs.theme === 'dark' : true;
  const accent = prefs?.accent ?? DEFAULT_ACCENT;

  return (
    <div className="flex items-center gap-2">
      <div className="relative" ref={panelRef}>
        <button
          type="button"
          className={iconButton}
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-haspopup="dialog"
          aria-label={t('Changer la couleur du site')}
          title={t('Couleur du site')}
        >
          <span className="h-4 w-4 rounded-full bg-accent shadow-[0_0_12px] shadow-accent/70" />
        </button>

        {open && (
          <div
            role="dialog"
            aria-label={t('Couleur du site')}
            className="card absolute right-0 top-12 z-50 w-64 bg-surface p-4 shadow-2xl shadow-black/30"
          >
            <p className="mb-3 flex items-center gap-2 text-sm font-semibold">
              <Icon name="palette" size={16} className="text-ink" />
              {t("Couleur d'accent")}
            </p>
            <div className="grid grid-cols-7 gap-2">
              {ACCENT_PRESETS.map((preset) => {
                const selected = preset.value === accent;
                return (
                  <button
                    key={preset.value}
                    type="button"
                    onClick={() => update({ accent: preset.value })}
                    className={`relative h-7 w-7 rounded-full transition hover:scale-110 ${
                      selected ? 'ring-2 ring-fg ring-offset-2 ring-offset-surface' : ''
                    }`}
                    style={{ backgroundColor: preset.value }}
                    aria-label={t(preset.name)}
                    aria-pressed={selected}
                    title={t(preset.name)}
                  />
                );
              })}
            </div>

            <label className="mt-4 flex cursor-pointer items-center justify-between gap-3 rounded-xl border border-line/10 bg-surface2 px-3 py-2 text-sm">
              <span>{t('Personnalisée')}</span>
              <span className="flex items-center gap-2 font-mono text-xs text-muted">
                {accent}
                <input
                  type="color"
                  value={accent}
                  onChange={(e) => update({ accent: e.target.value })}
                  className="h-7 w-7 cursor-pointer rounded-md border-0 bg-transparent p-0"
                  aria-label={t('Choisir une couleur personnalisée')}
                />
              </span>
            </label>

            {accent !== DEFAULT_ACCENT && (
              <button
                type="button"
                onClick={() => update({ accent: DEFAULT_ACCENT })}
                className="mt-3 w-full text-center text-xs text-muted underline-offset-4 hover:text-ink hover:underline"
              >
                {t('Revenir à la couleur par défaut')}
              </button>
            )}
          </div>
        )}
      </div>

      <button
        type="button"
        className={iconButton}
        onClick={() => update({ theme: isDark ? 'light' : 'dark' })}
        aria-label={isDark ? t('Passer en mode clair') : t('Passer en mode sombre')}
        title={isDark ? t('Mode clair') : t('Mode sombre')}
      >
        <Icon name={isDark ? 'sun' : 'moon'} size={18} />
      </button>
    </div>
  );
}
