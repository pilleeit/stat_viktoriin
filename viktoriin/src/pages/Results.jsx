import { useQuiz } from "../contexts/QuizContexts";

const Results = () => {
	const { questions, answers, getScore, resetQuiz } = useQuiz();

	return (
		<>
			<div className='card'>
				<h2>Tulemused</h2>

				<table border='1' cellPadding='10'>
					<thead>
						<tr>
							<th>Küsimus</th>
							<th>Sinu vastus</th>
							<th>Õige vastus</th>
							<th>Tulemus</th>
						</tr>
					</thead>

					<tbody>
						{questions.map((q) => {
							const userAnswer = answers[q.id];
							const isCorrect = userAnswer === q.correct;

							return (
								<tr key={q.id}>
									<td>{q.text}</td>
									<td>{q.options[userAnswer]}</td>
									<td>{q.options[q.correct]}</td>
									<td>{isCorrect ? "Õige" : "Vale"}</td>
								</tr>
							);
						})}
					</tbody>
				</table>

				<h3>
					Skoor: {getScore()} / {questions.length}
				</h3>

				<button onClick={resetQuiz}>Tagasi algusesse</button>
			</div>
		</>
	);
};

export default Results;
