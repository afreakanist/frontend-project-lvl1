import { cons } from '@hexlet/pairs';
import generateRandomNumber from '../generateRandomNumber';
import engine from '..';

const gameDescription = 'What number is missing in the sequence?';

const sequenceLength = 10;

const generateSequence = (num, difference) => {
  let sequence = '';
  let current = num;
  for (let i = 1; i <= sequenceLength; i += 1) {
    sequence = `${sequence} ${current}`;
    current += difference;
  }

  return sequence.trim();
};

const makeRoundData = () => {
  const sequence = generateSequence(generateRandomNumber(0, 100), generateRandomNumber(0, 10));
  const splitSequence = () => sequence.split(' ', sequenceLength);
  const hiddenNumberPosition = generateRandomNumber(0, splitSequence().length - 1);
  const answer = splitSequence()[hiddenNumberPosition];
  const question = sequence.replace(answer, '..');

  return cons(question, answer);
};

export default () => {
  engine(gameDescription, makeRoundData);
};
