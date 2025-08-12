import { jsxs, jsx } from "react/jsx-runtime";
import "react";
const projets = [
  {
    nom: "Tikect 237",
    date: "2025",
    technologies: ["flutter", "firebase"],
    description: "Application mobile moderne pour reserver un ticket de bus.",
    github: "https://github.com/tuintcheu/agence",
    demo: "https://www.canva.com/design/DAGv2DTMe50/faK551TvttbVbLpI_iF7YA/edit?utm_content=DAGv2DTMe50&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",
    type: "mobile"
  },
  {
    nom: "Amiresto",
    date: "2024",
    technologies: ["html/css/js", "php", "mysql"],
    description: "Application web de gestion de restaurant ",
    github: "https://github.com/tuintcheu/resto",
    demo: "",
    type: "web"
  },
  {
    nom: "Quiz-237",
    date: "2023",
    technologies: ["flutter", "firebase"],
    description: "Application mobile ",
    github: "https://github.com/tuintcheu/quiz237",
    demo: "https://www.canva.com/design/DAGvxo78Up8/dGewTKGxUQz8HVd4SPfSrQ/edit?utm_content=DAGvxo78Up8&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",
    type: "mobile"
  }
];
const Projets = () => /* @__PURE__ */ jsxs("section", { className: "min-h-[80vh] bg-[#f5f7fa] dark:bg-[#1a202c] transition-colors duration-500 px-4 py-12", children: [
  /* @__PURE__ */ jsx("h1", { className: "text-3xl md:text-4xl font-extrabold text-primary dark:text-primary mb-8 text-center animate-fade-in", children: "Mes Projets" }),
  /* @__PURE__ */ jsx("div", { className: "flex flex-wrap justify-center gap-8", children: projets.map((projet, idx) => /* @__PURE__ */ jsxs(
    "div",
    {
      className: "\n            w-full max-w-md bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6\n            flex flex-col gap-3 border border-gray-100 dark:border-gray-700\n            hover:scale-105 hover:shadow-2xl transition-all duration-300 animate-fade-in-slow\n          ",
      children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ jsx("span", { className: "text-lg font-bold text-gray-900 dark:text-white", children: projet.nom }),
          /* @__PURE__ */ jsx("span", { className: "text-xs text-gray-500 dark:text-gray-400", children: projet.date })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-2", children: projet.technologies.map((tech, i) => /* @__PURE__ */ jsx(
          "span",
          {
            className: "bg-primary/10 text-primary dark:bg-primary/20 px-2 py-1 rounded text-xs font-semibold",
            children: tech
          },
          i
        )) }),
        /* @__PURE__ */ jsx("p", { className: "text-gray-700 dark:text-gray-200 text-sm", children: projet.description }),
        /* @__PURE__ */ jsxs("div", { className: "flex gap-4 mt-2", children: [
          projet.github && /* @__PURE__ */ jsx(
            "a",
            {
              href: projet.github,
              target: "_blank",
              rel: "noopener noreferrer",
              className: "text-primary hover:underline text-sm font-bold",
              children: "Code"
            }
          ),
          projet.demo && /* @__PURE__ */ jsx(
            "a",
            {
              href: projet.demo,
              target: "_blank",
              rel: "noopener noreferrer",
              className: "text-blue-500 hover:underline text-sm font-bold",
              children: "Démo"
            }
          )
        ] })
      ]
    },
    idx
  )) })
] });
Projets.path = "/projets";
Projets.metadata = {
  title: "Projets",
  description: "Mes réalisations web, mobile et backend"
};
export {
  Projets as P
};
