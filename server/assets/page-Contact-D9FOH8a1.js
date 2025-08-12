import { jsxs, jsx } from "react/jsx-runtime";
import { useState } from "react";
const Contact = () => {
  const [sent, setSent] = useState(false);
  return /* @__PURE__ */ jsxs("section", { className: "min-h-[80vh] bg-[#f5f7fa] dark:bg-[#1a202c] transition-colors duration-500 px-4 py-12 flex flex-col items-center", children: [
    /* @__PURE__ */ jsx("h1", { className: "text-3xl md:text-4xl font-extrabold text-primary dark:text-primary mb-6 animate-fade-in", children: "Contact" }),
    /* @__PURE__ */ jsxs("div", { className: "w-full max-w-lg bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 animate-fade-in-slow", children: [
      sent ? /* @__PURE__ */ jsx("div", { className: "text-center text-green-600 dark:text-green-400 font-bold", children: "Merci pour votre message ! Je vous répondrai rapidement." }) : /* @__PURE__ */ jsxs(
        "form",
        {
          className: "flex flex-col gap-4",
          onSubmit: (e) => {
            e.preventDefault();
            setSent(true);
          },
          children: [
            /* @__PURE__ */ jsx(
              "input",
              {
                type: "text",
                placeholder: "Votre nom",
                required: true,
                className: "p-3 rounded border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary transition"
              }
            ),
            /* @__PURE__ */ jsx(
              "input",
              {
                type: "email",
                placeholder: "Votre email",
                required: true,
                className: "p-3 rounded border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary transition"
              }
            ),
            /* @__PURE__ */ jsx(
              "textarea",
              {
                placeholder: "Votre message",
                required: true,
                rows: 4,
                className: "p-3 rounded border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary transition"
              }
            ),
            /* @__PURE__ */ jsx(
              "button",
              {
                type: "submit",
                disabled: !sent,
                className: "bg-primary text-white font-bold py-3 rounded hover:bg-blue-700 transition",
                children: "Envoyer"
              }
            )
          ]
        }
      ),
      /* @__PURE__ */ jsxs("div", { className: "mt-8 flex flex-col items-center gap-2", children: [
        /* @__PURE__ */ jsx("a", { href: "mailto:leoncepharel60@gmail.com", className: "text-primary hover:underline", children: "email" }),
        /* @__PURE__ */ jsx("a", { href: "https://www.linkedin.com/in/pharel\ntuintcheu", target: "_blank", rel: "noopener noreferrer", className: "text-primary hover:underline", children: "LinkedIn" }),
        /* @__PURE__ */ jsx("a", { href: "https://wa.me/676816991", target: "_blank", rel: "noopener noreferrer", className: "text-primary hover:underline", children: "WhatsApp" })
      ] })
    ] })
  ] });
};
Contact.path = "/contact";
Contact.metadata = {
  title: "Contact",
  description: "Formulaire et liens pour me contacter"
};
export {
  Contact as C
};
