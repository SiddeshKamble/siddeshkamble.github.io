import React from "react";
import ReactDOM from "react-dom/client";
import { flushSync } from "react-dom";
import "./index.css";
import App from "./App.js";

// Ensure root exists
let container = document.getElementById("root");
if (!container) {
  container = document.createElement("div");
  container.id = "root";
  document.body.appendChild(container);
}

const root = ReactDOM.createRoot(container);

// react-snap sets this UA
const isSnap = typeof navigator !== "undefined" && navigator.userAgent === "ReactSnap";

if (isSnap) {
  // ✅ Force synchronous commit so react-snap captures real HTML
  flushSync(() => {
    root.render(<App />);
  });
} else {
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}
