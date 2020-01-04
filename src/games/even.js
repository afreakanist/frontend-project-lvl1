import { cons } from '@hexlet/pairs';
import generateRandomNumber from '../generateRandomNumber';
import engine from '..';

const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (num) => num % 2 === 0;

const makeRoundData = () => {
  const question = generateRandomNumber(0, 100);
  const answer = isEven(question) ? 'yes' : 'no';
  return cons(question, answer);
};

export default () => {
  engine(gameDescription, makeRoundData);
};
