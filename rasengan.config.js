import { defineConfig } from "rasengan";

export default defineConfig({
  server: {
    host: true, // ← autorise les connexions externes
    allowedHosts: 'all', // ← ton domaine Render
  },
});
