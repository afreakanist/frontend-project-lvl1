import readlineSync from 'readline-sync';

export const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';
const isEven = (num) => num % 2 === 0;

let scoreCount = 0;
const isEvenRound = (num) => {
  console.log(`\nQuestion: ${num}`);
  const givenAnswer = readlineSync.question('Your answer: ');
  let expectedAnswer;
  switch (isEven(num)) {
    case true:
      expectedAnswer = 'yes';
      break;
    default:
      expectedAnswer = 'no';
      break;
  }

  if (expectedAnswer === givenAnswer) {
    console.log('Correct!');
    scoreCount += 1;
  } else {
    console.log(`Oops, it is the wrong answer :( The correct one is "${expectedAnswer}".\nLet's try again!`);
  }
  return scoreCount;
};

export const isEvenGame = () => {
  isEvenRound(15);
  isEvenRound(6);
  isEvenRound(7);

  if (scoreCount === 3) {
    console.log('\nCongratulations!');
  }
};
