import readlineSync from 'readline-sync';

export const rules = 'What is the result of the expression?';
const getRandomInt = (min, max) => {
  const minimum = Math.ceil(min);
  const maximum = Math.floor(max);
  return Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
};

export const calculatorGame = () => {
  let scoreCount = 0;
  const calcQuestion = (num1, operator, num2) => {
    console.log(`\nQuestion: ${num1} ${operator} ${num2}`);
    const answer = readlineSync.question('Your answer: ');
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

    if (expectedAnswer === Number(answer)) {
      console.log('Correct!');
      scoreCount += 1;
    } else {
      console.log(`Oops, ${answer} is the wrong answer :( The correct one is ${expectedAnswer}.\nLet's try again!`);
    }
    return scoreCount;
  };

  calcQuestion(getRandomInt(0, 100), '+', getRandomInt(0, 100));
  calcQuestion(getRandomInt(0, 100), '-', getRandomInt(0, 100));
  calcQuestion(getRandomInt(0, 100), '*', getRandomInt(0, 100));

  if (scoreCount === 3) {
    console.log('\nCongradulations!');
  }
};
