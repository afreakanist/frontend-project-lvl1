import generateRandomNumber from '../generateRandomNumber';
import makePair from '../pairs';
import engine from '..';

const gameDescription = 'What number is missing in the sequence?';

const generateSequence = () => {
  let sequence = '';
  let currentNumber = generateRandomNumber(0, 100);
  let counter = 1;
  const numberOfTerms = 10;
  while (counter <= numberOfTerms) {
    const d = 2;
    sequence = `${sequence}${currentNumber} `;
    currentNumber += d;
    counter += 1;
  }
  return sequence;
};

const makeRoundData = () => {
  const sequence = generateSequence();
  const numberOfTerms = 10;
  const splitSequence = () => sequence.split(' ', numberOfTerms);
  const hiddenNumberPosition = generateRandomNumber(0, splitSequence().length - 1);
  const answer = splitSequence()[hiddenNumberPosition];
  const question = sequence.replace(splitSequence()[hiddenNumberPosition], '..');

  return makePair(question, answer);
};

export default () => {
  engine(gameDescription, makeRoundData);
};
