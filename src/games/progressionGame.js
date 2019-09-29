import generateRandomNumber from '../generateRandomNumber';
import makePair from '../pairs';
import engine from '..';

const gameDescription = 'What number is missing in the sequence?';

const termQuantity = 10;
const generateSequence = () => {
  let sequence = '';
  let currentNumber = generateRandomNumber(0, 100);
  let counter = 1;
  while (counter <= termQuantity) {
    const d = 2;
    sequence = `${sequence}${currentNumber} `;
    currentNumber += d;
    counter += 1;
  }
  return sequence;
};

const makeRoundData = () => {
  const sequence = generateSequence();
  const splitSequence = () => sequence.split(' ', termQuantity);
  const hiddenNumberPosition = generateRandomNumber(0, splitSequence().length - 1);
  const answer = splitSequence()[hiddenNumberPosition];
  const question = sequence.replace(splitSequence()[hiddenNumberPosition], '..');

  return makePair(question, answer);
};

export default () => {
  engine(gameDescription, makeRoundData);
};
