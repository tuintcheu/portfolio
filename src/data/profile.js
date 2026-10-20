// Contenu des sections « ce que je fais », compétences, parcours et méthode.

export const services = [
  {
    icon: 'mobile',
    title: 'Applications mobiles',
    text: "Des apps Flutter fluides sur Android et iOS, de la maquette jusqu'à la publication sur le Play Store.",
    points: ['Flutter & Dart', 'Auth, notifications, géolocalisation', 'Publication sur les stores'],
  },
  {
    icon: 'web',
    title: 'Applications web',
    text: 'Des interfaces React rapides, responsives et accessibles, pensées pour convertir vos visiteurs.',
    points: ['React & Tailwind CSS', 'SEO & performances', 'Tableaux de bord sur mesure'],
  },
  {
    icon: 'server',
    title: 'Backend & API',
    text: 'Des API sécurisées et des données synchronisées en temps réel pour faire tourner vos produits.',
    points: ['Node.js, Firebase, Supabase', 'API REST & JWT', 'Back-offices d’administration'],
  },
];

export const skillGroups = [
  { title: 'Mobile', items: ['Flutter', 'Dart', 'Firebase', 'Google Play'] },
  { title: 'Frontend', items: ['React.js', 'JavaScript', 'TypeScript', 'Tailwind CSS', 'HTML5 / CSS3', 'Three.js'] },
  { title: 'Backend & données', items: ['Node.js', 'Firebase / Firestore', 'Supabase', 'PocketBase', 'API REST', 'MySQL', 'Python / Flask'] },
  { title: 'Outils & méthodes', items: ['Git & GitHub', 'Figma', 'Postman', 'Docker', 'Vercel', 'Agile'] },
];

// Le plus récent en premier
export const experiences = [
  {
    period: 'Depuis nov. 2025',
    title: 'Développeur Mobile & Web',
    org: 'OSSECA — Yaoundé',
    points: [
      'Développement de l’application de covoiturage TOLITOLI (Flutter), publiée sur Google Play',
      'Conception de la marketplace de services locaux 54UP',
      'Intégration frontend / backend : authentification, géolocalisation, paiement',
      'Synchronisation des données en temps réel via Firebase',
    ],
  },
  {
    period: 'Juil. 2025 – avr. 2026',
    title: 'Stagiaire Développeur Mobile & Web',
    org: 'Makiti — Yaoundé',
    points: [
      'Interfaces web responsives avec React.js et Tailwind CSS',
      'Backend Node.js et endpoints sécurisés (JWT)',
      'Intégration d’API REST dans des applications Flutter',
      'Travail en équipe produit, méthodologie Agile',
    ],
  },
];

export const education = [
  {
    period: 'En cours',
    title: 'Master Professionnel — Conception et Administration des Systèmes Informatiques',
    org: 'Université Siantou',
  },
  { period: '2025', title: 'Licence en Génie Logiciel', org: 'Université de Yaoundé I' },
  { period: '2022', title: 'Baccalauréat scientifique (série C)', org: 'Collège Bilingue La Fierté' },
];

export const languages = [
  { name: 'Français', level: 'Courant' },
  { name: 'Anglais', level: 'B1 — intermédiaire' },
];

export const method = [
  {
    title: 'Comprendre',
    text: 'On clarifie vos objectifs, vos utilisateurs et vos contraintes avant d’écrire la moindre ligne de code.',
  },
  {
    title: 'Concevoir',
    text: 'Maquettes, parcours et architecture technique validés ensemble : pas de mauvaise surprise.',
  },
  {
    title: 'Développer',
    text: 'Des itérations courtes avec des démos régulières : vous voyez le produit avancer chaque semaine.',
  },
  {
    title: 'Livrer & suivre',
    text: 'Mise en ligne, publication sur les stores, puis corrections et évolutions après le lancement.',
  },
];

// Bandeau défilant de technologies sur l'accueil
export const techMarquee = [
  'Flutter', 'React', 'Node.js', 'Firebase', 'Tailwind CSS', 'Dart', 'JavaScript',
  'TypeScript', 'Supabase', 'MySQL', 'Three.js', 'Python', 'Docker', 'Git',
];
