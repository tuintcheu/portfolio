// Source unique des informations personnelles affichées sur le site.
// Les faits viennent du CV (src/assets/cv-pharel-tuintcheu.pdf) : garder les deux synchronisés.

import { projects } from '@/data/projects';
// Importé via Vite : l'URL contient une empreinte qui change à chaque nouvelle version du CV,
// donc aucun navigateur ni CDN ne peut servir l'ancien fichier en cache.
import cvFile from '@/assets/cv-pharel-tuintcheu.pdf?url';

export const site = {
  firstName: 'Tuintcheu',
  lastName: 'Pharel',
  fullName: 'Tuintcheu Pharel',
  initials: 'TP',
  role: 'Développeur Fullstack Web & Mobile',
  // Rôles qui défilent dans le hero (effet machine à écrire)
  roles: ['Développeur Fullstack', 'Développeur Mobile Flutter', 'Développeur React'],
  pitch:
    "Je conçois et livre des applications web et mobiles prêtes pour la production — de l'interface Flutter ou React jusqu'au backend Node.js et Firebase. Deux de mes applications sont déjà publiées sur Google Play.",
  location: 'Yaoundé, Cameroun',
  url: 'https://portfolio-n6ix.vercel.app',

  available: true,
  availability: 'Disponible pour de nouveaux projets',
  responseTime: 'Réponse sous 24 à 48 h',

  email: 'leoncepharel60@gmail.com',
  phone: '+237 676 81 69 91',
  whatsapp: 'https://wa.me/237676816991',
  github: 'https://github.com/tuintcheu',
  linkedin: 'https://www.linkedin.com/in/pharel-tuintcheu',
  // Mettre à null pour masquer le bouton « Télécharger mon CV »
  cvUrl: cvFile,
  cvFileName: 'CV_Pharel_Tuintcheu.pdf',
};

// Uniquement des chiffres vérifiables : un recruteur compare avec le CV.
export const stats = [
  { value: '2', label: 'apps publiées sur Google Play' },
  { value: '2', label: 'entreprises : OSSECA & Makiti' },
  { value: String(projects.length), label: 'projets présentés ici' },
];

export const navLinks = [
  { to: '/', label: 'Accueil' },
  { to: '/projets', label: 'Projets' },
  { to: '/about', label: 'À propos' },
  { to: '/contact', label: 'Contact' },
];
