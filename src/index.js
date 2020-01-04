import readlineSync from 'readline-sync';
import { car, cdr } from '@hexlet/pairs';
import roundCount from './roundCount';

const greeting = 'Welcome to the Brain Games!';
export default (gameDescription, pair) => {
  console.log(greeting);
  console.log(gameDescription);
  const userName = readlineSync.question('\nMay I have your name? ');
  console.log(`Hello, ${userName}!`);
  let scoreCount = 0;
  for (let i = 1; i <= roundCount; i += 1) {
    const questionAndAnswer = pair();
    const question = car(questionAndAnswer);
    const correctAnswer = cdr(questionAndAnswer);
    console.log(`\nQuestion: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (correctAnswer === userAnswer) {
      console.log('Correct!');
      scoreCount += 1;
    } else {
      console.log(`Oops, "${userAnswer}" is the wrong answer :( The correct one is "${correctAnswer}".`);
      console.log(`Let's try again, ${userName}!`);
    }
  }
  if (scoreCount === roundCount) {
    console.log(`\nCongratulations, ${userName}!`);
  }
};
