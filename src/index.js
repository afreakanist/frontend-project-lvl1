import readlineSync from 'readline-sync';
import { car, cdr } from './pairs';

const greeting = 'Welcome to the Brain Games!';
export default (gameDescription, pair) => {
  console.log(greeting);
  console.log(gameDescription);
  const userName = readlineSync.question('\nMay I have your name? ');
  console.log(`Hello, ${userName}!`);
  let scoreCount = 0;
  const playRound = (question, correctAnswer) => {
    console.log(`\nQuestion: ${question}`);
    const givenAnswer = readlineSync.question('Your answer: ');
    if (correctAnswer === givenAnswer) {
      console.log('Correct!');
      scoreCount += 1;
    } else {
      console.log(`Oops, "${givenAnswer}" is the wrong answer :( The correct one is "${correctAnswer}".\nLet's try again, ${userName}!`);
    }
    return scoreCount;
  };

  const roundAmount = 3;
  for (let i = 1; i <= roundAmount; i += 1) {
    playRound(car(pair), cdr(pair));
  }

  if (scoreCount === roundAmount) {
    console.log(`\nCongratulations, ${userName}!`);
  }
};
