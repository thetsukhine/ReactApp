import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

import Canvas from "./pages/Login";

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <Canvas />
  </StrictMode>
);