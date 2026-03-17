import { useState } from "react";
import { Routes, Route } from "react-router";
import Layout from "./layouts/Layout.jsx";
import Home from "./pages/Home.jsx";
import Quiz from "./pages/Quiz.jsx";
import Question from "./pages/Question.jsx";
import Results from "./pages/Results.jsx";
import NoMatch from "./pages/NoMatch.jsx";

import "./styles/App.css";

function App() {
	const [questions, setQuestions] = useState([
		{
			id: "1",
			text: "Kes on Eesti rahvuslind?",
			options: { a: "Suitsupääsuke", b: "Kägu", c: "Rasvatihane" },
			correct: "a",
		},
		{
			id: "2",
			text: "Milline neist liikidest on looduskaitse all?",
			options: { a: "Põder", b: "Kõre", c: "Metssiga" },
			correct: "b",
		},
		{
			id: "3",
			text: "Kes on Eesti rahvusloom?",
			options: { a: "Metskits", b: "Karu", c: "Hunt" },
			correct: "c",
		},
	]);

	const [answers, setAnswers] = useState({});

	return (
		<Routes>
			<Route element={<Layout />}>
				<Route index element={<Home />} />
				<Route path='quiz' element={<Quiz questions={questions} />}>
					<Route
						path=':questionId'
						element={<Question questions={questions} answers={answers} setAnswers={setAnswers} />}
					/>
				</Route>
				<Route path='results' element={<Results questions={questions} answers={answers} />} />
				<Route path='*' element={<NoMatch />} />
			</Route>
		</Routes>
	);
}

export default App;
