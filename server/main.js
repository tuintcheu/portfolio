import { jsx } from "react/jsx-runtime";
import "./entry.server.js";
import "react";
import AppRouter from "./app.router.js";
import "react-dom/server";
import "node:path";
import "fs/promises";
import "react-router";
import "path/posix";
import "rasengan";
import "./assets/page-home-lzepqnkI.js";
import "./assets/page-about-yVfZytZ9.js";
import "./assets/shared-components-DgA04djd.js";
import "./assets/page-Contact-D9FOH8a1.js";
import "./assets/page-Projets-Cd6ra_A8.js";
function App({ Component, children }) {
  return /* @__PURE__ */ jsx(Component, { router: AppRouter, children });
}
export {
  App as default
};
