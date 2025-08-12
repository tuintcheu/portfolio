import { jsxs, jsx } from "react/jsx-runtime";
import "react";
import { p as photo } from "./page-about-yVfZytZ9.js";
const Home = () => {
  return /* @__PURE__ */ jsxs(
    "section",
    {
      className: "\n        min-h-[90vh] flex flex-col justify-center items-center\n        bg-[#f5f7fa] dark:bg-[#1a202c] transition-colors duration-500\n        px-4\n      ",
      children: [
        /* @__PURE__ */ jsx("span", { className: "text-primary dark:text-primary text-lg md:text-xl font-bold tracking-widest animate-fade-in", children: "Bienvenue sur mon portfolio" }),
        /* @__PURE__ */ jsx("div", { className: "my-8 animate-fade-in-slow", children: /* @__PURE__ */ jsx("div", { className: "w-40 h-40 md:w-56 md:h-56 rounded-full bg-gradient-to-br from-primary/70 to-blue-300/40 dark:from-primary/80 dark:to-blue-900/40 shadow-lg flex items-center justify-center overflow-hidden border-4 border-white dark:border-gray-800 transition-all duration-500", children: /* @__PURE__ */ jsx(
          "img",
          {
            src: photo,
            alt: "Ma photo",
            className: "w-36 h-36 md:w-52 md:h-52 object-cover rounded-full shadow-inner"
          }
        ) }) }),
        /* @__PURE__ */ jsxs("div", { className: "mb-6 animate-fade-in-slower", children: [
          /* @__PURE__ */ jsxs("span", { className: "block text-gray-800 dark:text-gray-100 font-semibold text-xl md:text-2xl text-center", children: [
            "Salut, je suis ",
            /* @__PURE__ */ jsx("span", { className: "text-primary", children: "Tuintcheu Pharel" })
          ] }),
          /* @__PURE__ */ jsx("span", { className: "block text-gray-600 dark:text-gray-300 mt-1 text-center", children: "Développeur passionné, créatif et rigoureux, prêt à relever tous les défis du web et du mobile." })
        ] }),
        /* @__PURE__ */ jsxs(
          "h1",
          {
            className: "\n          text-3xl md:text-5xl font-extrabold text-gray-900 dark:text-white text-center mb-4 animate-fade-in\n        ",
            children: [
              "Développeur Fullstack Web & Mobile ",
              /* @__PURE__ */ jsx("br", {}),
              /* @__PURE__ */ jsx("span", { className: "text-primary dark:text-primary", children: "passionné par les interfaces intuitives" })
            ]
          }
        ),
        /* @__PURE__ */ jsxs(
          "p",
          {
            className: "\n          text-base md:text-lg text-gray-700 dark:text-gray-200\n          mb-8 text-center max-w-2xl animate-fade-in-slow\n        ",
            children: [
              "J'aime concevoir des systèmes performants du frontend au cloud.",
              /* @__PURE__ */ jsx("br", {}),
              /* @__PURE__ */ jsx("span", { className: "italic text-primary dark:text-primary", children: "“Créer des solutions simples, élégantes, et accessibles.”" })
            ]
          }
        )
      ]
    }
  );
};
Home.path = "/";
Home.metadata = {
  title: "Accueil",
  description: "Portfolio - Développeur Fullstack Web & Mobile"
};
export {
  Home as H
};
