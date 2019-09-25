import generateRandomNumber from '../generateRandomNumber';
import makePair from '../pairs';
import engine from '..';

const gameDescriptionPrime = 'Answer "yes" if the number is prime, otherwise answer "no".';

const isPrime = (num) => {
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return num > 1;
};

const makePrimePair = () => {
  const question = generateRandomNumber(0, 100);
  const answer = isPrime(question) ? 'yes' : 'no';
  return makePair(question, answer);
};

export default () => {
  engine(gameDescriptionPrime, makePrimePair);
};
