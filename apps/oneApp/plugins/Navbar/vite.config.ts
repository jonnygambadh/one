import react from "@vitejs/plugin-react-swc";
import { resolve } from "path";

export default ({ command }) => ({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: resolve(__dirname, "src/MicroFrontend.tsx"),
      preserveEntrySignatures: "exports-only",
      external: ["react", "react-dom"],
      output: {
        entryFileNames: "bundle.js",
        format: "esm",
      },
    },
  },
});

