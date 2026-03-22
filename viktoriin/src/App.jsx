import { Routes, Route, Navigate } from "react-router";
import Layout from "./layouts/Layout.jsx";
import Quiz from "./pages/Quiz.jsx";
import Question from "./pages/Question.jsx";
import Results from "./pages/Results.jsx";
import NoMatch from "./pages/NoMatch.jsx";

import "./styles/index.css";

function App() {
	return (
		<Routes>
			<Route element={<Layout />}>
				<Route index element={<Navigate to='/quiz' />} />
				<Route path='quiz' element={<Quiz />}>
					<Route path=':questionId' element={<Question />} />
				</Route>
				<Route path='results' element={<Results />} />
				<Route path='*' element={<NoMatch />} />
			</Route>
		</Routes>
	);
}

export default App;
