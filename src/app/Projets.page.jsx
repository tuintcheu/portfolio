import React from "react";

const projets = [
  {
    nom: "Tikect 237",
    date: "2025",
    technologies: ["flutter", "firebase"],
    description: "Application mobile moderne pour reserver un ticket de bus.",
    github: "https://github.com/tuintcheu/agence",
    demo: "https://www.canva.com/design/DAGv2DTMe50/faK551TvttbVbLpI_iF7YA/edit?utm_content=DAGv2DTMe50&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",
    type: "mobile",
  },
  {
    nom: "Amiresto",
    date: "2024",
    technologies: ["html/css/js", "php", "mysql"],

    description: "Application web de gestion de restaurant ",
    github: "https://github.com/tuintcheu/resto",
    demo: "",
    type: "web",
  },
  {
    nom: "Quiz-237",
    date: "2023",
    technologies: ["flutter", "firebase"],
    description: "Application mobile ",
    github: "https://github.com/tuintcheu/quiz237",
    demo: "https://www.canva.com/design/DAGvxo78Up8/dGewTKGxUQz8HVd4SPfSrQ/edit?utm_content=DAGvxo78Up8&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",
    type: "mobile",
  },
];

const Projets = () => (
  <section className="min-h-[80vh] bg-[#f5f7fa] dark:bg-[#1a202c] transition-colors duration-500 px-4 py-12">
    <h1 className="text-3xl md:text-4xl font-extrabold text-primary dark:text-primary mb-8 text-center animate-fade-in">
      Mes Projets
    </h1>
    <div className="flex flex-wrap justify-center gap-8">
      {projets.map((projet, idx) => (
        <div
          key={idx}
          className="
            w-full max-w-md bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6
            flex flex-col gap-3 border border-gray-100 dark:border-gray-700
            hover:scale-105 hover:shadow-2xl transition-all duration-300 animate-fade-in-slow
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
          <div className="flex gap-4 mt-2">
            {projet.github && (
              <a
                href={projet.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline text-sm font-bold"
              >
                Code
              </a>
            )}
            {projet.demo && (
              <a
                href={projet.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline text-sm font-bold"
              >
                Démo
              </a>
            )}
          </div>
        </div>
      ))}
    </div>
  </section>
);

Projets.path = "/projets";
Projets.metadata = {
  title: "Projets",
  description: "Mes réalisations web, mobile et backend",
};

export default Projets;
