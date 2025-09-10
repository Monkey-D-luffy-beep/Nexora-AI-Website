import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/Nexora-AI-Website/", // 👈 this matches your repo name
});
