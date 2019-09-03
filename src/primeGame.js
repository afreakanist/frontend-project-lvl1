import readlineSync from 'readline-sync';

export const rules = 'Answer "yes" if the number is prime, otherwise answer "no".';
const getRandomInt = (min, max) => {
  const minimum = Math.ceil(min);
  const maximum = Math.floor(max);
  return Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
};

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
  primeRound(getRandomInt(0, 100));
  primeRound(getRandomInt(0, 100));
  primeRound(getRandomInt(0, 100));

  if (scoreCount === 3) {
    console.log('\nCongratulations!');
  }
};
