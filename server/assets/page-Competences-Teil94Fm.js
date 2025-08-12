import { jsxs, jsx } from "react/jsx-runtime";
const Competences = () => {
  return /* @__PURE__ */ jsxs("section", { children: [
    /* @__PURE__ */ jsx("header", { children: /* @__PURE__ */ jsx("h1", { children: "Competences" }) }),
    /* @__PURE__ */ jsx("p", { children: "This is the competences page" })
  ] });
};
Competences.path = "/competences";
Competences.metadata = {
  title: "Competences",
  description: "mes compétences techniques"
};
export {
  Competences as C
};
