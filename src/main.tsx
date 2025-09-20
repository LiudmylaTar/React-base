import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import ThemeColorProvide from "./contexts/ThemeColorProvider.tsx";

const root = createRoot(document.getElementById("root") as HTMLDivElement);
root.render(
  <StrictMode>
    <ThemeColorProvide>
      <App />
    </ThemeColorProvide>
  </StrictMode>
);
