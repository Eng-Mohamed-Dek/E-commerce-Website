import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import ShopContextProvider from "./Context/ShopContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ShopContextProvider>
      {/* Wrap the App component in BrowserRouter to enable routing */}
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ShopContextProvider>
  </StrictMode>
);
