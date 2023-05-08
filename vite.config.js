import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { VitePWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      // devOptions: {
      //   enabled: true,
      // },
      workbox: {
        globPatterns: ["**/*.{js,css,html,ico,png,svg,webp}"],
      },
      manifest: {
        theme_color: "#000000",
        background_color: "#000000",
        display: "fullscreen",
        id: "index.html",
        start_url: "index.html",
        name: "BD-Portfolio",
        short_name: "BD-Portfolio",
        description: "Bohdan Dovhal`s website-portfolio",
        icons: [
          {
            src: "./img/icons/maskable-icon-192x192.png",
            sizes: "192x192",
            type: "image/png",
            purpose: "maskable",
          },
          {
            src: "./img/icons/icon-192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "./img/icons/icon-256x256.png",
            sizes: "256x256",
            type: "image/png",
          },
          {
            src: "./img/icons/icon-384x384.png",
            sizes: "384x384",
            type: "image/png",
          },
          {
            src: "./img/icons/icon-512x512.png",
            sizes: "512x512",
            type: "image/png",
          },
        ],
      },
    }),
  ],
});
