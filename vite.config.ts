import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "dist",
    rollupOptions: {
      input: {
        main: "index.html",
        background: "public/background.ts",
        content: "public/content.ts"
      },
      output: {
        entryFileNames: "[name].js" // TS → JS 파일로 변환
      }
    }
  }
});
