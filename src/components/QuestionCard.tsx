import React from "react";

type Props = {
  question: string;
  answers: string[];
  callback: any;
  userAnswers: any;
  quetionNr: number;
  totalQuestion: number;
};

const QuestionCard: React.FC<Props> = ({
  question,
  answers,
  callback,
  userAnswers,
  quetionNr,
  totalQuestion,
}) => {
  return (
    <div>
      <p className="number">
        Qestion : {question} / {totalQuestion}
      </p>
      <div>
        {answers.map((answers) => (
          <div>
            <button disabled={userAnswers} onClick={callback}>
              <span dangerouslySetInnerHTML={{ __html: answers }}></span>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuestionCard;
