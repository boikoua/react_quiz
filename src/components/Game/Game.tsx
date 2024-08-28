import { Question } from '../../api/questions';
import style from './Game.module.scss';

type Props = {
  percentage: number;
  question: Question;
  onClickVariant: (index: number) => void;
};

const Game: React.FC<Props> = ({ percentage, question, onClickVariant }) => {
  return (
    <>
      <div className={style.progress}>
        <div
          style={{ width: `${percentage}%` }}
          className={style.progress__inner}
        ></div>
      </div>
      <h1 className={style.title}>{question.title}</h1>
      <ul className={style.answers}>
        {question.variants.map((variant, index) => (
          <li
            className={style.answer}
            key={variant}
            onClick={() => onClickVariant(index)}
          >
            {variant}
          </li>
        ))}
      </ul>
    </>
  );
};

export default Game;
