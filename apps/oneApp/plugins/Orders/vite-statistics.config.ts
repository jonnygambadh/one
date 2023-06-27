import react from "@vitejs/plugin-react-swc";
import { resolve } from "path";

export default ({ command }) => ({
  plugins: [react()],
  build: {
     emptyOutDir: false,
    rollupOptions: {
      input: resolve(__dirname, "src/Statistics.tsx"),
      preserveEntrySignatures: "exports-only",
      external: ["react", "react-dom"],
      output: {
        entryFileNames: "statistics.js",
        format: "esm",
      },
    },
  },
});
