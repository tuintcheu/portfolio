import { jsx } from "react/jsx-runtime";
import { useState, useEffect } from "react";
const ThemeToggle = () => {
  const [dark, setDark] = useState(
    () => typeof window !== "undefined" ? document.documentElement.classList.contains("dark") : false
  );
  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [dark]);
  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved === "dark") setDark(true);
    if (saved === "light") setDark(false);
  }, []);
  return /* @__PURE__ */ jsx(
    "button",
    {
      onClick: () => setDark((v) => !v),
      className: "\n        fixed top-4 right-4 z-50\n        bg-primary text-white dark:bg-gray-800 dark:text-primary\n        rounded-full p-2 shadow-lg transition\n        hover:scale-110 focus:outline-none\n      ",
      "aria-label": "Changer le mode sombre/clair",
      title: "Changer le mode sombre/clair",
      children: dark ? /* @__PURE__ */ jsx("svg", { width: "24", height: "24", fill: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { d: "M12 4.5V2m0 20v-2.5m7.07-7.07H22m-20 0h2.93m15.36 6.36l1.77 1.77m-17.32 0l1.77-1.77m15.36-6.36l1.77-1.77m-17.32 0l1.77 1.77M12 7a5 5 0 100 10 5 5 0 000-10z" }) }) : /* @__PURE__ */ jsx("svg", { width: "24", height: "24", fill: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { d: "M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z" }) })
    }
  );
};
export {
  ThemeToggle as T
};
