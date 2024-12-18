import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import deno from "@deno/vite-plugin";

export default defineConfig({
  root: "./src",
  server: {
    port: 3000,
  },
  plugins: [react(), deno()],
});
