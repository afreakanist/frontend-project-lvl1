import generateRandomNumber from '../generateRandomNumber';
import makePair from '../pairs';
import engine from '..';

const gameDescriptionEven = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (num) => num % 2 === 0;

const makeEvenPair = (x = generateRandomNumber(0, 100), y = isEven(x)) => {
  if (y === true) {
    return makePair(x, 'yes');
  }
  return makePair(x, 'no');
};

export default () => {
  engine(gameDescriptionEven, makeEvenPair);
};
