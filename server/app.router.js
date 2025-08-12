import { Link, Outlet, defineRouter, RouterComponent } from "rasengan";
import { H as Home } from "./assets/page-home-lzepqnkI.js";
import { A as About } from "./assets/page-about-yVfZytZ9.js";
import { jsxs, jsx } from "react/jsx-runtime";
import React from "react";
import { T as ThemeToggle } from "./assets/shared-components-DgA04djd.js";
import { C as Contact } from "./assets/page-Contact-D9FOH8a1.js";
import { C as Competences } from "./assets/page-Competences-Teil94Fm.js";
import { P as Projets } from "./assets/page-Projets-Cd6ra_A8.js";
import { C as CV } from "./assets/page-CV-zTjvyQ0c.js";
const Navbar = () => /* @__PURE__ */ jsxs("nav", { className: "w-full flex justify-center gap-4 p-4 bg-#010314", children: [
  /* @__PURE__ */ jsx(Link, { to: "/", className: "text-blue-600 font-bold", children: "Accueil" }),
  /* @__PURE__ */ jsx(Link, { to: "/projets", className: "text-blue-600 font-bold", children: "Projets" }),
  /* @__PURE__ */ jsx(Link, { to: "/contact", className: "text-blue-600 font-bold", children: "Contact" }),
  /* @__PURE__ */ jsx(Link, { to: "/about", className: "text-blue-600 font-bold", children: "À propos" })
] });
const AppLayout = () => {
  return /* @__PURE__ */ jsxs(React.Fragment, { children: [
    /* @__PURE__ */ jsx(ThemeToggle, {}),
    /* @__PURE__ */ jsx(Navbar, {}),
    /* @__PURE__ */ jsx(Outlet, {}),
    /* @__PURE__ */ jsx("footer", { children: /* @__PURE__ */ jsx("p", { children: "Copyright © 2025 Tuintcheu Pharel. Tous droits réservés." }) })
  ] });
};
AppLayout.path = "/";
class AppRouter extends RouterComponent {
}
const AppRouter$1 = defineRouter({
  imports: [],
  layout: AppLayout,
  pages: [Home, About, Contact, Competences, Projets, CV]
})(AppRouter);
export {
  AppRouter$1 as default
};
