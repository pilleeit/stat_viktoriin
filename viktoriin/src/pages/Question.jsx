import { useParams, Link, useNavigate } from "react-router";

const Question = ({ questions, answers, setAnswers }) => {
	const { questionId } = useParams();
	const navigate = useNavigate();

	const currentIndex = questions.findIndex((q) => q.id === questionId);
	const question = questions[currentIndex];

	const handleSelect = (key) => {
		setAnswers({
			...answers,
			[questionId]: key,
		});
	};

	const handleNext = () => {
		const nextQuestion = questions[currentIndex + 1];
		if (nextQuestion) {
			navigate(`/quiz/${nextQuestion.id}`);
		} else {
			navigate("/results");
		}
	};

	return (
		<>
			<h3>Küsimus: {questionId}</h3>
			<p>{question.text}</p>

			{Object.entries(question.options).map(([key, value]) => (
				<div key={key}>
					<label>
						<input
							type='radio'
							name='answer'
							value={key}
							checked={answers[questionId] === key}
							onChange={() => handleSelect(key)}
						/>
						{value}
					</label>
				</div>
			))}

			<button onClick={handleNext}>Järgmine</button>

			<Link to='/quiz'>Katkesta</Link>
		</>
	);
};

export default Question;
