export interface Question {
  id: number;
  title: string;
  variants: string[];
  correct: number;
}

export const questions: Question[] = [
  {
    id: 1,
    title: 'React - это ...?',
    variants: ['Библиотека', 'Фреймворк', 'Приложение'],
    correct: 0,
  },
  {
    id: 2,
    title: 'Компонент - это ...?',
    variants: [
      'Приложение',
      'Часть приложения или страницы',
      'То, что я не знаю что такое',
    ],
    correct: 1,
  },
  {
    id: 3,
    title: 'Что такое JSX?',
    variants: [
      'Это простой HTML',
      'Это функция',
      'Это тот же HTML, но с возможностью выполнять JS-код',
    ],
    correct: 2,
  },
  {
    id: 4,
    title:
      'Какой хук используется для управления состоянием в функциональном компоненте?',
    variants: ['useEffect', 'useState', 'useContext'],
    correct: 1,
  },
  {
    id: 5,
    title: 'Что возвращает хук useState?',
    variants: [
      'Объект состояния',
      'Массив с состоянием и функцией его обновления',
      'Только текущее состояние',
    ],
    correct: 1,
  },
  {
    id: 6,
    title:
      'Какой тип данных используется в TypeScript для обозначения булевых значений?',
    variants: ['Boolean', 'Bool', 'Bln'],
    correct: 0,
  },
  {
    id: 7,
    title:
      'Какой оператор в TypeScript используется для указания типа переменной?',
    variants: [':', '=>', '='],
    correct: 0,
  },
  {
    id: 8,
    title: 'Как объявить интерфейс в TypeScript?',
    variants: [
      'interface MyInterface {}',
      'type MyInterface = {}',
      'class MyInterface {}',
    ],
    correct: 0,
  },
  {
    id: 9,
    title: 'Что делает хук useEffect?',
    variants: [
      'Управляет состоянием',
      'Выполняет побочные эффекты',
      'Возвращает функцию',
    ],
    correct: 1,
  },
  {
    id: 10,
    title: 'Что такое props в React?',
    variants: [
      'Это свойства компонента',
      'Это методы компонента',
      'Это переменные внутри компонента',
    ],
    correct: 0,
  },
];
