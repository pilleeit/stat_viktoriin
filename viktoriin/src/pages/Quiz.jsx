import { Link, Outlet } from "react-router";

const Quiz = ({ questions }) => {
	return (
		<>
			<h2>Küsimused</h2>
			<p>tähtis jutt viktoriini kohta</p>
			<Link to={`/quiz/${questions[0].id}`}>
				<button>Alusta vastamist</button>
			</Link>

			<Outlet />
		</>
	);
};

export default Quiz;
