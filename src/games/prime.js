import { cons } from '@hexlet/pairs';
import generateRandomNumber from '../generateRandomNumber';
import engine from '..';

const gameDescription = 'Answer "yes" if the number is prime, otherwise answer "no".';

const isPrime = (num) => {
  if (num < 2) {
    return false;
  }

  for (let i = 2; i < num / 2; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
};

const makeRoundData = () => {
  const question = generateRandomNumber(0, 100);
  const answer = isPrime(question) ? 'yes' : 'no';
  return cons(question, answer);
};

export default () => {
  engine(gameDescription, makeRoundData);
};
