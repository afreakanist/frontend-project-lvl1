import generateRandomNumber from '../generateRandomNumber';
import makePair from '../pairs';
import engine from '..';

const gameDescriptionEven = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (num) => num % 2 === 0;

const makeEvenPair = () => {
  const q = generateRandomNumber(0, 100);
  const a = isEven(q);
  return a ? makePair(q, 'yes') : makePair(q, 'no');
};

export default () => {
  engine(gameDescriptionEven, makeEvenPair);
};
