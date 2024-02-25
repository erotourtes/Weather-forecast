import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import TripsProvider from "./db/TripsProvider.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <TripsProvider>
      <App />
    </TripsProvider>
  </React.StrictMode>
);
