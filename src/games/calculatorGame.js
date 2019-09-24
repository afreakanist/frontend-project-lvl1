import generateRandomNumber from '../generateRandomNumber';
import makePair from '../pairs';
import engine from '..';

const gameDescriptionCalc = 'What is the result of the expression?';

const getOperator = (n) => {
  let result = '';
  const characters = '+-*';
  const charactersLength = characters.length;
  for (let i = 0; i < n; i += 1) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
};

const makeCalcPair = () => {
  const num1 = generateRandomNumber(0, 100);
  const num2 = generateRandomNumber(0, 100);
  const operator = getOperator(1);
  const q = `${num1} ${operator} ${num2}`;
  let a;
  switch (operator) {
    case '+':
      a = String(num1 + num2);
      break;
    case '-':
      a = String(num1 - num2);
      break;
    default:
      a = String(num1 * num2);
      break;
  }
  return makePair(q, a);
};

export default () => {
  engine(gameDescriptionCalc, makeCalcPair);
};
