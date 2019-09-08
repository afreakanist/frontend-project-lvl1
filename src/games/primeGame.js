import readlineSync from 'readline-sync';
import generateRandomNumber from '../generateRandomNumber';

export const gameDescription = 'Answer "yes" if the number is prime, otherwise answer "no".';

const isPrime = (num) => {
  let result;
  if (num === 2) {
    result = 'yes';
  }
  for (let i = 2; i <= num; i += 1) {
    if (num % i === 0) {
      result = 'no';
    } else {
      result = 'yes';
    }
  }
  return result;
};

let scoreCount = 0;
const primeRound = (num) => {
  console.log(`\nQuestion: ${num}`);
  const givenAnswer = readlineSync.question('Your answer: ');
  if (String(isPrime(num)) === String(givenAnswer)) {
    console.log('Correct!');
    scoreCount += 1;
  } else {
    console.log(`Oops, it is the wrong answer :( The correct one is "${isPrime(num)}".\nLet's try again!`);
  }
  return scoreCount;
};

export const primeGame = () => {
  primeRound(generateRandomNumber(0, 100));
  primeRound(generateRandomNumber(0, 100));
  primeRound(generateRandomNumber(0, 100));

  if (scoreCount === 3) {
    console.log('\nCongratulations!');
  }
};
