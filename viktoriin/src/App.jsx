import { useState } from "react";
import { Routes, Route } from "react-router";
import Layout from "./layouts/Layout.jsx";
import Home from "./pages/Home.jsx";
import Quiz from "./pages/Quiz.jsx";
import Question from "./pages/Question.jsx";
import About from "./pages/About.jsx";
import NoMatch from "./pages/NoMatch.jsx";

import "./styles/App.css";

function App() {
	const [questions, setQuestions] = useState([
		{ id: "1", text: "Mis päev täna on?" },
		{ id: "2", text: "Mis kell on?" },
		{ id: "3", text: "Mis on ...?" },
	]);

	return (
		<Routes>
			<Route element={<Layout />}>
				<Route index element={<Home />} />
				<Route path='about' element={<About />} />
				<Route path='quiz' element={<Quiz questions={questions} />}>
					<Route path=':questionId' element={<Question />} />
				</Route>
				<Route path='*' element={<NoMatch />} />
			</Route>
		</Routes>
	);
}

export default App;
