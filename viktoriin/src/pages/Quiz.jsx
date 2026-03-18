import { useNavigate } from "react-router";
import { useQuiz } from "../contexts/QuizContexts";

const Quiz = () => {
	const { questions, showButton, setShowButton } = useQuiz();
	const navigate = useNavigate();

	const handleClick = () => {
		setShowButton(false);
		navigate(`/quiz/${questions[0].id}`);
	};

	return (
		<>
			<h2>Küsimused</h2>

			{showButton && <button onClick={handleClick}>Alusta vastamist</button>}
		</>
	);
};
export default Quiz;
