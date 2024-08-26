import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// ... other configurations ...

export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: "src/main.tsx",
      formats: ["es"],
      fileName: (format) => `my-lib.${format}.js`,
    },
    rollupOptions: {
      external: ["vue", "vue-router"], // Add any external dependencies
    },
  },
});
