// src/index.js
import React from "react";
import ReactDOM from "react-dom/client"; // Importieren von 'react-dom/client'
import "./styles/global.css"; // Korrigierter Import nach Umbenennung
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container); // Erstellen des Root-Elements

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
