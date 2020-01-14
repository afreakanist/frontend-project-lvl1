import readlineSync from 'readline-sync';
import { car, cdr } from '@hexlet/pairs';

const greeting = 'Welcome to the Brain Games!';
const roundsCount = 3;
export default (gameDescription, getPair) => {
  console.log(greeting);
  console.log(gameDescription);
  const userName = readlineSync.question('\nMay I have your name? ');
  console.log(`Hello, ${userName}!`);
  for (let i = 1; i <= roundsCount; i += 1) {
    const questionAndAnswer = getPair();
    const question = car(questionAndAnswer);
    const correctAnswer = cdr(questionAndAnswer);
    console.log(`\nQuestion: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (correctAnswer === userAnswer) {
      console.log('Correct!');
    } else {
      console.log(`Oops, "${userAnswer}" is the wrong answer :( The correct one is "${correctAnswer}".`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }

  console.log(`\nCongratulations, ${userName}!`);
};
