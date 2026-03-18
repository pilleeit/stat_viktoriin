import { useQuiz } from "../contexts/QuizContexts";

const Results = () => {
	let score = 0;

	return (
		<>
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

						if (isCorrect) score++;

						return (
							<tr key={q.id}>
								<td>{q.text}</td>
								<td>{q.options[userAnswer]}</td>
								<td>{q.options[q.correct]}</td>
								<td>{isCorrect ? "✅" : "❌"}</td>
							</tr>
						);
					})}
				</tbody>
			</table>

			<h3>
				Skoor: {score} / {questions.length}
			</h3>
		</>
	);
};

export default Results;
