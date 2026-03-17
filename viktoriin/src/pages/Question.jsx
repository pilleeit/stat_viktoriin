import { useParams, Link } from "react-router";

const Question = () => {
	const { questionId } = useParams();

	return (
		<>
			<h3>Küsimus: {questionId}</h3>
			<div>
				<Link to='/quiz'>Tagasi algusesse</Link>
			</div>
			<p>See pesastatud marsruut on ühendatud /questions all ja sobib /questions/{questionId}.</p>
		</>
	);
};

export default Question;
