import { cons } from '@hexlet/pairs';
import generateRandomNumber from '../generateRandomNumber';
import engine from '..';

const gameDescription = 'What number is missing in the sequence?';

const sequenceLength = 10;

const generateSequence = (num, difference) => {
  let sequence = '';
  for (let i = 0; i < sequenceLength; i += 1) {
    sequence = `${sequence} ${num + difference * i}`;
  }

  return sequence.trim();
};

const makeRoundData = () => {
  const start = generateRandomNumber(0, 100);
  const difference = generateRandomNumber(0, 10);
  const sequence = generateSequence(start, difference);
  const splitSequence = () => sequence.split(' ', sequenceLength);
  const hiddenNumberPosition = generateRandomNumber(0, splitSequence().length - 1);
  const answer = String(start + difference * hiddenNumberPosition);
  const question = sequence.replace(answer, '..');

  return cons(question, answer);
};

export default () => {
  engine(gameDescription, makeRoundData);
};
