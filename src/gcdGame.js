import readlineSync from 'readline-sync';

export const rules = 'Find the greatest common divisor of the given numbers.';

const getRandomInt = (min, max) => {
  const minimum = Math.ceil(min);
  const maximum = Math.floor(max);
  return Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
};

const getGCD = (a, b) => {
  if (!b) {
    return a;
  }
  return getGCD(b, a % b);
};

let scoreCount = 0;
const gcdRound = (num1, num2) => {
  console.log(`\nQuestion: ${num1} ${num2}`);
  const givenAnswer = readlineSync.question('Your answer: ');
  const expectedAnswer = getGCD(num1, num2);
  if (expectedAnswer === Number(givenAnswer)) {
    console.log('Correct!');
    scoreCount += 1;
  } else {
    console.log(`Oops, ${givenAnswer} is the wrong answer :( The correct one is ${expectedAnswer}.\nLet's try again!`);
  }
  return scoreCount;
};

export const gcdGame = () => {
  gcdRound(getRandomInt(0, 100), getRandomInt(0, 100));
  gcdRound(getRandomInt(0, 100), getRandomInt(0, 100));
  gcdRound(getRandomInt(0, 100), getRandomInt(0, 100));

  if (scoreCount === 3) {
    console.log('\nCongratulations!');
  }
};
