import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.tsx";
import "./index.css";

const rootElement = document.getElementById("root");
if (!rootElement) throw new Error("Root element not found");

// Get the base path from Vite's import.meta.env.BASE_URL
const basename = import.meta.env.BASE_URL;

ReactDOM.createRoot(rootElement).render(
	<React.StrictMode>
		<BrowserRouter basename={basename}>
			<App />
		</BrowserRouter>
	</React.StrictMode>,
);
