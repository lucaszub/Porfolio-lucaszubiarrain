import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App.tsx";
import { Buffer } from "buffer"; // Import du polyfill

window.Buffer = Buffer; // Ajout de `Buffer` à l'objet global

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter future={{ v7_startTransition: true }}>
      <App />
    </BrowserRouter>
  </StrictMode>
);
