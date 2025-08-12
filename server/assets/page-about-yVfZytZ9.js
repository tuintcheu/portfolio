import { jsxs, jsx } from "react/jsx-runtime";
import "react";
const photo = "/assets/photo-C-W8CgKq.JPG";
const About = () => /* @__PURE__ */ jsxs("section", { className: "min-h-[80vh] bg-[#f5f7fa] dark:bg-[#1a202c] transition-colors duration-500 px-4 py-12 flex flex-col items-center", children: [
  /* @__PURE__ */ jsx("h1", { className: "text-3xl md:text-4xl font-extrabold text-primary dark:text-primary mb-6 animate-fade-in", children: "À propos de moi" }),
  /* @__PURE__ */ jsxs("div", { className: "flex flex-col md:flex-row items-center gap-8 max-w-4xl w-full animate-fade-in-slow", children: [
    /* @__PURE__ */ jsx("div", { className: "flex-shrink-0", children: /* @__PURE__ */ jsx("div", { className: "w-40 h-40 md:w-56 md:h-56 rounded-full bg-gradient-to-br from-primary/70 to-blue-300/40 dark:from-primary/80 dark:to-blue-900/40 shadow-lg flex items-center justify-center overflow-hidden border-4 border-white dark:border-gray-800 transition-all duration-500", children: /* @__PURE__ */ jsx(
      "img",
      {
        src: photo,
        alt: "Ma photo",
        className: "w-36 h-36 md:w-52 md:h-52 object-cover rounded-full shadow-inner"
      }
    ) }) }),
    /* @__PURE__ */ jsxs("div", { className: "flex-1", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-xl font-bold text-gray-900 dark:text-white mb-2", children: "Tuintcheu Pharel" }),
      /* @__PURE__ */ jsxs("p", { className: "text-gray-700 dark:text-gray-200 mb-2", children: [
        /* @__PURE__ */ jsx("span", { className: "font-semibold", children: "Développeur Fullstack Web & Mobile" }),
        " passionné par la création d’expériences utilisateurs intuitives et performantes."
      ] }),
      /* @__PURE__ */ jsxs("p", { className: "text-gray-700 dark:text-gray-200 mb-2", children: [
        /* @__PURE__ */ jsx("span", { className: "font-semibold", children: "Parcours :" }),
        " Diplômé en informatique, actuellement développeur indépendant. J’ai travaillé sur des projets variés allant du web au mobile, en passant par l’API et le cloud."
      ] }),
      /* @__PURE__ */ jsxs("p", { className: "text-gray-700 dark:text-gray-200 mb-2", children: [
        /* @__PURE__ */ jsx("span", { className: "font-semibold", children: "Vision :" }),
        " Créer des solutions ",
        /* @__PURE__ */ jsx("span", { className: "text-primary", children: "simples" }),
        ", ",
        /* @__PURE__ */ jsx("span", { className: "text-primary", children: "élégantes" }),
        " et ",
        /* @__PURE__ */ jsx("span", { className: "text-primary", children: "accessibles" }),
        " à tous."
      ] })
    ] })
  ] })
] });
About.path = "/about";
About.metadata = {
  title: "À propos",
  description: "Présentation, parcours et vision"
};
export {
  About as A,
  photo as p
};
