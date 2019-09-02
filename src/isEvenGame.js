import readlineSync from 'readline-sync';

export const rules = 'Answer "yes" if the number is even, otherwise answer "no".';
const isEven = (num) => (num % 2 === 0 ? 'yes' : 'no');

let scoreCount = 0;
const isEvenRound = (num) => {
  console.log(`\nQuestion: ${num}`);
  const givenAnswer = readlineSync.question('Your answer: ');
  if (isEven(num) === givenAnswer) {
    console.log('Correct!');
    scoreCount += 1;
  } else {
    console.log('Oops, it is the wrong answer :( The correct one is "no".\nLet\'s try again!');
  }
  return scoreCount;
};

export const isEvenGame = () => {
  isEvenRound(15);
  isEvenRound(6);
  isEvenRound(7);

  if (scoreCount === 3) {
    console.log('\nCongradulations!');
  }
};
