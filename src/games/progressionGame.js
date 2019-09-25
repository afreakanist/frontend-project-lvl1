import generateRandomNumber from '../generateRandomNumber';
import makePair from '../pairs';
import engine from '..';

export const gameDescriptionGcd = 'What number is missing in the sequence?';

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

const makeProgPair = () => {
  const sequence = generateSequence();
  const numberOfTerms = 10;
  const splitSequence = () => sequence.split(' ', numberOfTerms);
  const hiddenNumberPosition = generateRandomNumber(0, splitSequence().length - 1);
  const hiddenNumber = splitSequence()[hiddenNumberPosition];
  const sequenceModified = sequence.replace(splitSequence()[hiddenNumberPosition], '..');

  const question = `${sequenceModified}`;
  const answer = hiddenNumber;
  return makePair(question, answer);
};

export default () => {
  engine(gameDescriptionGcd, makeProgPair);
};
