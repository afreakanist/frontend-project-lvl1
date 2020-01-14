import { cons } from '@hexlet/pairs';
import generateRandomNumber from '../generateRandomNumber';
import engine from '..';

const gameDescription = 'What is the result of the expression?';

const operators = '+-*';

const getOperator = () => {
  const randomIndex = generateRandomNumber(0, operators.length - 1);
  return operators[randomIndex];
};

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
      return null;
  }
  return cons(question, answer);
};

export default () => {
  engine(gameDescription, makeRoundData);
};
