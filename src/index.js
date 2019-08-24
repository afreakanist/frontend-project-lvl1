import readlineSync from 'readline-sync';

export const greeting = 'Welcome to the Brain Games!';
export const userName = () => {
  const name = readlineSync.question('\nMay I have your name? ');
  console.log(`Hello, ${name}!`);
};
