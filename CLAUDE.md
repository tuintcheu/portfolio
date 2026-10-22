# Portfolio — Tuintcheu Pharel

Portfolio personnel (FR) d'un développeur Fullstack Web & Mobile. Objectif : convaincre
recruteurs et clients, donc un contenu **factuel et vérifiable** et un design premium
(fond sombre, hero 3D, couleur d'accent personnalisable par le visiteur).

En ligne : https://portfolio-n6ix.vercel.app (Vercel).

## Commandes

```bash
npm run dev     # serveur de dev Rasengan (port 5320 par défaut, pas d'option --port)
npm run build   # build SSR + client dans dist/ (adaptateur Vercel)
npm run serve   # sert dist/ en local
```

Pas de tests ni de linter configurés : valider avec `npm run build` puis en vérifiant
le rendu dans le navigateur (desktop 1440 px et mobile 390 px, thème clair et sombre).

## Stack

- **Rasengan.js 1.x** (framework React SSR sur Vite 6) — routage par `src/app/app.router.js`
- **React 19**, **Tailwind CSS 3.4**
- **three.js + @react-three/fiber 9 + drei 10** pour la scène 3D du hero
- Aucune API ni backend : le formulaire de contact ouvre un `mailto:`

## Arborescence

```
src/
  template.jsx          <html>/<head> : lang="fr", polices, favicon, script de thème
  main.jsx, index.js    points d'entrée Rasengan (ne pas toucher)
  app/
    app.router.js       déclare le layout et les pages
    app.layout.jsx      Navbar + <Outlet/> + Footer, remonte en haut à chaque navigation
    home.page.jsx       hero 3D, technos, services, projets phares, méthode, CTA
    Projets.page.jsx    grille filtrable par catégorie
    about.page.jsx      présentation, expériences, formation, compétences
    Contact.page.jsx    formulaire mailto + canaux directs
  components/           Navbar, Footer, ThemeControls, HeroScene, ProjectCard,
                        Section (SectionHeading, PageHeader, CallToAction), Reveal,
                        Typewriter, Icons, ErrorBoundary
  data/                 ← TOUT le contenu éditable est ici
    site.js             identité, liens, disponibilité, stats, CV, navigation
    projects.js         projets + catégories + libellés de statut
    profile.js          services, compétences, expériences, formation, méthode
  lib/theme.js          thème clair/sombre + couleur d'accent (voir plus bas)
  styles/index.css      tokens CSS, classes de composants (.btn-primary, .card…)
  assets/
    avatar.jpg              photo (navbar, footer, À propos) : 720 px, < 100 Ko
    cv-pharel-tuintcheu.pdf CV téléchargeable, importé en `?url` dans site.js
public/
  favicon.svg, robots.txt
```

Chaque page exporte `Page.path` et `Page.metadata` (`title`, `description`, `openGraph`).

## Modifier le contenu

- **Ajouter un projet** : un objet de plus dans `src/data/projects.js`
  (`slug`, `name`, `year`, `category`, `status`, `tagline`, `description`, `highlights[]`,
  `stack[]`, `links: { store, demo, repo }`, `featured`). `featured: true` l'affiche sur
  l'accueil (garder 3 projets phares). Un lien à `null` masque son bouton.
- **Catégories** : `mobile | web | outil | desktop` ; les filtres vides sont masqués.
- **Statuts** : `production` (publié sur un store), `live` (en ligne), `perso`.
- **Disponibilité / CV** : `site.available`, `site.availability`, `site.cvUrl` (`null` masque le bouton).

### Règles de contenu (important)

- Les faits (postes, dates, diplômes, technos) viennent du CV `src/assets/cv-pharel-tuintcheu.pdf`.
  Il est importé via Vite (`?url`) : son URL contient une empreinte qui change à chaque
  nouvelle version, ce qui évite qu'un cache serve l'ancien CV. Ne pas le remettre dans `public/`.
  Le CV reprend les couleurs du site (colonne `#0b0a08 → #1e1b15`, or `#f5b921`, or foncé
  `#87661a` pour le texte doré sur fond blanc).
  Le site et le CV doivent rester cohérents : un recruteur compare les deux.
- **Ne jamais inventer** de chiffres, clients, témoignages ou années d'expérience.
  Les stats du hero sont volontairement vérifiables (2 apps sur Google Play, 2 entreprises,
  nombre de projets calculé depuis `projects.js`).
- Titre unique partout : « Développeur Fullstack Web & Mobile » (`site.role`).
- Les descriptions de projets ont été rédigées à partir du code réel des dépôts GitHub
  (tuintcheu/secure_auto_auto, pharmacie, shyclone…) : relire le dépôt avant d'en ajouter.

## Design system

Couleurs = variables CSS en canaux RGB (`--bg: 11 10 8`), exposées à Tailwind dans
`tailwind.config.js` → on écrit `bg-accent/10`, `text-muted`, `border-line/10`, etc.

| Token Tailwind | Rôle |
| --- | --- |
| `bg`, `surface`, `surface2` | fonds (page, cartes, puces) |
| `fg`, `muted` | texte principal / secondaire |
| `line` | bordures (toujours avec opacité : `border-line/10`) |
| `accent`, `accent2` | couleur d'accent et sa version claire (dégradés) |
| `accent-fg` | texte posé **sur** un fond accent (sombre ou blanc selon la luminance) |
| `ink` | texte écrit **en** couleur accent, assombri en mode clair pour rester lisible |

Ne jamais coder une couleur d'accent en dur (`#f5b921`, `text-yellow-400`…) : tout doit
suivre le panneau de couleurs. Pour du texte coloré, utiliser `text-ink` et non `text-accent`.

Classes utilitaires maison (`src/styles/index.css`) : `container-page`, `section`, `eyebrow`,
`text-gradient`, `btn-primary`, `btn-ghost`, `btn-link`, `card`, `card-hover`, `chip`,
`chip-accent`, `field`, `ambient` (halo), `grid-bg` (grille de fond).

Typo : Space Grotesk (titres, `font-display`), Inter (texte), JetBrains Mono (`font-mono`,
sur-titres et effet `< Développeur … />`).

Animations : envelopper dans `<Reveal delay={ms}>` pour l'apparition au scroll. Tout respecte
`prefers-reduced-motion` (CSS global + `usePrefersReducedMotion`).

## Thème et couleur d'accent (`src/lib/theme.js`)

- `applyThemePrefs(next?)` pose la classe `dark`, `data-theme`, `data-accent` et les
  variables `--accent*` sur `<html>`, et sauvegarde dans `localStorage` (`theme`, `accent`).
- Elle est **sérialisée avec `.toString()`** dans `template.jsx` et exécutée avant le premier
  rendu (pas de flash de thème). Elle doit donc rester **autonome** : aucun import, aucune
  constante extérieure, syntaxe ES5 simple.
- `useThemePrefs()` renvoie `null` pendant le SSR et l'hydratation, puis les préférences
  réelles. Ne jamais lire `localStorage` pendant le rendu (Rasengan hydrate avec
  `hydrateRoot` → erreur d'hydratation).
- Les préréglages de couleurs sont dans `ACCENT_PRESETS` ; le défaut est l'or `#f5b921`.

## Scène 3D (`src/components/HeroScene.jsx`)

- Chargée côté client uniquement : `React.lazy` + rendu conditionné à `useThemePrefs()`
  dans `home.page.jsx`, entourée d'un `ErrorBoundary` (WebGL absent → rien ne s'affiche).
- Noyau métallique, coque icosaèdre en fil de fer, 3 orbites, 900 particules (500 sur mobile).
  Suit le curseur avec `THREE.MathUtils.damp`. Couleurs tirées de l'accent courant.
- En pause hors écran (`active`) et statique si `prefers-reduced-motion` (`frameloop="demand"`).
- Importer drei par chemin profond (`@react-three/drei/core/Float`).

## Pièges connus

- **Découpage des bundles** : Rasengan force `node_modules → vendor` et
  `src/components → shared-components` et **ignore `vite.build`** du config. Le plugin
  `lazyThreeChunks` de `rasengan.config.js` remplace ce découpage pour que three.js reste
  dans un chunk chargé à la demande (~250 Ko gzip, accueil seulement). Si un nouveau paquet
  n'est utilisé que par la scène 3D, l'ajouter à `THREE_DEPS`.
- `rasengan dev` n'accepte pas `--port`.
- Ne pas remettre `overflow-x: hidden` / `width: 100vw` sur `html`/`body` : ça casse la
  navbar `sticky`.
- Les liens « Maquette » Canva sont des liens de partage en mode *édition* : à remplacer par
  des liens « lecture seule » générés depuis Canva (le jeton diffère, on ne peut pas juste
  remplacer `/edit` par `/view`).

## Déploiement

Vercel uniquement (adaptateur `@rasenganjs/vercel`). Les anciennes configs Netlify et
GitHub Pages ont été supprimées. Le build lance un `npm install` pour la fonction serverless,
qui peut modifier `package-lock.json`.

## Pistes d'amélioration

- Version anglaise (FR/EN) du site.
- Captures d'écran / mockups pour chaque projet (les cartes n'ont pas encore d'image).
- Image Open Graph (`og:image`) pour les aperçus LinkedIn/WhatsApp.
- Formulaire de contact réellement envoyé (Formspree, Web3Forms ou fonction Vercel).
