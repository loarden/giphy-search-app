import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { SearchContextManager } from "@giphy/react-components";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <SearchContextManager apiKey="wphvpzgvQnbIL94cwQbjFrb16u4pNlg0">
    <App />
    </SearchContextManager>
  </React.StrictMode>
);
