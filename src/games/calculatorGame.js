import readlineSync from 'readline-sync';
import generateRandomNumber from '../generateRandomNumber';

export const gameDescription = 'What is the result of the expression?';

let scoreCount = 0;
const calcRound = (num1, operator, num2) => {
  console.log(`\nQuestion: ${num1} ${operator} ${num2}`);
  const givenAnswer = readlineSync.question('Your answer: '); // тут не глагол, а причастие (по смыслу "ответ, который дал юзер")
  let expectedAnswer;
  if (operator === '+') {
    expectedAnswer = num1 + num2;
  }
  if (operator === '-') {
    expectedAnswer = num1 - num2;
  }
  if (operator === '*') {
    expectedAnswer = num1 * num2;
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
