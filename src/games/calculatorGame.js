import generateRandomNumber from '../generateRandomNumber';
import makePair from '../pairs';
import engine from '..';

const gameDescription = 'What is the result of the expression?';

const getOperator = (n) => {
  let result = '';
  const operators = '+-*';
  const operatorsLength = operators.length;
  for (let i = 0; i < n; i += 1) {
    result += operators.charAt(Math.floor(Math.random() * operatorsLength));
  }
  return result;
};

const makeRoundData = () => {
  const num1 = generateRandomNumber(0, 100);
  const num2 = generateRandomNumber(0, 100);
  const operator = getOperator(1);
  const question = `${num1} ${operator} ${num2}`;
  let answer;
  switch (operator) {
    case '+':
      answer = String(num1 + num2);
      break;
    case '-':
      answer = String(num1 - num2);
      break;
    case '*':
      answer = String(num1 * num2);
      break;
    default:
      answer = null;
      break;
  }
  return makePair(question, answer);
};

export default () => {
  engine(gameDescription, makeRoundData);
};
