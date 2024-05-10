import { useState } from "react";
import QuestionCard from "./components/QuestionCard";

import { fetchQuizQuestions } from "./API";

import { QuestionState, Difficulty } from "./API";

export type AnswerObject = {
  question: string;
  answer: string;
  correct: boolean;
  correctAnswer: string;
};

const TOTAL_QUESTIONS = 10;

const App: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState<QuestionsState[]>([]);
  const [number, setNumber] = useState(0);
  const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(true);

  console.log(questions);

  const startTrivia = async () => {
    setLoading(true);
    setGameOver(false);
    const newQuestions = await fetchQuizQuestions(
      TOTAL_QUESTIONS,
      Difficulty.EASY
    );
    setQuestions(newQuestions);
    setScore(0);
    setUserAnswers([]);
    setNumber(0);
    setLoading(false);
  };

  const cheackAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {};

  const nextQuestion = () => {};

  return (
    <>
      <div className="app">
        <h1>Quiess</h1>
        <button className="start" onClick={startTrivia}>
          Start
        </button>
        <p className="score">Score</p>
        <p>Looading Question....</p>
        {/* <QuestionCard
          questionNr={number + 1}
          totalQuestion={TOTAL_QUESTION}
          question={questions[number].question}
          answers={questions[number].answers}
          userAnswers={userAnswers ? userAnswers[number] : undefined}
          callback={cheackAnswer}
        /> */}
        <button className="next" onClick={nextQuestion}>
          Next Question
        </button>
      </div>
    </>
  );
};

export default App;
