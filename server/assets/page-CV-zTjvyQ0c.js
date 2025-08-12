import { jsxs, jsx } from "react/jsx-runtime";
const CV = () => {
  return /* @__PURE__ */ jsxs("section", { children: [
    /* @__PURE__ */ jsx("header", { children: /* @__PURE__ */ jsx("h1", { children: "CV" }) }),
    /* @__PURE__ */ jsx("p", { children: "This is the cv page" })
  ] });
};
CV.path = "/cv";
CV.metadata = {
  title: "CV",
  description: "ci joint mon cv"
};
export {
  CV as C
};
