import { Outlet } from "react-router";
import { useQuiz } from "../contexts/QuizContexts";

const Quiz = () => {
	const { showButton, handleStartClick } = useQuiz();

	return (
		<>
			<div className='card'>
				<h2>Küsimused</h2>
				<p>
					{" "}
					Vastamiseks vali iga küsimuse juures üks õige vastusevariant. Kui oled vastuse valinud, vajuta nuppu{" "}
					<strong>"Kontrolli"</strong>
					ning näed, kas vastus oli õige. Seejärel vajuta <strong>"Edasi"</strong>, et minna järgmise küsimuse
					juurde.
				</p>

				{showButton && <button onClick={handleStartClick}>Alusta vastamist</button>}

				<Outlet />
			</div>
		</>
	);
};
export default Quiz;
