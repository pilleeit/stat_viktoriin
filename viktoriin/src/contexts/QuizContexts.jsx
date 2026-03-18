import { createContext, useContext, useState } from "react";

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

	return (
		<QuizContext.Provider
			value={{
				questions,
				answers,
				setAnswers,
				showButton,
				setShowButton,
			}}
		>
			{children}
		</QuizContext.Provider>
	);
};

export const useQuiz = () => useContext(QuizContext);
