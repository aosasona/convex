import { defineConfig } from "vite";
import solidPlugin from "vite-plugin-solid";
import path from "path";
// import devtools from 'solid-devtools/vite';

export default defineConfig({
  plugins: [
    /*
    Uncomment the following line to enable solid-devtools.
    For more info see https://github.com/thetarnav/solid-devtools/tree/main/packages/extension#readme
    */
    // devtools(),
    solidPlugin(),
  ],
  server: {
    port: 3800,
  },
  build: {
    target: "esnext",
  },
  resolve: {
    alias: {
      "@convex": path.resolve(__dirname, "./src"),
      "@components": path.resolve(__dirname, "./src/components"),
      "@ui": path.resolve(__dirname, "./src/components/ui/index.ts"),
      "@layouts": path.resolve(__dirname, "./src/layouts"),
      "@wails": path.resolve(__dirname, "./src/wailsjs/go"),
      "@wails-runtime": path.resolve(__dirname, "./src/wailsjs/runtime"),
    },
  },
});
