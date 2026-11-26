import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import { ThemeProvider } from "styled-components";

import App from "./App.tsx";
import { theme } from "./theme.ts";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <BrowserRouter basename="/WAC">
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </StrictMode>,
);
