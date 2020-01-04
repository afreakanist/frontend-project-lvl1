import { cons } from '@hexlet/pairs';
import generateRandomNumber from '../generateRandomNumber';
import getOperator from '../getOperator';
import engine from '..';

const gameDescription = 'What is the result of the expression?';

const makeRoundData = () => {
  const num1 = generateRandomNumber(0, 100);
  const num2 = generateRandomNumber(0, 100);
  const operator = getOperator();
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
  return cons(question, answer);
};

export default () => {
  engine(gameDescription, makeRoundData);
};
