import { defineConfig } from "rasengan";

export default defineConfig({
  server: {
    host: true, // ← autorise les connexions externes
    allowedHosts: ["portfolio-87is.onrender.com"], // ← ton domaine Render
  },
});
