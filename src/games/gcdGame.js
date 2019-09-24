import generateRandomNumber from '../generateRandomNumber';
import makePair from '../pairs';
import engine from '..';

const gameDescriptionGcd = 'Find the greatest common divisor of the given numbers.';

const getGcd = (a, b) => {
  if (!b) {
    return a;
  }
  return getGcd(b, a % b);
};

const makeGcdPair = () => {
  const num1 = generateRandomNumber(0, 100);
  const num2 = generateRandomNumber(0, 100);
  const q = `${num1} and ${num2}`;
  const a = String(getGcd(num1, num2));
  return makePair(q, a);
};

export default () => {
  engine(gameDescriptionGcd, makeGcdPair);
};
