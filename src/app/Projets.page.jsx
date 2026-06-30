import React from "react";

const projets = [
  // --- Projets en production (apps publiées) ---
  {
    nom: "TOLITOLI",
    date: "2025",
    technologies: ["Flutter", "Firebase", "API REST"],
    description:
      "Application mobile de covoiturage publiée sur Google Play. Authentification multi-méthodes (e-mail, téléphone), recherche et réservation de trajets, notifications en temps réel.",
    github: "",
    demo: "https://play.google.com/store/apps/details?id=cm.tolitoli.app",
    type: "mobile",
    production: true,
  },
  {
    nom: "54UP",
    date: "2025",
    technologies: ["Flutter", "Node.js", "API REST", "Stripe"],
    description:
      "Marketplace de services locaux publiée sur Google Play. Mise en relation utilisateurs / prestataires par catégories, validation des profils, géolocalisation et paiement intégré.",
    github: "",
    demo: "https://play.google.com/store/apps/details?id=com.osseca.fivefourup",
    type: "mobile",
    production: true,
  },
  // --- Projets personnels / d'apprentissage ---
  {
    nom: "Tikect 237",
    date: "2025",
    technologies: ["Flutter", "Firebase"],
    description: "Application mobile moderne pour réserver un ticket de bus.",
    github: "https://github.com/tuintcheu/agence",
    demo: "https://www.canva.com/design/DAGv2DTMe50/faK551TvttbVbLpI_iF7YA/edit?utm_content=DAGv2DTMe50&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",
    type: "mobile",
  },
  {
    nom: "Amiresto",
    date: "2024",
    technologies: ["HTML/CSS/JS", "PHP", "MySQL"],
    description: "Application web de gestion de restaurant.",
    github: "https://github.com/tuintcheu/resto",
    demo: "",
    type: "web",
  },
  {
    nom: "Quiz-237",
    date: "2023",
    technologies: ["Flutter", "Firebase"],
    description: "Application mobile de quiz culturel.",
    github: "https://github.com/tuintcheu/quiz237",
    demo: "https://www.canva.com/design/DAGvxo78Up8/dGewTKGxUQz8HVd4SPfSrQ/edit?utm_content=DAGvxo78Up8&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",
    type: "mobile",
  },
];

const Projets = () => (
  <section className="min-h-[80vh] bg-[#f5f7fa] dark:bg-[#0b1220] transition-colors duration-500 px-4 py-12">
    <div className="text-center mb-10 animate-fade-in">
      <h1 className="text-3xl md:text-4xl font-extrabold text-primary mb-3">
        Mes Projets
      </h1>
      <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
        Une sélection d'applications publiées et de projets personnels — mobile, web et backend.
      </p>
    </div>
    <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {projets.map((projet, idx) => (
        <div
          key={idx}
          className="
            bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6
            flex flex-col gap-3 border border-gray-100 dark:border-gray-700
            hover:-translate-y-1 hover:shadow-2xl transition-all duration-300 animate-fade-in-slow
          "
        >
          <div className="flex items-center justify-between">
            <span className="text-lg font-bold text-gray-900 dark:text-white">
              {projet.nom}
            </span>
            <span className="text-xs text-gray-500 dark:text-gray-400">
              {projet.date}
            </span>
          </div>
          {projet.production && (
            <span className="self-start bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-300 px-2 py-1 rounded text-xs font-semibold">
              ● En production · Google Play
            </span>
          )}
          <div className="flex flex-wrap gap-2">
            {projet.technologies.map((tech, i) => (
              <span
                key={i}
                className="bg-primary/10 text-primary dark:bg-primary/20 px-2 py-1 rounded text-xs font-semibold"
              >
                {tech}
              </span>
            ))}
          </div>
          <p className="text-gray-700 dark:text-gray-200 text-sm">
            {projet.description}
          </p>
          <div className="flex flex-wrap gap-3 mt-auto pt-3">
            {projet.github && (
              <a
                href={projet.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md border border-gray-300 dark:border-gray-600 text-gray-800 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-700 text-sm font-semibold transition"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56 0-.27-.01-1-.02-1.96-3.2.7-3.87-1.54-3.87-1.54-.52-1.32-1.28-1.67-1.28-1.67-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.51-1.47.11-3.06 0 0 .97-.31 3.18 1.18.92-.26 1.91-.39 2.9-.39.99 0 1.98.13 2.9.39 2.21-1.49 3.18-1.18 3.18-1.18.62 1.59.23 2.77.11 3.06.74.81 1.19 1.84 1.19 3.1 0 4.43-2.7 5.41-5.27 5.69.41.36.78 1.06.78 2.14 0 1.54-.01 2.79-.01 3.17 0 .31.21.68.8.56C20.21 21.39 23.5 17.08 23.5 12 23.5 5.65 18.35.5 12 .5z"/>
                </svg>
                Code
              </a>
            )}
            {projet.demo && projet.production && (
              <a
                href={projet.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-[#01875f] hover:bg-[#016d4e] text-white text-sm font-semibold transition shadow-sm"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734c0-.385.234-.7.609-.92zM14.499 12.707l2.86-2.86 3.61 2.07c.78.45.78 1.58 0 2.03l-3.61 2.07-2.86-2.86V12.707zm-1.414 0L4.71 21.082l11.65-6.69L13.085 12.707zm0-1.414L16.36 9.61 4.71 2.918l8.375 8.375z"/>
                </svg>
                Google Play
              </a>
            )}
            {projet.demo && !projet.production && (
              <a
                href={projet.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-primary hover:bg-blue-700 text-white text-sm font-semibold transition shadow-sm"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                  <polyline points="15 3 21 3 21 9"/>
                  <line x1="10" y1="14" x2="21" y2="3"/>
                </svg>
                Démo
              </a>
            )}
          </div>
        </div>
      ))}
    </div>

    {/* Note projets confidentiels */}
    <p className="max-w-2xl mx-auto mt-10 text-center text-sm text-gray-500 dark:text-gray-400 italic animate-fade-in-slow">
      La plupart de mes projets réalisés en entreprise sont sous accord de
      confidentialité et ne peuvent être présentés publiquement. Je me ferai un
      plaisir d'en détailler le contexte et ma contribution lors d'un échange.
    </p>
  </section>
);

Projets.path = "/projets";
Projets.metadata = {
  title: "Projets",
  description: "Mes réalisations web, mobile et backend",
};

export default Projets;
