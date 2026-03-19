import { Outlet } from "react-router";
import { useQuiz } from "../contexts/QuizContexts";

const Quiz = () => {
	const { showButton, handleStartClick } = useQuiz();

	return (
		<>
			<h2>Küsimused</h2>
			<p>kirjeldav jutt küsimustiku ohta</p>

			{showButton && <button onClick={handleStartClick}>Alusta vastamist</button>}

			<Outlet />
		</>
	);
};
export default Quiz;
