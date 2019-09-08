import readlineSync from 'readline-sync';
import generateRandomNumber from '../generateRandomNumber';

export const gameDescription = 'Find the greatest common divisor of the given numbers.';

const getGcd = (a, b) => {
  if (!b) {
    return a;
  }
  return getGcd(b, a % b);
};

let scoreCount = 0;
const gcdRound = (num1, num2) => {
  console.log(`\nQuestion: ${num1} ${num2}`);
  const givenAnswer = readlineSync.question('Your answer: ');
  const expectedAnswer = getGcd(num1, num2);
  if (expectedAnswer === Number(givenAnswer)) {
    console.log('Correct!');
    scoreCount += 1;
  } else {
    console.log(`Oops, ${givenAnswer} is the wrong answer :( The correct one is ${expectedAnswer}.\nLet's try again!`);
  }
  return scoreCount;
};

export const gcdGame = () => {
  gcdRound(generateRandomNumber(0, 100), generateRandomNumber(0, 100));
  gcdRound(generateRandomNumber(0, 100), generateRandomNumber(0, 100));
  gcdRound(generateRandomNumber(0, 100), generateRandomNumber(0, 100));

  if (scoreCount === 3) {
    console.log('\nCongratulations!');
  }
};
