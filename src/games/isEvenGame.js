import generateRandomNumber from '../generateRandomNumber';
import engine from '..';

const gameDescriptionEven = 'Answer "yes" if the number is even, otherwise answer "no".';

const questionEven = () => generateRandomNumber(0, 100);

const isEven = (num) => num % 2 === 0;

const expectedAnswerEven = (num) => {
  let correctAnswer;
  switch (isEven(num)) {
    case true:
      correctAnswer = 'yes';
      break;
    default:
      correctAnswer = 'no';
      break;
  }
  return correctAnswer;
};

export default () => {
  engine(gameDescriptionEven, questionEven, expectedAnswerEven);
};
