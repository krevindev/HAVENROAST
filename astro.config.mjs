// @ts-check
import { defineConfig, envField } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  env: {
    schema: {
      SHOW_SPLASH: envField.boolean({
        context: "client",
        access: "public",
        default: true,
      }),
    },
  },
  vite: {
    plugins: [tailwindcss()],
  },
});

