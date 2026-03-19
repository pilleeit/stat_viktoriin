import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router";

const QuizContext = createContext();

export const QuizProvider = ({ children }) => {
	const [questions] = useState([
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
	const [showButton, setShowButton] = useState(true);

	const navigate = useNavigate();
	const handleStartClick = () => {
		setShowButton(false);
		navigate(`/quiz/${questions[0].id}`);
	};

	const getScore = () => {
		return questions.filter((q) => answers[q.id] === q.correct).length;
	};

	return (
		<QuizContext.Provider
			value={{
				questions,
				answers,
				setAnswers,
				showButton,
				setShowButton,
				handleStartClick,
				getScore,
			}}
		>
			{children}
		</QuizContext.Provider>
	);
};

export const useQuiz = () => useContext(QuizContext);
