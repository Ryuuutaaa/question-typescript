const App = () => {
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
      </div>
    </>
  );
};

export default App;
