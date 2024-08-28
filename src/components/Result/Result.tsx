import React from 'react';
import style from './Result.module.scss';

type Props = {
  correct: number;
  resetGame: () => void;
  finallyValue: number;
};

const Result: React.FC<Props> = ({ correct, resetGame, finallyValue }) => {
  return (
    <div className={style.result}>
      <img
        src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png"
        alt="win"
        className={style.img}
      />
      <h2 className={style.title}>
        Вы отгадали {correct} ответа из {finallyValue}
      </h2>
      <button className={style.btn} onClick={resetGame}>
        Попробовать снова
      </button>
    </div>
  );
};

export default Result;
