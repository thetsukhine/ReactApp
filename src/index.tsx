import React from 'react';
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import App from "./App";
import { ServiceProvider } from "./context/ServiceOptionContext";
import { ApiService } from './apis/Service';
import "./styles.css";

const root = createRoot(document.getElementById("root")!);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ServiceProvider>
        <ApiService /> {/* keep this here only if it does NOT use Router hooks */}
        <App />
      </ServiceProvider>
    </BrowserRouter>
  </React.StrictMode>
);
