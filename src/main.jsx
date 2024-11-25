import { BrowserRouter as Router } from "react-router-dom";
import { StrictMode } from "react";

import "./index.css";
import App from "./App.jsx";
import { createRoot } from "react-dom/client";

createRoot(document.getElementById("root")).render(
  <Router>
    <StrictMode>
      <App />
    </StrictMode>
  </Router>
);
