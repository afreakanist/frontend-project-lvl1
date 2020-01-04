import { cons } from '@hexlet/pairs';
import generateRandomNumber from '../generateRandomNumber';
import engine from '..';

const gameDescription = 'Find the greatest common divisor of the given numbers.';

const getGcd = (a, b) => {
  if (!b) {
    return a;
  }
  return getGcd(b, a % b);
};

const makeRoundData = () => {
  const num1 = generateRandomNumber(0, 100);
  const num2 = generateRandomNumber(0, 100);
  const question = `${num1} and ${num2}`;
  const answer = String(getGcd(num1, num2));
  return cons(question, answer);
};

export default () => {
  engine(gameDescription, makeRoundData);
};
