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
  const q = generateRandomNumber(0, 100);
  const a = isPrime(q);
  return a ? makePair(q, 'yes') : makePair(q, 'no');
};

export default () => {
  engine(gameDescriptionPrime, makePrimePair);
};
