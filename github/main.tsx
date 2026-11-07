import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Page from "../app/page";
import ErrorBoundary from "../components/error-boundary";
import "../app/globals.css";

const root = document.getElementById("root");
if (root) {
  createRoot(root).render(
    <StrictMode>
      <ErrorBoundary><Page /></ErrorBoundary>
    </StrictMode>,
  );
}
