import { useState } from "react";
import QuestionCard from "./components/QuestionCard";

const TOTAL_QUESTION = 10;

const App = () => {
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [number, setNumber] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(true);

  const startTrivia = async () => {};

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
        <QuestionCard
          questionNr={number + 1}
          totalQuestion={TOTAL_QUESTION}
          question={questions[number].question}
          answers={questions[number].answers}
          userAnswers={userAnswers ? userAnswers[number] : undefined}
          callback={cheackAnswer}
        />
        <button className="next" onClick={nextQuestion}>
          Next
        </button>
      </div>
    </>
  );
};

export default App;
