import generateRandomNumber from '../generateRandomNumber';
import makePair from '../pairs';
import engine from '..';

const gameDescriptionEven = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (num) => num % 2 === 0;

const makeEvenPair = () => {
  const question = generateRandomNumber(0, 100);
  let answer;
  switch (isEven(question)) {
    case true:
      answer = 'yes';
      break;
    default:
      answer = 'no';
      break;
  }
  return makePair(question, answer);
};

export default () => {
  engine(gameDescriptionEven, makeEvenPair);
};
