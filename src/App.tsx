import { useState } from 'react';
import './App.scss';
import Game from './components/Game/Game';
import Result from './components/Result/Result';
import { Question, questions } from './api/questions';

function App() {
  const [step, setStep] = useState<number>(0);
  const [correct, setCorrect] = useState<number>(0);
  const question: Question = questions[step];

  const onClickVariant = (index: number) => {
    setStep((currentValue) => currentValue + 1);

    if (question.correct === index) {
      setCorrect((currentValue) => currentValue + 1);
    }
  };

  const resetGame = () => {
    setStep(0);
    setCorrect(0);
  };

  const percentage = Math.round((step / questions.length) * 100);

  return (
    <div className="app">
      {step !== questions.length ? (
        <Game
          percentage={percentage}
          question={question}
          onClickVariant={onClickVariant}
        />
      ) : (
        <Result
          correct={correct}
          resetGame={resetGame}
          finallyValue={questions.length}
        />
      )}
    </div>
  );
}

export default App;
