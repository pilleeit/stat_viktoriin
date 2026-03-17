import { Link, Outlet } from "react-router";

const Quiz = ({ questions }) => {
	return (
		<>
			<h2>Küsimused</h2>
			<ul>
				{questions.map((q) => (
					<li key={q.id}>
						<Link to={q.id}>{q.text}</Link>
					</li>
				))}
			</ul>
			<Outlet />
		</>
	);
};

export default Quiz;
