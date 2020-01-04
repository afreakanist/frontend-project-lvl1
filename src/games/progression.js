import { cons } from '@hexlet/pairs';
import generateRandomNumber from '../generateRandomNumber';
import engine from '..';
import generateSequence from '../generateSequence';

const gameDescription = 'What number is missing in the sequence?';

const makeRoundData = () => {
  const sequence = generateSequence();
  const hiddenNumberPosition = generateRandomNumber(0, sequence.length - 1);
  const answer = sequence[hiddenNumberPosition];
  const question = sequence.replace(sequence[hiddenNumberPosition], '..');

  return cons(question, answer);
};

export default () => {
  engine(gameDescription, makeRoundData);
};
