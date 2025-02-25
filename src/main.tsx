import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { ParallaxProvider } from "react-scroll-parallax";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ParallaxProvider>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="anonymous"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Nunito+Sans:ital,opsz,wght@0,6..12,200..1000;1,6..12,200..1000&display=swap"
        rel="stylesheet"
      />

      <App />
    </ParallaxProvider>
  </StrictMode>,
);
