import { useEffect, useState } from 'react';

export const DEFAULT_ACCENT = '#f5b921';
export const DEFAULT_THEME = 'dark';

export const ACCENT_PRESETS = [
  { name: 'Or', value: '#f5b921' },
  { name: 'Bleu', value: '#2a7fff' },
  { name: 'Violet', value: '#8b5cf6' },
  { name: 'Émeraude', value: '#10b981' },
  { name: 'Corail', value: '#ff6b4a' },
  { name: 'Rose', value: '#ec4899' },
  { name: 'Cyan', value: '#06b6d4' },
];

/**
 * Applique le thème (clair/sombre) et la couleur d'accent sur <html>.
 *
 * Cette fonction DOIT rester autonome (aucune référence extérieure) : elle est
 * sérialisée avec .toString() dans src/template.jsx pour s'exécuter avant le
 * premier rendu, ce qui évite le flash de thème. Les valeurs par défaut sont
 * donc dupliquées ici volontairement.
 *
 * Sans argument : lit les préférences sauvegardées. Avec un argument : applique
 * et sauvegarde les valeurs fournies.
 */
export function applyThemePrefs(next) {
  var fallbackAccent = '#f5b921';
  var store = null;
  try {
    store = window.localStorage;
  } catch (e) {}
  var read = function (key) {
    try {
      return store && store.getItem(key);
    } catch (e) {
      return null;
    }
  };

  var theme = (next && next.theme) || read('theme') || 'dark';
  var accent = (next && next.accent) || read('accent') || fallbackAccent;
  if (theme !== 'light' && theme !== 'dark') theme = 'dark';
  if (!/^#[0-9a-f]{6}$/i.test(accent)) accent = fallbackAccent;
  accent = accent.toLowerCase();

  var n = parseInt(accent.slice(1), 16);
  var r = (n >> 16) & 255;
  var g = (n >> 8) & 255;
  var b = n & 255;
  var tint = function (c, t) {
    return t >= 0 ? Math.round(c + (255 - c) * t) : Math.round(c * (1 + t));
  };
  var rgb = function (t) {
    return tint(r, t) + ' ' + tint(g, t) + ' ' + tint(b, t);
  };
  var luminance = (0.2126 * r + 0.7152 * g + 0.0722 * b) / 255;

  var root = document.documentElement;
  root.classList.toggle('dark', theme === 'dark');
  root.style.colorScheme = theme;
  root.dataset.theme = theme;
  root.dataset.accent = accent;
  root.style.setProperty('--accent', rgb(0));
  root.style.setProperty('--accent-2', rgb(luminance > 0.55 ? 0.45 : 0.25));
  // Texte posé SUR un fond accent : sombre si l'accent est clair (or, cyan…)
  root.style.setProperty('--accent-fg', luminance > 0.55 ? '20 16 8' : '255 255 255');
  // Texte écrit EN couleur accent : assombri en mode clair pour rester lisible
  root.style.setProperty(
    '--accent-ink',
    theme === 'dark' ? rgb(0.15) : rgb(luminance > 0.45 ? -0.45 : -0.1)
  );

  if (next) {
    try {
      store.setItem('theme', theme);
      store.setItem('accent', accent);
    } catch (e) {}
    window.dispatchEvent(new CustomEvent('themeprefs', { detail: { theme: theme, accent: accent } }));
  }
  return { theme: theme, accent: accent };
}

export const themeBootScript = `document.documentElement.classList.add('js');(${applyThemePrefs.toString()})();`;

const readPrefs = () => ({
  theme: document.documentElement.dataset.theme || DEFAULT_THEME,
  accent: document.documentElement.dataset.accent || DEFAULT_ACCENT,
});

/**
 * Préférences courantes. Vaut `null` pendant le rendu serveur et l'hydratation
 * (les valeurs ne sont connues que côté navigateur), puis se met à jour à chaque
 * changement fait depuis le panneau.
 */
export function useThemePrefs() {
  const [prefs, setPrefs] = useState(null);

  useEffect(() => {
    setPrefs(readPrefs());
    const onChange = (e) => setPrefs(e.detail);
    window.addEventListener('themeprefs', onChange);
    return () => window.removeEventListener('themeprefs', onChange);
  }, []);

  const update = (patch) => applyThemePrefs({ ...readPrefs(), ...patch });

  return [prefs, update];
}

export function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const query = window.matchMedia('(prefers-reduced-motion: reduce)');
    const sync = () => setReduced(query.matches);
    sync();
    query.addEventListener('change', sync);
    return () => query.removeEventListener('change', sync);
  }, []);

  return reduced;
}
