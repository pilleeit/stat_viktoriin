import { useState } from "react";
import { useParams, useNavigate } from "react-router";
import { useQuiz } from "../contexts/QuizContexts";

const Question = () => {
	const { questionId } = useParams();
	const navigate = useNavigate();

	const { questions, answers, setAnswers, resetQuiz } = useQuiz();

	const currentIndex = questions.findIndex((q) => q.id === questionId);
	const question = questions[currentIndex];
	if (!question) return <p>Küsimust ei leitud</p>;

	const [showAnswer, setShowAnswer] = useState(false);

	const handleSelect = (key) => {
		setAnswers({
			...answers,
			[questionId]: key,
		});
	};

	const handleNext = () => {
		if (!showAnswer) {
			setShowAnswer(true);
			return;
		}

		const nextQuestion = questions[currentIndex + 1];
		if (nextQuestion) {
			setShowAnswer(false);
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
							disabled={showAnswer}
						/>
						{value}
					</label>
				</div>
			))}

			{showAnswer && answers[questionId] && (
				<div>
					{answers[questionId] === question.correct ? (
						<p style={{ color: "green" }}> Õige!</p>
					) : (
						<p style={{ color: "red" }}> Vale. Õige vastus: {question.options[question.correct]}</p>
					)}
				</div>
			)}

			<button onClick={resetQuiz}>Katkesta</button>

			<button onClick={handleNext} disabled={!answers[questionId]}>
				{showAnswer ? "Edasi" : "Kontrolli"}
			</button>
		</>
	);
};

export default Question;
