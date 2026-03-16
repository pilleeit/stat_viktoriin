import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
import Home from "./pages/Home";
import Question1 from "./pages/Question1";

function App() {
	const [count, setCount] = useState(0);

	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/q1' element={<Question1 />} />
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
