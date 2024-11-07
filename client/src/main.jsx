
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import BlogContextProvider from "./context/BlogContext.jsx";
import {Toaster} from 'react-hot-toast'

createRoot(document.getElementById("root")).render(
  <BlogContextProvider>
    <BrowserRouter>
      <App />
      <Toaster/>
    </BrowserRouter>
  </BlogContextProvider>
);
