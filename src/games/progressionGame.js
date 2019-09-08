import readlineSync from 'readline-sync';
import generateRandomNumber from '../generateRandomNumber';

export const gameDescription = 'What number is missing in the sequence?';

const generateSequence = () => {
  let sequence = '';
  let currentNumber = generateRandomNumber(0, 100);
  let counter = 1;
  while (counter <= 10) {
    sequence = `${sequence}${currentNumber} `;
    currentNumber += 2;
    counter += 1;
  }
  return sequence;
};

let scoreCount = 0;
const progressionRound = (sequence) => {
  const splitSequence = () => {
    const result = sequence.split(' ', 10);
    return result;
  };
  const hiddenNumberPosition = generateRandomNumber(0, splitSequence().length - 1);
  const hiddenNumber = splitSequence()[hiddenNumberPosition];
  const sequenceModified = sequence.replace(splitSequence()[hiddenNumberPosition], '..');
  console.log(`\nQuestion: ${sequenceModified}`);
  const givenAnswer = readlineSync.question('Your answer: ');
  const expectedAnswer = Number(hiddenNumber);
  if (expectedAnswer === Number(givenAnswer)) {
    console.log('Correct!');
    scoreCount += 1;
  } else {
    console.log(`Oops, ${givenAnswer} is the wrong answer :( The correct one is ${expectedAnswer}.\nLet's try again!`);
  }
  return scoreCount;
};

export const progressionGame = () => {
  progressionRound(generateSequence());
  progressionRound(generateSequence());
  progressionRound(generateSequence());

  if (scoreCount === 3) {
    console.log('\nCongratulations!');
  }
};
