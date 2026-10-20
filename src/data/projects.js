// Projets affichés sur /projets (et sur l'accueil quand featured: true).
//
// category : 'mobile' | 'web' | 'desktop' | 'outil'
// status   : 'production' (publié sur un store) | 'live' (en ligne) | 'perso'
// links    : store / demo / repo — mettre null pour masquer le bouton

export const categories = [
  { id: 'all', label: 'Tous' },
  { id: 'mobile', label: 'Mobile' },
  { id: 'web', label: 'Web' },
  { id: 'outil', label: 'Outils' },
  { id: 'desktop', label: 'Desktop' },
];

export const projects = [
  {
    slug: 'tolitoli',
    name: 'TOLITOLI',
    year: '2025',
    category: 'mobile',
    status: 'production',
    context: 'OSSECA',
    tagline: 'Application de covoiturage',
    description:
      "Application mobile de covoiturage publiée sur Google Play : les conducteurs publient leurs trajets, les passagers trouvent et réservent une place en quelques secondes.",
    highlights: [
      'Authentification e-mail et téléphone avec gestion de session',
      'Création, recherche et filtrage des trajets par destination',
      'Réservation de courses avec notifications en temps réel',
    ],
    stack: ['Flutter', 'Dart', 'Firebase', 'API REST'],
    links: {
      store: 'https://play.google.com/store/apps/details?id=cm.tolitoli.app',
      demo: null,
      repo: null,
    },
    featured: true,
  },
  {
    slug: '54up',
    name: '54UP',
    year: '2025',
    category: 'mobile',
    status: 'production',
    context: 'OSSECA',
    tagline: 'Marketplace de services locaux',
    description:
      'Marketplace publiée sur Google Play qui met en relation les habitants avec des prestataires de services locaux vérifiés.',
    highlights: [
      'Profils utilisateurs et prestataires avec validation',
      'Publication, recherche et mise en relation par catégories',
      'Géolocalisation et paiement intégré',
    ],
    stack: ['Flutter', 'Node.js', 'API REST', 'Stripe'],
    links: {
      store: 'https://play.google.com/store/apps/details?id=com.osseca.fivefourup',
      demo: null,
      repo: null,
    },
    featured: true,
  },
  {
    slug: 'trackingcar',
    name: 'TrackingCar Admin',
    year: '2026',
    category: 'web',
    status: 'live',
    tagline: 'Back-office de suivi de véhicules volés',
    description:
      "Plateforme d'administration d'une application mobile de détection de véhicules volés : signalement des véhicules, suivi des détections remontées par le terrain et gestion des récompenses.",
    highlights: [
      'Rôles admin global / admin de légion avec données cloisonnées',
      'Synchronisation temps réel avec Firestore',
      'Tableaux de bord Chart.js et import d’utilisateurs depuis Excel/CSV',
      'Journal d’audit des actions administrateur',
    ],
    stack: ['JavaScript', 'Firebase Auth', 'Firestore', 'Tailwind CSS', 'Chart.js', 'SheetJS'],
    links: {
      store: null,
      demo: 'https://trackingcar.vercel.app',
      repo: 'https://github.com/tuintcheu/secure_auto_auto',
    },
    featured: true,
  },
  {
    slug: 'shyclone',
    name: 'ShyClone',
    year: '2026',
    category: 'outil',
    status: 'perso',
    tagline: 'Capture de sites web hors ligne',
    description:
      "Outil qui télécharge un site complet avec ses ressources, réécrit les liens pour qu'il fonctionne hors ligne, permet de suivre la capture en direct, de prévisualiser le résultat puis de l'exporter en .zip.",
    highlights: [
      'Moteur Python concurrent + rendu navigateur optionnel pour les sites en JavaScript',
      'Sécurité : blocage SSRF, écriture confinée, quotas par IP, HTTPS + HSTS',
      'Déploiement Docker en service unique (API + interface sur un seul port)',
      'Purge automatique des captures et indexation sélective (robots, noindex)',
    ],
    stack: ['Python', 'Flask', 'React 19', 'Tailwind CSS', 'Docker', 'Gunicorn'],
    links: {
      store: null,
      demo: null,
      repo: 'https://github.com/tuintcheu/shyclone',
    },
    featured: false,
  },
  {
    slug: 'pharmacie',
    name: 'PharmaGest',
    year: '2025',
    category: 'desktop',
    status: 'perso',
    tagline: 'ERP de gestion de pharmacie',
    description:
      "Logiciel de bureau pour gérer une ou plusieurs pharmacies : stock, ventes en caisse, personnel et planning des gardes, avec un espace dédié à chaque rôle.",
    highlights: [
      'Trois espaces : administrateur, pharmacien, caissier',
      'Produits, catégories, multi-pharmacies et planning des gardes',
      'Caisse et historique des ventes',
      'Tableaux de bord et rapports exportables en PDF, Excel et CSV',
    ],
    stack: ['Java', 'JavaFX', 'MySQL', 'Maven', 'iText'],
    links: {
      store: null,
      demo: null,
      repo: 'https://github.com/tuintcheu/pharmacie',
    },
    featured: false,
  },
  {
    slug: 'tikect-237',
    name: 'Tikect 237',
    year: '2025',
    category: 'mobile',
    status: 'perso',
    tagline: 'Réservation de billets de bus',
    description:
      'Application mobile pour réserver un billet de bus interurbain sans faire la queue en agence.',
    highlights: ['Parcours de réservation mobile', 'Backend Firebase avec règles de sécurité Firestore'],
    stack: ['Flutter', 'Firebase'],
    links: {
      store: null,
      demo: 'https://www.canva.com/design/DAGv2DTMe50/faK551TvttbVbLpI_iF7YA/edit?utm_content=DAGv2DTMe50&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton',
      repo: 'https://github.com/tuintcheu/tikect-237',
    },
    featured: false,
  },
  {
    slug: 'amiresto',
    name: 'Amiresto',
    year: '2024',
    category: 'web',
    status: 'perso',
    tagline: 'Gestion de restaurant',
    description: 'Application web de gestion de restaurant.',
    highlights: [],
    stack: ['PHP', 'MySQL', 'HTML/CSS', 'JavaScript'],
    links: {
      store: null,
      demo: null,
      repo: 'https://github.com/tuintcheu/resto',
    },
    featured: false,
  },
  {
    slug: 'quiz-237',
    name: 'Quiz-237',
    year: '2023',
    category: 'mobile',
    status: 'perso',
    tagline: 'Quiz culturel',
    description: 'Application mobile de quiz culturel.',
    highlights: [],
    stack: ['Flutter', 'Firebase'],
    links: {
      store: null,
      demo: 'https://www.canva.com/design/DAGvxo78Up8/dGewTKGxUQz8HVd4SPfSrQ/edit?utm_content=DAGvxo78Up8&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton',
      repo: 'https://github.com/tuintcheu/quiz237',
    },
    featured: false,
  },
];

export const statusLabels = {
  production: 'En production · Google Play',
  live: 'En ligne',
  perso: 'Projet personnel',
};
