import readlineSync from 'readline-sync';
import generateRandomNumber from '../generateRandomNumber';

export const gameDescription = 'What is the result of the expression?';

let scoreCount = 0;
const calcRound = (num1, operator, num2) => {
  console.log(`\nQuestion: ${num1} ${operator} ${num2}`);
  const givenAnswer = readlineSync.question('Your answer: ');
  let expectedAnswer;
  switch (operator) {
    case '+':
      expectedAnswer = num1 + num2;
      break;
    case '-':
      expectedAnswer = num1 - num2;
      break;
    default:
      expectedAnswer = num1 * num2;
      break;
  }

  if (expectedAnswer === Number(givenAnswer)) {
    console.log('Correct!');
    scoreCount += 1;
  } else {
    console.log(`Oops, ${givenAnswer} is the wrong answer :( The correct one is ${expectedAnswer}.\nLet's try again!`);
  }
  return scoreCount;
};

export const calculatorGame = () => {
  calcRound(generateRandomNumber(0, 100), '+', generateRandomNumber(0, 100));
  calcRound(generateRandomNumber(0, 100), '-', generateRandomNumber(0, 100));
  calcRound(generateRandomNumber(0, 100), '*', generateRandomNumber(0, 100));

  if (scoreCount === 3) {
    console.log('\nCongratulations!');
  }
};
