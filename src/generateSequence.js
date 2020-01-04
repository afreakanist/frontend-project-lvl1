import generateRandomNumber from './generateRandomNumber';
import sequenceLength from './sequenceLength';

export default () => {
  let sequence = '';
  let current = generateRandomNumber(0, 100);
  let counter = 1;
  while (counter <= sequenceLength) {
    const commonDifference = 2;
    sequence = `${sequence} ${current}`;
    current += commonDifference;
    counter += 1;
  }
  return sequence.trim();
};
