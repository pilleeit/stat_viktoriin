import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import { QuizProvider } from "./contexts/QuizContexts.jsx";
import "./styles/index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<BrowserRouter>
			<QuizProvider>
				<App />
			</QuizProvider>
		</BrowserRouter>
	</StrictMode>,
);
