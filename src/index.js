import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { AppProvider } from "./context/app/app-context";

ReactDOM.createRoot(document.getElementById("root")).render(
    <AppProvider>
      <App />
    </AppProvider>
);
