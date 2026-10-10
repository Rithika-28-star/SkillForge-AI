// main.jsx
// This is the ENTRY POINT of your React app.
// React reads this file first and "mounts" (attaches) the app to the HTML page.
// The HTML page (index.html) has a <div id="root"> element — React fills it.

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css"; // Global styles
import App from "./App.jsx"; // The root component with all routes

// Find the <div id="root"> in index.html and render our App inside it
createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* StrictMode is a development helper — it warns you about potential issues */}
    <App />
  </StrictMode>
);
