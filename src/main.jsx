import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css"; // Assuming you have a CSS file for global styles


const rootElement = document.getElementById("root");
if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
   
      <App />
    
  );
} else {
  throw new Error('Root element with id "root" not found');
}
