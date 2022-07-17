import { defineConfig, UserConfigExport } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig(({ command, mode, ssrBuild }) => {
  const config: UserConfigExport = {
    plugins: [react()],
  };

  if (command === "serve") {
    config.server = {
      port: 8080,
    };
  }
  return config;
});
