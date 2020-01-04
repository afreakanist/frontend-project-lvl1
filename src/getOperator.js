import generateRandomNumber from './generateRandomNumber';

export default () => {
  const operatorList = '+-*';
  const randomIndex = generateRandomNumber(0, operatorList.length - 1);
  return operatorList[randomIndex];
};
